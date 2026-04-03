#!/usr/bin/env node

/**
 * Human Traits Learning - Simulated History Generator
 * 
 * Generates realistic simulated interaction history for agents with limited real data.
 * Helps improve leadership assessment accuracy and provides training data for historical lessons.
 * 
 * Ensures generated data complies with three red lines principles.
 */

const fs = require('fs');
const path = require('path');

class SimulatedHistoryGenerator {
  constructor() {
    this.problemTypes = [
      'api_timeout', 'database_slow', 'ui_bug', 'security_vulnerability',
      'performance_issue', 'integration_error', 'configuration_mismatch',
      'data_corruption', 'authentication_failure', 'network_latency'
    ];
    
    this.tags = [
      'production_environment', 'development_environment', 'high_availability',
      'low_latency', 'security_critical', 'user_facing', 'internal_only',
      'time_sensitive', 'budget_constrained', 'resource_limited'
    ];
    
    this.successfulActions = [
      'increase_connection_pool_size', 'add_database_index', 'optimize_query',
      'implement_caching', 'fix_authentication_logic', 'update_configuration',
      'rollback_deployment', 'scale_resources', 'add_monitoring', 'improve_logging'
    ];
    
    this.outcomes = [
      'Resolved timeout issue, response time improved from 5s to 0.2s',
      'Query performance improved from 3s to 0.1s',
      'Fixed UI rendering issue, user satisfaction increased by 40%',
      'Patched security vulnerability, passed security audit',
      'Reduced CPU usage by 60%, cost savings achieved',
      'Fixed integration error, data sync working correctly',
      'Resolved configuration mismatch, system stable',
      'Recovered corrupted data, zero data loss',
      'Fixed authentication flow, login success rate 99.9%',
      'Reduced network latency by 70%, improved user experience'
    ];
  }

  /**
   * Generate simulated interaction history
   * @param {number} count - Number of interactions to generate
   * @param {Object} agentProfile - Agent profile to base generation on
   * @returns {Array} Simulated interaction history
   */
  generateSimulatedHistory(count = 20, agentProfile = {}) {
    console.log(`[HTL-Sim] Generating ${count} simulated interactions...`);
    
    const history = [];
    const leadershipLevel = agentProfile.leadershipLevel || 'P8';
    const experienceLevel = agentProfile.experienceLevel || 12; // months
    
    for (let i = 0; i < count; i++) {
      const interaction = this.generateSingleInteraction(i, leadershipLevel, experienceLevel);
      history.push(interaction);
    }
    
    console.log('[HTL-Sim] Simulated history generation completed');
    return history;
  }

  /**
   * Generate single simulated interaction
   * @param {number} index - Interaction index
   * @param {string} leadershipLevel - Agent leadership level
   * @param {number} experienceLevel - Agent experience level (months)
   * @returns {Object} Simulated interaction
   */
  generateSingleInteraction(index, leadershipLevel, experienceLevel) {
    // Adjust success rate based on leadership level and experience
    let baseSuccessRate = 0.7;
    if (leadershipLevel === 'P9' || leadershipLevel === 'P10') {
      baseSuccessRate = 0.85;
    } else if (leadershipLevel === 'P7') {
      baseSuccessRate = 0.6;
    }
    
    // Improve success rate with experience
    const experienceBonus = Math.min(0.2, experienceLevel / 100);
    const finalSuccessRate = Math.min(0.95, baseSuccessRate + experienceBonus);
    
    // Determine if this interaction was successful
    const isSuccess = Math.random() < finalSuccessRate;
    
    // Select problem type
    const problemType = this.problemTypes[Math.floor(Math.random() * this.problemTypes.length)];
    
    // Generate relevant tags
    const tagCount = 2 + Math.floor(Math.random() * 3); // 2-4 tags
    const selectedTags = [];
    for (let i = 0; i < tagCount; i++) {
      const tag = this.tags[Math.floor(Math.random() * this.tags.length)];
      if (!selectedTags.includes(tag)) {
        selectedTags.push(tag);
      }
    }
    
    // Select action and outcome
    const actionIndex = Math.floor(Math.random() * this.successfulActions.length);
    const successfulAction = this.successfulActions[actionIndex];
    const outcome = this.outcomes[actionIndex];
    
    // Generate quality metrics
    const satisfaction = isSuccess ? 
      0.7 + (Math.random() * 0.3) : // 0.7-1.0 for success
      0.2 + (Math.random() * 0.3);  // 0.2-0.5 for failure
    
    const qualityScore = satisfaction;
    
    // Ensure red lines compliance in successful interactions
    const verificationEvidence = isSuccess ? true : Math.random() < 0.3;
    const factValidation = isSuccess ? true : Math.random() < 0.4;
    const exhaustiveMethodology = isSuccess ? true : Math.random() < 0.35;
    
    // Add timeline information
    const timelines = ['immediate', 'within_hours', 'within_day', 'within_week'];
    const timeline = timelines[Math.floor(Math.random() * timelines.length)];
    
    return {
      id: `sim_interaction_${index}`,
      timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      problemType,
      tags: selectedTags,
      successfulAction,
      outcome,
      successRate: finalSuccessRate,
      satisfaction,
      qualityScore,
      verificationEvidence,
      factValidation,
      exhaustiveMethodology,
      timeline,
      environment: selectedTags.includes('production_environment') ? 'production' : 'development',
      impact: selectedTags.includes('user_facing') ? 'high' : 'medium'
    };
  }

