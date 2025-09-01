// Jobs2Course Application Configuration - Production Ready

const AppConfig = {
  // Usage limits and tiers
  usage: {
    freeAnalyses: 5,
    resetPeriod: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    maxDutiesLength: 2000,
    maxCommunitySubmissionLength: 1000
  },
  
  // Industry configuration - matches job library structure
  industries: {
    "Business/Marketing": {
      name: 'Business & Marketing',
      icon: '💼', 
      popular: true,
      jobCount: 0 // Will be populated from job library
    },
    "Healthcare": {
      name: 'Healthcare',
      icon: '🏥',
      popular: true,
      jobCount: 0
    },
    education: {
      name: 'Education', 
      icon: '🎓',
      popular: true,
      jobCount: 0
    },
    technology: {
      name: 'Technology',
      icon: '💻',
      popular: false,
      jobCount: 0
    },
    finance: {
      name: 'Finance & Banking',
      icon: '💰',
      popular: false,
      jobCount: 0
    },
    retail: {
      name: 'Retail & Sales',
      icon: '🛍️',
      popular: false,
      jobCount: 0
    },
    other: {
      name: 'Other',
      icon: '🔧',
      popular: false,
      jobCount: 0
    }
  },
  
  // Efficiency gain ranges by level - matches job library
  efficiencyLevels: {
    1: { min: 15, max: 30, default: 20 },
    2: { min: 30, max: 50, default: 40 },
    3: { min: 50, max: 70, default: 60 }
  },
  
  // Monetization configuration
  monetization: {
    coursePrice: 197,
    waitlistUrl: 'https://your-landing-page.com/waitlist',
    courseUrl: 'https://your-course-site.com/live-courses',
    
    // Dynamic messaging based on number of strategies
    messages: {
      low: (count) => `You've unlocked ${count} efficiency improvements! Imagine turning these into modules of a $197 course.`,
      medium: (count) => `Amazing! You've discovered ${count} efficiency strategies. These could form the foundation of a comprehensive professional development course.`,
      high: (count) => `Incredible! You've unlocked ${count} efficiency improvements. This level of expertise could easily justify a premium $197+ course offering.`
    }
  },
  
  // API configuration for fallback (optional)
  api: {
    openaiModel: 'gpt-4',
    maxTokens: 1500,
    temperature: 0.7,
    enabled: false // Set to true when API integration is ready
  },
  
  // Form services configuration
  services: {
    // Community submissions
    formspree: {
      communityForm: 'https://formspree.io/f/YOUR_FORM_ID',
      emailCapture: 'https://formspree.io/f/YOUR_EMAIL_FORM_ID'
    },
    
    // Analytics (placeholder for future integration)
    analytics: {
      googleAnalytics: 'G-XXXXXXXXXX',
      mixpanel: 'YOUR_MIXPANEL_TOKEN'
    }
  },
  
  // UI configuration
  ui: {
    // Animation durations
    animations: {
      modalTransition: 300,
      pageTransition: 400,
      loadingDelay: 2000
    },
    
    // Responsive breakpoints
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1200
    },
    
    // Theme colors (easy to customize)
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6', 
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    }
  },
  
  // Production settings
  environment: {
    isDevelopment: false, // Set to false for production
    apiBaseUrl: 'https://your-domain.com/api',
    logLevel: 'production' // Reduces console logging
  },
  
  // Feature flags for production
  features: {
    enableAuth: true,
    enableCommunitySubmissions: true,
    enableApiFailback: false, // Set to true when OpenAI API is configured
    enableAnalytics: false, // Set to true when analytics are configured
    enableEmailCapture: true,
    showBetaFeatures: false
  },
  
  // Error messages
  messages: {
    errors: {
      generic: 'Something went wrong. Please try again.',
      networkError: 'Network error. Please check your connection.',
      rateLimitExceeded: 'You\'ve reached your free analysis limit. Sign up for unlimited access!',
      invalidInput: 'Please check your input and try again.',
      authRequired: 'Please sign up to continue with unlimited analyses.',
      jobNotFound: 'We couldn\'t find specific strategies for this job. Our AI will generate custom recommendations.',
      analysisTimeout: 'Analysis is taking longer than expected. Please try again.'
    },
    success: {
      analysisComplete: 'Analysis complete! Here are your efficiency strategies.',
      accountCreated: 'Account created successfully! You now have unlimited access.',
      submissionReceived: 'Thank you for your submission! It will be reviewed soon.',
      emailSent: 'Email sent successfully!'
    }
  }
};

