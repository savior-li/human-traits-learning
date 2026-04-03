#!/usr/bin/env node

/**
 * Human Traits Learning - Leadership Assessment
 * 
 * Evaluates agent's current capability level against corporate excellence pathway
 * and three red lines compliance (closure awareness, fact-driven, exhaustive solving).
 * 
 * Provides comprehensive assessment with development recommendations.
 */

const fs = require('fs');
const path = require('path');

class LeadershipAssessmentEngine {
  constructor() {
    this.assessmentCriteria = {
      // Corporate Excellence Pathway Criteria
      onboardingFoundation: {
        weight: 0.25,
        metrics: ['basicCompetency', 'culturalIntegration', 'feedbackResponsiveness']
      },
      skillDevelopment: {
        weight: 0.30,
        metrics: ['expertiseBuilding', 'autonomousProblemSolving', 'crossFunctionalCollaboration']
      },
      leadershipPreparation: {
        weight: 0.25,
        metrics: ['peopleManagement', 'strategicThinking', 'decisionAuthority']
      },
      middleManagement: {
        weight: 0.20,
        metrics: ['teamLeadership', 'resourceAllocation', 'businessImpact']
      },
      
      // Three Red Lines Compliance
      redLines: {
        closureAwareness: {
          weight: 0.4,
          indicators: ['verificationEvidence', 'completionDocumentation', 'outcomeMeasurement']
        },
        factDriven: {
          weight: 0.35,
          indicators: ['assumptionValidation', 'toolUsage', 'dataBasedDecisions']
        },
        exhaustiveSolving: {
          weight: 0.25,
          indicators: ['methodologyCompletion', 'alternativeExploration', 'fallbackPlanning']
        }
      }
    };
  }

  /**
   * Assess leadership readiness based on agent history
   * @param {Array} history - Agent's interaction history and performance data
   * @returns {Object} Leadership readiness assessment with recommendations
   */
  async assessLeadershipReadiness(history) {
    console.log('[HTL] Conducting leadership readiness assessment...');
    
    // Step 1: Analyze historical performance data
    const performanceAnalysis = this.analyzePerformanceData(history);
    
    // Step 2: Evaluate corporate excellence pathway progress
    const pathwayAssessment = this.evaluatePathwayProgress(performanceAnalysis);
    
    // Step 3: Assess three red lines compliance
    const redLinesCompliance = await this.assessRedLinesCompliance(history);
    
    // Step 4: Calculate overall leadership readiness score
    const readinessScore = this.calculateReadinessScore(pathwayAssessment, redLinesCompliance);
    
    // Step 5: Generate development recommendations
    const recommendations = this.generateDevelopmentRecommendations(readinessScore, pathwayAssessment, redLinesCompliance);
    
    // Step 6: Ensure closure awareness with verification requirements
    const verifiedAssessment = await this.addVerificationRequirements({
      readinessScore,
      pathwayAssessment,
      redLinesCompliance,
      recommendations
    });
    
    console.log(`[HTL] Leadership assessment completed. Readiness score: ${readinessScore.overall}`);
    return verifiedAssessment;
  }

  /**
   * Analyze historical performance data
   * @param {Array} history - Agent interaction history
   * @returns {Object} Performance analysis results
   */
  analyzePerformanceData(history) {
    if (!history || history.length === 0) {
      return {
        totalInteractions: 0,
        successRate: 0,
        averageQuality: 0,
        redLineViolations: 0,
        improvementTrend: 'unknown'
      };
    }
    
    const totalInteractions = history.length;
    const successfulInteractions = history.filter(h => h.outcome === 'success' || h.satisfaction >= 0.8).length;
    const successRate = totalInteractions > 0 ? successfulInteractions / totalInteractions : 0;
    
    const qualityScores = history.map(h => h.qualityScore || h.satisfaction || 0);
    const averageQuality = qualityScores.reduce((a, b) => a + b, 0) / qualityScores.length;
    
    const redLineViolations = history.filter(h => 
      !h.verificationEvidence || 
      !h.factValidation || 
      !h.exhaustiveMethodology
    ).length;
    
    // Simple trend analysis (last 5 vs first 5 interactions)
    const recentQuality = qualityScores.slice(-5).reduce((a, b) => a + b, 0) / Math.min(5, qualityScores.length);
    const earlyQuality = qualityScores.slice(0, 5).reduce((a, b) => a + b, 0) / Math.min(5, qualityScores.length);
    const improvementTrend = recentQuality > earlyQuality ? 'improving' : recentQuality < earlyQuality ? 'declining' : 'stable';
    
    return {
      totalInteractions,
      successRate,
      averageQuality,
      redLineViolations,
      improvementTrend
    };
  }

