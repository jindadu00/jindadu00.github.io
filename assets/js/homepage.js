// Progressive PDF rendering: the original figure remains available without JS.
const figure = document.querySelector('.pdf-frame');
if (figure) {
  let started = false;
  async function renderFigure() {
    if (started) return;
    started = true;
    try {
      const pdfjs = await import('../vendor/pdfjs/pdf.js');
      pdfjs.GlobalWorkerOptions.workerSrc = new URL('../vendor/pdfjs/pdf.worker.js', import.meta.url).href;
      const document = await pdfjs.getDocument({ url: figure.href, isEvalSupported: false }).promise;
      const page = await document.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      // Render at least 1400px wide for crisp labels on high-density screens.
      const width = Math.max(1400, figure.clientWidth * Math.min(devicePixelRatio || 1, 3));
      const scaled = page.getViewport({ scale: width / viewport.width });
      const canvas = figure.querySelector('canvas');
      canvas.width = Math.ceil(scaled.width);
      canvas.height = Math.ceil(scaled.height);
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: scaled }).promise;
      figure.classList.add('pdf-ready');
      await document.destroy();
    } catch (error) {
      // The full-resolution PNG and original PDF link remain usable.
      console.warn('MILE PDF preview uses the image fallback.', error);
    }
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        renderFigure();
      }
    }, { rootMargin: '240px' });
    observer.observe(figure);
  } else {
    renderFigure();
  }
}