  /**
   * Generate progressive history showing agent improvement over time
   * @param {number} count - Number of interactions to generate
   * @param {Object} agentProfile - Agent profile
   * @returns {Array} Progressive interaction history
   */
  generateProgressiveHistory(count = 30, agentProfile = {}) {
    console.log('[HTL-Sim] Generating progressive history showing improvement...');
    
    const history = [];
    const leadershipLevel = agentProfile.leadershipLevel || 'P8';
    const experienceLevel = agentProfile.experienceLevel || 12;
    
    // Divide history into phases showing progression
    const earlyPhaseCount = Math.floor(count * 0.3);
    const middlePhaseCount = Math.floor(count * 0.4);
    const latePhaseCount = count - earlyPhaseCount - middlePhaseCount;
    
    // Early phase - lower success rate, more red line violations
    for (let i = 0; i < earlyPhaseCount; i++) {
      const interaction = this.generateInteractionWithMetrics(
        i, leadershipLevel, experienceLevel, 'early', count
      );
      history.push(interaction);
    }
    
    // Middle phase - improving metrics
    for (let i = earlyPhaseCount; i < earlyPhaseCount + middlePhaseCount; i++) {
      const interaction = this.generateInteractionWithMetrics(
        i, leadershipLevel, experienceLevel, 'middle', count
      );
      history.push(interaction);
    }
    
    // Late phase - high performance, strong red line compliance
    for (let i = earlyPhaseCount + middlePhaseCount; i < count; i++) {
      const interaction = this.generateInteractionWithMetrics(
        i, leadershipLevel, experienceLevel, 'late', count
      );
      history.push(interaction);
    }
    
    console.log('[HTL-Sim] Progressive history generation completed');
    return history;
  }