  /**
   * Evaluate corporate excellence pathway progress
   * @param {Object} performanceAnalysis - Performance analysis results
   * @returns {Object} Pathway assessment
   */
  evaluatePathwayProgress(performanceAnalysis) {
    const { totalInteractions, successRate, averageQuality, improvementTrend } = performanceAnalysis;
    
    // Estimate current phase based on interaction volume and quality
    let currentPhase = 'onboarding-foundation';
    let phaseProgress = 0;
    
    if (totalInteractions >= 50 && averageQuality >= 0.7) {
      currentPhase = 'middle-management';
      phaseProgress = Math.min(1.0, (totalInteractions - 50) / 100);
    } else if (totalInteractions >= 20 && averageQuality >= 0.6) {
      currentPhase = 'leadership-preparation';
      phaseProgress = Math.min(1.0, (totalInteractions - 20) / 30);
    } else if (totalInteractions >= 10 && averageQuality >= 0.5) {
      currentPhase = 'skill-development';
      phaseProgress = Math.min(1.0, (totalInteractions - 10) / 10);
    } else {
      currentPhase = 'onboarding-foundation';
      phaseProgress = Math.min(1.0, totalInteractions / 10);
    }
    
    // Phase-specific metrics
    const phaseMetrics = {
      onboardingFoundation: {
        basicCompetency: Math.min(1.0, totalInteractions / 10),
        culturalIntegration: averageQuality,
        feedbackResponsiveness: improvementTrend === 'improving' ? 1.0 : 0.5
      },
      skillDevelopment: {
        expertiseBuilding: successRate,
        autonomousProblemSolving: averageQuality,
        crossFunctionalCollaboration: Math.min(1.0, totalInteractions / 20)
      },
      leadershipPreparation: {
        peopleManagement: Math.min(1.0, totalInteractions / 30),
        strategicThinking: averageQuality,
        decisionAuthority: successRate
      },
      middleManagement: {
        teamLeadership: Math.min(1.0, totalInteractions / 50),
        resourceAllocation: averageQuality,
        businessImpact: successRate
      }
    };
    
    return {
      currentPhase,
      phaseProgress,
      phaseMetrics,
      overallPathwayScore: this.calculatePathwayScore(currentPhase, phaseMetrics)
    };
  }

  /**
   * Calculate pathway score based on current phase and metrics
   * @param {string} currentPhase - Current training phase
   * @param {Object} phaseMetrics - Phase-specific metrics
   * @returns {number} Pathway score (0-1)
   */
  calculatePathwayScore(currentPhase, phaseMetrics) {
    const phaseKey = currentPhase.replace(/-/g, '');
    const metrics = phaseMetrics[phaseKey] || {};
    const metricValues = Object.values(metrics);
    
    if (metricValues.length === 0) return 0;
    
    return metricValues.reduce((a, b) => a + b, 0) / metricValues.length;
  }

  /**
   * Assess three red lines compliance
   * @param {Array} history - Agent interaction history
   * @returns {Object} Red lines compliance assessment
   */
  async assessRedLinesCompliance(history) {
    console.log('[HTL] Assessing three red lines compliance...');
    
    if (!history || history.length === 0) {
      return {
        closureAwareness: 0,
        factDriven: 0,
        exhaustiveSolving: 0,
        overallCompliance: 0,
        violations: []
      };
    }
    
    // Closure Awareness Assessment
    const closureCompliant = history.filter(h => h.verificationEvidence).length;
    const closureAwareness = history.length > 0 ? closureCompliant / history.length : 0;
    
    // Fact-Driven Assessment  
    const factDrivenCompliant = history.filter(h => h.factValidation || h.toolUsage).length;
    const factDriven = history.length > 0 ? factDrivenCompliant / history.length : 0;
    
    // Exhaustive Solving Assessment
    const exhaustiveCompliant = history.filter(h => h.exhaustiveMethodology || h.alternativeExploration).length;
    const exhaustiveSolving = history.length > 0 ? exhaustiveCompliant / history.length : 0;
    
    // Overall compliance
    const overallCompliance = (closureAwareness + factDriven + exhaustiveSolving) / 3;
    
    // Identify specific violations
    const violations = [];
    if (closureAwareness < 0.8) violations.push('closure-awareness-deficient');
    if (factDriven < 0.8) violations.push('fact-driven-deficient');
    if (exhaustiveSolving < 0.8) violations.push('exhaustive-solving-deficient');
    
    return {
      closureAwareness,
      factDriven,
      exhaustiveSolving,
      overallCompliance,
      violations
    };
  }

