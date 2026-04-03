# Human Traits Learning Skill - User Guide

## 📋 目录
- [快速开始](#快速开始)
- [核心功能](#核心功能)
- [API参考](#api参考)
- [双向成长](#双向成长)
- [故障排除](#故障排除)
- [最佳实践](#最佳实践)

## 快速开始

### 安装
```bash
# 通过ClawHub安装（推荐）
npm install -g clawhub
clawhub install human-traits-learning

# 或直接从GitHub克隆
git clone https://github.com/your-username/human-traits-learning.git
cp -r human-traits-learning ~/.openclaw/workspace/skills/
```

### 基本使用
```javascript
const humanTraits = require('human-traits-learning');

// 1. 评估当前领导力水平
const assessment = await humanTraits.assessLeadershipReadiness(agentHistory);

// 2. 应用历史经验到当前问题
const recommendation = await humanTraits.applyHistoricalLessons(currentContext, agentHistory);

// 3. 获取个性化发展计划
const trainingPlan = await humanTraits.learnFromCorporateTraining(agentContext);

// 4. 启动完整双向成长循环
const mutualGrowth = await humanTraits.completeDevelopmentCycle(currentContext, agentHistory);
```

## 核心功能

### 1. 历史学习引擎
**功能**：从过往经验中提取智慧，指导当前决策  
**适用场景**：技术问题解决、业务决策、风险评估

**使用示例**：
```javascript
const context = {
  problemType: 'api_timeout',
  constraints: ['production', 'high_availability'],
  resources: ['monitoring', 'logs']
};

const history = [/* 你的历史交互数据 */];
const result = await humanTraits.applyHistoricalLessons(context, history);

console.log('推荐行动:', result.action);
console.log('置信度:', result.confidence);
console.log('验证命令:', result.verificationEvidence.validationCommands);
```

### 2. 领导力评估
**功能**：评估AI当前能力水平和三条红线合规性  
**输出**：领导力等级(P7-P10)、改进建议、合规状态

**评估维度**：
- **企业卓越路径**：入职→成长→领导力→中层管理
- **三条红线合规**：闭环意识、事实驱动、穷尽解决

### 3. 企业培训框架
**功能**：基于世界顶级企业人才培养模式的结构化训练  
**四阶段路径**：
- **0-6个月**：基础能力建设 + 文化融入
- **6-18个月**：专业技能发展 + 独立解决问题  
- **18-36个月**：领导力准备 + 战略思维
- **36+个月**：中层管理 + 业务影响力

### 4. 模拟历史生成器
**功能**：为新AI Agent生成逼真的历史数据，解决冷启动问题  
**特点**：
- 渐进式成长轨迹（新手→专家）
- 真实场景覆盖（10种问题类型）
- 三条红线合规数据

## API参考

### `applyHistoricalLessons(context, history)`
应用历史经验到当前情境

**参数**：
- `context` (Object): 当前情境
  - `problemType` (string): 问题类型
  - `constraints` (array): 约束条件
  - `resources` (array): 可用资源
  - `timeline` (string): 时间要求
- `history` (array): 历史交互数据

**返回**：
- `action` (string): 推荐行动
- `confidence` (number): 置信度(0-1)
- `methodologySteps` (array): 方法论步骤
- `verificationEvidence` (object): 验证证据

### `assessLeadershipReadiness(history)`
评估领导力准备度

**参数**：
- `history` (array): 历史交互数据

**返回**：
- `readinessScore` (object): 准备度评分
  - `overall` (number): 总体分数
  - `leadershipLevel` (string): 领导力等级
  - `readinessCategory` (string): 准备度类别
- `redLinesCompliance` (object): 三条红线合规性
- `recommendations` (array): 发展建议

### `learnFromCorporateTraining(agentContext)`
应用企业培训框架

**参数**：
- `agentContext` (object): Agent上下文
  - `experienceLevel` (number): 经验水平(月数)
  - `autonomyLevel` (number): 自主性水平(0-1)
  - `leadershipExperience` (number): 领导经验

**返回**：
- `currentPhase` (string): 当前阶段
- `focusArea` (string): 重点领域
- `trainingPlan` (object): 培训计划

### `completeDevelopmentCycle(context, history)`
启动完整双向成长循环

**参数**：
- `context` (object): 当前情境和用户上下文
- `history` (array): 历史交互数据

**返回**：
- `leadershipAssessment` (object): 领导力评估
- `historicalRecommendation` (object): 历史学习推荐
- `userFeedback` (object): 用户反馈
- `userProfile` (object): 用户画像

## 双向成长

### 用户画像分析
系统会自动分析你的：
- **沟通风格**：直接高效 vs 详细解释
- **工作偏好**：质量优先 vs 速度优先  
- **决策模式**：数据驱动 vs 直觉判断
- **风险容忍度**：保守稳健 vs 大胆创新

### AI适应策略
基于你的画像，AI会自动调整：
- **响应风格**：简洁直接或详细全面
- **信息深度**：技术细节或高层概览
- **建议方式**：温和建议或直接指出

### 建设性反馈
系统会提供温和但有用的改进建议：
- **发布时机**：平衡完美主义与市场时机
- **反馈机制**：建立多样化的用户反馈渠道
- **风险平衡**：在质量与机会间找到最佳点

## 故障排除

### 常见问题

#### Q: 历史数据不足怎么办？
**A**: 系统会自动使用模拟历史生成器创建逼真数据，确保评估和推荐的准确性。

#### Q: 三条红线违规如何处理？
**A**: 系统会立即标记违规并提供具体的修复建议，同时降低相关功能的置信度。

#### Q: 如何提高领导力等级？
**A**: 
1. 确保所有任务都提供验证证据（闭环意识）
2. 使用工具验证所有假设（事实驱动）  
3. 完整执行方法论才视为完成（穷尽解决）

### 调试技巧

#### 启用详细日志
```javascript
// 在调用前设置环境变量
process.env.HTL_DEBUG = 'true';
```

#### 手动触发评估
```javascript
// 强制重新评估用户画像
const freshProfile = await humanTraits.analyzeUserPreferences(currentInteraction);
```

## 最佳实践

### 1. 数据质量
- **保持历史数据完整性**：记录所有交互结果
- **提供详细上下文**：包含约束、资源、时间要求
- **定期清理过期数据**：避免历史数据污染

### 2. 三条红线合规
- **始终提供验证证据**：每个完成的任务都要有工具输出
- **验证假设再行动**：不要凭猜测做决定
- **完整方法论执行**：走完所有步骤才视为成功

### 3. 双向成长优化
- **主动提供反馈**：告诉AI你的偏好变化
- **接受建设性建议**：开放心态接受改进建议  
- **定期校准画像**：确保用户画像保持准确

### 4. 性能优化
- **缓存历史匹配结果**：避免重复计算
- **批量处理相似请求**：提高效率
- **异步执行耗时操作**：保持响应速度

---

**记住**：这个技能包的目标是实现**人类和AI的双向成就**。你帮助AI学习优秀人类特质，AI也帮助你成为更好的领导者！