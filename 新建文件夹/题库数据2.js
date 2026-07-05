// 自动提取的题库数据（试卷2）
const QUESTION_BANK2 = [
  {
    "type": "单选",
    "question": "LSTM网络是为了解决RNN的哪个问题而设计的?",
    "options": [
      "过拟合",
      "梯度消失",
      "计算复杂度",
      "梯度爆炸"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "卷积神经网络与全连接神经网络相比，卷积层参数量少的主要原因是:(        )",
    "options": [
      "卷积层使用小批量训练",
      "卷积层不需要偏置",
      "卷积层只处理线性关系",
      "卷积核参数被共享，不同位置使用相同权重"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "卷积神经网络(CNN)中，如何提高模型对输入图像中的小物体识别的灵敏度?",
    "options": [
      "减少池化操作",
      "使用大尺寸的卷积核",
      "增加池化层的数量",
      "增加卷积层的深度"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "假设输入特征图为28×28×3(高×宽×通道)，卷积核数量为16，卷积核大小为3×3，且有偏置项，每个卷积核作用于所有输入通道。那么该卷积层的参数总量是多少?(        )",
    "options": [
      "432",
      "16 × 3 × 3 × 3 + 16 = 448",
      "16 × 3 × 3 = 144",
      "448"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "交叉注意力机制常用于:(        )",
    "options": [
      "单模态特征融合",
      "多模态对齐",
      "数据增强",
      "时序建模"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "某团队希望开发一个工业零件缺陷检测系统，但仅收集到2000张标注图像。此时最合理的做法是:(        )",
    "options": [
      "使用在ImageNet上预训练的模型进行微调(Fine-tuning)",
      "增加网络层数提高学习能力",
      "从零开始训练一个大型CNN模型",
      "使用随机初始化参数训练深层网络"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在编码器-解码器架构中，编码器RNN的最终隐藏状态通常作为解码器的?",
    "options": [
      "输出层偏置项",
      "初始隐藏状态",
      "注意力机制的键向量",
      "每一时间步的额外输入"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在PyTorch中，使用预训练模型进行迁移学习时，通常需要冻结哪些层的权重?",
    "options": [
      "前几层",
      "所有卷积层",
      "除了最后一层之外的所有层",
      "最后一层"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "RMSProp算法主要解决了AdaGrad算法的哪个主要问题?",
    "options": [
      "学习率逐渐变大",
      "参数更新不稳定",
      "学习率逐渐变小，可能过早停止学习",
      "早期学习率过高"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "当处理极长序列(如&gt;1000步)时，LSTM仍可能失效。根本原因是?(        )",
    "options": [
      "细胞状态容量有限",
      "输入门无法捕获长期依赖",
      "梯度消失问题未完全解决",
      "遗忘门饱和导致历史信息被强制丢弃"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在全连接网络中，权重更新的计算依赖于什么?",
    "options": [
      "输入数据的数量",
      "损失函数的当前值",
      "损失函数关于权重的梯度",
      "网络的深度"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在使用深度学习进行图像分割任务时，通常采用哪种损失函数来比较预测的像素级标签与真实标签之间的差异?",
    "options": [
      "Dice损失",
      "交叉熵损失",
      "均方误差(MSE)",
      "对比损失"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在深度学习中，哪种损失函数被用于鼓励模型为每个类别产生远离其他类别的特征表示?",
    "options": [
      "交叉熵损失",
      "Hinge损失",
      "均方误差(MSE)",
      "对比损失"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "SGDM算法中的“动量”主要用于解决什么问题?",
    "options": [
      "加快学习速度",
      "减小梯度噪声",
      "防止过拟合",
      "优化非凸函数"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在全连接神经网络中，每个输出神经元都与上一层的所有神经元相连。这意味着:(        )",
    "options": [
      "全连接层只能处理线性关系",
      "全连接层无需激活函数就可以学习非线性模式",
      "每个输出神经元只对部分输入特征敏感",
      "每个输出神经元可以学习输入特征的任意组合"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "感知机模型无法解决的典型问题是:",
    "options": [
      "XOR问题",
      "AND问题",
      "线性可分问题",
      "OR问题"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GRU中没有哪个组件，相比于LSTM?",
    "options": [
      "重置门",
      "忘记门",
      "更新门",
      "输出门"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "卷积神经网络在处理图像数据时的一个关键优点是什么?",
    "options": [
      "可以处理任意大小的图像",
      "模型训练不需要GPU",
      "无需特征工程",
      "适用于所有类型的数据"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG网络相比早期CNN的主要特点是:(        )",
    "options": [
      "使用可分离卷积降低计算量",
      "使用大卷积核(如11×11)减少层数",
      "堆叠多个小卷积核(3×3)增加网络深度",
      "引入残差连接缓解梯度消失"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "RNN梯度消失的本质原因是?(        )",
    "options": [
      "激活函数Sigmoid饱和区梯度接近0",
      "隐藏状态维度不足导致信息压缩",
      "连乘的雅可比矩阵特征值趋于0",
      "长时间步反向传播路径过长"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "多头注意力机制中，每个头的维度通常如何设置?(        )",
    "options": [
      "总维度是单头维度的整数倍",
      "总维度等于单头维度",
      "各头维度独立随机设置",
      "单头维度是总维度的平方根"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Sigmoid激活函数的输出范围是多少?",
    "options": [
      "负无穷到正无穷",
      "0 到 1",
      "-1 到 1",
      "0 到 正无穷"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "迁移学习中，将预训练模型的参数用作新任务起点的过程称为什么?",
    "options": [
      "微调",
      "特征提取",
      "强化学习",
      "在线学习"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在卷积神经网络中，哪种方法通常用于连接展平层和输出层?",
    "options": [
      "归一化",
      "全连接",
      "卷积",
      "池化"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "AlexNet相比于LeNet-5在网络结构上的主要改进是什么?",
    "options": [
      "更多的全连接层",
      "更少的卷积层",
      "使用了ReLU激活函数",
      "引入了循环神经网络结构"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GoogLeNet相较于以往的卷积神经网络模型，其最大的创新是什么?",
    "options": [
      "引入了Inception模块",
      "提出了残差学习思想",
      "使用了ReLU激活函数",
      "使用了批量归一化"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "tanh激活函数相比于Sigmoid激活函数的一个主要优势是什么?",
    "options": [
      "输出范围更广",
      "防止梯度消失",
      "输出是以零为中心的",
      "计算更快"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "tanh激活函数的输出范围是多少?",
    "options": [
      "-1 到 1",
      "0 到 正无穷",
      "负无穷到正无穷",
      "0 到 1"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在全连接神经网络中，输出层通常使用哪个激活函数来进行多分类任务?",
    "options": [
      "Tanh",
      "Sigmoid",
      "Softmax",
      "ReLU"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "注意力机制(Attention)缓解了编码器-解码器中哪一RNN缺陷?",
    "options": [
      "无法处理长序列",
      "教师强制导致的曝光偏差",
      "瓶颈问题:解码器仅依赖单一向量$h_T$",
      "梯度消失"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "循环神经网络在文本摘要任务中的角色是什么?",
    "options": [
      "评估摘要的质量",
      "生成摘要文本",
      "提取关键字",
      "仅用于文本的分类"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Pytorch中，哪个类是用来实现基本RNN的?",
    "options": [
      "nn.RNN",
      "nn.GRU",
      "nn.Sequential",
      "nn.LSTM"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "LSTM的核心思想是什么?",
    "options": [
      "减少参数的数量",
      "增加网络的深度",
      "通过门控制机制控制信息流",
      "使用不同的激活函数"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet中引入的“残差学习”有什么作用?",
    "options": [
      "使得深层网络能够有效训练",
      "减少计算资源消耗",
      "降低模型复杂度",
      "增加模型的非线性"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在卷积神经网络的发展历程中，哪个模型是首次在ImageNet挑战赛中取得显著成功的?",
    "options": [
      "VGGNet",
      "ResNet",
      "AlexNet",
      "LeNet-5"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在卷积神经网络中，为了减少参数数量和计算复杂度，通常使用什么策略?",
    "options": [
      "减少激活函数的使用",
      "使用步幅大于1的卷积",
      "使用更大的卷积核",
      "增加网络的层数"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "感知机的学习算法主要用于:",
    "options": [
      "特征选择",
      "找到能够将训练集正负实例完全正确分开的分离超平面",
      "数据降维",
      "聚类分析"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在NLP任务中，RNN的一个典型应用是什么?",
    "options": [
      "语音识别",
      "图像分割",
      "图像识别",
      "语言模型"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "对于一个小数据集的图像分类任务，使用预训练模型进行迁移学习时，为什么微调比从头开始训练模型更有优势?",
    "options": [
      "避免了梯度消失问题",
      "不需要任何标签数据",
      "需要的训练时间更短",
      "可以实现更复杂的模型"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "当序列存在长期间隔依赖(如括号匹配)，LSTM比基础RNN更有效是因为?",
    "options": [
      "细胞状态的线性循环提供低衰减路径",
      "隐藏状态维度更高",
      "输出门选择性忽略短期干扰",
      "输入门过滤无关信息"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GoogLeNet中的Inception模块的主要目的是什么?",
    "options": [
      "减轻过拟合",
      "捕获不同尺度的信息",
      "增加网络深度",
      "减少计算量"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "若输入图像的尺寸为 100x100，使用一个 7x7 的卷积核，步长为1，不使用填充，输出特征图的尺寸是多少?",
    "options": [
      "96x96",
      "100x100",
      "94x94",
      "98x98"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGG网络使用了哪种统一的卷积核尺寸?",
    "options": [
      "5x5",
      "1x1",
      "7x7",
      "3x3"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在全连接神经网络的测试阶段，为了评估模型的性能，通常使用哪个指标?",
    "options": [
      "权重数量",
      "训练速度",
      "激活函数的选择",
      "准确率"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "SGD(随机梯度下降)算法相对于传统的梯度下降算法的主要优势是什么?",
    "options": [
      "更高的计算效率",
      "总是保证找到全局最优解",
      "不需要任何超参数",
      "更适合处理非线性问题"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "下列关于卷积层堆叠策略的理解正确的是:(        )",
    "options": [
      "VGG通过连续小卷积核堆叠实现大感受野，同时增加非线性表达能力",
      "MobileNet通过大卷积核堆叠减少参数",
      "EfficientNet只使用1层卷积即可达到高准确率",
      "ResNet使用小卷积核堆叠，但不增加深度"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "梯度下降算法在更新参数时，步长是由什么决定的?",
    "options": [
      "模型的复杂度",
      "学习率",
      "数据的分布",
      "梯度的方向"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "EfficientNet的核心设计原则是什么?",
    "options": [
      "使用更深的网络结构",
      "扩展网络的宽度",
      "引入更多的卷积层",
      "均衡网络的深度、宽度和分辨率"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "AlexNet在卷积神经网络发展中的主要贡献是什么?",
    "options": [
      "提出了残差学习思想",
      "引入了深度结构",
      "引入了批量归一化",
      "使用了ReLU激活函数"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "批量归一化(Batch Normalization)在全连接网络中的作用是什么?",
    "options": [
      "减少计算复杂度",
      "增加模型参数",
      "减少网络层数",
      "加速训练过程并提高稳定性"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "VGGNet在网络设计中的一个显著特点是什么?",
    "options": [
      "引入了循环层",
      "采用了单一大小的小卷积核",
      "每层使用了不同大小的卷积核",
      "使用了非常深的网络结构"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "池化层在卷积神经网络中的作用是什么?",
    "options": [
      "增加模型的非线性",
      "提取位置不变特征",
      "增加模型的参数数量",
      "减少图像的分辨率"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在回归问题中，通常使用哪种损失函数来衡量预测值与真实值之间的差异?",
    "options": [
      "交叉熵损失",
      "准确率",
      "均方误差(MSE)",
      "softmax损失"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "某学生训练一个神经网络预测房价，经过多次训练后结果如下:(        )\n训练集误差较高\n验证集误差也较高\n两者误差接近\n以下哪种改进措施最有可能提高模型性能?",
    "options": [
      "减少网络层数和神经元数量",
      "增加Dropout比例，从0.2提高到0.6",
      "适当增加网络容量或延长训练轮数",
      "提前停止训练(Early Stopping)"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Pytorch中使用LSTM进行序列预测时，输入数据的维度通常是什么?",
    "options": [
      "(特征数量, 序列长度)",
      "(批大小, 序列长度, 特征数量)",
      "(批大小, 序列长度)",
      "(序列长度, 特征数量)"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "AlexNet对于解决图像分类问题的影响主要体现在哪个方面?",
    "options": [
      "引入了数据增强技术",
      "增加了模型的深度",
      "减少了模型的参数数量",
      "使用了Dropout技术减轻过拟合"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "批量梯度下降(Batch Gradient Descent)的特点是什么?",
    "options": [
      "不需要计算梯度",
      "每次更新参数时使用所有样本",
      "每次更新参数时只使用一个样本",
      "每次更新参数时随机选择部分样本"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Sigmoid激活函数在神经网络中可能导致的一个主要问题是什么?",
    "options": [
      "梯度消失",
      "权重不稳定",
      "梯度爆炸",
      "过拟合"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "假设使用批量梯度下降训练神经网络，下列说法正确的是:(        )",
    "options": [
      "批量梯度下降每次只使用一个样本计算梯度",
      "批量梯度下降梯度等于该批次样本梯度的平均值",
      "样本梯度与批量梯度一定相等",
      "批量梯度下降无法计算反向传播"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "感知机学习算法的目标是:",
    "options": [
      "最小化训练集上的损失函数",
      "优化模型的泛化能力",
      "最大化训练集上的分类间隔",
      "找到最优的非线性映射"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "迁移学习能够提高目标任务性能的主要原因是:(        )",
    "options": [
      "预训练模型参数数量更少",
      "迁移学习不需要训练过程",
      "预训练模型已经学习到了具有通用性的特征表示",
      "迁移学习能够自动消除过拟合"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "EfficientNet通过复合缩放(Compound Scaling)同时缩放网络宽度、深度和分辨率，其主要优点是:(        )",
    "options": [
      "减少训练数据需求",
      "完全消除过拟合",
      "在保持计算量合理的情况下提升准确率",
      "可以用单个卷积核替代全连接层"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "LSTM的输入门和候选状态的关系可描述为?",
    "options": [
      "控制写入细胞状态的比例",
      "t直接决定的激活值",
      "与联合计算输出",
      "用于重置"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在感知机模型中，激活函数通常不是:",
    "options": [
      "Sigmoid函数",
      "双曲正切函数",
      "ReLU函数",
      "阶跃函数"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在使用PyTorch实现卷积神经网络时，通常在哪个环节使用ReLU函数?",
    "options": [
      "在卷积层之前",
      "在池化层之后",
      "在卷积层之后",
      "在池化层之前"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "当序列存在周期性(如正弦波)，RNN的隐藏状态$h_t$应?",
    "options": [
      "随时间线性增长",
      "保持恒定",
      "隐含相位与幅度信息",
      "在周期边界重置为零"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "关于PyTorch中nn.Module子类的forward方法，以下说法哪项正确?(        )",
    "options": [
      "forward方法只能返回单个Tensor)",
      "必须手动调用forward方法完成前向传播",
      "forward方法只能有一个输入参数",
      "只需直接调用模型对象即可自动调用forward方法"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "当模型的输出是概率分布时，哪种损失函数最适合衡量预测分布与真实分布之间的差异?",
    "options": [
      "余弦相似度",
      "均方误差(MSE)",
      "Hinge损失",
      "交叉熵损失"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "LSTM的候选状态$\\tilde{C}t = \\tanh(W_c \\cdot [h{t-1}, x_t] + b_c)$使用$\\tanh$而非ReLU，是因为?",
    "options": [
      "需生成$[-1,1]$范围内的归一化候选值",
      "与输出门$o_t$激活函数对称",
      "$\\tanh$梯度更大加速训练",
      "ReLU导致神经元死亡"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "RNN在视频处理中的应用通常涉及什么?",
    "options": [
      "单帧图像分类",
      "静态图像的特征提取",
      "图像风格转换",
      "序列到序列的预测"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "某公司开发了一个大型图像识别模型，准确率很高，但无法部署到手机端。最适合采用的技术是:(        )",
    "options": [
      "模型蒸馏，将知识迁移到轻量化模型",
      "增加训练数据量",
      "提高输入图像分辨率",
      "增加模型参数量"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "假设一个卷积层输入特征图大小为64×64×3，如果该层卷积核数量从16增加到64，最可能的结果是:(        )",
    "options": [
      "输出特征图通道数减少，模型更容易欠拟合",
      "模型训练速度一定加快",
      "输出特征图通道数增加，模型表达能力增强，但参数量也增加",
      "输出特征图通道数不变，只增加参数量"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "若输入特征图尺寸为 128x128，使用一个 4x4 的卷积核，步长为4，不使用填充，输出特征图尺寸是多少?",
    "options": [
      "32x32",
      "31x31",
      "33x33",
      "34x34"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet解决了深层网络训练中的哪个主要问题?",
    "options": [
      "欠拟合",
      "梯度消失",
      "梯度爆炸",
      "过拟合"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "展平层在卷积神经网络中的作用是什么?",
    "options": [
      "实现特征的归一化",
      "减少模型的计算复杂度",
      "将二维特征图转换为一维特征向量",
      "增加数据的维度"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在机器翻译任务中，RNN的作用是什么?",
    "options": [
      "解码输出序列",
      "提供静态上下文",
      "直接翻译单词",
      "编码输入序列"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在使用经典CNN模型进行迁移学习时，哪种策略最适合当新数据集与原始数据集相似度较高?",
    "options": [
      "只训练新加入的层",
      "重训练整个模型",
      "冻结前几层，微调后几层",
      "冻结所有卷积层"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "相对位置编码相比绝对位置编码的优势体现在?(        )",
    "options": [
      "降低计算复杂度",
      "支持动态序列长度",
      "更好捕捉相对距离关系",
      "减少内存占用"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在SGD算法中，每次更新模型参数时使用的是什么?",
    "options": [
      "单个数据点的梯度",
      "前一次迭代的梯度",
      "整个数据集的梯度",
      "数据集中随机选择的一个小批量数据的梯度"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在使用预训练ResNet进行迁移学习时，如果目标数据集较小且与原任务较为相似，下列策略最合理的是:(        )",
    "options": [
      "删除所有卷积层，只保留分类层",
      "冻结前面大部分卷积层，仅训练最后几层",
      "重新随机初始化所有层参数",
      "仅训练输入层"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "门控循环单元(GRU)将LSTM的遗忘门与输入门合并为更新门。此举主要动机是?",
    "options": [
      "增强模型长期记忆能力",
      "减少参数数量降低计算开销",
      "解决梯度爆炸问题",
      "简化反向传播过程"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在文本生成中，RNN如何生成下一个字符?",
    "options": [
      "重复使用同一个字符",
      "随机选择字符",
      "根据概率最高的字符",
      "根据前一个字符的ASCII值"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Mamba机制在处理超长序列时效率显著优于Transformer的关键在于:(        )",
    "options": [
      "状态空间模型的线性计算复杂度",
      "设计采用卷积操作替代递归计算",
      "动态调整序列长度降低计算负担.",
      "完全摒弃注意力机制的内存消耗"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "SGD算法中的“随机”一词指的是什么?",
    "options": [
      "模型训练结果的不确定性",
      "学习率的随机变化",
      "随机选择数据点来计算梯度",
      "模型参数初始化的随机性"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "对于二分类问题，深度学习模型中最常用的损失函数是什么?",
    "options": [
      "均方误差(MSE)",
      "KL散度",
      "交叉熵损失",
      "Hinge损失"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "感知机算法的收敛性依赖于以下哪一条件?(        )",
    "options": [
      "数据的线性可分性",
      "使用正则化项",
      "数据集的大小",
      "初始化权重的方式"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Pytorch中，如何初始化RNN、LSTM或GRU的隐藏状态?",
    "options": [
      "使用默认参数",
      "使用随机值",
      "从前一次的状态传递",
      "手动设置为零"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在深度网络中，以下哪种激活函数更容易出现梯度消失问题?(        )",
    "options": [
      "Sigmoid",
      "ELU",
      "Leaky ReLU",
      "ReLU"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "哪个是循环神经网络特别适合处理的数据类型?",
    "options": [
      "不变数据",
      "时间序列数据",
      "单个图片",
      "静态数据"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "LSTM细胞状态的更新依赖四个门控向量。其维度关系是?",
    "options": [
      "仅与同维",
      "均与同维",
      "维度是的两倍",
      "维度与隐藏层无关"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在语音识别中使用RNN，这表明了RNN的哪个能力?",
    "options": [
      "处理序列数据",
      "快速计算",
      "长期依赖问题",
      "处理静态图像"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "AdaGrad算法的主要特点是什么?",
    "options": [
      "对所有参数使用相同的学习率",
      "学习率随时间线性递减",
      "对频繁出现的特征使用较大的学习率",
      "对不频繁出现的特征使用较大的学习率"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "RNN中梯度消失问题的原因是什么?",
    "options": [
      "激活函数的选择",
      "权重初始化不当",
      "过度的参数更新",
      "连续乘积导致的梯度缩小"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Mamba机制相比Transformer的核心创新是:(        )",
    "options": [
      "采用固定窗口限制局部注意力范围",
      "使用多头注意力实现多粒度特征融合",
      "引入选择性状态空间模型与硬件感知设计",
      "通过循环结构实现严格的时间步依赖"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Pytorch中，为了提高循环神经网络的性能，通常使用什么技术?",
    "options": [
      "微调",
      "Dropout",
      "硬编码网络参数",
      "手动优化算法"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在全连接层中，权重矩阵的作用是什么?",
    "options": [
      "用于归一化输入数据",
      "用于激活函数的非线性转换",
      "用于连接不同层的神经元并进行线性变换",
      "用于池化操作"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在PyTorch中，如果要自定义一个包含可学习参数的模型，以下哪种方式是正确的?(        )",
    "options": [
      "在forward方法中用nn.Linear生成一层",
      "在__init__方法中将权重写成self.weight = nn.Parameter(torch.randn(10, 10))",
      "在__init__方法中定义self.weight = torch.randn(10, 10)",
      "在forward方法中定义权重为weight = torch.randn(10, 10)"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "训练RNN时突然出现Loss值为NaN，最可能的原因是?",
    "options": [
      "学习率过低陷入局部最优",
      "Dropout比率过高",
      "梯度爆炸导致权重溢出",
      "激活函数ReLU输出全零"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在AdamW算法中，权重衰减的作用是什么?",
    "options": [
      "防止过拟合",
      "减少梯度的消失问题",
      "增加模型的训练速度",
      "加速梯度的收敛"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在深度网络中，如果使用sigmoid激活函数，反向传播可能出现梯度消失问题，其原因是:(        )",
    "options": [
      "Sigmoid函数输出范围有限，导数较小，导致梯度在多层链式传递中不断缩小",
      "Sigmoid函数参数太多",
      "Sigmoid无法进行前向传播",
      "反向传播只更新偏置项"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "为什么在使用Adam优化器时添加L2正则化会有问题，而AdamW可以有效解决这个问题?",
    "options": [
      "Adam中的学习率调整会削弱L2正则化的效果",
      "Adam优化器会自动忽略L2正则化",
      "Adam优化器不支持L2正则化",
      "L2正则化与Adam的梯度更新规则不兼容"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在迁移学习中，使用预训练的卷积神经网络作为特征提取器时，通常采取什么操作?",
    "options": [
      "更新所有层的权重",
      "增加额外的卷积层",
      "移除并替换网络的最后一层",
      "移除网络的前几层"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在ResNet中，残差块的输出表示为 y=F(x)+x，其中F(x)是卷积变换。这个设计意味着:(        )",
    "options": [
      "残差块减少了输出通道数",
      "x被丢弃，只保留F(x)",
      "F(x)必须为零",
      "网络能学习输入的增量(residual)"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "SGDM中的动量参数通常设置在哪个范围内?",
    "options": [
      "0.5到0.9",
      "0到0.5",
      "0.9到1",
      "0到0.1"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "LSTM遗忘门的核心作用是?(        )",
    "options": [
      "选择性丢弃细胞状态中的历史信息",
      "防止梯度爆炸",
      "过滤当前输入的噪声",
      "重置短期记忆"
    ],
    "answer": 0,
    "explanation": "A\n\n"
  },
  {
    "type": "单选",
    "question": "在Adam算法中，\"momentum\"(动量)和\"scaling\"(缩放)分别对应哪两个参数?",
    "options": [
      "ε和α",
      "β和γ",
      "α和β",
      "β1和β2"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "多头注意力的核心思想是?(        )",
    "options": [
      "减少参数数量",
      "并行化计算",
      "增强局部感知",
      "组合不同子空间特征"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在PyTorch中，nn.RNN与nn.LSTM输出张量output的维度是?",
    "options": [
      "(batch, seq_len, hidden_size)",
      "(hidden_size, seq_len, batch)",
      "(seq_len, batch, num_directions * hidden_size)",
      "(num_layers, seq_len, batch)"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "LSTM遗忘门的核心作用是?",
    "options": [
      "过滤当前输入的噪声",
      "重置短期记忆",
      "选择性丢弃细胞状态$中的历史信息",
      "防止梯度爆炸"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在多分类问题中，若希望模型对每个类别的预测输出一个概率，应使用以下哪种损失函数?",
    "options": [
      "均方误差(MSE)",
      "Hinge损失",
      "交叉熵损失",
      "软间隔损失"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "AdamW算法相较于传统的Adam算法，主要的改进是什么?",
    "options": [
      "引入了权重衰减",
      "改进了学习率调整机制",
      "优化了动量参数的计算",
      "更高效的梯度下降"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "卷积神经网络(CNN)在图像处理中的革命性贡献是什么?",
    "options": [
      "引入了循环神经网络",
      "减少了对前处理的需求",
      "提高了过拟合的风险",
      "增加了模型的计算复杂度"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "卷积层使用的卷积核的作用是什么?",
    "options": [
      "对图像进行分类",
      "实现池化操作",
      "在图像上滑动以提取特征",
      "连接不同的网络层"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "对于具有高度不平衡类别的分类问题，以下哪种损失函数更能有效地处理类别不平衡问题?",
    "options": [
      "均方误差(MSE)",
      "Hinge损失",
      "加权交叉熵损失",
      "余弦相似度"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在卷积神经网络中，卷积层的主要作用是什么?",
    "options": [
      "减少网络参数",
      "增加模型深度",
      "实现模型正则化",
      "提取图像特征"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "RNN的主要问题之一是什么?",
    "options": [
      "梯度消失",
      "过拟合",
      "梯度增强",
      "计算复杂度"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在文本生成任务中，LSTM输出层采用Softmax而非线性回归。这是因为?",
    "options": [
      "Softmax缓解梯度消失",
      "分类任务必须用Softmax",
      "需建模离散词表上的概率分布",
      "线性回归无法处理时序依赖"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "若输入特征图的尺寸为 64x64，使用一个 3x3 的卷积核，步长为2，不使用填充，输出特征图的尺寸是多少?",
    "options": [
      "33x33",
      "34x34",
      "31x31",
      "32x32"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ReLU激活函数相比于Sigmoid和tanh激活函数的一个主要优势是什么?",
    "options": [
      "输出范围更广",
      "输出是以零为中心的",
      "防止梯度爆炸",
      "减轻梯度消失问题"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "模型蒸馏中，教师模型(Teacher)和学生模型(Student)的关系是:(        )",
    "options": [
      "蒸馏后教师模型会被删除",
      "学生模型必须比教师模型更复杂",
      "学生模型规模通常小于教师模型，但学习教师模型的知识",
      "教师模型和学生模型结构必须相同"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在卷积神经网络的训练过程中，哪种技术通常用于提高模型的泛化能力?",
    "options": [
      "减少训练迭代次数",
      "使用更复杂的网络结构",
      "数据增强",
      "增加训练样本的数量"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "当处理极长序列(如&gt;1000步)时，LSTM仍可能失效。根本原因是?",
    "options": [
      "细胞状态$C_t$容量有限",
      "遗忘门饱和导致历史信息被强制丢弃",
      "梯度消失问题未完全解决",
      "输入门无法捕获长期依赖"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "注意力机制中Value向量的作用是?(        )",
    "options": [
      "控制信息流动门限",
      "决定注意力的聚焦方向",
      "提供最终的上下文表示",
      "计算相似度分数"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在时间步$t$预测$y_t$时，若$y_t$仅依赖短期历史(如$t-1$)，RNN可能?",
    "options": [
      "输出层饱和",
      "过度依赖$h_{t-1}$",
      "梯度爆炸",
      "忽略早期时间步信息(信息稀释)"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "ResNet引入残差连接(Residual Connection)的主要目的是:(        )",
    "options": [
      "避免梯度消失/爆炸，使网络可以更深",
      "提高卷积核感受野",
      "降低计算复杂度",
      "降低参数量"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "PyTorch中的哪个函数可以用来加载预训练的模型?",
    "options": [
      "torchvision.models.load_model()",
      "torch.nn.Module()",
      "torch.load()",
      "torchvision.models.resnet18(pretrained=True)"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在训练全连接神经网络时，过拟合可以通过增加哪种数据处理技术来减轻?",
    "options": [
      "主成分分析",
      "特征选择",
      "数据增强",
      "数据标准化"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "循环神经网络如何处理变长输入序列?",
    "options": [
      "使用填充和截断",
      "将所有序列转换为相同长度",
      "仅使用序列的一部分",
      "忽略序列长度的差异"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在全连接神经网络的训练过程中，哪种优化算法常用于参数更新?",
    "options": [
      "协方差",
      "K-最近邻算法",
      "线性回归",
      "梯度下降"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在处理长序列时，LSTM相比普通RNN的优势在于什么?",
    "options": [
      "更高的计算复杂度",
      "更好的梯度流",
      "更快的训练速度",
      "更少的参数"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "GRU相比于LSTM的主要区别是什么?",
    "options": [
      "使用了卷积层",
      "更多的门控制机制",
      "更高的计算复杂度",
      "更少的参数"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "门控机制(LSTM/GRU)的通用设计原则是?",
    "options": [
      "必须包含细胞状态",
      "门控向量维度需加倍",
      "使用Sigmoid输出[0,1]门控值实现软选择",
      "门控权重初始化为零"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "若输入图像的尺寸为 224x224，使用一个 7x7 的卷积核，步长为2，指定填充为3，在PyTorch中，输出特征图的尺寸是多少?",
    "options": [
      "115x115",
      "112x112",
      "114x114",
      "113x113"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "某学生将一个在自然图像数据集上预训练的模型迁移到医学影像分类任务，发现效果提升不明显。最可能的原因是:(        )",
    "options": [
      "网络深度不足",
      "学习率太低",
      "源任务与目标任务差异较大，迁移知识有限",
      "使用了卷积神经网络"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "对于高频采样传感器数据(如ECG)，RNN可能失效。这是因为?",
    "options": [
      "相邻时间步相关性过强导致冗余计算",
      "隐藏状态无法捕获快速变化",
      "输入维度超过隐藏层容量",
      "梯度消失速度加快"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在SGDM中，动量项的作用是什么?",
    "options": [
      "累积过去梯度的影响，平滑更新",
      "直接替换梯度",
      "减少参数的数量",
      "控制学习率的变化"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "相比RNN，GRU的结构更简单，这带来了哪些好处?",
    "options": [
      "更快的训练和更少的过拟合",
      "更多的参数调整",
      "更长的训练时间",
      "更高的复杂度"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "训练RNN时突然出现Loss值为NaN，最可能的原因是?(        )",
    "options": [
      "学习率过低陷入局部最优",
      "激活函数ReLU输出全零",
      "Dropout比率过高",
      "梯度爆炸导致权重溢出"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "序列到序列任务中，束搜索(Beam Search)的核心优势是?",
    "options": [
      "减少解码时间",
      "平衡解码多样性与全局最优性",
      "避免梯度消失",
      "替代教师强制策略"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "LSTM通过细胞状态实现长期记忆的关键设计是?",
    "options": [
      "与维度相同",
      "线性循环连接避免梯度连乘",
      "门控机制引入非线性",
      "输出门$o_t$过滤$C_t$信息"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "基础RNN隐藏状态的计算公式为。其中权重共享的核心意义是?",
    "options": [
      "减少参数量避免过拟合",
      "对任意时间步t采用相同变换，实现时序平移不变性",
      "强制模型学习时间无关特征",
      "简化反向传播计算图"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "反向传播算法的核心思想是:(        )",
    "options": [
      "顺序计算每一层的输出",
      "随机初始化网络权重",
      "利用链式法则计算损失函数对各层权重的梯度",
      "使用卷积核提取特征"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "某学生使用一个较深的神经网络进行图像分类训练，得到如下结果:\n训练集准确率:99.5%，验证集准确率:78.2%。以下哪种措施最有可能有效缓解这一问题?(        )",
    "options": [
      "减少训练数据量，使训练速度更快",
      "继续增加网络层数和参数数量",
      "在训练过程中加入Dropout或L2正则化",
      "提高学习率到原来的10倍"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "双向RNN(BiRNN)中，反向层的作用是?",
    "options": [
      "增强当前时刻t的梯度幅值",
      "减少训练所需时间步",
      "编码t时刻后的未来上下文信息",
      "替代正向层的遗忘机制"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "梯度下降算法主要用于:",
    "options": [
      "减少数据维度",
      "数据预处理",
      "优化机器学习模型的参数",
      "特征选择"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在强化学习策略网络中，RNN适合建模?",
    "options": [
      "静态环境参数",
      "即时奖励函数",
      "部分可观测马尔可夫决策过程(POMDP)",
      "完全可观测状态序列"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "LSTM网络中的“忘记门”是用来做什么的?",
    "options": [
      "增加新信息",
      "分割信息",
      "控制信息的删除",
      "合并信息"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "为什么循环神经网络适合时间序列预测任务?",
    "options": [
      "它们不能处理序列数据",
      "它们记忆能力有限",
      "它们能够处理变长序列",
      "它们对序列中的每个元素做独立处理"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Pytorch中，如果要实现一个多层LSTM，应该如何操作?",
    "options": [
      "使用单层LSTM多次",
      "增加更多的LSTM单元",
      "更改输入大小",
      "设置num_layers参数"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Adam算法的哪个特性使其在稀疏梯度(Sparse Gradients)的场景中表现优异?",
    "options": [
      "梯度归一化",
      "动量累积",
      "无偏估计的校正",
      "自适应学习率"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "MobileNet相比传统CNN，其计算量和参数量大幅减少的关键技术是:(        )",
    "options": [
      "使用可分离卷积(Depthwise Separable Convolution)",
      "使用残差连接",
      "增加卷积层深度",
      "使用大卷积核替代小卷积核"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "残差网络(ResNet)解决了深层网络中什么常见问题?",
    "options": [
      "计算成本高",
      "梯度消失",
      "梯度爆炸",
      "过拟合"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "循环神经网络在哪个领域的应用最为广泛?",
    "options": [
      "图像处理",
      "自然语言处理",
      "机器视觉",
      "游戏开发"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Pytorch中的nn.LSTM构造函数的一个参数是bidirectional，设置为True时意味着什么?",
    "options": [
      "使用双向LSTM",
      "只使用一个门控制",
      "使用单向LSTM",
      "减少训练时间"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在AdaGrad算法中，随着训练的进行，学习率的变化趋势是怎样的?",
    "options": [
      "保持不变",
      "先增加后减少",
      "持续增加",
      "持续减少"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在使用一个 5x5 的卷积核，步长为2，并指定填充为2(在PyTorch中)，若输入特征图的尺寸为 28x28，输出特征图的尺寸是多少?",
    "options": [
      "28x28",
      "15x15",
      "14x14",
      "16x16"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在梯度下降中，如果学习率过大，可能会导致:",
    "options": [
      "过拟合",
      "准确度下降",
      "收敛速度太慢",
      "跳过最优解"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "RNN梯度消失的本质原因是?",
    "options": [
      "长时间步反向传播路径过长",
      "隐藏状态维度不足导致信息压缩",
      "连乘的雅可比矩阵特征值趋于0",
      "激活函数Sigmoid饱和区梯度接近0"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在RMSProp算法中，梯度累积是如何计算的?",
    "options": [
      "累积过去梯度平方的指数衰减平均",
      "累积所有过去梯度的平方",
      "计算过去梯度的绝对值平均",
      "仅考虑当前梯度的平方"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "一个全连接神经网络中某一层输入为100个神经元，输出为50个神经元，且每个神经元都有偏置项。该层的参数总数是多少?(        )",
    "options": [
      "50",
      "5,050",
      "5,000",
      "150"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Transformer解码器中掩码自注意力的主要作用是?(        )",
    "options": [
      "增加模型容量",
      "加速收敛",
      "避免未来信息泄露",
      "防止梯度消失"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "RNN处理异步事件序列(如用户行为日志)时，应额外引入?",
    "options": [
      "梯度截断模块",
      "双向结构捕获未来信息",
      "更高维度的隐藏状态",
      "时间嵌入(Time Embedding)编码事件间隔"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在Pytorch中，循环神经网络的输出包括什么?",
    "options": [
      "最后一个时间步的隐藏状态",
      "每个时间步的输出",
      "最后一个时间步的输出和最后一个时间步的隐藏状态",
      "每个时间步的隐藏状态"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "在迁移学习中，如果目标任务的数据集与预训练模型的数据集非常不同，你应该采取什么策略?",
    "options": [
      "只使用预训练模型的结构，不使用其权重",
      "不使用预训练模型",
      "只使用预训练模型的前几层",
      "微调预训练模型的所有层"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "Sigmoid激活函数的数学公式是什么？",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "全连接神经网络中，每个神经元与前一层的所有神经元相连接。这种结构的主要特点是什么?",
    "options": [
      "特征自动提取",
      "局部连接",
      "参数共享",
      "高度灵活性"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "感知机算法在以下哪种情况下无法收敛?(        )",
    "options": [
      "训练数据线性可分",
      "使用小的学习率",
      "初始化权重为零",
      "训练数据线性不可分"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "感知机(Perceptron)是一种:",
    "options": [
      "非线性模型",
      "线性回归模型",
      "线性分类模型",
      "决策树模型"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "type": "单选",
    "question": "堆叠多层RNN时，高层RNN(如Layer2)的输入是?",
    "options": [
      "低层RNN下一时间步的隐藏状态",
      "随机初始化的向量",
      "输入序列的拼接向量",
      "低层RNN同时间步的隐藏状态"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "使用PyTorch实现基于经典CNN模型的迁移学习时，哪些步骤是必要的?",
    "options": [
      "选择合适的预训练模型",
      "调整模型的输入层以匹配新数据的尺寸",
      "替换原模型的分类层以适应新任务",
      "选择合适的损失函数和优化器"
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
    "question": "关于迁移学习的原理，以下哪些说法是正确的?",
    "options": [
      "它适用于数据量小但任务相关性强的场景",
      "它允许利用预训练模型加速新任务的学习过程",
      "它总是要求新任务与预训练任务完全一致",
      "它可以通过微调来适应新任务"
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
    "question": "在进行模型微调时，通常推荐的做法包括哪些?",
    "options": [
      "替换并重新训练全连接层",
      "降低学习率",
      "使用较大的批量大小",
      "冻结部分卷积层"
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
    "question": "堆叠多层RNN时，高层网络可能学到?",
    "options": [
      "更长程的依赖关系",
      "更抽象的时间模式(如语义节奏)",
      "底层特征的组合表示",
      "更稳定的梯度传播"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "感知机模型的权重更新规则包括哪些因素?",
    "options": [
      "学习率",
      "所有训练数据的平均值",
      "当前的权重值",
      "错误分类点到超平面的距离"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "处理异步事件序列(如用户点击流)，需额外引入?",
    "options": [
      "随机丢弃事件增强鲁棒性",
      "双向卷积层提取局部模式",
      "事件类型嵌入(Type Embedding)",
      "时间嵌入(Time Embedding)编码间隔"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "感知机的输入是什么?",
    "options": [
      "经过标准化处理的特征",
      "原始数据特征",
      "经过非线性变换的特征",
      "加权后的特征"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "以下哪些方法可以评估全连接神经网络的性能?",
    "options": [
      "损失函数值",
      "ROC曲线和AUC值",
      "精确率和召回率",
      "准确率"
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
    "question": "在卷积神经网络中，正则化技术包括哪些?",
    "options": [
      "批量归一化",
      "Dropout",
      "L1正则化",
      "L2正则化"
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
    "question": "RNN在视频处理应用中的优势体现在:",
    "options": [
      "捕捉视频帧之间的动态变化",
      "适应不同长度的视频序列",
      "对时间序列的自然处理",
      "高效的特征提取能力"
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
    "question": "在Pytorch中，初始化循环神经网络的隐藏状态可以使用:",
    "options": [
      "随机张量",
      "预训练的嵌入",
      "自定义函数",
      "零张量"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "对于经典的CNN模型如AlexNet, VGG, GoogLeNet, ResNet和EfficientNet，以下哪些描述是正确的？",
    "options": [
      "它们采用了不同的策略来增加网络深度和提高准确率",
      "它们在设计时考虑了计算效率和模型性能的平衡",
      "它们都可以作为预训练模型用于迁移学习",
      "它们都在图像分类任务上取得了显著成绩"
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
    "question": "LSTM遗忘门的核心功能包括?",
    "options": [
      "控制历史细胞状态的保留比例",
      "防止梯度爆炸",
      "替代输入门的计算",
      "过滤与当前任务无关的长期记忆"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "循环神经网络在音乐生成中的使用表明了它在:",
    "options": [
      "学习数据的长期依赖关系",
      "快速处理大规模数据集",
      "生成新颖音乐片段的能力",
      "处理序列数据的能力"
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
    "question": "循环神经网络(RNN)的应用场景包括:",
    "options": [
      "图像识别",
      "机器翻译",
      "语音识别",
      "文本生成"
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
    "question": "数据增强在卷积神经网络训练中的作用包括哪些?",
    "options": [
      "提高模型的泛化能力",
      "增加数据集的大小",
      "增加模型的复杂度",
      "减少模型训练时间"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "处理序列到序列任务时，循环神经网络通常需要:",
    "options": [
      "编码器-解码器架构",
      "双向RNN结构",
      "注意力机制",
      "数据预处理步骤"
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
    "question": "感知机学习算法的特点包括:",
    "options": [
      "易于实现",
      "适用于非线性可分数据",
      "适用于线性可分数据",
      "可以处理多分类问题"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "循环神经网络在预测未来市场趋势时的优势包括:",
    "options": [
      "捕捉时间序列的动态特性",
      "快速适应市场变化",
      "对长期趋势的预测能力",
      "能够处理高频数据"
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
    "question": "关于RMSProp和Adam优化器，下列说法正确的是(        )",
    "options": [
      "Adam训练时完全不需要设置学习率",
      "RMSProp会根据历史梯度平方调整学习率",
      "Adam结合了Momentum和RMSProp思想",
      "Adam能够为不同参数自适应调整学习率"
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
    "question": "卷积层的作用包括哪些?",
    "options": [
      "非线性增强",
      "特征提取",
      "降维",
      "特征映射"
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
    "question": "以下哪些方法可以在训练卷积神经网络时用来防止过拟合?",
    "options": [
      "使用预训练的网络",
      "正则化",
      "数据增强",
      "早停(Early Stopping)"
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
    "question": "构建多层RNN时，在Pytorch中可以使用的参数或方法包括:",
    "options": [
      "设置num_layers参数",
      "调整dropout参数以防过拟合",
      "使用torch.nn.Sequential自动连接多层",
      "使用torch.nn.ModuleList包含多个RNN层"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在设计卷积神经网络时，哪些因素可以影响模型的性能和效率?",
    "options": [
      "卷积核的大小",
      "激活函数的选择",
      "网络的深度",
      "训练数据的多样性"
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
    "question": "以下哪些是卷积神经网络(CNN)应用的领域?",
    "options": [
      "语音识别",
      "图像分类",
      "自然语言处理",
      "视频分析"
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
    "question": "在使用感知机模型时，以下哪些做法是合理的?",
    "options": [
      "用于解决复杂的非线性问题",
      "预先进行特征归一化",
      "对训练数据进行洗牌",
      "选择合适的学习率"
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
    "question": "在PyTorch中构建卷积神经网络时，通常需要哪些组件?",
    "options": [
      "池化层(MaxPool2d)",
      "激活函数(如ReLU)",
      "全连接层(Linear)",
      "卷积层(Conv2d)"
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
    "question": "在实际深度学习任务中，下列关于优化器选择的说法正确的是(        )",
    "options": [
      "SGD+Momentum在部分大型视觉任务中具有较好的泛化性能",
      "不同任务最优优化器可能不同",
      "Adam一定比SGD获得更高测试集准确率",
      "Adam通常能够较快收敛"
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
    "question": "残差网络(ResNet)在解决深度卷积神经网络训练中遇到的问题上，采用了哪些关键技术?",
    "options": [
      "跳跃连接",
      "深度可分离卷积",
      "全局平均池化",
      "批量归一化"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "LSTM遗忘门的核心功能包括?(        )",
    "options": [
      "替代输入门的计算",
      "过滤与当前任务无关的长期记忆",
      "防止梯度爆炸",
      "控制历史细胞状态的保留比例"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "使用预训练的CNN模型进行迁移学习时，哪些因素需要考虑?",
    "options": [
      "新数据集的大小和质量",
      "新任务的复杂度",
      "预训练模型的复杂度",
      "可用的计算资源"
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
    "question": "解决RNN梯度消失问题的策略包括:",
    "options": [
      "梯度裁剪",
      "使用LSTM或GRU结构",
      "增加网络层数",
      "使用ReLU激活函数"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在卷积神经网络中，使用ReLU激活函数的优点包括哪些?",
    "options": [
      "增加模型的非线性",
      "加速收敛",
      "减少过拟合风险",
      "减轻梯度消失问题"
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
    "question": "教师强制(Teacher Forcing)的缺陷是?",
    "options": [
      "增加训练内存消耗",
      "限制解码器探索能力",
      "推理时暴露偏差(Exposure Bias)",
      "加剧梯度消失问题"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "处理超长序列(&gt;1000步)时，哪些策略有效?",
    "options": [
      "完全弃用RNN改用卷积网络",
      "跳跃连接(Skip Connections)缩短反向传播路径",
      "增大隐藏层维度提升记忆容量",
      "时域分块(Chunking)降低序列长度"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "使用Pytorch构建循环神经网络时，必须执行的步骤包括:",
    "options": [
      "编写前向传播代码",
      "选择合适的优化器",
      "初始化模型参数",
      "定义模型架构"
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
    "question": "RNN和LSTM在处理时间序列数据时的共同优点包括:",
    "options": [
      "能够处理变长序列",
      "自动特征提取",
      "高效的并行计算",
      "学习序列中的长期依赖关系"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "可微分神经计算机(DNC)的创新在于?",
    "options": [
      "完全替代门控循环单元",
      "外部可读写记忆矩阵扩展存储容量",
      "基于内容的寻址机制",
      "消除注意力机制的计算开销"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "使用PyTorch进行迁移学习时，哪些操作是常见的?",
    "options": [
      "冻结预训练模型的部分或全部卷积层",
      "微调预训练模型的所有层",
      "修改模型的输入层以适应新数据的尺寸",
      "替换模型的最后一层"
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
    "question": "与卷积神经网络相比，全连接神经网络具有的特点包括(        )",
    "options": [
      "对任意结构化或非结构化特征向量均可使用",
      "能够直接保留图像的空间结构信息",
      "参数量通常较大",
      "容易发生过拟合"
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
    "question": "在使用Adam优化器训练深度神经网络时，下列说法正确的是(        )",
    "options": [
      "动态调整学习率可以改善训练稳定性",
      "学习率调度有助于提升模型泛化能力",
      "Adam已经是自适应学习率优化器，不需要任何学习率调整",
      "可以配合学习率调度策略使用"
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
    "question": "ResNet模型中使用的关键技术是什么?",
    "options": [
      "Inception模块",
      "批量归一化",
      "动态调整学习率",
      "残差连接"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "关于卷积神经网络的结构，以下哪些描述是正确的?",
    "options": [
      "池化层用于降维和减少计算量",
      "全连接层通常用于分类的最后阶段",
      "卷积层用于特征提取",
      "Dropout层用于减轻过拟合"
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
    "question": "双向RNN(BiRNN)的局限性在于?(        )",
    "options": [
      "参数量翻倍导致训练开销增大",
      "反向层梯度会干扰正向层优化",
      "推理阶段无法访问未来信息，降低实用性",
      "无法处理变长序列"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "迁移学习中学习率设置的核心原则是?(        )",
    "options": [
      "分类头学习率 &gt; 解冻骨干层学习率 &gt; 冻结层学习率(0)",
      "预训练权重越通用(如ImageNet)，骨干学习率应越低",
      "骨干网络学习率始终设为分类头的1/10",
      "使用学习率调度器(如ReduceLROnPlateau)动态调整"
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
    "question": "关于全连接神经网络中的全连接层，下列说法正确的是(        )",
    "options": [
      "当前层每个神经元与前一层所有神经元相连",
      "当输入维度较大时，全连接层容易产生大量参数",
      "全连接层能够学习输入特征之间的复杂组合关系",
      "全连接层的参数量通常比卷积层少"
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
    "question": "LSTM网络中的关键组件包括:",
    "options": [
      "遗忘门",
      "输出门",
      "重置门",
      "输入门"
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
    "question": "关于当前大语言模型(LLM)与Transformer的关系，下列说法正确的是(        )",
    "options": [
      "大模型能力仅来源于参数量增加，与训练数据和算法无关",
      "ChatGPT等大模型主要基于Transformer架构",
      "模型规模扩大后，Transformer仍可通过预训练学习丰富知识",
      "Transformer中的Attention机制是大模型能力的重要基础"
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
    "question": "卷积神经网络(CNN)的训练过程中，哪些因素会影响训练的效率和结果?",
    "options": [
      "优化算法的选择",
      "学习率的大小",
      "初始化方法",
      "批量大小(Batch Size)"
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
    "question": "循环神经网络(RNN)在处理序列数据时面临的挑战包括:",
    "options": [
      "不足拟合",
      "过拟合",
      "梯度爆炸",
      "梯度消失"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "关于位置编码的正确描述包括:(        )",
    "options": [
      "可学习位置编码需要固定序列长度",
      "相对位置编码更擅长捕捉距离关系",
      "绝对位置编码依赖序列绝对位置",
      "旋转位置编码通过复数乘法实现"
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
    "question": "感知机模型的局限性包括:",
    "options": [
      "容易受到异常值的影响",
      "无法解决非线性问题",
      "训练过程可能会很慢",
      "不能处理线性不可分问题"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "下列激活函数及其特点匹配正确的是(        )",
    "options": [
      "ReLU:在负区间梯度为0，可能导致“死神经元”",
      "Sigmoid:输出范围(0,1)，可能导致梯度消失",
      "Leaky ReLU:在负区间保留小梯度，缓解死神经元问题",
      "Tanh:输出范围(-1,1)，中心化可加速收敛"
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
    "question": "使用PyTorch实现卷积神经网络时，哪些步骤是必需的?",
    "options": [
      "定义网络结构",
      "优化模型参数",
      "计算损失",
      "编译模型"
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
    "question": "在卷积神经网络的设计和实现过程中，哪些是关键的考虑因素?",
    "options": [
      "训练策略和技巧",
      "损失函数的选择",
      "网络的深度和宽度",
      "激活函数的选择"
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
    "question": "在优化循环神经网络过程中，有效的策略包括:",
    "options": [
      "使用预训练的嵌入",
      "学习率调整",
      "早停",
      "正则化"
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
    "question": "使用循环神经网络进行文本分类时，有利的特性包括:",
    "options": [
      "能够捕捉上下文信息",
      "低计算资源需求",
      "长期依赖信息的处理",
      "模型的可解释性"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "VGG网络的特点包括哪些?",
    "options": [
      "引入了批量归一化",
      "使用了多尺寸的卷积核",
      "增加网络深度",
      "统一的卷积核尺寸"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "全连接网络训练中使用的优化算法包括哪些?",
    "options": [
      "随机梯度下降(SGD)",
      "线性回归",
      "自适应矩估计(Adam)",
      "动量(Momentum)"
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
    "question": "Pytorch中循环神经网络优化技术包括:",
    "options": [
      "正则化技术",
      "使用Dropout",
      "梯度裁剪",
      "权重初始化方法"
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
    "question": "RNN的应用场景中，以下哪些属于其常见任务?",
    "options": [
      "情感分析",
      "文本摘要",
      "序列预测",
      "图像风格转换"
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
    "question": "模型微调后部署时，哪些操作可减少资源占用?(        )",
    "options": [
      "融合BatchNorm层与卷积层权重",
      "删除领域自适应相关的辅助分支",
      "使用半精度(FP16)导出模型",
      "将全连接层替换为全局平均池化"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在Pytorch中，循环神经网络的实现可以使用的类包括:",
    "options": [
      "torch.nn.RNN",
      "torch.nn.Sequential",
      "torch.nn.GRU",
      "torch.nn.LSTM"
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
    "question": "PyTorch处理变长序列的正确操作是?",
    "options": [
      "按序列长度降序排列批次数据",
      "对短序列补零至最大长度",
      "使用pack_padded_sequence跳过填充位置计算",
      "设置enforce_sorted=False允许乱序"
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
    "question": "卷积神经网络(CNN)对图像分类任务的贡献主要体现在哪些方面?",
    "options": [
      "增加了模型训练的速度",
      "提高了分类的准确性",
      "降低了对计算资源的需求",
      "减少了特征工程的需要"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "循环神经网络在自然语言处理中的应用包括:",
    "options": [
      "图像描述生成",
      "问答系统",
      "文本分类",
      "语言模型训练"
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
    "question": "全连接神经网络中的每一层都执行哪些操作?",
    "options": [
      "权重更新",
      "非线性激活",
      "归一化处理",
      "线性变换"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "多头注意力机制的哪些特性提升了模型性能?(        )",
    "options": [
      "强制各注意力头关注相同模式",
      "减少每个头的计算复杂度",
      "通过组合不同头结果增强表达能力",
      "允许并行计算不同子空间特征"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "实现循环神经网络时，关键的组件包括:",
    "options": [
      "循环层(RNN, LSTM, GRU)",
      "注意力层",
      "全连接输出层",
      "嵌入层"
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
    "question": "LSTM和GRU相比传统RNN的改进之处主要包括:",
    "options": [
      "长期依赖信息的保留",
      "计算效率的提高",
      "参数数量的显著增加",
      "梯度消失问题的缓解"
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
    "question": "相较于RNN/LSTM，Transformer具有的优势包括(        )",
    "options": [
      "不存在梯度消失问题",
      "在长序列上训练效率通常更高",
      "更容易实现并行计算",
      "更容易捕获长距离依赖"
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
    "question": "全连接神经网络的激活函数包括哪些?",
    "options": [
      "ReLU",
      "Tanh",
      "Softmax",
      "Sigmoid"
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
    "question": "在机器翻译任务中，循环神经网络的作用包括:",
    "options": [
      "生成语言模型",
      "编码源语言句子",
      "解码为目标语言",
      "提取关键字"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "LSTM网络设计的目的是为了解决哪些RNN的问题?",
    "options": [
      "梯度消失",
      "序列数据的长期依赖问题",
      "过拟合",
      "梯度爆炸"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "注意力机制(Attention)对编码器-解码器的改进包括?",
    "options": [
      "完全替代RNN结构",
      "动态聚合所有编码器隐藏状态",
      "消除梯度消失问题",
      "解耦解码器对单一上下文向量的依赖"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "GoogLeNet的设计哲学包括哪些创新?",
    "options": [
      "全局平均池化",
      "使用辅助分类器",
      "Inception模块",
      "深度可分离卷积"
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
    "question": "下列说法关于激活函数输出范围及适用性正确的是(        )",
    "options": [
      "ReLU适合隐藏层",
      "Tanh适合隐藏层，尤其是RNN",
      "Softmax适合多分类输出层",
      "Sigmoid适合二分类输出层"
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
    "question": "序列到序列任务中，束搜索(Beam Search)的典型缺陷是?",
    "options": [
      "解码时间复杂度随束宽指数增长",
      "无法处理长序列",
      "训练阶段无法使用",
      "生成结果过于保守(缺乏多样性)"
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
    "question": "循环神经网络处理的数据类型不仅限于:",
    "options": [
      "语音信号",
      "时间序列数据",
      "静态图像",
      "文本数据"
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
    "question": "全连接网络的输入数据预处理步骤通常包括哪些?",
    "options": [
      "数据增强",
      "归一化",
      "特征选择",
      "标准化"
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
    "question": "循环神经网络在计算机视觉任务中的应用可能包括:",
    "options": [
      "图像分类",
      "视频帧预测",
      "动作识别",
      "图像到文本的描述生成"
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
    "question": "关于Transformer中的位置编码(Positional Encoding)，正确的是(        )",
    "options": [
      "用于补充序列顺序信息",
      "正弦位置编码能够外推到更长序列",
      "如果移除位置编码，Transformer将难以区分词序",
      "位置编码可以采用可学习参数"
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
    "question": "在深度学习模型的训练过程中，哪些策略有助于提高模型的泛化能力?",
    "options": [
      "数据增强",
      "正则化技术，如L1/L2正则化",
      "使用预训练模型",
      "早停法(Early Stopping)"
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
    "question": "LSTM和GRU的共同优势包括:",
    "options": [
      "对梯度消失问题的改善",
      "更好地捕捉长期依赖",
      "更快的训练速度相比传统RNN",
      "更少的参数相比传统RNN"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在全连接神经网络中，权重初始化的方法包括哪些?",
    "options": [
      "小随机数初始化",
      "He初始化",
      "零初始化",
      "Xavier/Glorot初始化"
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
    "question": "在全连接神经网络设计中，可以采用哪些策略来防止过拟合?",
    "options": [
      "使用更大的网络结构",
      "引入dropout技术",
      "增加更多的训练数据",
      "应用正则化技术"
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
    "question": "梯度截断(Gradient Clipping)的应用场景是?",
    "options": [
      "加速模型收敛",
      "替代L2权重正则化",
      "缓解梯度消失问题",
      "防止梯度爆炸导致数值溢出"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "构建用于情感分析的循环神经网络模型时，可能使用的层包括:",
    "options": [
      "卷积层",
      "嵌入层",
      "LSTM或GRU层",
      "全连接层"
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
    "question": "关于学习率(Learning Rate)和优化器，下列说法正确的是(        )",
    "options": [
      "学习率过小可能导致收敛速度过慢",
      "学习率调度(Learning Rate Scheduler)可以动态调整学习率",
      "学习率过大可能导致训练过程震荡甚至发散",
      "使用Adam后学习率设置完全不重要"
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
    "question": "在全连接网络中，哪些层次的特征表示最为丰富?",
    "options": [
      "所有层",
      "输出层",
      "输入层",
      "隐藏层"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "AlexNet相对于早期CNN模型的创新点包括哪些?",
    "options": [
      "深层网络结构",
      "ReLU激活函数",
      "最大池化",
      "Dropout技术"
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
    "question": "在卷积神经网络中，使用空洞卷积(Dilated Convolution)的主要作用有哪些?(        )",
    "options": [
      "减少模型参数数量",
      "增加感受野",
      "保持特征图的空间分辨率",
      "提高模型的非线性表达能力"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在深度学习中，哪些技术被用来提高卷积神经网络的训练效率?",
    "options": [
      "梯度裁剪",
      "权重衰减",
      "动量优化",
      "学习率衰减"
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
    "question": "使用RNN进行语言模型训练时，提高模型性能的方法包括:",
    "options": [
      "采用更深的网络结构",
      "增加训练数据",
      "使用Dropout减少过拟合",
      "梯度裁剪防止梯度爆炸"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在解决一个新的图像分类任务时，使用预训练的CNN模型有哪些优势?",
    "options": [
      "减少所需的标注数据量",
      "减少过拟合的风险",
      "提高最终模型的准确率",
      "加速训练过程"
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
    "question": "双向RNN(BiRNN)的局限性在于?",
    "options": [
      "反向层梯度会干扰正向层优化",
      "推理阶段无法访问未来信息，降低实用性",
      "无法处理变长序列",
      "参数量翻倍导致训练开销增大"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "在PyTorch中，哪些层或技术常用于构建卷积神经网络?",
    "options": [
      "MaxPool2d",
      "Conv2d",
      "ReLU",
      "BatchNorm2d"
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
    "question": "RNN如何处理变长输入序列的问题?",
    "options": [
      "采用特殊的嵌入层",
      "使用填充(padding)",
      "使用截断(truncation)",
      "动态调整序列长度"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "池化层在卷积神经网络中的主要功能是什么?",
    "options": [
      "提高网络的非线性",
      "增强模型对旋转和平移的不变性",
      "实现特征的规范化",
      "减少参数数量和计算量"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": ""
  },
  {
    "type": "多选",
    "question": "对于迁移学习的分类，哪些描述是准确的?",
    "options": [
      "在微调中，通常会调整整个网络的参数",
      "在特征提取中，通常冻结除了最后几层之外的所有层",
      "特征提取是迁移学习中的一种方法",
      "微调是另一种迁移学习方法"
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
    "question": "在卷积神经网络中，使用全局平均池化(Global Average Pooling)的主要目的有哪些?",
    "options": [
      "提高模型的非线性表达能力",
      "防止过拟合",
      "减少模型参数数量",
      "替代全连接层"
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
    "question": "GRU相比LSTM的简化设计包括?",
    "options": [
      "候选状态直接参与门控计算",
      "移除细胞状态，仅保留隐藏状态",
      "合并输入门与遗忘门为更新门",
      "输出门改为线性激活"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "请介绍词嵌人的基本实现原理。",
    "options": [],
    "answer": "",
    "explanation": "词嵌入（Word Embedding）的基本实现原理是将词语表示为高维空间中的密集向量，这些向量能够捕捉词之间的语义和语法关系。实现词嵌入主要通过以下两种方法： \n \n预测模型：基于上下文预测当前词或基于当前词预测上下文。Word2Vec的两种架构——Skip-Gram和CBOW——就是此类方法的例子。Skip-Gram模型通过当前词预测周围的上下文词，而CBOW模型则通过上下文词预测当前词。 \n \n计数模型：构建词与上下文的共现矩阵，然后使用某种形式的降维技术（如奇异值分解SVD）来减少每个词向量的维度，保留最重要的信息。GloVe（Global Vectors for Word Representation）模型结合了这两种方法的优点，通过对词对的共现矩阵进行因式分解来训练词向量。 \n"
  },
  {
    "type": "简答",
    "question": "在领域自适应中，固定骨干网络的BatchNorm统计量为源域数据计算的值，有助于减轻目标域分布偏移的影响。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "请简述梯度累加训练方法的基本原理。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "什么是过拟合问题？如何解决？",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "对于下面定义的张量 x 以及卷积层 convl、conv2 和 conv3,在将 x 输人这 3 个卷积层后，分别得到张量 y1、y2 和 y3。 请问 yl、y2 和 y3 的形状分别是什么？ 请给出计算过程。\nconvl=nn.Conv2d(4,16,3)\nconv2=nn.Conv2d(4,16,(3,3))\nconv3=nn.Conv2d(4,16,5,2)\nx= torch.randn(128,4,224,224)\nyl=convl(x)\ny2=conv2(x)\ny3=conv3(x）",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "什么是循环神经网络",
    "options": [],
    "answer": "",
    "explanation": "循环神经网络（RNN）是一类用于处理序列数据的神经网络，它通过在网络的隐藏层引入循环，使得网络能够保持对先前信息的记忆，并利用这种记忆来影响当前及未来的决策。RNN特别适用于那些输入数据与时间顺序强相关的任务。 \n \nRNN适用的领域包括但不限于： \n- 自然语言处理（NLP），如文本生成、机器翻译、情感分析。 \n- 语音识别和语音合成。 \n- 时间序列预测，如股票价格预测、天气预测。 \n- 视频处理，如视频帧间关系建模。 \n"
  },
  {
    "type": "简答",
    "question": "简述感知器和神经网络的区别与联系",
    "options": [],
    "answer": "",
    "explanation": "区别"
  },
  {
    "type": "简答",
    "question": "请简述模型迁移和微调的区别与联系。",
    "options": [],
    "answer": "",
    "explanation": "模型迁移和微调是深度学习中优化模型性能的两种相关技术。 \n \n 模型迁移"
  },
  {
    "type": "简答",
    "question": "请简述卷积神经网络的发展过程。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "简述Transformer模型的核心机制及优点。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "解释过拟合在深度神经网络中的表现，并提出综合解决方案。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "学习率衰减在网络模型训练中有何作用？",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "简述卷积操作和池化操作的作用",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "分析迁移学习在小样本任务中的优势，并结合模型蒸馏提出适合边缘设备部署的方案。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "当目标域数据与ImageNet分布差异极大时，使用更强的数据增强(如RandAugment)必然提升微调效果。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "为何使用PyTorch框架开发深度神经网络程序？它有何优点？",
    "options": [],
    "answer": "",
    "explanation": " \n 直观的界面"
  },
  {
    "type": "简答",
    "question": "请简要说明卷积神经网络模型迁移的基本原理",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "在",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "请简述基于梯度方法求目标函数最小值的基本原理",
    "options": [],
    "answer": "",
    "explanation": "基于梯度的方法求目标函数最小值的基本原理是利用目标函数的梯度（或导数）来指导搜索最小值的过程。梯度是一个向量，指向函数增长最快的方向，因此反梯度（梯度的相反方向）指向的是函数减少最快的方向。以下是基本步骤："
  },
  {
    "type": "简答",
    "question": "双向RNN在实时预测任务(如在线翻译)中可直接使用反向层编码未来信息。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "损失函数主要有哪些？它们分别适用于解决哪类问题？",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "常见的",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "请描述使用PyTorch训练一个自定义模型的流程。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "简述反向传播算法的原理及梯度计算流程。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "当使用交叉熵损失时，若某样本的真实标签为[0,1,0]，模型输出为[0.1,0.7,0.2]，计算该样本的损失值并推导梯度传播方向。",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "请简要描述反向传播算法的工作原理",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "type": "简答",
    "question": "下列代码定义了一个神经网络类，请问在该类实例化后得到的网络模型中包含多少个参数？请给出计算过程。\nPython",
    "options": [],
    "answer": "",
    "explanation": "conv1层： \n \n卷积层的参数数量由公式((filter_size^2 * input_channels) + 1) * output_channels计算，+1是因为偏置项。 \n对于conv1，有((3*3*3) + 1) * 128 = (27 + 1) * 128 = 28 * 128 = 3584个参数。 \nconv2层： \n \n类似地，conv2的参数数量为((7*7*128) + 1) * 32 = (6272 + 1) * 32 = 6273 * 32 = 200736个参数。 \nconv3层： \n \nconv3的参数数量为((3*3*32) + 1) * 32 = (288 + 1) * 32 = 289 * 32 = 9248个参数。 \nfc1层： \n \n全连接层的参数数量由公式(input_features + 1) * output_features计算。 \n对于fc1，输入特征数为294912，因此参数数量为(294912 + 1) * 128 = 294913 * 128 = 37748864个参数。 \nfc2层： \n \n对于fc2，参数数量为(128 + 1) * 6 = 129 * 6 = 774个参数。 \n总参数数量为3584 + 200736 + 9248 + 37748864 + 774 = 37841206个参数。 \n"
  },
  {
    "type": "简答",
    "question": "对输人",
    "options": [],
    "answer": "",
    "explanation": "在使用PyTorch框架时，输入到LSTM模型的张量需要满足以下要求： \n \n- 三维张量：形状为(seq_len, batch, input_size)，其中： \n&nbsp; &nbsp; - seq_len是序列的长度，即每个输入序列中元素的数量。 \n&nbsp; &nbsp; - batch是批次大小，即一次处理的序列数量。 \n&nbsp; &nbsp; - input_size是输入特征的维度，即每个时间步的输入向量的大小。 \n \n- 数据类型：通常应为浮点数类型，如torch.float32。 \n \n- 批次首位（Batch First）：可选地，PyTorch的LSTM允许通过batch_first=True参数使得输入张量的形状为(batch, seq_len, input_size)，这样批次大小会作为第一维，对于某些应用来说这样更直观。 \n"
  },
  {
    "type": "简答",
    "question": "什么是有监督学习和无监督学习？它们有何区别？",
    "options": [],
    "answer": "",
    "explanation": "有监督学习和无监督学习是机器学习中的两种主要类型，它们在数据和学习目标上有显著的区别。"
  },
  {
    "type": "简答",
    "question": "知识蒸馏中，高温参数(temperature)仅用于软化教师模型输出分布，对学生模型的预测结果无直接影响。",
    "options": [],
    "answer": "",
    "explanation": ""
  }
];
