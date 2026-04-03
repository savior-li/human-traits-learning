#!/usr/bin/env node

/**
 * Human Traits Learning - Internationalization Manager
 * 
 * Manages multilingual support for the Human Traits Learning skill.
 * Supports Chinese (zh), English (en), Spanish (es), and Arabic (ar).
 * 
 * Implements automatic language detection and seamless localization.
 */

const fs = require('fs');
const path = require('path');

class I18nManager {
  constructor() {
    this.supportedLanguages = ['zh', 'en', 'es', 'ar'];
    this.defaultLanguage = 'en';
    this.currentLanguage = this.detectLanguage();
    
    // Load message catalogs
    this.messageCatalogs = {};
    this.loadMessageCatalogs();
  }

  /**
   * Detect user's preferred language
   * @returns {string} Detected language code
   */
  detectLanguage() {
    // Check environment variables first
    const envLang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL;
    if (envLang) {
      const langCode = envLang.split('.')[0].split('_')[0].toLowerCase();
      if (this.supportedLanguages.includes(langCode)) {
        return langCode;
      }
    }
    
    // Check system locale (Node.js)
    const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    if (systemLocale) {
      const langCode = systemLocale.split('-')[0].toLowerCase();
      if (this.supportedLanguages.includes(langCode)) {
        return langCode;
      }
    }
    
    // Default to English
    return this.defaultLanguage;
  }

  /**
   * Load all message catalogs
   */
  loadMessageCatalogs() {
    this.supportedLanguages.forEach(lang => {
      try {
        const messagesPath = path.join(__dirname, '..', 'i18n', lang, 'messages.json');
        if (fs.existsSync(messagesPath)) {
          this.messageCatalogs[lang] = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));
        } else {
          // Create empty catalog if file doesn't exist
          this.messageCatalogs[lang] = {};
        }
      } catch (error) {
        console.warn(`[I18n] Failed to load messages for ${lang}:`, error.message);
        this.messageCatalogs[lang] = {};
      }
    });
  }

  /**
   * Set current language
   * @param {string} language - Language code
   */
  setLanguage(language) {
    if (this.supportedLanguages.includes(language)) {
      this.currentLanguage = language;
    } else {
      console.warn(`[I18n] Unsupported language: ${language}, defaulting to ${this.defaultLanguage}`);
      this.currentLanguage = this.defaultLanguage;
    }
  }

  /**
   * Get translated message
   * @param {string} key - Message key
   * @param {Object} params - Message parameters
   * @param {string} language - Optional language override
   * @returns {string} Translated message
   */
  t(key, params = {}, language = null) {
    const lang = language || this.currentLanguage;
    const catalog = this.messageCatalogs[lang] || this.messageCatalogs[this.defaultLanguage];
    
    let message = catalog[key] || key; // Fallback to key if not found
    
    // Replace parameters
    if (params) {
      Object.keys(params).forEach(paramKey => {
        const placeholder = `{${paramKey}}`;
        message = message.replace(new RegExp(placeholder, 'g'), params[paramKey]);
      });
    }
    
    return message;
  }

  /**
   * Get localized documentation path
   * @param {string} docName - Documentation file name (without extension)
   * @param {string} language - Optional language override
   * @returns {string} Localized documentation path
   */
  getLocalizedDocPath(docName, language = null) {
    const lang = language || this.currentLanguage;
    const docPath = path.join(__dirname, '..', 'i18n', lang, `${docName}.md`);
    
    // Fallback to default language if localized version doesn't exist
    if (!fs.existsSync(docPath)) {
      const defaultPath = path.join(__dirname, '..', 'i18n', this.defaultLanguage, `${docName}.md`);
      if (fs.existsSync(defaultPath)) {
        return defaultPath;
      }
    }
    
    return docPath;
  }

  /**
   * Read localized documentation
   * @param {string} docName - Documentation file name (without extension)
   * @param {string} language - Optional language override
   * @returns {string} Documentation content
   */
  readLocalizedDoc(docName, language = null) {
    const docPath = this.getLocalizedDocPath(docName, language);
    try {
      return fs.readFileSync(docPath, 'utf8');
    } catch (error) {
      console.warn(`[I18n] Failed to read localized doc ${docName}:`, error.message);
      return `# Documentation not available for ${docName}`;
    }
  }

  /**
   * Get supported languages info
   * @returns {Array} Array of supported languages with info
   */
  getSupportedLanguagesInfo() {
    return this.supportedLanguages.map(lang => ({
      code: lang,
      name: this.getLanguageName(lang),
      nativeName: this.getNativeLanguageName(lang),
      hasFullSupport: this.hasFullLanguageSupport(lang)
    }));
  }

  /**
   * Get language name in English
   * @param {string} langCode - Language code
   * @returns {string} Language name
   */
  getLanguageName(langCode) {
    const names = {
      'zh': 'Chinese',
      'en': 'English',
      'es': 'Spanish',
      'ar': 'Arabic'
    };
    return names[langCode] || langCode;
  }

  /**
   * Get language name in native language
   * @param {string} langCode - Language code
   * @returns {string} Native language name
   */
  getNativeLanguageName(langCode) {
    const names = {
      'zh': '中文',
      'en': 'English',
      'es': 'Español',
      'ar': 'العربية'
    };
    return names[langCode] || langCode;
  }

  /**
   * Check if language has full documentation support
   * @param {string} langCode - Language code
   * @returns {boolean} Whether language has full support
   */
  hasFullLanguageSupport(langCode) {
    const requiredDocs = ['SKILL', 'USER_GUIDE', 'QUICK_START'];
    return requiredDocs.every(doc => {
      const docPath = path.join(__dirname, '..', 'i18n', langCode, `${doc}.md`);
      return fs.existsSync(docPath);
    });
  }

  /**
   * Auto-translate missing documentation using AI
   * Note: This is a placeholder for future implementation
   * @param {string} sourceLang - Source language
   * @param {string} targetLang - Target language  
   * @param {string} content - Content to translate
   * @returns {Promise<string>} Translated content
   */
  async autoTranslate(sourceLang, targetLang, content) {
    // Placeholder for AI-powered translation
    // In practice, this would use an AI translation service
    console.log(`[I18n] Auto-translating from ${sourceLang} to ${targetLang}...`);
    return content; // Return original content as fallback
  }
}

// Export singleton instance
const i18nManager = new I18nManager();

// Export functions for easy use
module.exports = {
  setLanguage: (language) => i18nManager.setLanguage(language),
  t: (key, params, language) => i18nManager.t(key, params, language),
  getLocalizedDocPath: (docName, language) => i18nManager.getLocalizedDocPath(docName, language),
  readLocalizedDoc: (docName, language) => i18nManager.readLocalizedDoc(docName, language),
  getSupportedLanguagesInfo: () => i18nManager.getSupportedLanguagesInfo(),
  getCurrentLanguage: () => i18nManager.currentLanguage,
  detectLanguage: () => i18nManager.detectLanguage()
};

// CLI interface for testing
if (require.main === module) {
  console.log('[I18n] Current language:', i18nManager.currentLanguage);
  console.log('[I18n] Supported languages:', i18nManager.getSupportedLanguagesInfo());
  
  // Test message translation
  console.log('[I18n] Test message (current lang):', i18nManager.t('test.welcome', { name: 'User' }));
  
  // Test documentation reading
  try {
    const skillDoc = i18nManager.readLocalizedDoc('SKILL');
    console.log('[I18n] SKILL.md length:', skillDoc.length);
  } catch (error) {
    console.log('[I18n] SKILL.md not available in current language');
  }
}