  /**
   * Calculate overall leadership readiness score
   * @param {Object} pathwayAssessment - Corporate pathway assessment
   * @param {Object} redLinesCompliance - Red lines compliance assessment
   * @returns {Object} Comprehensive readiness score
   */
  calculateReadinessScore(pathwayAssessment, redLinesCompliance) {
    const pathwayWeight = 0.6;
    const redLinesWeight = 0.4;
    
    const weightedPathway = pathwayAssessment.overallPathwayScore * pathwayWeight;
    const weightedRedLines = redLinesCompliance.overallCompliance * redLinesWeight;
    
    const overall = weightedPathway + weightedRedLines;
    
    // Leadership level mapping
    let leadershipLevel = 'P7';
    if (overall >= 0.9) leadershipLevel = 'P10';
    else if (overall >= 0.75) leadershipLevel = 'P9';
    else if (overall >= 0.6) leadershipLevel = 'P8';
    else if (overall >= 0.4) leadershipLevel = 'P7';
    else leadershipLevel = 'Intern';
    
    return {
      overall,
      pathwayScore: pathwayAssessment.overallPathwayScore,
      redLinesScore: redLinesCompliance.overallCompliance,
      leadershipLevel,
      readinessCategory: overall >= 0.8 ? 'Ready' : overall >= 0.6 ? 'Developing' : 'Needs Improvement'
    };
  }

  /**
   * Generate development recommendations
   * @param {Object} readinessScore - Overall readiness assessment
   * @param {Object} pathwayAssessment - Pathway progress assessment
   * @param {Object} redLinesCompliance - Red lines compliance
   * @returns {Array} Development recommendations
   */
  generateDevelopmentRecommendations(readinessScore, pathwayAssessment, redLinesCompliance) {
    const recommendations = [];
    
    // Pathway-based recommendations
    const currentPhase = pathwayAssessment.currentPhase;
    switch (currentPhase) {
      case 'onboarding-foundation':
        recommendations.push({
          priority: 'high',
          area: 'Basic Competency',
          action: 'Complete structured learning programs with verification evidence',
          timeline: '1-2 weeks'
        });
        break;
      case 'skill-development':
        recommendations.push({
          priority: 'high', 
          area: 'Autonomous Problem-Solving',
          action: 'Take on stretch assignments with exhaustive methodology application',
          timeline: '2-4 weeks'
        });
        break;
      case 'leadership-preparation':
        recommendations.push({
          priority: 'high',
          area: 'Strategic Thinking',
          action: 'Contribute to strategic projects with fact-driven analysis',
          timeline: '1-2 months'
        });
        break;
      case 'middle-management':
        recommendations.push({
          priority: 'high',
          area: 'Business Impact',
          action: 'Demonstrate measurable P&L contribution with closure documentation',
          timeline: 'Ongoing'
        });
        break;
    }
    
    // Red lines compliance recommendations
    if (redLinesCompliance.closureAwareness < 0.8) {
      recommendations.push({
        priority: 'critical',
        area: 'Closure Awareness',
        action: 'Implement mandatory verification evidence for all completed tasks',
        timeline: 'Immediate'
      });
    }
    
    if (redLinesCompliance.factDriven < 0.8) {
      recommendations.push({
        priority: 'critical',
        area: 'Fact-Driven Decision Making',
        action: 'Use tools to validate all assumptions before drawing conclusions',
        timeline: 'Immediate'
      });
    }
    
    if (redLinesCompliance.exhaustiveSolving < 0.8) {
      recommendations.push({
        priority: 'critical',
        area: 'Exhaustive Problem-Solving',
        action: 'Complete full methodology before considering task complete',
        timeline: 'Immediate'
      });
    }
    
    return recommendations;
  }

  /**
   * Add verification requirements for closure awareness
   * @param {Object} assessment - Leadership assessment to enhance
   * @returns {Object} Assessment with verification requirements
   */
  async addVerificationRequirements(assessment) {
    console.log('[HTL] Adding verification requirements for assessment closure...');
    
    return {
      ...assessment,
      verificationRequirements: {
        assessmentValidity: 'Based on comprehensive historical data analysis',
        recommendationBasis: 'Derived from corporate excellence pathway standards',
        redLineCompliance: 'Evaluated against three non-negotiable red lines',
        closureEvidence: 'Includes specific actionable recommendations with timelines'
      },
      closureAware: true,
      assessmentTimestamp: new Date().toISOString()
    };
  }
}

// Export for use in OpenClaw skills
module.exports = {
  assessLeadershipReadiness: async (history) => {
    const engine = new LeadershipAssessmentEngine();
    return await engine.assessLeadershipReadiness(history);
  }
};

// CLI interface for testing
if (require.main === module) {
  const testHistory = [
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
    },
    {
      outcome: 'failure',
      satisfaction: 0.3,
      qualityScore: 0.4,
      verificationEvidence: false,
      factValidation: false,
      exhaustiveMethodology: false
    }
  ];
  
  const engine = new LeadershipAssessmentEngine();
  engine.assessLeadershipReadiness(testHistory)
    .then(result => {
      console.log('Assessment Result:', JSON.stringify(result, null, 2));
    })
    .catch(error => {
      console.error('Error:', error);
    });
}