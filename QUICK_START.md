# Human Traits Learning Skill - Quick Start

## 🚀 5分钟快速上手

### 1. 安装技能包
```bash
# 方法1: 通过ClawHub安装（推荐）
npm install -g clawhub
clawhub install human-traits-learning

# 方法2: 直接克隆
git clone https://github.com/your-username/human-traits-learning.git
cp -r human-traits-learning ~/.openclaw/workspace/skills/
```

### 2. 基本使用示例

#### 简单历史学习
```javascript
const { applyHistoricalLessons } = require('human-traits-learning');

const context = {
  problemType: 'api_timeout',
  constraints: ['production', 'high_availability']
};

const history = [/* 你的历史数据 */];

const result = await applyHistoricalLessons(context, history);
console.log('推荐行动:', result.action);
console.log('验证命令:', result.verificationEvidence.validationCommands);
```

#### 领导力评估
```javascript
const { assessLeadershipReadiness } = require('human-traits-learning');

const assessment = await assessLeadershipReadiness(agentHistory);
console.log('领导力等级:', assessment.readinessScore.leadershipLevel);
console.log('改进建议:', assessment.recommendations);
```

#### 完整双向成长
```javascript
const { completeDevelopmentCycle } = require('human-traits-learning');

const result = await completeDevelopmentCycle(currentContext, agentHistory);
// 自动分析用户偏好 + 提供AI建议 + 双向反馈
```

### 3. 三条红线合规检查

确保你的AI行为符合高绩效文化标准：

✅ **闭环意识**: 所有任务完成必须提供验证证据  
✅ **事实驱动**: 所有决策必须基于工具验证的数据  
✅ **穷尽解决**: 必须走完完整方法论才视为完成

### 4. 常见问题解决

#### Q: 没有历史数据怎么办？
**A**: 技能包会自动使用模拟历史生成器创建逼真数据

#### Q: 如何提高领导力等级？
**A**: 
1. 确保每个任务都有验证证据
2. 使用工具验证所有假设  
3. 完整执行8步方法论

#### Q: 如何获得个性化服务？
**A**: 系统会自动分析你的交互模式并调整响应风格

## 📊 核心功能速查

| 功能 | API | 适用场景 |
|------|-----|----------|
| 历史学习 | `applyHistoricalLessons()` | 技术问题解决、决策支持 |
| 领导力评估 | `assessLeadershipReadiness()` | 能力评估、发展建议 |
| 企业培训 | `learnFromCorporateTraining()` | 技能发展、职业规划 |
| 双向成长 | `completeDevelopmentCycle()` | 全面协作、相互成就 |

## 🔧 调试技巧

### 启用详细日志
```bash
export HTL_DEBUG=true
node your-application.js
```

### 单独测试组件
```bash
# 测试历史学习引擎
node scripts/enhanced-historical-lessons.js

# 测试双向成长系统  
node scripts/integrated-mutual-growth.js
```

## 🎯 下一步行动

1. **集成到你的AI Agent**中
2. **开始记录交互历史**以获得更好效果
3. **查看USER_GUIDE.md**获取详细使用说明
4. **查看DEVELOPER_GUIDE.md**了解扩展开发

---

**记住**：这个技能包的目标是实现**人类和AI的双向成就**！