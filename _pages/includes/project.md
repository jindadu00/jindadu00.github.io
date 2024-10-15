
# 💻 Projects 
<div class='paper-box'><div class='paper-box-image'><div><img src='images/legged robot.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Training Quadruped Robots to Traverse Diverse Complex Terrains**(2024)


**Jinda Du**



[**Code**](https://github.com/jindadu00/legged_robot_competition.git)



Training the quadruped robot GO2 to rapidly traverse various complex terrains in the Isaac Gym environment, including wave, pyramid slope, stepping stones, and more.

</div>
</div>





<div class='paper-box'><div class='paper-box-image'><div><img src='images/table tennis.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Billiards Mini Game Accelerated Using the Taichi Framework**(2022)





[Kun Song](https://kunsong-l.github.io/), **Jinda Du**

[**Code**](https://github.com/jindadu00/taichi_table_tennis-1) | [**Lecture**](https://www.bilibili.com/video/BV1qQ4VefEa6/?share_source=copy_web&vd_source=ac75510eaafc766062a04f7add43c2f7)



</div>
</div>





<div class='paper-box'><div class='paper-box-image'><div><img src='images/pick.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Automated Pick-and-Place of Fruits Using a UR Robot Arm with Soft Grippers**(2021)


**Jinda Du**, [Weicheng Huang](https://rory-weicheng.github.io/), Yi Shen, Yiming Wang



[**Code**](https://github.com/jindadu00/Control-UR-Robotic-Arm-to-Visually-Capture-Specific-Fruits-With-HSV-Target-Detection)



Control UR Robotic Arm to Visually Capture Specific Fruits With HSV Target-Detection



</div>
</div>





<div class='paper-box'><div class='paper-box-image'><div><img src='images/hutao.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Hu Tao’s Dance**(2021)

**Jinda Du**, Songyan Zhang



[Demo](https://pan.baidu.com/s/1ISKUvC0mPSFgOzhfx1Faeg?pwd=f6hv) \| [3D Model](https://github.com/jindadu00/HUTAOYAO-DIY)



</div>
</div>











<!-- - `AAAI 2024` [Emotion Rendering for Conversational Speech Synthesis with Heterogeneous Graph-Based Context Modeling](https://arxiv.org/abs/2312.11947), Rui Liu, Yifan Hu, **Yi Ren**, et al. [![](https://img.shields.io/github/stars/walker-hyf/ECSS?style=social&label=Code+Stars)](https://github.com/walker-hyf/ECSS) -->

- **Interactive Drawing Robot**(2024)

  **Jinda Du**, Shaoli Hu, Hang Chen

  The algorithm we adopted is capable of recognizing and complementing the user's creative intent, enabling the robot to make meaningful artistic contributions. This requires the robot not only to understand the existing elements on the canvas but also to dynamically adjust its creative process based on partial strokes or descriptive prompts provided by the user. By responding to text descriptions or drawing inputs, the robot can refine its actions in real time, ensuring that the output aligns with the user’s expectations.
  
  **Hardware Design**: Developed a low-cost XYZ-structure CNC plotter to replace expensive robotic arms, using stepper and servo motors for precision control in X, Y, and Z axes. Implemented Arduino microcontroller to manage motion via G-code.
  
  **Software Development**: Designed Python scripts for image-to-G-code conversion and implemented real-time control using Processing IDE. Enhanced image processing pipeline with threshold segmentation, morphological operations, and mask application for dynamic drawing generation.
  
  The video will be updated soon.
  
  
  
- **Reinforcement Learning Dominates in Multiplayer Snake Competition**(2022)

  **Jinda Du**, Junhan Xu, Junchao Gong, Yuanwei Zhang

  [**Code**](https://github.com/jindadu00/RL-Snake.git)
  
  This was an online multiplayer Snake Challenge organized by Ubiquant Investment (Beijing) Corp, Ltd. Our team fully implemented the game platform according to the competition rules and continuously upgraded our snake through adversarial training. Ultimately, we secured second place in the competition.
  
  **Action Sequence Design**: Instead of returning a single action per turn, the game requires a sequence of actions to be returned.
  
  **Perception and Game Screen Analysis**: Developed a multi-layer perceptron to hierarchically extract game information based on different game items (e.g., food).
  
  **Reward System**: Designed rewards based on factors like snake length, kills, item collection, survival, and early-game advantage (prioritizing items in the first ten turns).
  
  **Opponent Sampling and Modeling**: Each round sampled opponents with 10% V0, 10% V1, and 80% VN (latest strategies or human-controlled opponents), with periodic updates to the opponent model.
  
  ### Training Strategy:
  
  - **Initial Version (V0)**: Implemented a depth-first search algorithm with a greedy strategy to create the non-reinforcement-learning-based snake, which provided a foundational baseline.
  - **Reinforcement Learning Version (V1)**: Applied Proximal Policy Optimization (PPO) to train the reinforcement learning model, initially using V0 as the opponent until V1 consistently outperformed it, ensuring incremental learning improvement.
  - **Final Strategy**: Optimized the model by introducing aggressive tactics, such as wall-passing kills, during the final phase to maximize competitive performance.
  
- **Accurate Decoding of Surface Electromyographic Signals in Dynamic Contraction Processes by Integrating Motion Information.**(2023)
  
  **Jinda Du**, [Chen Chen](https://me.sjtu.edu.cn/teacher_directory1/75392.html), [Xiangyang Zhu](https://me.sjtu.edu.cn/teacher_directory1/zhuxiangyang.html)
  
  [**Code**](https://github.com/jindadu00/RL-Snake.git)
  
  A multimodal architecture model was built, where the joint angle data of the subjects was embedded to extract feature vectors, and electromyography (EMG) signals were processed using a convolutional neural network (CNN) to extract feature maps. These were then fused through cross-modal integration using **mutual attention**, exploring the correlation and complementary information between the subject's motion state and EMG signals, aiming to predict the decoding of surface electromyographic signals during dynamic contraction processes. In the simulation dataset, the **gradient convolutional kernel compensation(gCKC)** algorithm and **FastICA** achieved about 90% discharge decoding accuracy for static contractions, but this accuracy dropped to around 50% for dynamic processes. Our proposed algorithm, however, maintained approximately 90% discharge accuracy for motor unit discharge sequences in both static and dynamic contractions.
  
- **Wrinkle Identification and Detection of Coated Fabric Membranes**(2019)
  
  **Jinda Du**, Songyan Zhang, Jiapeng He, [Daxu Zhang](https://naoce.sjtu.edu.cn/teachers/5709.html)
  
  Data was collected through fabric wrinkling experiments. Image augmentation techniques such as cropping and rotation were applied to the collected data, while Gamma correction and histogram equalization were used for image preprocessing. Thousands of images were labeled with supervision points, and a custom dataset was built. To address the elongated shape of wrinkles, spatial pyramid pooling was introduced. For handling the blurred edges of wrinkles, low-dimensional and high-dimensional features were concatenated during decoding. The trained model performed well on the validation set, achieving an accuracy of 90%, and a frontend web platform was developed for this system.
  
- **Rope Driven Redundant Snake Robot Simulation**(2022)
  
  **Jinda Du**, [Zhuyong Liu](https://en.zhiyuan.sjtu.edu.cn/en/faculty/529/detail)
  
  [**Code**](https://github.com/jindadu00/RopeDrivenRedundantSnakeRobotSimulation)
  
- Computer-Aided-Kinematics-and-Dynamics-of-Mechanical-Systems(2020)

  **Jinda Du**, [Jinyang Liu](https://en.zhiyuan.sjtu.edu.cn/en/faculty/530/detail)

  [**Code**](https://github.com/jindadu00/Computer-Aided-Kinematics-and-Dynamics-of-Mechanical-Systems)

- Finite-Element-Analysis-of-Bar-System(2020)

  **Jinda Du**, [Fangmin Tao](https://en.naoce.sjtu.edu.cn/teachers/TaoFangmin.html)

  [**Code**](https://github.com/jindadu00/Finite-Element-Analysis-of-Bar-System)

  



