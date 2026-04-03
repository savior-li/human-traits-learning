# Internationalization (i18n) Structure

This directory contains multilingual versions of all documentation and user-facing content.

## Language Codes
- `zh` - Chinese (Simplified)
- `en` - English  
- `es` - Spanish
- `ar` - Arabic

## File Structure
Each language directory contains:
- `SKILL.md` - Skill specification in target language
- `USER_GUIDE.md` - User guide in target language  
- `QUICK_START.md` - Quick start guide in target language
- `messages.json` - UI messages and error strings for code localization

## Implementation Strategy
1. **Documentation Translation**: All user-facing documentation translated
2. **Code Localization**: Error messages, logs, and UI strings externalized  
3. **Cultural Adaptation**: High-performance culture principles adapted to local context
4. **Automatic Language Detection**: System detects user language preference

## Usage
```javascript
// Set language preference
const humanTraits = require('human-traits-learning');
humanTraits.setLanguage('zh'); // Chinese

// Or auto-detect from environment
humanTraits.autoDetectLanguage();
```