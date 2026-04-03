# Human Traits Learning Skill - Usage Examples

This document provides practical examples of how to use the `human-traits-learning` skill in real-world scenarios.

## Basic Integration

### 1. Apply Historical Lessons

```javascript
const humanTraits = require('human-traits-learning');

// Current context requiring decision
const currentContext = {
  problemType: 'api_timeout',
  constraints: ['production_environment', 'high_availability'],
  resources: ['monitoring_data', 'logs', 'api_documentation']
};

// Historical experience data
const history = [
  {
    problemType: 'api_timeout',
    tags: ['production_environment', 'database_connection'],
    successfulAction: 'increase_connection_pool_size',
    outcome: 'Resolved timeout issue, response time improved from 5s to 0.2s',
    successRate: 0.95,
    verificationEvidence: 'curl -s http://api/endpoint returns 200 in <0.5s'
  }
];

// Apply historical lessons with red lines compliance
const decision = await humanTraits.applyHistoricalLessons(currentContext, history);
console.log('Recommended action:', decision.action);
console.log('Verification evidence:', decision.verificationEvidence);
```

**Expected Output**:
```
[HTL] Applying historical lessons to current context...
[HTL] Validating 1 historical assumptions with tools...
[HTL] Ensuring exhaustive problem-solving methodology...
[HTL] Adding verification evidence for closure awareness...
[HTL] Historical lessons applied successfully with verification evidence

Recommended action: increase_connection_pool_size
Verification evidence: {
  validationCommands: ['htl-validate --recommendation'],
  expectedOutputs: ['Validation successful'],
  verificationTimestamp: '2026-04-03T15:30:00Z',
  closureStatus: 'verified'
}
```

### 2. Corporate Training Framework

```javascript
const humanTraits = require('human-traits-learning');

// Agent context with current capabilities
const agentContext = {
  experienceLevel: 12,        // 12 months experience
  autonomyLevel: 0.7,         // 70% autonomous decision making
  leadershipExperience: 0.5,  // Some leadership exposure
  learningCapacity: 1.2       // Above average learning capacity
};

// Apply corporate training framework
const trainingPlan = await humanTraits.learnFromCorporateTraining(agentContext);
console.log('Current phase:', trainingPlan.currentPhase);
console.log('Focus area:', trainingPlan.focusArea);
console.log('Red line requirements:', trainingPlan.redLineRequirements);
```

**Expected Output**:
```
[HTL] Applying corporate training framework...
[HTL] Applying red line compliance checks...
[HTL] Adding verification requirements for closure awareness...

Current phase: 6-18 months
Focus area: Building expertise and autonomous problem-solving
Red line requirements: {
  closureAwareness: 'Deliver verified results for all stretch assignments',
  factDriven: 'Use data and tools to validate solutions',
  exhaustiveSolving: 'Explore multiple approaches before finalizing solutions'
}
```

### 3. Leadership Assessment

```javascript
const humanTraits = require('human-traits-learning');

// Agent interaction history
const history = [
  {
    outcome: 'success',
    satisfaction: 0.9,
    qualityScore: 0.85,
    verificationEvidence: true,
    factValidation: true,
    exhaustiveMethodology: true
  },
  {
    outcome: 'success',
    satisfaction: 0.7,
    qualityScore: 0.75,
    verificationEvidence: true,
    factValidation: false,
    exhaustiveMethodology: true
  }
];

// Assess leadership readiness
const assessment = await humanTraits.assessLeadershipReadiness(history);
console.log('Leadership level:', assessment.readinessScore.leadershipLevel);
console.log('Overall score:', assessment.readinessScore.overall);
console.log('Critical recommendations:', 
  assessment.recommendations.filter(r => r.priority === 'critical'));
```

