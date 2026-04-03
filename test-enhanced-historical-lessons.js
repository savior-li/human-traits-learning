#!/usr/bin/env node

const { generateProgressiveHistory } = require('./scripts/simulated-history-generator');
const { applyHistoricalLessons } = require('./scripts/enhanced-historical-lessons');

async function testEnhancedHistoricalLessons() {
  console.log('Testing enhanced historical lessons with simulated data...');
  
  // Generate rich historical data
  const simulatedHistory = generateProgressiveHistory(30, {
    leadershipLevel: 'P8',
    experienceLevel: 18
  });
  
  console.log(`Generated ${simulatedHistory.length} interactions for testing`);
  
  // Test context similar to historical data
  const testContext = {
    problemType: 'api_timeout',
    constraints: ['production_environment', 'high_availability', 'time_sensitive'],
    resources: ['monitoring_data', 'logs', 'api_documentation'],
    timeline: 'immediate',
    environment: 'production',
    impact: 'high'
  };
  
  // Apply enhanced historical lessons
  const result = await applyHistoricalLessons(testContext, simulatedHistory);
  
  console.log('Enhanced Historical Lessons Result:');
  console.log('Recommended Action:', result.action);
  console.log('Confidence:', result.confidence);
  console.log('Expected Outcome:', result.expectedOutcome);
  console.log('Methodology Steps Count:', result.methodologySteps.length);
  console.log('Alternative Approaches Count:', result.alternativeApproaches.length);
  console.log('Failure Modes Analyzed:', result.failureModeAnalysis.length);
  console.log('Verification Commands:', result.verificationEvidence.validationCommands);
  console.log('Closure Status:', result.verificationEvidence.closureStatus);
  
  // Verify red lines compliance
  console.log('\nRed Lines Compliance Check:');
  console.log('Closure Awareness:', !!result.verificationEvidence);
  console.log('Fact Driven:', result.methodologySteps.length >= 5);
  console.log('Exhaustive Solving:', result.exhaustiveValidation);
  
  return result;
}

// Run the test
testEnhancedHistoricalLessons()
  .then(result => {
    console.log('\n✅ Enhanced historical lessons test completed successfully!');
  })
  .catch(error => {
    console.error('❌ Enhanced historical lessons test failed:', error);
  });