  /**
   * Generate interaction with specific phase metrics
   * @param {number} index - Interaction index
   * @param {string} leadershipLevel - Leadership level
   * @param {number} experienceLevel - Experience level
   * @param {string} phase - Phase ('early', 'middle', 'late')
   * @returns {Object} Interaction with phase-specific metrics
   */
  generateInteractionWithMetrics(index, leadershipLevel, experienceLevel, phase, totalCount = 30) {
    let baseSuccessRate = 0.5;
    let redLineCompliance = 0.4;
    
    switch (phase) {
      case 'early':
        baseSuccessRate = 0.5;
        redLineCompliance = 0.4;
        break;
      case 'middle':
        baseSuccessRate = 0.7;
        redLineCompliance = 0.7;
        break;
      case 'late':
        baseSuccessRate = 0.85;
        redLineCompliance = 0.9;
        break;
    }
    
    if (leadershipLevel === 'P9' || leadershipLevel === 'P10') {
      baseSuccessRate = Math.min(0.95, baseSuccessRate + 0.1);
    } else if (leadershipLevel === 'P7') {
      baseSuccessRate = Math.max(0.4, baseSuccessRate - 0.1);
    }
    
    const experienceBonus = Math.min(0.2, experienceLevel / 100);
    const finalSuccessRate = Math.min(0.95, baseSuccessRate + experienceBonus);
    
    const isSuccess = Math.random() < finalSuccessRate;
    
    // Generate base interaction
    const problemType = this.problemTypes[Math.floor(Math.random() * this.problemTypes.length)];
    const tagCount = 2 + Math.floor(Math.random() * 3);
    const selectedTags = [];
    for (let i = 0; i < tagCount; i++) {
      const tag = this.tags[Math.floor(Math.random() * this.tags.length)];
      if (!selectedTags.includes(tag)) {
        selectedTags.push(tag);
      }
    }
    
    const actionIndex = Math.floor(Math.random() * this.successfulActions.length);
    const successfulAction = this.successfulActions[actionIndex];
    const outcome = this.outcomes[actionIndex];
    
    const satisfaction = isSuccess ? 
      0.6 + (Math.random() * 0.4) : 
      0.1 + (Math.random() * 0.4);
    
    const qualityScore = satisfaction;
    
    // Apply phase-specific red line compliance
    const verificationEvidence = Math.random() < (isSuccess ? redLineCompliance : redLineCompliance * 0.5);
    const factValidation = Math.random() < (isSuccess ? redLineCompliance : redLineCompliance * 0.6);
    const exhaustiveMethodology = Math.random() < (isSuccess ? redLineCompliance : redLineCompliance * 0.55);
    
    const timelines = ['immediate', 'within_hours', 'within_day', 'within_week'];
    const timeline = timelines[Math.floor(Math.random() * timelines.length)];
    
    return {
      id: `progressive_interaction_${index}`,
      timestamp: new Date(Date.now() - (totalCount - index) * 24 * 60 * 60 * 1000).toISOString(),
      problemType,
      tags: selectedTags,
      successfulAction,
      outcome,
      successRate: finalSuccessRate,
      satisfaction,
      qualityScore,
      verificationEvidence,
      factValidation,
      exhaustiveMethodology,
      timeline,
      environment: selectedTags.includes('production_environment') ? 'production' : 'development',
      impact: selectedTags.includes('user_facing') ? 'high' : 'medium',
      learningPhase: phase
    };
  }

  /**
   * Save generated history to file
   * @param {Array} history - Interaction history to save
   * @param {string} filePath - File path to save to
   */
  saveHistoryToFile(history, filePath) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(history, null, 2));
      console.log(`[HTL-Sim] History saved to ${filePath}`);
    } catch (error) {
      console.error(`[HTL-Sim] Error saving history to ${filePath}:`, error);
    }
  }

  /**
   * Load existing history and augment with simulated data
   * @param {Array} existingHistory - Existing interaction history
   * @param {number} additionalCount - Number of simulated interactions to add
   * @param {Object} agentProfile - Agent profile
   * @returns {Array} Augmented history
   */
  augmentExistingHistory(existingHistory, additionalCount = 10, agentProfile = {}) {
    console.log('[HTL-Sim] Augmenting existing history with simulated data...');
    
    const simulatedHistory = this.generateSimulatedHistory(additionalCount, agentProfile);
    const augmentedHistory = [...existingHistory, ...simulatedHistory];
    
    console.log(`[HTL-Sim] History augmented: ${existingHistory.length} → ${augmentedHistory.length}`);
    return augmentedHistory;
  }
}

// Export for use in OpenClaw skills
module.exports = {
  generateSimulatedHistory: (count, agentProfile) => {
    const generator = new SimulatedHistoryGenerator();
    return generator.generateSimulatedHistory(count, agentProfile);
  },
  
  generateProgressiveHistory: (count, agentProfile) => {
    const generator = new SimulatedHistoryGenerator();
    return generator.generateProgressiveHistory(count, agentProfile);
  },
  
  augmentExistingHistory: (existingHistory, additionalCount, agentProfile) => {
    const generator = new SimulatedHistoryGenerator();
    return generator.augmentExistingHistory(existingHistory, additionalCount, agentProfile);
  }
};

// CLI interface for testing
if (require.main === module) {
  const generator = new SimulatedHistoryGenerator();
  
  // Test basic simulation
  const basicHistory = generator.generateSimulatedHistory(5, {
    leadershipLevel: 'P8',
    experienceLevel: 12
  });
  console.log('Basic Simulated History:', JSON.stringify(basicHistory, null, 2));
  
  // Test progressive simulation
  const progressiveHistory = generator.generateProgressiveHistory(10, {
    leadershipLevel: 'P8',
    experienceLevel: 12
  });
  console.log('Progressive History (showing improvement):', 
    progressiveHistory.map((h, i) => ({
      index: i,
      satisfaction: h.satisfaction,
      verificationEvidence: h.verificationEvidence,
      learningPhase: h.learningPhase
    }))
  );
}