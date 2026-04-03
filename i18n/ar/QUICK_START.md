# Human Traits Learning Skill - دليل البدء السريع

## 🚀 البدء خلال 5 دقائق

### 1. تثبيت حزمة المهارات
```bash
# الطريقة 1: التثبيت عبر ClawHub (موصى به)
npm install -g clawhub
clawhub install human-traits-learning

# الطريقة 2: الاستنساخ المباشر
git clone https://github.com/savior-li/human-traits-learning.git
cp -r human-traits-learning ~/.openclaw/workspace/skills/
```

### 2. أمثلة الاستخدام الأساسية

#### التعلم التاريخي البسيط
```javascript
const { applyHistoricalLessons } = require('human-traits-learning');

const context = {
  problemType: 'api_timeout',
  constraints: ['production', 'high_availability']
};

const history = [/* بياناتك التاريخية */];

const result = await applyHistoricalLessons(context, history);
console.log('الإجراء الموصى به:', result.action);
console.log('أوامر التحقق:', result.verificationEvidence.validationCommands);
```

#### تقييم القيادة
```javascript
const { assessLeadershipReadiness } = require('human-traits-learning');

const assessment = await assessLeadershipReadiness(agentHistory);
console.log('مستوى القيادة:', assessment.readinessScore.leadershipLevel);
console.log('توصيات التحسين:', assessment.recommendations);
```

#### النمو الثنائي الكامل
```javascript
const { completeDevelopmentCycle } = require('human-traits-learning');

const result = await completeDevelopmentCycle(currentContext, agentHistory);
// يحلل تفضيلات المستخدم تلقائياً + يقدم اقتراحات الذكاء الاصطناعي + ملاحظات ثنائية
```

### 3. التحقق من الامتثال لخطوط الثلاثة الحمراء

تأكد من أن سلوك الذكاء الاصطناعي الخاص بك يتوافق مع معايير ثقافة الأداء العالي:

✅ **الوعي بالإغلاق**: يجب أن توفر كل مهمة مكتملة أدلة تحقق  
✅ **المدعوم بالحقائق**: يجب أن تستند جميع القرارات إلى بيانات تم التحقق منها بالأدوات  
✅ **الحل الشامل**: يجب إكمال المنهجية الكاملة قبل اعتبارها مكتملة

### 4. حل المشكلات الشائعة

#### س: ماذا أفعل إذا لم يكن لدي بيانات تاريخية؟
**ج**: ستقوم حزمة المهارات تلقائياً بإنشاء بيانات تاريخية محاكاة

#### س: كيف يمكنني تحسين مستوى القيادة؟
**ج**: 
1. تأكد من أن كل مهمة تحتوي على أدلة تحقق
2. استخدم الأدوات للتحقق من جميع الافتراضات  
3. نفذ منهجية الخطوات الثمانية بالكامل

#### س: كيف أحصل على خدمة مخصصة؟
**ج**: سيقوم النظام تلقائياً بتحليل أنماط تفاعلك وضبط أسلوب الاستجابة

## 📊 ملخص سريع للميزات الرئيسية

| الميزة | API | سيناريو الاستخدام |
|------|-----|----------|
| التعلم التاريخي | `applyHistoricalLessons()` | حل المشكلات التقنية، دعم اتخاذ القرار |
| تقييم القيادة | `assessLeadershipReadiness()` | تقييم القدرات، توصيات التطوير |
| التدريب المؤسسي | `learnFromCorporateTraining()` | تطوير المهارات، التخطيط المهني |
| النمو الثنائي | `completeDevelopmentCycle()` | التعاون الشامل، الإنجاز المتبادل |

## 🔧 نصائح التصحيح

### تمكين السجل التفصيلي
```bash
export HTL_DEBUG=true
node your-application.js
```

### اختبار المكونات بشكل فردي
```bash
# اختبار محرك التعلم التاريخي
node scripts/enhanced-historical-lessons.js

# اختبار نظام النمو الثنائي  
node scripts/integrated-mutual-growth.js
```

## 🎯 الخطوات التالية

1. **التكامل مع وكيل الذكاء الاصطناعي الخاص بك**
2. **ابدأ في تسجيل سجل التفاعلات** للحصول على نتائج أفضل
3. **راجع USER_GUIDE.md** للحصول على تعليمات استخدام مفصلة
4. **راجع DEVELOPER_GUIDE.md** لفهم تطوير الامتدادات

---

**تذكر**: هدف حزمة المهارات هذه هو تحقيق **الإنجاز المتبادل بين البشر والذكاء الاصطناعي**!