#!/usr/bin/env node

const { generateProgressiveHistory } = require('./scripts/simulated-history-generator');
const { assessLeadershipReadiness } = require('./scripts/leadership-assessment');

async function testWithSimulatedData() {
  console.log('Testing leadership assessment with simulated progressive history...');
  
  // Generate progressive history showing improvement
  const simulatedHistory = generateProgressiveHistory(20, {
    leadershipLevel: 'P8',
    experienceLevel: 12
  });
  
  console.log(`Generated ${simulatedHistory.length} interactions with progressive improvement`);
  
  // Test leadership assessment
  const assessment = await assessLeadershipReadiness(simulatedHistory);
  
  console.log('Assessment Results:');
  console.log('Overall Score:', assessment.readinessScore.overall);
  console.log('Leadership Level:', assessment.readinessScore.leadershipLevel);
  console.log('Pathway Score:', assessment.readinessScore.pathwayScore);
  console.log('Red Lines Score:', assessment.readinessScore.redLinesScore);
  console.log('Readiness Category:', assessment.readinessScore.readinessCategory);
  
  console.log('\nCritical Recommendations:');
  const criticalRecs = assessment.recommendations.filter(r => r.priority === 'critical');
  criticalRecs.forEach(rec => {
    console.log(`- ${rec.area}: ${rec.action} (${rec.timeline})`);
  });
  
  console.log('\nHigh Priority Recommendations:');
  const highRecs = assessment.recommendations.filter(r => r.priority === 'high');
  highRecs.forEach(rec => {
    console.log(`- ${rec.area}: ${rec.action} (${rec.timeline})`);
  });
  
  console.log('\nRed Lines Compliance:');
  console.log('Closure Awareness:', assessment.redLinesCompliance.closureAwareness);
  console.log('Fact Driven:', assessment.redLinesCompliance.factDriven);
  console.log('Exhaustive Solving:', assessment.redLinesCompliance.exhaustiveSolving);
  console.log('Overall Compliance:', assessment.redLinesCompliance.overallCompliance);
  
  return assessment;
}

// Run the test
testWithSimulatedData()
  .then(result => {
    console.log('\n✅ Test completed successfully!');
  })
  .catch(error => {
    console.error('❌ Test failed:', error);
  });