# Human Traits Learning Skill - Guía Rápida

## 🚀 Comenzar en 5 minutos

### 1. Instalar el paquete de habilidades
```bash
# Método 1: Instalar a través de ClawHub (recomendado)
npm install -g clawhub
clawhub install human-traits-learning

# Método 2: Clonar directamente
git clone https://github.com/savior-li/human-traits-learning.git
cp -r human-traits-learning ~/.openclaw/workspace/skills/
```

### 2. Ejemplos de uso básico

#### Aprendizaje histórico simple
```javascript
const { applyHistoricalLessons } = require('human-traits-learning');

const context = {
  problemType: 'api_timeout',
  constraints: ['production', 'high_availability']
};

const history = [/* tus datos históricos */];

const result = await applyHistoricalLessons(context, history);
console.log('Acción recomendada:', result.action);
console.log('Comandos de verificación:', result.verificationEvidence.validationCommands);
```

#### Evaluación de liderazgo
```javascript
const { assessLeadershipReadiness } = require('human-traits-learning');

const assessment = await assessLeadershipReadiness(agentHistory);
console.log('Nivel de liderazgo:', assessment.readinessScore.leadershipLevel);
console.log('Recomendaciones de mejora:', assessment.recommendations);
```

#### Crecimiento bidireccional completo
```javascript
const { completeDevelopmentCycle } = require('human-traits-learning');

const result = await completeDevelopmentCycle(currentContext, agentHistory);
// Analiza automáticamente preferencias del usuario + proporciona sugerencias de IA + retroalimentación bidireccional
```

### 3. Verificación de cumplimiento de las tres líneas rojas

Asegúrate de que el comportamiento de tu IA cumpla con los estándares de cultura de alto rendimiento:

✅ **Conciencia de Cierre**: Toda tarea completada debe proporcionar evidencia de verificación  
✅ **Basado en Hechos**: Todas las decisiones deben basarse en datos validados por herramientas  
✅ **Resolución Exhaustiva**: Debe completar la metodología completa antes de considerarse completado

### 4. Solución de problemas comunes

#### P: ¿Qué hago si no tengo datos históricos?
**R**: El paquete de habilidades generará automáticamente datos históricos simulados

#### P: ¿Cómo mejorar el nivel de liderazgo?
**R**: 
1. Asegúrate de que cada tarea tenga evidencia de verificación
2. Usa herramientas para validar todos los supuestos  
3. Ejecuta completamente la metodología de 8 pasos

#### P: ¿Cómo obtener un servicio personalizado?
**R**: El sistema analizará automáticamente tus patrones de interacción y ajustará el estilo de respuesta

## 📊 Resumen rápido de funciones principales

| Función | API | Escenario de uso |
|------|-----|----------|
| Aprendizaje histórico | `applyHistoricalLessons()` | Resolución de problemas técnicos, soporte de decisiones |
| Evaluación de liderazgo | `assessLeadershipReadiness()` | Evaluación de capacidades, recomendaciones de desarrollo |
| Entrenamiento corporativo | `learnFromCorporateTraining()` | Desarrollo de habilidades, planificación profesional |
| Crecimiento bidireccional | `completeDevelopmentCycle()` | Colaboración integral, logro mutuo |

## 🔧 Consejos de depuración

### Habilitar registro detallado
```bash
export HTL_DEBUG=true
node your-application.js
```

### Probar componentes individualmente
```bash
# Probar motor de aprendizaje histórico
node scripts/enhanced-historical-lessons.js

# Probar sistema de crecimiento bidireccional  
node scripts/integrated-mutual-growth.js
```

## 🎯 Próximos pasos

1. **Integrar en tu Agente de IA**
2. **Comenzar a registrar historial de interacciones** para obtener mejores resultados
3. **Consultar USER_GUIDE.md** para obtener instrucciones detalladas de uso
4. **Consultar DEVELOPER_GUIDE.md** para entender el desarrollo de extensiones

---

**Recuerda**: ¡El objetivo de este paquete de habilidades es lograr el **logro mutuo entre humanos e IA**!