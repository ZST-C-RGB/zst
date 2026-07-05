// 自动提取的题库数据
const QUESTION_BANK = [
  {
    "type": "单选",
    "question": "在YOLO系列中，以下哪项是其主要优点之一?",
    "options": [
      "对小目标的检测效果非常好。",
      "检测精度极高。",
      "检测速度极快。",
      "不需要大量的训练数据。"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VAE的目标函数(ELBO)包含重建损失和KL散度损失，KL散度损失的作用是什么?",
    "options": [
      "优化编码器的特征提取能力",
      "最大化生成样本的多样性",
      "使潜在变量分布接近先验分布(如标准正态)",
      "最小化判别器的错误"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Faster RCNN算法中的RPN网络的作用是什么?",
    "options": [
      "直接预测目标的类别",
      "提取特征",
      "进行目标的回归",
      "生成候选区域"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在变分自编码器(VAE)中，重参数化技巧如何解决梯度估计问题?",
    "options": [
      "将随机采样转换为确定性函数加噪声，使梯度可传播",
      "使用对抗训练近似梯度",
      "添加正则化项平滑梯度",
      "通过循环编码避免采样"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "转置卷积通常用于图像分割网络的哪个部分?",
    "options": [
      "全连接层",
      "解码器",
      "池化层",
      "编码器"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "WGAN的critic网络输出代表什么?",
    "options": [
      "样本属于真实分布的概率",
      "生成样本的质量分数",
      "潜在编码的向量",
      "Wasserstein距离的实值估计"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "使用梯度累积的副作用可能包括:",
    "options": [
      "减少模型的总参数",
      "提升模型的即时表现",
      "减少每次迭代的时间",
      "增加每次迭代的时间"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GradCAM是通过哪一部分实现可视化的?",
    "options": [
      "第一个卷积层的特征图",
      "最后一个卷积层的特征图",
      "全连接层的权重",
      "分类层的输出"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "使用matplotlib绘制图形时，以下哪些命令可以用于设置图例?",
    "options": [
      "plt.ylabel('Y-axis')",
      "plt.legend()",
      "plt.title('My Graph')",
      "plt.xlabel('X-axis')"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "变分自编码器(VAE)为了使得采样过程可导，从而能够使用反向传播算法更新网络权重，引入了什么极其精妙的数学机制? (        )",
    "options": [
      "替代梯度法 (Surrogate Gradient)",
      "重参数化技巧 (Reparameterization Trick)",
      "梯度裁剪 (Gradient Clipping)",
      "零卷积 (Zero Convolutions)"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ECA-Net 认为SENet中的降维步骤可能损伤通道依赖建模，因此改用1D卷积在通道维度上做局部交互。这个改进最能说明:(        )",
    "options": [
      "任何注意力都必须依赖全连接层",
      "不降维也可以高效捕获有价值的通道依赖",
      "通道数越多，越不需要注意力机制",
      "建模全部通道两两关系一定优于局部关系"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在自动驾驶或外科手术场景中，仅仅依靠IoU指标是不够的。为了严厉惩罚预测掩码在边界上的微小外溢或远端的孤立噪点，必须引入基于空间点集距离的度量。目前最常用的抗噪边界度量指标是?(        )",
    "options": [
      "L1 绝对偏差 (L1 Loss)",
      "余弦相似度 (Cosine Similarity)",
      "弗雷歇距离 (FID)",
      "95%豪斯多夫距离 (HD95)"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下哪个选项不是GAN相对于其他生成模型的优势?",
    "options": [
      "能够通过对抗过程提高生成样本的多样性",
      "能够生成高质量的样本",
      "能够学习数据的复杂分布",
      "训练过程简单直观"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GradCAM可以应用于哪些类型的模型?",
    "options": [
      "只有递归神经网络",
      "任何类型的深度学习模型",
      "只有生成对抗网络",
      "只有卷积神经网络"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Pandas中，以下哪个函数用于根据某个条件筛选DataFrame中的数据?",
    "options": [
      "df.select()",
      "df.filter()",
      "df.where()",
      "df.query()"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "视觉 Transformer (ViT) 在处理输入图像时，是如何解决高分辨率图像导致序列过长的问题的?(        )",
    "options": [
      "利用自编码器将图像压缩为低维的隐空间向量序列。",
      "仅选取图像中心的局部区域进行注意力计算，忽略边缘背景信息。",
      "通过切块 (Patching) 机制将图像划分为固定大小的非重叠区块，作为基本的 Token。",
      "在输入层之前使用最大池化操作，将图像分辨率降低至原始尺寸的 1/16。"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "PyTorch中，为了增加模型对光照变化的鲁棒性，可以添加哪种类型的图像数据增强?",
    "options": [
      "Cropping",
      "Normalization",
      "Padding",
      "Color Jittering"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG模型在迁移学习中常用于什么层面的特征提取?",
    "options": [
      "高级特征",
      "低级特征",
      "中级特征",
      "全部层面"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在图像分类任务中，一张图像的大部分区域都是背景，只有少数区域真正决定类别。如果希望模型优先把计算资源放到目标所在区域，而不是平均对待所有位置，最直接对应的机制是:(        )",
    "options": [
      "批归一化",
      "通道注意力",
      "残差连接",
      "空间注意力"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "CycleGAN中的循环一致性损失函数通常基于哪种度量?",
    "options": [
      "交叉熵损失",
      "L1或L2重建损失",
      "Wasserstein距离",
      "KL散度"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Batch Normalization的主要目的是:",
    "options": [
      "减少模型参数",
      "加速网络训练",
      "降低内存使用",
      "增加数据的多样性"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "使用GradCAM进行可视化的主要优点是什么?",
    "options": [
      "增加模型的精确度",
      "提供对模型决策的深入洞察",
      "减少模型训练时间",
      "增强模型的泛化能力"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Anchor-free目标检测算法的一个关键挑战是:",
    "options": [
      "如何设计更复杂的网络结构",
      "如何提高检测速度",
      "如何准确地预测目标的中心点",
      "如何处理大量背景点的干扰"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "扩散模型的正向过程(扩散过程)中，数据如何变化?",
    "options": [
      "通过循环转换改变数据分布",
      "使用对抗训练优化生成",
      "逐步减少噪声以恢复清晰图像",
      "逐步添加高斯噪声直至接近纯噪声"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在深度学习中，损失函数的梯度消失问题通常会导致什么后果?",
    "options": [
      "模型训练不稳定",
      "模型训练速度变快",
      "模型收敛到局部最优解",
      "模型性能提升"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "对于非常深的网络模型，适当的学习率衰减策略可以:",
    "options": [
      "提高最终模型的准确率",
      "降低模型的复杂度",
      "增加训练时间",
      "减少训练时间"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下哪个不是深度学习中常用的图像分割损失函数?",
    "options": [
      "边缘损失",
      "均方误差损失",
      "Dice损失",
      "交叉熵损失"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GAN的训练过程中，生成器和判别器之间的竞争可以被描述为什么?",
    "options": [
      "合作学习",
      "强化学习",
      "零和游戏",
      "监督学习"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet50和ResNet101的区别主要在于什么?",
    "options": [
      "网络深度不同",
      "应用领域不同",
      "训练算法不同",
      "使用的激活函数不同"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "如果一个 Transformer 模型完全去掉位置编码，那么最可能出现的问题是(        )",
    "options": [
      "模型参数量会突然增大一倍",
      "模型难以区分顺序不同的序列",
      "模型会自动退化成 CNN",
      "模型无法进行矩阵乘法"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet中的1x1卷积用途是什么?",
    "options": [
      "扩展维度",
      "减少维度",
      "调节网络深度",
      "加强特征提取"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在RCNN系列目标检测算法中，以下关于Region Proposal(区域提议)的描述，哪一项是正确的?",
    "options": [
      "Region Proposal阶段的目的是生成大量可能包含目标的候选区域，为后续的分类和回归提供基础。",
      "Region Proposal是通过滑动窗口的方式在图像上生成固定大小的候选区域。",
      "Region Proposal的目的是直接生成最终的检测框。",
      "Region Proposal阶段不需要考虑候选区域的类别信息。"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "扩散模型的训练目标通常是预测什么?",
    "options": [
      "判别器的输出分数",
      "原始输入图像的像素值",
      "在正向过程中添加的噪声",
      "潜在变量的分布参数"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "SENet 使用全局平均池化把每个通道压缩成一个标量，再学习各通道的权重。这样做的主要价值是:(        )",
    "options": [
      "直接保留所有像素级位置信息",
      "彻底消除计算开销",
      "让空间分辨率提升一倍",
      "让模型获得每个通道的全局统计信息"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG网络在处理图像分类任务中，哪个版本最为常用?",
    "options": [
      "VGG24",
      "VGG22",
      "VGG16",
      "VGG19"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "使用matplotlib绘制散点图时，以下哪个命令是正确的?",
    "options": [
      "plt.dot()",
      "plt.scatterplot()",
      "plt.scatter()",
      "plt.point()"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "梯度累积的主要目的是什么?",
    "options": [
      "允许使用更小的批次大小进行训练",
      "允许使用更大的批次大小进行训练",
      "增加模型的参数数量",
      "加速模型的收敛速度"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Anchor-free目标检测算法相比Anchor-based算法的优点之一是:",
    "options": [
      "检测速度更快",
      "不需要进行复杂的锚框匹配和分配操作，简化了训练过程",
      "可以检测更多的目标类别",
      "对小目标的检测能力更强"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOv8在回归数学上实现了重大突破，提出了分布焦距损失(DFL)。DFL的核心思想是?(        )",
    "options": [
      "将分类损失直接乘以IoU数值",
      "采用L1损失直接回归绝对像素差值",
      "使用二分图匹配算法动态生成锚框",
      "将连续的坐标回归问题转化为局部分布的离散概率预测问题，利用Softmax计算概率的数学期望作为最终距离"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在RCNN算法中，候选区域是如何生成的?",
    "options": [
      "基于目标的先验知识生成",
      "使用选择性搜索算法生成",
      "通过神经网络生成",
      "随机生成"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在GAN的训练过程中，以下哪个策略不是用于改善模式崩溃问题的?",
    "options": [
      "减少生成器的网络复杂度",
      "使用多个判别器",
      "引入辅助损失函数",
      "使用特征匹配损失"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在深度学习中，图像分割网络的输入通常是?",
    "options": [
      "单通道灰度图像",
      "多模态数据",
      "以上都是",
      "三通道彩色图像"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下关于Anchor-based和Anchor-free目标检测算法的描述，正确的是:",
    "options": [
      "Anchor-based算法和Anchor-free算法各有优缺点，适用于不同的应用场景",
      "Anchor-based算法的检测精度一定高于Anchor-free算法",
      "Anchor-free算法的检测速度一定快于Anchor-based算法",
      "Anchor-free算法无法处理重叠目标"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Pytorch中，转置卷积的步长参数表示什么?",
    "options": [
      "卷积核的深度",
      "卷积核的移动步长",
      "卷积核的填充",
      "卷积核的大小"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG模型的一个关键特征是什么?",
    "options": [
      "多个全连接层",
      "同一卷积层内卷积核大小不一",
      "深度可分离卷积",
      "卷积层之间没有池化层"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在YOLOv4中，以下哪项是其主要改进之一?",
    "options": [
      "完全摒弃了锚框机制。",
      "引入了CSPDarknet53作为主干网络，提高了特征提取能力。",
      "引入了Transformer架构。",
      "使用了更深的ResNet作为主干网络。"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "扩散模型的反向过程(去噪过程)的核心是什么?",
    "options": [
      "逐步添加高斯噪声",
      "优化对抗损失函数",
      "使用编码器压缩数据",
      "通过神经网络迭代预测并移除噪声"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GAN的交替训练策略(先更新判别器，再更新生成器)的主要目的是什么?",
    "options": [
      "减少内存消耗",
      "避免判别器过强导致生成器无法学习",
      "加速收敛过程",
      "简化优化算法"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下哪个是Unet网络结构的特点?",
    "options": [
      "编码器和解码器之间没有连接",
      "只有解码器",
      "只有编码器",
      "编码器和解码器通过跳跃连接相连"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "WGAN中，critic函数需满足Lipschitz连续性，这通过什么方法近似实现?",
    "options": [
      "使用批归一化",
      "引入循环损失",
      "权重裁剪或梯度惩罚",
      "增加网络深度"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "扩散模型相比GAN，在图像生成任务中的一个关键优势是什么?",
    "options": [
      "模型结构更简单",
      "不需要大量训练数据",
      "生成速度更快",
      "训练过程更稳定，较少出现模式崩溃"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet的残差块主要解决什么问题?",
    "options": [
      "欠拟合",
      "梯度爆炸",
      "过拟合",
      "梯度消失"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GradCAM的主要用途是什么?",
    "options": [
      "减少模型的计算需求",
      "提供模型决策的可视化解释",
      "增加模型的训练速度",
      "识别图像中的主要对象"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在去噪自编码器中，训练时输入数据是什么?",
    "options": [
      "原始干净数据",
      "人为添加噪声的数据",
      "标签信息",
      "潜在空间采样"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOV3算法与YOLOV1相比，增加了哪些功能?",
    "options": [
      "卷积层的增加",
      "多尺度预测",
      "池化层的增加",
      "全连接层的增加"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Pytorch中实现转置卷积，应该使用哪个类?",
    "options": [
      "nn.MaxPool2d",
      "nn.BatchNorm2d",
      "nn.ConvTranspose2d",
      "nn.Conv2d"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOv2相对于YOLOv1的主要改进是:",
    "options": [
      "引入了Batch Normalization来加速训练。",
      "增加了检测框的数量。",
      "使用更深的网络结构。",
      "完全摒弃了锚框机制。"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在PyTorch中，以下哪个函数用于创建一个形状为(3, 4)的张量，其中元素为0?",
    "options": [
      "torch.randn(3, 4)",
      "torch.rand(3, 4)",
      "torch.ones(3, 4)",
      "torch.zeros(3, 4)"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在大型生成模型微调时，LoRA(低秩自适应)技术大放异彩。其核心数学原理是?(        )",
    "options": [
      "冻结预训练模型主干参数，在 Transformer 注意力等层旁路注入两个极低秩的矩阵乘积(𝐴×𝐵)来模拟权重的增量更新Δ𝑊",
      "将模型所有的浮点数参数全部量化为 INT4",
      "删除网络中不活跃的神经元(剪枝)",
      "仅仅更新模型的最末端全连接层"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下哪项是变分自编码器(VAE)与标准自编码器的关键区别?",
    "options": [
      "VAE使用判别器进行对抗训练",
      "VAE没有解码器组件",
      "VAE学习潜在变量的概率分布而非确定性映射",
      "VAE仅适用于监督学习任务"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "生成对抗网络(GAN)中，生成器的主要目标是什么?",
    "options": [
      "减少网络的计算复杂度",
      "优化网络参数以提高分类准确率",
      "区分真实数据和假数据",
      "生成与真实数据分布相似的假数据"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下关于Anchor-free目标检测算法的描述，正确的是:",
    "options": [
      "Anchor-free算法的检测精度一定高于Anchor-based算法",
      "Anchor-free算法无法检测小目标",
      "Anchor-free算法通过直接预测目标的中心点和宽高来进行检测",
      "Anchor-free算法完全不使用任何形状的框来进行目标检测"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在变分自编码器(VAE)中，重参数化技巧的作用是什么?",
    "options": [
      "增加模型非线性能力",
      "引入对抗训练机制",
      "减少重建误差",
      "使潜在变量的采样过程可微分，便于梯度下降"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Pandas中，以下哪个函数用于计算DataFrame中某一列的平均值?",
    "options": [
      "df.mean()",
      "df.avg()",
      "df.average()",
      "df.sum()"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在深度学习的目标检测中，RCNN算法的核心思想是什么?",
    "options": [
      "直接在全图上进行卷积操作",
      "将候选区域缩放到固定尺寸",
      "利用选择性搜索算法生成候选区域",
      "使用卷积神经网络提取特征"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在深度学习中，图像分割通常使用哪种类型的神经网络结构?",
    "options": [
      "卷积神经网络(CNN)",
      "生成对抗网络(GAN)",
      "决策树(DT)",
      "循环神经网络(RNN)"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在池化层中，如果使用2x2的池化核、步长2、无填充，对一个14x14的输入特征图进行处理，输出的特征图大小是:",
    "options": [
      "8x8",
      "28x28",
      "14x14",
      "7x7"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Faster-RCNN中，以下哪项是其主要缺点之一?",
    "options": [
      "检测速度较慢。",
      "对小目标的检测效果较差。",
      "检测精度低。",
      "不需要大量的训练数据。"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在使用Batch Normalization时，以下哪个不是其直接效果?",
    "options": [
      "减少参数的总量",
      "提高训练的稳定性",
      "增强模型的泛化能力",
      "减轻梯度消失问题"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下关于Wasserstein GAN(WGAN)的说法中，哪一项是不正确的?",
    "options": [
      "WGAN使用Wasserstein距离来衡量生成数据和真实数据的相似性",
      "WGAN的训练过程比普通GAN更加稳定",
      "WGAN的判别器可以输出一个连续的评分",
      "WGAN完全解决了GAN中的模式坍塌问题"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "扩散模型在生成样本时，为什么需要多步迭代去噪?",
    "options": [
      "单步预测噪声不准确，迭代可逐步 refine 生成结果",
      "减少计算资源需求",
      "避免模式崩溃问题",
      "结合编码器-解码器结构"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet模型中的跳跃连接有助于解决哪一问题?",
    "options": [
      "计算代价高",
      "参数过多",
      "特征丢失",
      "梯度消失"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOv6中，以下哪项是其主要改进之一?",
    "options": [
      "使用了更深的ResNet作为主干网络。",
      "引入了Transformer架构。",
      "提出了新的锚框机制。",
      "提出了新的EfficientRep结构，提高了检测速度。"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "CBAM 采用“先通道、后空间”的串行方式，而不是把两者并行堆叠。其背后的合理理解是:(        )",
    "options": [
      "先筛选有意义的特征，再在这些特征上定位关键区域更自然",
      "串行结构的参数一定为零",
      "并行结构一定无法训练",
      "空间注意力必须先于所有其他模块"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet的一个显著优势是什么?",
    "options": [
      "更少的参数数量",
      "更深的网络结构不会导致性能下降",
      "更快的训练速度",
      "较低的计算复杂度"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在PyTorch中，Dropout层应该在什么位置添加?",
    "options": [
      "在最后的全连接层之前",
      "在每个池化层之后",
      "在输入层之后立即添加",
      "在每个激活函数之后"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在PyTorch中，以下哪个操作可以对张量进行逐元素乘法?",
    "options": [
      "torch.mul()",
      "torch.cross()",
      "torch.multiply()",
      "torch.dot()"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GAN在艺术创作中的应用，主要利用了GAN的哪种特性?",
    "options": [
      "数据增强",
      "稳定性",
      "随机性与创造性",
      "特征提取"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在自编码器中，如果瓶颈层维度过高，可能导致什么问题?",
    "options": [
      "模型退化为恒等映射，无法学习有用特征",
      "训练不稳定",
      "重建误差过低但泛化能力差",
      "无法处理非线性数据"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在进行跨层特征融合时，U-Net与FCN在底层的线性代数操作上存在本质区别。U-Net 采用的融合策略是?(        )",
    "options": [
      "逐元素相乘 (Element-wise Multiplication)，起到注意力门控的作用。",
      "沿通道维度的张量拼接 (Concatenation)，保留各自的特征分布，将融合决策权交还给后续的卷积算子。",
      "计算两者的协方差矩阵。",
      "逐元素相加 (Element-wise Addition)，将浅层与深层特征在数值上强行混合。"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Batch Normalization通过什么方式优化神经网络的训练?",
    "options": [
      "调整激活输出的均值和方差",
      "降低权重矩阵的规模",
      "通过添加噪声来增强数据",
      "增加激活函数的种类"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOV1算法在进行目标检测时，将图像划分为多少个网格?",
    "options": [
      "13x13",
      "19x19",
      "7x7",
      "31x31"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Stable Diffusion 属于潜空间扩散模型(Latent Diffusion Models, LDM)。相比于直接在像素空间扩散，LDM 最核心的工程优势是?(        )",
    "options": [
      "能够自动修复损坏的图像",
      "能够生成 3D 模型",
      "通过预训练的 VAE 将高维像素图像压缩到低维潜空间(Latent Space)，在潜空间内进行扩散去噪，极大地降低了计算量与显存消耗",
      "彻底消除了 U-Net 对显存的依赖"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "CycleGAN适用于无配对数据转换，其核心挑战是什么?",
    "options": [
      "训练收敛慢",
      "判别器容易过拟合",
      "缺乏像素级对齐监督，需依赖循环一致性约束",
      "生成器容量不足"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "自编码器的基本结构中，编码器的主要作用是什么?",
    "options": [
      "生成新样本",
      "将输入数据映射到低维潜在空间",
      "优化重建损失",
      "分类输入数据"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet模型中的“shortcut connections”作用是什么?",
    "options": [
      "减少网络参数",
      "提供模型冗余路径",
      "使特征重用更高效",
      "加速网络训练"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG网络结构的设计初衷是为了解决什么问题?",
    "options": [
      "提升图像识别的准确度",
      "减少网络的计算复杂度",
      "缩短训练时间",
      "增强网络的适用性"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "哪种PyTorch模块通常用于在CNN中实现特征图的下采样?",
    "options": [
      "nn.MaxPool2d",
      "nn.Linear",
      "nn.ConvTranspose2d",
      "nn.Upsample"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "标准ViT在处理图像分类任务时引入了可学习的[CLS] Token。如果在设计网络时去掉了这个[CLS] Token，最符合逻辑的替代分类特征提取方案是什么?(        )",
    "options": [
      "仅将注意力矩阵的对角线元素提取出来作为分类特征。",
      "取出序列中第一个和最后一个图像Patch Token相加，然后送入分类器。",
      "放弃Transformer的编码器，直接将所有Token送入全连接层。",
      "在Transformer的最末端，对所有的图像Patch Token进行全局平均池化(GAP)，聚合全局空间信息后再送入分类头。"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在自动驾驶或医疗影像(如肿瘤判断)等高危领域，深度学习模型仅仅输出一个高置信度的预测概率(如“99%确诊”)是无法被接受的。引入可解释性(XAI)技术在此类场景下的核心诉求是?(        )",
    "options": [
      "为了让模型能够自动修复自身在尾部类别上的精度缺陷",
      "为了大幅提升模型在前向推理时的计算速度",
      "为了在输出结论的同时高亮具体病变像素群，以满足安全合规与建立人类信任的双重底线",
      "为了压缩模型的参数量，使其能部署在移动端"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "现代xLSTM架构相较于经典LSTM，大胆引入了指数门控(Exponential Gating)。从信息处理的直觉来看，这种指数级的放缩赋予了模型什么核心能力?(        )",
    "options": [
      "让模型在反向传播时彻底消除了梯度消失的可能，实现无穷远的时间依赖。",
      "赋予了模型更激进的“修正”能力，使其能够更加果断地覆写旧记忆或选择性地保留新信息。",
      "能够自动将输入序列降维，从而减小协方差矩阵的计算开销。",
      "使门控输出严格限制在0到1之间，防止数值溢出。"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "图像分类、目标检测等任务属于判别式模型，而生成式模型的根本数学任务是寻找什么?(        )",
    "options": [
      "通过聚类算法找到数据的中心点",
      "直接对真实数据的联合概率分布 P(X,Y)或边缘概率分布P(X)进行建模",
      "寻找各类样本之间最宽的决策边界",
      "计算图像中每个像素的绝对梯度"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下哪个领域不是GAN的典型应用?",
    "options": [
      "图像超分辨率",
      "风格迁移",
      "机器翻译",
      "语音合成"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下哪种情况不适合使用转置卷积?",
    "options": [
      "图像上采样",
      "图像下采样",
      "特征图的聚合",
      "特征图的细化"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG网络使用ReLU激活函数的原因是什么?",
    "options": [
      "减少梯度消失问题",
      "所有选项都是",
      "提高计算速度",
      "增加模型的非线性"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在PyTorch中，以下哪个函数用于对张量进行转置操作?",
    "options": [
      "torch.t()",
      "torch.flip()",
      "torch.transposed()",
      "torch.transpose()"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Mamba架构提出了“选择性状态空间模型(Selective SSM)”，其中矩阵 B、C和步长 Δ都变成了依赖于输入的动态参数，但连续状态转移矩阵 A却依然保持固定。这种看似矛盾的设计，其根本工程动机是什么?(        )",
    "options": [
      "为了避免在每一个时间步动态生成庞大的𝑁×𝑁矩阵从而引发计算与显存灾难，Mamba通过动态步长Δ间接实现了离散化后的状态转移矩阵随输入变化 。",
      "矩阵 A必须保持固定才能兼容Transformer的多头注意力机制。",
      "固定的矩阵A能够自动过滤掉高频噪声，起到类似于卷积核的平滑作用。",
      "因为矩阵A负责遗忘机制，固定不变可以防止模型产生灾难性遗忘。"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在原始GAN中，判别器的损失函数通常基于什么原理?",
    "options": [
      "均方误差",
      "二元交叉熵",
      "最小二乘误差",
      "余弦相似度"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "以下哪个不是Unet网络结构中的组件?",
    "options": [
      "上采样",
      "跳跃连接",
      "池化层",
      "全连接层"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GradCAM在模型中的作用是什么?",
    "options": [
      "自动调整模型参数",
      "优化模型结构",
      "减少需要训练的数据量",
      "解释模型如何做出特定预测"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "现代视觉Transformer(ViT)通常不使用BN，而是将层归一化(Layer Normalization, LN)作为标配，其主要原因之一是?(        )",
    "options": [
      "LN的计算速度比BN快一百倍。",
      "BN在Batch Size较小时(大模型常见情况)统计方差会剧烈震荡，导致模型崩溃，而LN是单样本独立计算的。",
      "BN只能用于一维文本数据，不能用于图像。",
      "LN能够自动进行数据增强。"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在numpy中，以下哪个函数用于计算两个数组的逐元素乘积?",
    "options": [
      "np.cross()",
      "np.dot()",
      "np.multiply()",
      "np.sum()"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "某卷积层输出了很多通道，其中有些通道对当前图像是有用的，有些则主要带来冗余甚至噪声。若希望模型自动判断“哪些特征更值得看”，最合适的做法是:(        )",
    "options": [
      "仅增加卷积核尺寸",
      "对空间位置做加权",
      "仅增加网络深度",
      "对通道响应做重标定"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "多头注意力优于单头注意力的核心原因是(        )",
    "options": [
      "它不需要 Query、Key、Value 三组向量",
      "它强制所有头学习完全相同的关系",
      "它只关注局部邻域，因此更节省参数",
      "它能在不同子空间中并行捕捉不同类型的关系"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在PyTorch中，Batch Normalization层通常以什么形式实现?",
    "options": [
      "nn.BatchNorm2d for 2D data",
      "所有以上选项",
      "nn.BatchNorm1d for 1D data",
      "nn.BatchNorm3d for 3D data"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "关于ViT中Patch Embedding的理解，下列最恰当的是(        )",
    "options": [
      "它的作用只是加入位置编码，与图像切块无关",
      "它可等效为卷积核大小等于步长的卷积层，对非重叠图像块做线性投影",
      "它把每个像素单独映射为一个token，以保留全部细节",
      "它本质上是先做池化再做Softmax"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "自编码器的核心思想是什么?",
    "options": [
      "通过编码器和解码器直接生成新的数据",
      "通过编码器和解码器对数据进行分类",
      "通过编码器将输入数据压缩为低维表示，再通过解码器重构输入数据",
      "通过编码器将输入数据转换为高维表示，再通过解码器降维"
    ],
    "answer": 2,
    "explanation": "A\n【单选题】以下关于自编码器的说法中，哪一项是不正确的?\nA. 自编码器可以用于降维和特征提取\nB. 自编码器的编码器部分可以是线性的，也可以是非线性的\nC. 自编码器的解码器部分必须与编码器结构完全对称\nD. 自编码器的训练目标是最小化重构误差C\n【单选题】在自编码器中，如果编码器的隐藏层维度过低，可能会导致以下哪种情况?\nA. 重构误差显著增加，模型无法有效学习数据特征\nB. 生成的数据质量显著提高\nC. 模型的训练速度显著加快\nD. 模型的泛化能力显著增强A\n【单选题】以下哪种自编码器结构可以用于处理图像数据?\nA. 稀疏自编码器\nB. 变分自编码器\nC. 卷积自编码器\nD. 以上都可以D\n【单选题】自编码器在训练过程中，重构误差通常使用哪种损失函数来衡量?\nA. 均方误差\nB. 交叉熵损失\nC. L1损失\nD. 余弦相似度损失A\n【单选题】变分自编码器(VAE)与普通自编码器的主要区别在于:\nA. VAE的编码器输出的是一个确定的低维表示\nB. VAE的编码器输出的是一个概率分布的参数\nC. VAE的解码器结构与普通自编码器不同\nD. VAE的训练目标与普通自编码器不同B\n【单选题】在变分自编码器(VAE)中，KL散度的作用是什么?\nA. 用于衡量生成数据与真实数据的相似性\nB. 用于衡量编码器输出的概率分布与先验分布的差异\nC. 用于衡量解码器输出的概率分布与目标分布的差异\nD. 用于衡量重构误差B\n【单选题】以下关于变分自编码器(VAE)的说法中，哪一项是正确的?\nA. VAE的生成数据质量通常比GAN更高\nB. VAE的训练过程比普通自编码器更简单\nC. VAE可以用于生成新的数据样本\nD. VAE的编码器和解码器必须使用相同的网络结构C\n【单选题】在变分自编码器(VAE)中，重参数化技巧的作用是什么?\nA. 使编码器的输出更加稳定\nB. 使模型能够从隐变量分布中采样\nC. 使解码器的输出更加平滑\nD. 使模型的训练速度加快B\n【单选题】以下哪种情况适合使用变分自编码器(VAE)?\nA. 需要对数据进行精确的重构\nB. 需要生成与训练数据相似的新数据\nC. 需要对数据进行分类\nD. 需要对数据进行降噪B\n【单选题】扩散模型的核心思想是什么?\nA. 通过逐步添加噪声来生成数据\nB. 通过逐步去除噪声来恢复数据\nC. 通过优化生成数据与真实数据的相似性来训练模型\nD. 通过最小化重构误差来训练模型B\n【单选题】以下关于扩散模型的说法中，哪一项是不正确的?\nA. 扩散模型是一种生成模型\nB. 扩散模型的训练过程比GAN更加复杂\nC. 扩散模型生成的数据质量通常比自编码器更高\nD. 扩散模型的生成过程是不可逆的D\n【单选题】在扩散模型中，扩散过程的作用是什么?\nA. 将数据逐步转换为噪声\nB. 将噪声逐步转换为数据\nC. 优化模型的训练目标\nD. 提高模型的生成性能A\n【单选题】以下哪种方法可以用于加速扩散模型的生成过程?\nA. 减少扩散步骤的数量\nB. 增加扩散步骤的数量\nC. 使用更复杂的网络结构\nD. 使用更简单的网络结构A\n【单选题】扩散模型在生成数据时，通常需要以下哪个步骤?\nA. 从噪声中采样\nB. 从真实数据中采样\nC. 从先验分布中采样\nD. 从隐变量中采样A"
  },
  {
    "type": "单选",
    "question": "Swin Transformer相较于标准ViT，在宏观架构上最大的改变是引入了层级化(Hierarchical)设计。这种设计的核心业务价值在于?(        )",
    "options": [
      "通过不断降低特征维度，使得模型可以在仅有几百张图片的极小数据集上训练。",
      "能够自底向上地构建多尺度特征金字塔，从而有效应对语义分割、目标检测等密集预测任务中目标尺度的剧烈变化。",
      "使网络能够直接处理音频和文本，成为多模态大模型的基础。",
      "彻底移除了多层感知机(MLP)层，将计算量全部集中在自注意力计算上。"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "CycleGAN的循环一致性损失如何帮助提升转换质量?",
    "options": [
      "引入额外的对抗训练机制",
      "直接最小化生成图像与真实图像的像素差异",
      "确保生成图像可通过逆转换恢复原图，保持内容一致性",
      "增强判别器的分类准确性"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Wasserstein GAN(WGAN)相比原始GAN的主要改进是什么?",
    "options": [
      "添加循环一致性损失",
      "引入Wasserstein距离提供更稳定的梯度",
      "使用更深的神经网络架构",
      "采用自注意力机制提升生成质量"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "SAM(Segment Anything Model)作为视觉基础大模型，其核心目标是实现交互式的零样本(Zero-shot)泛化。为了在接收到用户的提示(点击/画框)后实现亚秒级响应，SAM 在架构上采取了什么策略?(        )",
    "options": [
      "仅使用极其轻量的 MobileNet 作为唯一的网络结构。",
      "在浏览器端使用汇编语言重写了全部算子。",
      "架构解耦。将极其沉重的图像编码器与极其轻量的提示编码器/掩码解码器在物理层面剥离，图像特征“计算一次，多次缓存查询”。",
      "将图像强行压缩为 64x64 分辨率进行处理。"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "使用matplotlib绘制一个简单的折线图，以下哪个命令是正确的?",
    "options": [
      "plt.line()",
      "plt.graph()",
      "plt.plot()",
      "plt.curve()"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "当你通过LoRA将一类罕见的病理血管结构微调注入到通用扩散大模型中后，你可以通过调节什么参数来在物理空间中平滑地控制疾病生成的严重程度?(        )",
    "options": [
      "改变学习率",
      "改变 LoRA 权重与主模型权重相加时的缩放融合比例(Scale Factor)",
      "调大批次大小 (Batch Size)",
      "增加网络中残差块的数量"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "U-Net网络在解码器(扩张路径)中引入了横向的跳跃连接(Skip Connection)，其根本的物理动机是什么?(        )",
    "options": [
      "为了防止网络训练时发生梯度爆炸。",
      "将收缩路径中未经不可逆压缩的浅层高分辨率几何细节，直接引流给解码器，帮助其精准重构物体的绝对位置与拓扑边缘。",
      "为了将图像分类任务与分割任务合并在同一个网络中。",
      "为了增加网络的参数量以拟合更复杂的函数。"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在YOLOv1中，以下哪项是其主要缺点之一?",
    "options": [
      "检测速度过快，导致精度不足。",
      "无法检测多类别目标。",
      "需要大量的训练数据。",
      "对小目标的检测效果较差。"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在GAN的架构中，判别器网络通常采用哪种类型的激活函数作为输出层?",
    "options": [
      "ReLU",
      "Softmax",
      "Tanh",
      "Sigmoid"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在图像分割中，使用Dice损失相比于交叉熵损失的优势是什么?",
    "options": [
      "对类别不平衡不敏感B. 对模型的正则化更强D. 对模型的正则化更弱",
      "对类别不平衡更敏感"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet网络最著名的应用场景是什么?",
    "options": [
      "自然语言处理",
      "语音识别",
      "图像分类",
      "推荐系统"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在WGAN中，权重裁剪的主要目的是什么?",
    "options": [
      "确保critic函数满足Lipschitz连续性约束",
      "加速训练收敛速度",
      "减少模型计算复杂度",
      "防止生成器过拟合"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VAE生成新样本的典型方式是什么?",
    "options": [
      "直接复制训练数据",
      "优化输入噪声通过生成器",
      "从先验分布(如标准正态)采样潜在变量并解码",
      "使用判别器筛选高概率样本"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Anchor-based目标检测算法中，锚框(Anchor)的主要作用是:",
    "options": [
      "用于加速网络训练过程",
      "用于对特征图进行分类",
      "用于生成候选区域并直接输出检测结果",
      "作为检测框的初始形状，便于网络预测目标位置"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ControlNet 旨在为扩散模型添加精确的空间条件控制(如边缘图、姿态骨架)。为了确保加入控制网络后，初始训练阶段绝对不会破坏甚至干扰原始预训练大模型强大的生成能力，它采用了什么特殊结构?(        )",
    "options": [
      "零卷积(Zero Convolutions)",
      "自注意力屏蔽",
      "随机丢弃 50% 的层",
      "L1 正则化"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在GAN中，如果判别器的性能过于强大，可能会导致以下哪种情况?",
    "options": [
      "判别器的性能会自动降低以平衡训练",
      "生成器无法生成任何数据",
      "生成器生成的数据质量显著提高",
      "生成器的训练变得非常困难，甚至无法收敛"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Fast RCNN算法与RCNN相比，改进了哪个部分?",
    "options": [
      "候选区域的尺寸",
      "候选区域的数量",
      "候选区域生成速度",
      "特征提取速度"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Anchor-based目标检测算法中，锚框的尺寸和比例通常是:",
    "options": [
      "根据训练数据集中目标的尺寸和比例预先设定的",
      "随机生成的",
      "固定不变的，与数据集无关",
      "由网络自动学习生成的"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在极度类别不平衡的医疗影像分割中(如背景占99%，病灶占1%)，传统的分类准确率(Accuracy)指标会失效。工程上最常用来衡量预测掩码与真实掩码“区域空间重合度”的核心指标是? (        )",
    "options": [
      "均方误差 (MSE)",
      "交叉熵 (Cross Entropy)",
      "交并比 (IoU) 与 Dice系数",
      "召回率 (Recall)"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG网络为什么采用多个连续的小卷积核?",
    "options": [
      "提高模型非线性",
      "增加训练速度",
      "简化网络结构",
      "减少参数数量"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLO系列目标检测算法的核心思想是:",
    "options": [
      "通过多尺度特征图进行目标检测。",
      "依赖于复杂的区域提议算法。",
      "使用滑动窗口检测目标。",
      "将目标检测问题转化为单个神经网络的回归问题。"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "使用PyTorch定义CNN时，哪个类用于添加卷积层?",
    "options": [
      "nn.Linear",
      "nn.Conv2d",
      "nn.ReLU",
      "nn.BatchNorm2d"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在生成对抗网络(GAN)中，生成器的优化目标是什么?",
    "options": [
      "最小化判别器的损失函数",
      "最大化判别器对生成样本的错误分类概率",
      "最小化真实样本与生成样本之间的L2距离",
      "直接拟合真实数据分布"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GAN训练中常见的“模式崩溃”问题指的是什么?",
    "options": [
      "生成器生成样本多样性不足，只覆盖真实数据的部分模式",
      "判别器无法区分真实和生成样本",
      "生成样本与真实样本差异过大",
      "训练过程梯度爆炸导致不稳定"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG网络中的最大池化层通常使用的窗口大小是多少?",
    "options": [
      "3x3",
      "2x2",
      "5x5",
      "4x4"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOV3算法中使用的损失函数包括以下哪些?",
    "options": [
      "所有以上选项",
      "均方根误差损失",
      "交叉熵损失",
      "均方误差损失"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在使用GAN进行数据增强时，以下哪个步骤是不必要的?",
    "options": [
      "训练一个稳定的判别器",
      "使用生成的假数据进行模型训练",
      "对生成的假数据进行标注",
      "生成假数据并将其与真实数据混合"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "尽管Mamba的参数会随输入动态变化，导致其无法像传统SSM那样使用全局卷积进行并行计算，但它依然在GPU上实现了极快的训练速度。其核心硬件加速策略是?(        )",
    "options": [
      "将网络强制裁剪为极浅的层数，减少浮点运算。",
      "使用了低精度量化技术(如INT4)，大幅降低了矩阵运算的带宽占用。",
      "利用GPU内存分层特性，采用“并行扫描(Parallel Scan)”算法，将张量直接加载到高速SRAM中完成离散化和状态更新，避免了在慢速HBM中的反复读写 。",
      "彻底抛弃了状态空间模型，在底层依然调用了FlashAttention算子。"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在CNN中，连续使用多个小的卷积核(如3x3)相比一个大的卷积核(如5x5)的优势不包括:",
    "options": [
      "减少计算复杂度",
      "增加网络深度",
      "减少参数数量",
      "增强网络的非线性"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "自编码器在异常检测中的应用基于什么原理?",
    "options": [
      "异常样本的重建误差通常较高",
      "编码器能精确分类正常和异常样本",
      "瓶颈层提取判别特征",
      "解码器生成异常样本"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet的训练时，哪种技术对防止过拟合帮助最大?",
    "options": [
      "L2正则化",
      "Dropout",
      "数据增强",
      "批量归一化"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Pytorch中，转置卷积的填充参数padding的作用是什么?",
    "options": [
      "控制卷积核的移动步长",
      "控制卷积核的宽度",
      "控制卷积核的深度",
      "控制输出特征图的大小"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Fast-RCNN中，对候选区域进行分类和回归时，使用的是:",
    "options": [
      "随机森林进行分类和回归。",
      "卷积层进行分类和回归。",
      "独立的分类器和回归器。",
      "共享的全连接层进行分类和回归。"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "梯度累积能够解决的问题不包括:",
    "options": [
      "显存限制",
      "过拟合",
      "硬件限制",
      "训练数据少"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "SCSA 引入自注意力思想，让特征图中任意位置或任意通道之间建立依赖关系。相比普通卷积，它最突出的能力是:(        )",
    "options": [
      "完全不需要残差连接",
      "捕获全局长程依赖，增强复杂结构的表达",
      "通过池化直接输出分类结果",
      "只关注局部邻域，避免全局信息干扰"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在GAN的训练中，以下哪个现象不是导致模型崩溃的原因?",
    "options": [
      "训练数据量过多",
      "判别器太弱",
      "梯度消失",
      "模式崩溃(Mode Collapse)"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Unet中，跳跃连接的主要作用是什么?",
    "options": [
      "增加模型的宽度",
      "提高模型的深度",
      "减少计算量",
      "保留更多的位置信息"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "WGAN的一个主要优势是什么?",
    "options": [
      "提供有意义的梯度即使真实和生成分布不重叠",
      "训练速度显著快于原始GAN",
      "生成样本质量始终更高",
      "无需调整超参数"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在RCNN系列中，以下哪项是其主要优点之一?",
    "options": [
      "不需要大量的训练数据。",
      "检测精度高。",
      "检测速度极快。",
      "对小目标的检测效果非常好。"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Dropout在神经网络中的主要作用是什么?",
    "options": [
      "增加模型的参数数量",
      "减小模型的存储需求",
      "防止模型过拟合",
      "提升模型的训练速度"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "空间金字塔池化(SPP)模块被广泛插入在骨干网络与颈部网络的交界处。它利用不同大小的最大池化核并行处理特征图，除了强制聚合多尺度上下文信息外，其最重要的架构作用是?(        )",
    "options": [
      "将输入特征的通道数压缩至原来的四分之一。",
      "将图像颜色空间转化为频域特征。",
      "在不降低特征图空间分辨率的前提下，显著拓展网络对图像的绝对感受野(Receptive Field)。",
      "强制将三维张量展平为一维向量以对接全连接层。"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "深度学习在图像分割中通常使用哪种类型的激活函数?",
    "options": [
      "Tanh",
      "Softmax",
      "Sigmoid",
      "ReLU"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在单阶段检测器(如YOLO系列)输出的密集预测张量中，除了需要预测边界框坐标和类别概率外，还必须预测一个被称为“置信度(Objectness Confidence)”的标量。从底层数学定义来看，这个置信度的物理意义是?(        )",
    "options": [
      "仅仅表示该网格内部包含前景目标(而非背景)的概率。",
      "预测框四个坐标点相加后的平均值。",
      "表征该网格内存在目标的概率与其几何定位精度(IoU)的乘积，即𝑃𝑟(Object)×𝐼𝑜,𝑈-𝑝𝑟𝑒𝑑-𝑡𝑟𝑢𝑡ℎ.。",
      "该类别的分类得分经过Softmax激活后的极值。"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "关于交并比(IoU)及其改进算法在回归损失中的几何原理，下列说法正确的有?(        )",
    "options": [
      "EIoU在DIoU的基础上，进一步将宽度和高度的差异分离为独立的惩罚项，避免了宽高比例优化时的耦合震荡。",
      "GIoU引入了最小外接矩形作为惩罚项，解决了不相交状态下的梯度截断问题。",
      "DIoU直接将两个框中心点之间的欧氏距离作为惩罚，使得预测框中心能更快速向真实框靠拢。ABCD",
      "基础IoU的致命缺陷在于:当预测框与真实框完全没有交集时，梯度为0，模型失去优化方向。"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "自编码器的瓶颈层设计(维度小于输入)主要意图是什么?",
    "options": [
      "防止梯度消失",
      "增加模型非线性能力",
      "强制学习数据的压缩和有用特征表示",
      "减少训练时间"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLO26作为极端“边缘优先”的架构，为了打破轻量级设备上的内存带宽墙(Memory Bandwidth Wall)，它在算子层面做出了什么激进的减法?(        )",
    "options": [
      "彻底移除了DFL(分布焦距损失)模块，回归到最纯粹的绝对单点坐标回归，避免了高维概率张量带来的内存碎片化",
      "移除了FPN特征金字塔",
      "移除了所有的卷积操作",
      "移除了所有的分类分支，仅做目标定位"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Fast RCNN算法中，特征图是如何共享的?",
    "options": [
      "对每个候选区域分别提取特征",
      "对每个候选区域分别训练网络",
      "使用全连接层共享特征",
      "使用卷积层共享特征"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOv10声称实现了“无NMS端到端推理(NMS-Free)”。它是如何做到在不使用NMS算法的情况下消除冗余预测框的?(        ) A",
    "options": [
      "直接降低模型置信度阈值",
      "利用Soft-NMS替代标准NMS",
      "在前向传播时随机丢弃50%的预测结果",
      "在训练时通过“一对一预测头”进行严格的匈牙利二分图匹配监督，强制网络产生强大的空间排他性感知，推理时仅保留该头部"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOV1算法的主要特点是什么?",
    "options": [
      "将目标检测问题转化为回归问题",
      "需要多个尺度的特征图",
      "使用选择性搜索算法",
      "需要多个网络进行级联"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Faster R-CNN是双阶段检测器的经典代表，其中区域提议网络(RPN)的核心任务是?(        )",
    "options": [
      "将输入图像直接压缩为一维序列",
      "对提取出的候选区域进行最终的细粒度分类",
      "扫描特征图并输出高质量的包含目标的候选框及其偏移行",
      "自动聚类出数据集的最佳锚框尺寸"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在GAN中，判别器的作用是什么?",
    "options": [
      "增强生成器生成的数据的真实性",
      "生成新的数据样本",
      "作为特征提取器使用",
      "区分真实数据和生成器生成的假数据"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在目标检测任务中，选择Anchor-based算法还是Anchor-free算法，主要取决于:",
    "options": [
      "数据集的大小",
      "计算资源的限制",
      "以上都是",
      "数据集中目标的尺寸和分布"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在图像分割中，使用Dice损失的主要目的是什么?",
    "options": [
      "增加模型的复杂度",
      "增加模型的过拟合风险",
      "减少类别不平衡的影响",
      "减少模型的计算量"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在numpy中，以下哪个函数用于计算一个数组的所有元素的总和?",
    "options": [
      "np.sum()",
      "np.mean()",
      "np.add()",
      "np.prod()"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Faster-RCNN中，Region Proposal Network(RPN)的作用是:",
    "options": [
      "用于对检测框进行最后的精调。",
      "替代了传统的Selective Search算法，但仍然需要单独的特征提取过程。",
      "生成候选区域，并为每个候选区域提供一个前景/背景的分类得分。",
      "直接输出最终的检测框和类别。"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOX率先在YOLO家族中引入了分类与回归解耦头(Decoupled Head)。这种设计的根本物理逻辑依据是什么?(        )",
    "options": [
      "因为解耦头可以使得网络参数量减半",
      "分类任务需要平移不变性，而回归任务需要平移等变性，耦合在一起会导致梯度相互干扰",
      "为了方便导出为ONNX格式",
      "分类任务需要平移等变性，而回归任务需要平移不变性"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "泛化版的类激活映射(Grad-CAM)在计算最终的热图时，引入了一个极其关键的非线性操作——ReLU激活函数。其物理意义是什么?(        )",
    "options": [
      "为了将分类得分归一化到 0 到 1 之间",
      "为了将特征图的空间分辨率强行放大至与原图一致",
      "为了解决深层网络中的梯度消失问题",
      "为了过滤掉那些对目标类别产生负向干扰的特征(即只关心对目标类别有正向促进作用的区域)"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "当用户在图像上点击一个像素点(如汽车的轮胎)作为提示时，系统在拓扑上存在歧义(用户可能想分割轮胎、车轮或整辆车)。SAM的解法是?(        )",
    "options": [
      "在一次前向传播中，解码器并行输出3个不同层级的掩码(整体、部分、子部分)，提供最合理的候选方案。",
      "随机输出其中一个掩码。",
      "要求用户必须同时提供文本提示。",
      "弹出一个对话框询问用户。"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Faster RCNN算法引入了哪个组件来提高检测速度?",
    "options": [
      "全连接层",
      "区域提议网络(Region Proposal Network, RPN)",
      "池化层",
      "卷积层"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "YOLOv8中，以下哪项是其主要改进之一?",
    "options": [
      "使用了更深的ResNet作为主干网络。",
      "提出了新的锚框机制。",
      "引入了Transformer架构。",
      "提出了新的EfficientRep结构，提高了检测速度。"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Anchor-based目标检测算法中，锚框的匹配策略通常是:",
    "options": [
      "根据锚框与真实标注框的IoU(交并比)值进行匹配",
      "只与最大IoU值的锚框进行匹配",
      "不需要匹配，直接使用所有锚框进行预测",
      "将所有锚框与所有目标进行匹配"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "专为现代深层残差架构(如ResNet, ViT)设计的隐式正则化方法 DropPath，其核心工作机制是?(        )",
    "options": [
      "随机丢弃整个残差分支的计算路径，让输入信号直接通过捷径传递。",
      "随机将单个神经元的输出置零。",
      "随机打乱输入图像的像素顺序。",
      "随机改变网络中激活函数的类型。"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在使用Batch Normalization时，其正面影响包括:",
    "options": [
      "降低对初始权重的依赖",
      "增强模型对输入数据的依赖",
      "减少梯度消失问题",
      "提高学习速率"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GAN在数据增强中的应用可能包括以下哪些方面?",
    "options": [
      "生成新的训练样本",
      "改善模型的泛化能力",
      "增加训练数据的多样性",
      "减少模型对训练数据的依赖"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GradCAM的工作原理主要依赖于:",
    "options": [
      "最后一个全连接层的权重",
      "模型的输入图像",
      "最后一个卷积层的梯度信息",
      "第一个卷积层的特征图"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在图像分割中，以下哪些方法可以减少类别不平衡的影响?",
    "options": [
      "使用Dice损失",
      "改变损失函数权重",
      "数据增强",
      "重采样技术"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Batch Normalization层的作用包括:",
    "options": [
      "稳定神经网络训练",
      "加速收敛过程",
      "直接减少模型的参数数量",
      "减少每层输入的内部协变量偏移"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "一个打赢“对抗过拟合”战争的现代视觉大模型训练流水线，通常包括以下哪些核心维度的防线?(        )",
    "options": [
      "架构约束防线:正则化(如 DropPath / Weight Decay)",
      "反向优化防线:优化器与学习率调度(如 AdamW / 余弦退火)",
      "输入数据防线:数据增强(如 Mixup / CutMix)",
      "前向传播防线:归一化(如 BN / LN)"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "深度学习中，图像分割可能使用的损失函数包括哪些?",
    "options": [
      "边缘损失",
      "Dice损失",
      "均方误差损失",
      "交叉熵损失"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Swin Transformer是视觉Transformer向通用视觉骨干网络进阶的重要里程碑。它为了解决标准ViT的工程痛点，引入了哪些关键机制? (        )",
    "options": [
      "利用移位窗口机制(SW-MSA)，打破了相邻窗口孤立的状态，实现了跨窗口的全局信息交互 。",
      "提出了基于局部窗口的自注意力(W-MSA)，将与图像大小呈二次方级爆炸的计算复杂度降解为了线性关系 。",
      "引入了Patch Merging模块，自底向上构建了多分辨率的层级化(Hierarchical)特征金字塔 。",
      "彻底抛弃了残差连接和层归一化(Layer Normalization)，将网络结构精简到了极致 。"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在计算卷积层输出尺寸时，影响输出大小的因素有哪些?",
    "options": [
      "卷积核大小",
      "激活函数类型",
      "步长",
      "填充"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在GAN的训练中，以下哪些方法可以用于改善模式崩溃问题?",
    "options": [
      "减少生成器的网络复杂度",
      "使用特征匹配损失",
      "引入辅助损失函数",
      "使用多个判别器"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在PyTorch模型中，添加Dropout有哪些直接的影响?",
    "options": [
      "减少参数的总数",
      "提升模型训练的稳定性",
      "减少每轮训练的时间",
      "有助于模型在未见数据上的表现"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在实施Batch Normalization时，以下哪些描述是正确的?",
    "options": [
      "可以在激活函数之后使用",
      "可以在每个卷积层后使用",
      "在测试时需要使用与训练时不同的计算方法",
      "可以在激活函数之前使用"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "YOLOV1算法的特点包括哪些?",
    "options": [
      "对每个候选区域分别提取特征",
      "将目标检测问题转化为回归问题",
      "将图像划分为多个网格进行检测",
      "使用卷积神经网络直接预测边界框和类别概率"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "YOLOV3算法相较于YOLOV1，增加了哪些新特性?",
    "options": [
      "引入锚框概念",
      "多尺度预测",
      "Darknet-53作为基础网络",
      "特征金字塔网络"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在卷积神经网络中，池化层的作用包括哪些?",
    "options": [
      "减少参数数量",
      "减小特征图的尺寸",
      "帮助防止过拟合",
      "增加网络的非线性"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在构建卷积神经网络时，通常推荐的方法包括:",
    "options": [
      "较小的卷积核",
      "深层网络结构",
      "使用批量归一化",
      "高学习率"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "VGG模型中关于卷积层的描述正确的是:",
    "options": [
      "逐层增加卷积核数量",
      "多层卷积层叠加",
      "所有卷积层使用步长为2",
      "卷积核尺寸固定"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "作为一名算法工程师，需要根据具体的业务场景进行模型架构的工程选型。基于工业界的最佳实践，以下哪些选型建议是合理的?(        )",
    "options": [
      "在边缘计算或极高实时性要求(如手机端毫秒级处理)的场景下，首选轻量级卷积神经网络(如MobileNet) 。",
      "如果目标是基于海量图文数据(如LAION数据集)构建多模态大模型基座，推荐使用标准ViT架构，因其结构天然契合LLM 。",
      "对于只有几百张图像的小型医疗图像分类任务，必须强制使用Transformer模型，因为其全局感受野可以发现人眼看不到的病灶 。",
      "在进行高分辨率目标检测或语义分割时，若数据量为中等规模，Swin Transformer和CvT这类多尺度混合架构通常能取得精度与速度的双赢 。"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在深度学习中，用于图像分割的神经网络结构可能包括哪些?",
    "options": [
      "递归神经网络(Recurrent Neural Network)",
      "循环神经网络(RNN)",
      "生成对抗网络(GAN)",
      "卷积神经网络(CNN)"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "ResNet网络的创新点主要包括:",
    "options": [
      "较少的训练时间",
      "引入残差模块",
      "深层网络结构",
      "引入全连接层"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在使用PyTorch进行图像数据处理时，以下哪些变换是常用的数据增强方法?",
    "options": [
      "随机剪切",
      "调整亮度",
      "随机水平翻转",
      "标准化"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GAN的生成器可能采用以下哪些网络结构?",
    "options": [
      "循环神经网络(RNN)",
      "变分自编码器(VAE)",
      "卷积神经网络(CNN)",
      "深度信念网络(DBN)"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "如果一个卷积层使用了填充和步长，那么以下哪些说法是正确的?",
    "options": [
      "填充可以使输出尺寸增大",
      "步长可以使输出尺寸增大",
      "填充可以使输出尺寸减小",
      "步长可以使输出尺寸减小"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GAN的判别器可能采用以下哪些网络结构?",
    "options": [
      "多层感知机(MLP)",
      "卷积神经网络(CNN)",
      "循环神经网络(RNN)",
      "残差网络(ResNet)"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Batch Normalization对模型训练有哪些直接的好处?",
    "options": [
      "提高模型的训练速度",
      "减小过拟合的风险",
      "允许使用较大的学习率",
      "降低了对精确初始化的需要"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "以下哪些技术手段属于用来约束模型复杂度、防止模型“死记硬背”的正则化(Regularization)方法?(        )",
    "options": [
      "DropPath(随机丢弃残差分支)",
      "早停机制(Early Stopping)",
      "L2 正则化(Weight Decay权重衰减)",
      "Dropout(随机失活单个神经元)"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GAN的训练过程中可能出现的问题包括哪些?",
    "options": [
      "训练不稳定",
      "判别器过弱",
      "模式崩溃",
      "判别器过强"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "以下哪些因素可能导致深度学习模型在图像分割任务中过拟合?",
    "options": [
      "正则化不足",
      "训练数据不足",
      "损失函数选择不当",
      "模型过于复杂"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "如果任务对目标边缘、方向和位置都非常敏感，例如细长目标检测或语义分割，哪些理解是合理的?(        )",
    "options": [
      "坐标注意力(CA)之所以有优势，是因为它分别沿高和宽两个方向聚合信息",
      "EMA 借鉴了方向性建模思想，因此也适合对空间结构进行轻量化刻画",
      "CA 的本质是完全放弃通道建模，只做二维卷积",
      "CA 相比普通空间注意力，更强调在轻量化前提下保留精确位置信息"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GradCAM技术的主要应用包括:",
    "options": [
      "可视化模型关注的区域",
      "优化模型结构",
      "加速模型训练",
      "解释模型决策"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "VGG网络的设计原则包括什么?",
    "options": [
      "使用尽可能小的卷积核",
      "最大化特征图的空间分辨率",
      "增加网络的深度",
      "使用大尺寸的卷积核"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "现代无锚框(Anchor-Free)范式深刻改变了目标定位的数学建模方式。相比于Anchor-based模型，其核心特征包括?(        )",
    "options": [
      "为了应对边缘低质量像素，引入了“中心度(Center-ness)”来衰减偏离中心的预测框得分。",
      "摒弃先验锚框，彻底消除了与Anchor尺寸、长宽比相关的超参数调优负担。",
      "网络直接回归当前像素点到目标真实边界框四个物理边缘(左、上、右、下)的绝对距离。",
      "将真实目标边界框内的空间像素点(或中心区域点)直接定义为正样本。"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "使用GradCAM可以实现的功能:",
    "options": [
      "简化模型结构",
      "增强模型透明度",
      "提高模型准确率",
      "理解模型如何处理信息"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Fast RCNN算法相较于RCNN，有哪些改进?",
    "options": [
      "特征提取速度的提升",
      "减少了候选区域的数量",
      "特征图的共享",
      "候选区域的生成速度"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "VGG网络在图像处理中特别适用于:",
    "options": [
      "特征提取",
      "目标检测",
      "图像分割",
      "图像分类"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Segment Anything Model (SAM) 系列的演进极大地拓宽了视觉大模型的边界。以下关于 SAM1、SAM2 和 SAM3 核心特性的匹配，描述正确的有?(        )",
    "options": [
      "这三代模型在推理阶段都要求每次交互必须重新运行庞大而缓慢的 ViT 图像编码器。",
      "SAM1:通过架构解耦实现实时交互响应，利用并行多尺度预测掩码消除物理单点点击的拓扑歧义性。",
      "SAM2:引入存储银行(Memory Bank)与存储注意力机制，在时空一致性上实现了突破，支持视频对象的流式零样本跟踪分割。",
      "SAM3:提出了提示化概念分割(PCS)，允许用户通过自然语言(文本)或参考图片(视觉示例)在全新场景中进行语义级概念检索与分割。"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在设计CNN模型时，通常会使用哪些方法来提高模型的性能?",
    "options": [
      "添加更多的卷积层",
      "使用不同大小的卷积核",
      "增加全连接层",
      "使用激活函数"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在图像分割中，Unet结构的哪些特点有助于提高分割精度?",
    "options": [
      "编码器-解码器架构",
      "跳跃连接",
      "使用全连接层",
      "上采样和下采样"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "生成对抗网络(GAN)虽然生成质量极高，但在训练与优化上面临着诸多极其棘手的挑战。以下属于 GAN 经典困境的有?(        )",
    "options": [
      "梯度消失:如果判别器训练得太好、太快，它会极其轻易地把生成器生成的假图全部识破，导致传给生成器的梯度趋近于零。",
      "模式崩溃(Mode Collapse):生成器发现了判别器的某个漏洞，于是疯狂输出某几种特定的样本，彻底丧失了生成的多样性。",
      "模型只能生成黑白图像。",
      "纳什均衡极难达到:生成器和判别器相互博弈，损失函数往往会震荡，难以稳定收敛。"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "后Transformer时代，学术界依然在孜孜不倦寻找新型架构(如Mamba、KAN、PINN等)，主要为了解决现代深度学习面临的哪些核心痛点?(        )",
    "options": [
      "现有的神经网络无法在GPU上运行，必须依赖专用的量子计算机。",
      "纯数据驱动的黑盒模型在科学计算中容易违背能量守恒等物理法则，且在小数据体制下缺乏泛化能力 。",
      "Transformer自注意力机制带来的𝑂(,𝑁-2.)计算复杂度与内存消耗，导致其难以处理高分辨率图像或超长视频流 。",
      "传统MLP算子由于采用了刚性的固定激活函数，往往缺乏数学上的可解释性 。"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "学习率衰减的实际效果包括哪些?",
    "options": [
      "实现更好的全局最优解",
      "减慢学习速度",
      "增加训练过程中的波动",
      "避免陷入局部最小值"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "RCNN算法中，哪些步骤是关键的?",
    "options": [
      "候选区域的回归",
      "特征提取",
      "候选区域的生成",
      "候选区域的分类"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Faster RCNN算法中，RPN网络的作用包括哪些?",
    "options": [
      "进行目标的回归",
      "生成候选区域",
      "预测目标的类别",
      "提取特征"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "VGG网络的特点包括:",
    "options": [
      "参数数量庞大",
      "适用于小规模数据集",
      "良好的特征传递",
      "计算密集型"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在PyTorch中，以下哪些操作可以在构建CNN时使用以增加网络的复杂度和能力?",
    "options": [
      "增加Dropout层",
      "使用残差连接",
      "减少学习率",
      "使用批量归一化"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在使用Dropout层时，以下哪些做法是推荐的?",
    "options": [
      "在输出层之前使用较高比率的Dropout",
      "在训练过程中使用，测试过程中禁用",
      "在输入层使用Dropout",
      "在每个激活层后使用Dropout"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GAN在图像处理领域的应用可能包括哪些?",
    "options": [
      "3D重建",
      "图像超分辨率",
      "面部表情合成",
      "图像去噪"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "ResNet模型适用于哪些任务:",
    "options": [
      "语义分割",
      "目标检测",
      "语音识别",
      "图像分类"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "梯度累积的主要好处包括:",
    "options": [
      "减少训练过程中内存的消耗",
      "加快模型的收敛速度",
      "提高模型训练的稳定性",
      "允许使用更大的有效批次大小"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "YOLOV3算法中，损失函数可能包括哪些?",
    "options": [
      "交叉熵损失",
      "均方根误差损失",
      "均方误差损失",
      "铰链损失"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "对于池化层的输出计算，以下哪些参数是关键?",
    "options": [
      "输入特征图大小",
      "步长",
      "填充",
      "池化核大小"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "从自编码器(AE)到变分自编码器(VAE)，再到潜在扩散模型(LDM)，“隐空间(Latent Space)”在生成任务中发挥了哪些无可替代的核心作用?(        )",
    "options": [
      "它能够确保模型不再需要GPU加速。",
      "连续平滑:通过KL散度等约束让隐空间分布变得平滑连续，使得向量间的线性插值(Interpolation)对应着图像语义的平滑过渡(例如男人平滑渐变为女人)。",
      "降维加速:剥离高频噪声和冗余背景，将庞大的像素矩阵压缩为紧凑的特征矩阵，极大降低算力开销。",
      "解耦特征:在良好训练的隐空间中，可以找到特定属性(如戴眼镜、微笑)的方向向量，通过简单的向量加减法控制生成特征。"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GAN在艺术创作中的应用可能包括哪些?",
    "options": [
      "自动绘画创作",
      "虚拟角色生成",
      "图像风格迁移",
      "音乐风格转换"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "根据图像分割的任务复杂度演进，以下关于三个核心子任务的代数表征与物理约束，描述正确的有?(        )",
    "options": [
      "实例分割:不仅需要识别类别，还要区分不同物理实体。通常为每个检测到的可数物体输出一个专属的二值掩码。",
      "语义分割:不区分同类别的不同个体，通常输出一个 H×W 的单通道索引类别图。",
      "实例分割的掩码在空间上是允许存在重叠的(如前后行人遮挡)。",
      "全景分割:统一了不可数事物和可数物体，但要求所有的掩码之间绝不允许存在空间重叠，且必须覆盖全图。"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Dropout在训练深度神经网络时有哪些正面效果?",
    "options": [
      "减少过拟合",
      "提高模型的泛化能力",
      "增加模型的复杂度",
      "防止梯度消失问题"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "使用Dropout时，它的作用包括哪些?",
    "options": [
      "减少训练时间",
      "随机地丢弃网络中的部分连接",
      "为网络提供轻量级的正则化",
      "增加网络的鲁棒性"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在ResNet模型中，残差块的作用是:",
    "options": [
      "减少梯度消失问题",
      "增加网络的非线性",
      "帮助信息跨层传递",
      "减少网络的复杂性"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GradCAM对于模型的贡献包括:",
    "options": [
      "帮助识别模型的错误",
      "减少计算需求",
      "提供模型的可视化解释",
      "增强模型的泛化能力"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "VGG网络中通常使用的技术包括哪些?",
    "options": [
      "序列化的卷积层布局",
      "引入批量归一化",
      "使用小尺寸的卷积核",
      "深层网络结构"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在PyTorch的transforms模块中，用于数据增强的功能包括:",
    "options": [
      "Normalize",
      "RandomHorizontalFlip",
      "Resize",
      "ToTensor"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "转置卷积在图像分割中的作用可能包括哪些?",
    "options": [
      "增加特征图的维度",
      "减少特征图的维度",
      "聚合特征图",
      "细化特征图"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "以下哪些是深度学习中图像分割网络的输入可能包括的类型?",
    "options": [
      "单通道灰度图像",
      "深度图像",
      "三通道彩色图像",
      "多模态数据"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "U-Net 被誉为医学图像分割的标准范式。相比于早期的 FCN，U-Net 的架构优势和底层代数设计体现在哪些方面?(        )",
    "options": [
      "在跨层跳跃连接时，采用了通道维度的张量拼接(Concatenation)，而非 FCN 的逐元素相加(Addition)。",
      "采用了完全对称的“收缩路径(提取语义)”与“扩张路径(恢复分辨率)”。",
      "通道拼接操作在数学上无损地保留了未经破坏的原始物理边缘和高频信号。",
      "U-Net 彻底抛弃了所有的卷积层，完全使用多层感知机(MLP)进行推理。"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在生成大模型时代，LoRA(低秩自适应微调)由于其极高性价比成为了工业界的微调标配。关于 LoRA 的工程优势，以下说法正确的有?(        )",
    "options": [
      "不同领域的 LoRA(例如一个是水墨画风 LoRA，一个是高达机甲 LoRA)可以在加载时按照不同的比例合并到同一个基础模型中，实现跨概念融合。",
      "需要训练的参数量通常下降到原模型的 1% 甚至 0.1% 以下，使得消费级单卡(如 24G 显存)微调百亿参数模型成为可能。",
      "LoRA 矩阵被训练完毕后，在工程部署时可以通过线性加法直接合入基础模型的静态权重中，没有任何额外的网络层推理延迟。",
      "LoRA 会自动为模型增加数百个新的卷积层。"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "ResNet中的1x1卷积的功能包括:",
    "options": [
      "调整特征图的通道数",
      "减少参数数量",
      "增强网络学习能力",
      "增加网络深度"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在GAN的训练中，以下哪些策略可能用于提高生成样本的多样性?",
    "options": [
      "使用多个生成器",
      "调整学习率",
      "使用不同的损失函数",
      "引入噪声"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "关于目标检测中常见的几何空间表征与标注格式，以下描述正确的有?(        )",
    "options": [
      "YOLO格式的坐标由于进行了归一化，其数值可以大于1。",
      "YOLO格式采用TXT文件，记录的是相对于图像绝对分辨率归一化后的相对中心点坐标与跨度。",
      "COCO格式基于JSON字典树，记录的是左上角极点以及目标的绝对物理宽和高。",
      "VOC格式采用XML树状结构，记录的是绝对像素坐标系下的极值点。"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GAN相对于其他生成模型的优势可能包括哪些?",
    "options": [
      "训练过程简单直观",
      "能够通过对抗过程提高生成样本的真实性",
      "能够生成高质量的样本",
      "能够学习数据的复杂分布"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "使用GradCAM进行图像分析时，可以:",
    "options": [
      "提高模型的执行速度",
      "减少过拟合问题",
      "评估模型的焦点区域",
      "识别图像中的关键特征"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Faster RCNN算法中，RPN网络生成的候选区域会经过哪些处理?",
    "options": [
      "候选区域的回归",
      "候选区域的分类",
      "候选区域的缩放",
      "候选区域的筛选"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "ResNet的特点包括:",
    "options": [
      "大量使用1x1卷积",
      "使用循环神经网络",
      "残差连接",
      "使用批量归一化"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在深度学习训练过程中，学习率调整策略的选择可能会基于:",
    "options": [
      "训练数据的大小",
      "验证集上的性能表现",
      "模型的复杂度",
      "前期训练的收敛速度"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "关于去噪扩散概率模型(DDPM)，以下有关其核心机制的说法正确的有?(        )",
    "options": [
      "前向过程(Forward Process)是人为设计的一个固定的马尔可夫链加噪过程，无需网络参与学习。",
      "扩散模型的生成过程是瞬间一步到位的，和 GAN 一样快。",
      "只要前向加噪步数T足够大(如 1000 步)，任何一张带有清晰特征的图像最终都会塌陷成纯粹的、无意义的标准高斯白噪声。",
      "逆向过程(Reverse Process)需要利用深度神经网络(通常为 U-Net)来学习，去猜测并在每一个极小的时间步中扣除掉微小的噪声。"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "以下哪些激活函数可能在图像分割的深度学习模型中使用?",
    "options": [
      "Sigmoid",
      "ReLU",
      "Softmax",
      "Leaky ReLU"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在将通用大模型 SAM 引入医疗影像(如脑肿瘤 MRI 分割)进行落地微调时，通常面临哪些客观的工程挑战与最佳实践?(        )",
    "options": [
      "在单卡微调时，为了控制显存爆炸，通常将极其沉重的图像编码器(Image Encoder)参数完全冻结，甚至离线提前提取特征，仅对轻量的掩码解码器(Mask Decoder)开放梯度回传。",
      "矩形框提示(Box Prompt)能够提供严苛的空间约束和尺度限制，极大地降低大模型发散的概率。",
      "训练数据中的 Bounding Box 通常需要加入随机扰动(Jitter)，以模拟临床医生实际操作时的偏差，提升模型鲁棒性。",
      "医疗影像的组织对比度极弱，直接使用单点提示(Point Prompt)容易陷入语义漂移(如模型错误地将整个大脑作为分割对象)。"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "YOLOV1算法在目标检测中，每个网格需要预测哪些信息?",
    "options": [
      "候选区域的数量",
      "边界框的位置",
      "类别概率",
      "边界框的尺寸"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "从“机制层级”来比较，下面哪些说法合理?(        )",
    "options": [
      "通道注意力主要回答“看什么更重要”",
      "混合注意力尝试把“看什么”和“看哪里”串联或融合起来",
      "空间注意力主要回答“看哪里更重要”",
      "SK-Net、SCSA、EMA 已不只是对已有特征简单加权，还进一步涉及感受野选择或全局依赖建模"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "Fast RCNN算法中，哪些改进有助于提高检测速度?",
    "options": [
      "特征图的共享",
      "批归一化技术",
      "候选区域的生成",
      "卷积层的共享"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GAN在医疗图像分析中的应用可能包括以下哪些方面?",
    "options": [
      "病人数据的匿名化",
      "病变区域的自动分割",
      "医学图像的合成",
      "医学图像的增强"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在Unet网络结构中，以下哪些组件有助于改善分割结果?",
    "options": [
      "上采样",
      "编码器和解码器的连接",
      "池化层",
      "跳跃连接"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在Pytorch中实现转置卷积时，需要考虑哪些参数?",
    "options": [
      "步长",
      "偏置项",
      "填充",
      "卷积核大小"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "RCNN算法在目标检测中采用了哪些技术?",
    "options": [
      "卷积神经网络",
      "候选区域的缩放",
      "选择性搜索算法",
      "多尺度特征提取"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  }
];