// Utility functions for configuration
const ConfigUtils = {
  // Get industry configuration
  getIndustryConfig: (industryKey) => {
    return AppConfig.industries[industryKey] || AppConfig.industries.other;
  },
  
  // Get efficiency level configuration
  getEfficiencyLevel: (level) => {
    return AppConfig.efficiencyLevels[level] || AppConfig.efficiencyLevels[1];
  },
  
  // Generate monetization message based on strategy count
  getMonetizationMessage: (strategyCount) => {
    const { messages } = AppConfig.monetization;
    const total = strategyCount * 3; // 3 levels per strategy
    
    if (total <= 6) return messages.low(total);
    if (total <= 12) return messages.medium(total);
    return messages.high(total);
  },
  
  // Check if feature is enabled
  isFeatureEnabled: (feature) => {
    return AppConfig.features[feature] === true;
  },
  
  // Get API configuration
  getApiConfig: () => {
    return {
      ...AppConfig.api,
      enabled: AppConfig.features.enableApiFailback
    };
  },
  
  // Environment checks
  isDevelopment: () => AppConfig.environment.isDevelopment,
  isProduction: () => !AppConfig.environment.isDevelopment,
  
  // Logging utility (reduced for production)
  log: (message, level = 'info') => {
    if (AppConfig.environment.logLevel === 'development' || level === 'error') {
      console[level](`[Jobs2Course] ${message}`);
    }
  },
  
  // Map HTML form industries to job library keys
  mapIndustryToLibrary: (formIndustry) => {
    const mapping = {
      'business': 'Business/Marketing',
      'healthcare': 'Healthcare',
      'education': 'Education',
      'technology': 'Technology',
      'finance': 'Finance',
      'retail': 'Retail',
      'other': 'Other'
    };
    
    return mapping[formIndustry] || 'Business/Marketing';
  },
  
  // Find job strategies in the library
  findJobStrategies: (industry, jobTitle, jobLibrary) => {
    if (!jobLibrary || !jobLibrary[industry]) {
      ConfigUtils.log(`Industry not found: ${industry}`, 'warn');
      return null;
    }
    
    const industryJobs = jobLibrary[industry];
    
    // Try exact job title match first
    if (industryJobs[jobTitle]) {
      return industryJobs[jobTitle];
    }
    
    // Try generic match
    if (industryJobs['Generic']) {
      return industryJobs['Generic'];
    }
    
    // Try fuzzy matching by looking for similar job titles
    const jobTitleLower = jobTitle.toLowerCase();
    for (const [libJobTitle, strategies] of Object.entries(industryJobs)) {
      if (libJobTitle.toLowerCase().includes(jobTitleLower) || 
          jobTitleLower.includes(libJobTitle.toLowerCase())) {
        return strategies;
      }
    }
    
    return null;
  },
  
  // Extract strategies from job library data
  extractStrategies: (jobData) => {
    if (!jobData) return [];
    
    const strategies = [];
    
    // Convert job library format to application format
    for (const [taskName, levels] of Object.entries(jobData)) {
      if (levels.level1 && levels.level2 && levels.level3) {
        strategies.push({
          task: taskName,
          currentMethod: `Manual ${taskName.toLowerCase().replace(/[&]/g, 'and')}`,
          level1: {
            description: levels.level1.description || `AI tool for ${taskName.toLowerCase()}`,
            setupTime: '15-30 minutes',
            weeklySavings: '2-4 hours',
            gain: levels.level1.efficiencyGain || 20,
            quickStart: levels.level1.quickGuide || 'Implementation steps will be provided.'
          },
          level2: {
            description: levels.level2.description || `Automated system for ${taskName.toLowerCase()}`,
            setupTime: '2-4 hours', 
            weeklySavings: '6-8 hours',
            gain: levels.level2.efficiencyGain || 40,
            quickStart: levels.level2.quickGuide || 'Advanced setup instructions will be provided.'
          },
          level3: {
            description: levels.level3.description || `Complete AI workflow for ${taskName.toLowerCase()}`,
            setupTime: '1-2 weeks',
            weeklySavings: '10-15 hours', 
            gain: levels.level3.efficiencyGain || 60,
            quickStart: levels.level3.quickGuide || 'Professional implementation guidance available.'
          }
        });
      }
    }
    
    // Limit to 4 strategies max for better UX
    return strategies.slice(0, 4);
  }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AppConfig, ConfigUtils };
} else {
  window.AppConfig = AppConfig;
  window.ConfigUtils = ConfigUtils;
}