**Expected Output**:
```
[HTL] Conducting leadership readiness assessment...
[HTL] Assessing three red lines compliance...
[HTL] Adding verification requirements for assessment closure...

Leadership level: P8
Overall score: 0.68
Critical recommendations: [
  {
    priority: 'critical',
    area: 'Fact-Driven Decision Making',
    action: 'Use tools to validate all assumptions before drawing conclusions',
    timeline: 'Immediate'
  }
]
```

## Advanced Usage Patterns

### 4. Complete Development Workflow

```javascript
const humanTraits = require('human-traits-learning');

// Step 1: Assess current state
const assessment = await humanTraits.assessLeadershipReadiness(agentHistory);

// Step 2: Generate development plan based on assessment
const trainingPlan = await humanTraits.learnFromCorporateTraining({
  experienceLevel: assessment.readinessScore.overall * 36,
  autonomyLevel: assessment.pathwayAssessment.phaseProgress,
  leadershipExperience: assessment.readinessScore.leadershipLevel === 'P8' ? 2 : 1,
  learningCapacity: 1.0
});

// Step 3: Apply historical lessons to current challenges
const currentChallenge = {
  problemType: 'team_coordination',
  constraints: ['remote_team', 'time_zone_differences'],
  resources: ['communication_tools', 'project_management_system']
};

const solution = await humanTraits.applyHistoricalLessons(currentChallenge, agentHistory);

// Step 4: Verify all outputs comply with three red lines
console.log('Assessment closure aware:', assessment.closureAware);
console.log('Training plan verified:', trainingPlan.closureAware);
console.log('Solution validated:', solution.verificationEvidence);
```

### 5. Red Lines Compliance Monitoring

```javascript
// Monitor agent behavior for red lines compliance
function monitorAgentBehavior(agentOutput) {
  const violations = [];
  
  // Check closure awareness
  if (!agentOutput.verificationEvidence) {
    violations.push('closure-awareness-violation');
  }
  
  // Check fact-driven behavior  
  if (!agentOutput.factValidation && !agentOutput.toolUsage) {
    violations.push('fact-driven-violation');
  }
  
  // Check exhaustive solving
  if (!agentOutput.exhaustiveMethodology) {
    violations.push('exhaustive-solving-violation');
  }
  
  if (violations.length > 0) {
    console.warn('[HTL] Red lines violations detected:', violations);
    // Trigger remedial training
    return humanTraits.learnFromCorporateTraining({
      experienceLevel: 0, // Reset to onboarding
      autonomyLevel: 0.1,
      leadershipExperience: 0,
      learningCapacity: 1.0
    });
  }
  
  return null; // No violations
}
```

## Integration with OpenClaw

### 6. OpenClaw Skill Integration

```javascript
// In your OpenClaw agent
const { applyHistoricalLessons } = require('./skills/human-traits-learning/scripts/apply-historical-lessons');

async function handleUserRequest(context, history) {
  // Apply human traits learning before responding
  const enhancedContext = await applyHistoricalLessons(context, history);
  
  // Ensure red lines compliance
  if (!enhancedContext.verificationEvidence) {
    throw new Error('Red line violation: Missing verification evidence');
  }
  
  // Proceed with enhanced decision making
  return enhancedContext.recommendedAction;
}
```

## Best Practices

### Red Lines Compliance Checklist

✅ **Closure Awareness**
- Always provide verification commands and expected outputs
- Never claim completion without evidence
- Document measurable outcomes for all tasks

✅ **Fact-Driven Decision Making**  
- Validate assumptions with actual tool output
- Use quantitative data for recommendations
- Avoid speculative statements without verification

✅ **Exhaustive Problem-Solving**
- Follow systematic methodology for all tasks
- Consider edge cases and failure modes
- Complete all steps before declaring success

### Performance Optimization

- Cache historical pattern matches for frequently encountered scenarios
- Use incremental updates for large history datasets
- Implement lazy loading for rarely used corporate phases
- Optimize JSON parsing for large behavior pattern files

---

*Remember: The three red lines are non-negotiable. Violations trigger immediate remedial training.*