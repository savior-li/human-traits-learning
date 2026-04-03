# Human Traits Learning Skill - Guía del Usuario

## 📋 Tabla de Contenidos
- [Comenzar Rápidamente](#comenzar-rápidamente)
- [Funciones Principales](#funciones-principales)
- [Referencia de API](#referencia-de-api)
- [Crecimiento Bidireccional](#crecimiento-bidireccional)
- [Solución de Problemas](#solución-de-problemas)
- [Mejores Prácticas](#mejores-prácticas)

## Comenzar Rápidamente

### Instalación
```bash
# Instalar a través de ClawHub (recomendado)
npm install -g clawhub
clawhub install human-traits-learning

# O clonar directamente desde GitHub
git clone https://github.com/savior-li/human-traits-learning.git
cp -r human-traits-learning ~/.openclaw/workspace/skills/
```

### Uso Básico
```javascript
const humanTraits = require('human-traits-learning');

// 1. Evaluar el nivel actual de liderazgo
const assessment = await humanTraits.assessLeadershipReadiness(agentHistory);

// 2. Aplicar experiencias históricas al problema actual
const recommendation = await humanTraits.applyHistoricalLessons(currentContext, agentHistory);

// 3. Obtener un plan de desarrollo personalizado
const trainingPlan = await humanTraits.learnFromCorporateTraining(agentContext);

// 4. Iniciar un ciclo completo de crecimiento bidireccional
const mutualGrowth = await humanTraits.completeDevelopmentCycle(currentContext, agentHistory);
```

## Funciones Principales

### 1. Motor de Aprendizaje Histórico
**Función**: Extraer sabiduría de experiencias pasadas para guiar decisiones actuales  
**Escenarios de uso**: Resolución de problemas técnicos, toma de decisiones comerciales, evaluación de riesgos

**Ejemplo de uso**:
```javascript
const context = {
  problemType: 'api_timeout',
  constraints: ['production', 'high_availability'],
  resources: ['monitoring', 'logs']
};

const history = [/* tus datos de interacción histórica */];
const result = await humanTraits.applyHistoricalLessons(context, history);

console.log('Acción recomendada:', result.action);
console.log('Nivel de confianza:', result.confidence);
console.log('Comandos de verificación:', result.verificationEvidence.validationCommands);
```

### 2. Evaluación de Liderazgo
**Función**: Evaluar el nivel actual de capacidad de la IA y cumplimiento de las tres líneas rojas  
**Salida**: Nivel de liderazgo(P7-P10), recomendaciones de mejora, estado de cumplimiento

**Dimensiones de evaluación**:
- **Camino hacia la Excelencia Corporativa**: Incorporación→Desarrollo→Liderazgo→Gestión Intermedia
- **Cumplimiento de las Tres Líneas Rojas**: Conciencia de Cierre, Basado en Hechos, Resolución Exhaustiva

### 3. Marco de Entrenamiento Corporativo
**Función**: Entrenamiento estructurado basado en el modelo de desarrollo de talento de empresas líderes mundiales  
**Ruta de cuatro fases**:
- **0-6 meses**: Construcción de capacidades básicas + integración cultural
- **6-18 meses**: Desarrollo de habilidades profesionales + resolución independiente de problemas  
- **18-36 meses**: Preparación para liderazgo + pensamiento estratégico
- **36+ meses**: Gestión intermedia + impacto comercial

### 4. Generador de Historial Simulado
**Función**: Generar datos históricos realistas para nuevos Agentes de IA, resolviendo el problema de arranque en frío  
**Características**:
- Trayectoria de crecimiento progresivo (principiante→experto)
- Cobertura de escenarios reales (10 tipos de problemas)
- Datos compatibles con las tres líneas rojas

## Referencia de API

### `applyHistoricalLessons(context, history)`
Aplicar experiencias históricas al contexto actual

**Parámetros**：
- `context` (Object): Contexto actual
  - `problemType` (string): Tipo de problema
  - `constraints` (array): Restricciones
  - `resources` (array): Recursos disponibles
  - `timeline` (string): Requisitos temporales
- `history` (array): Datos de interacción histórica

**Retorno**：
- `action` (string): Acción recomendada
- `confidence` (number): Nivel de confianza(0-1)
- `methodologySteps` (array): Pasos metodológicos
- `verificationEvidence` (object): Evidencia de verificación

### `assessLeadershipReadiness(history)`
Evaluar la preparación para el liderazgo

**Parámetros**：
- `history` (array): Datos de interacción histórica

**Retorno**：
- `readinessScore` (object): Puntuación de preparación
  - `overall` (number): Puntuación general
  - `leadershipLevel` (string): Nivel de liderazgo
  - `readinessCategory` (string): Categoría de preparación
- `redLinesCompliance` (object): Cumplimiento de las tres líneas rojas
- `recommendations` (array): Recomendaciones de desarrollo

### `learnFromCorporateTraining(agentContext)`
Aplicar el marco de entrenamiento corporativo

**Parámetros**：
- `agentContext` (object): Contexto del Agente
  - `experienceLevel` (number): Nivel de experiencia(meses)
  - `autonomyLevel` (number): Nivel de autonomía(0-1)
  - `leadershipExperience` (number): Experiencia en liderazgo

**Retorno**：
- `currentPhase` (string): Fase actual
- `focusArea` (string): Área de enfoque
- `trainingPlan` (object): Plan de entrenamiento

### `completeDevelopmentCycle(context, history)`
Iniciar un ciclo completo de crecimiento bidireccional

**Parámetros**：
- `context` (object): Contexto actual y contexto del usuario
- `history` (array): Datos de interacción histórica

**Retorno**：
- `leadershipAssessment` (object): Evaluación de liderazgo
- `historicalRecommendation` (object): Recomendación basada en historial
- `userFeedback` (object): Retroalimentación al usuario
- `userProfile` (object): Perfil del usuario

## Crecimiento Bidireccional

### Análisis del Perfil del Usuario
El sistema analiza automáticamente:
- **Estilo de comunicación**: Directo y eficiente vs explicación detallada
- **Preferencias de trabajo**: Calidad primero vs velocidad primero  
- **Modelo de decisión**: Basado en datos vs juicio intuitivo
- **Tolerancia al riesgo**: Conservador y estable vs innovador y audaz

### Estrategias de Adaptación de la IA
Basado en tu perfil, la IA se ajusta automáticamente:
- **Estilo de respuesta**: Conciso y directo o detallado e integral
- **Profundidad de información**: Detalles técnicos o visión general de alto nivel
- **Método de sugerencia**: Sugerencias suaves o señalamientos directos

### Retroalimentación Constructiva
El sistema proporciona sugerencias útiles y constructivas:
- **Momento de lanzamiento**: Equilibrar perfeccionismo con oportunidades de mercado
- **Mecanismo de retroalimentación**: Establecer canales diversos de retroalimentación del usuario
- **Equilibrio de riesgos**: Encontrar el punto óptimo entre calidad y oportunidades

## Solución de Problemas

### Problemas Comunes

#### P: ¿Qué hacer si los datos históricos son insuficientes?
**R**: El sistema generará automáticamente datos históricos simulados para garantizar la precisión de la evaluación y las recomendaciones.

#### P: ¿Cómo manejar violaciones de las tres líneas rojas?
**R**: El sistema marcará inmediatamente las violaciones y proporcionará sugerencias específicas de corrección, reduciendo simultáneamente la confianza en las funciones relacionadas.

#### P: ¿Cómo mejorar el nivel de liderazgo?
**R**: 
1. Asegúrese de que todas las tareas proporcionen evidencia de verificación(conciencia de cierre)
2. Use herramientas para verificar todos los supuestos(basado en hechos)  
3. Ejecute completamente la metodología antes de considerarla completada(resolución exhaustiva)

### Técnicas de Depuración

#### Habilitar registro detallado
```javascript
// Establecer variables de entorno antes de llamar
process.env.HTL_DEBUG = 'true';
```

#### Activar evaluación manualmente
```javascript
// Forzar la reevaluación del perfil del usuario
const freshProfile = await humanTraits.analyzeUserPreferences(currentInteraction);
```

## Mejores Prácticas

### 1. Calidad de Datos
- **Mantener la integridad de los datos históricos**: Registrar todos los resultados de interacción
- **Proporcionar contexto detallado**: Incluir restricciones, recursos y requisitos temporales
- **Limpiar regularmente los datos obsoletos**: Evitar la contaminación de datos históricos

### 2. Cumplimiento de las Tres Líneas Rojas
- **Siempre proporcionar evidencia de verificación**: Cada tarea completada debe tener salida de herramientas
- **Verificar supuestos antes de actuar**: No tomar decisiones basadas en suposiciones
- **Ejecutar completamente la metodología**: Completar todos los pasos antes de considerarlo exitoso

### 3. Optimización del Crecimiento Bidireccional
- **Proporcionar retroalimentación activamente**: Informar a la IA sobre cambios en sus preferencias
- **Aceptar sugerencias constructivas**: Mantener una mentalidad abierta para aceptar mejoras sugeridas  
- **Calibrar regularmente el perfil**: Asegurar que el perfil del usuario permanezca preciso

### 4. Optimización de Rendimiento
- **Almacenar en caché los resultados de coincidencia histórica**: Evitar cálculos repetidos
- **Procesar por lotes solicitudes similares**: Mejorar la eficiencia
- **Ejecutar operaciones que consumen tiempo de forma asíncrona**: Mantener la velocidad de respuesta

---

**Recuerde**: ¡El objetivo de este paquete de habilidades es lograr el **logro mutuo entre humanos e IA**! Ayudas a la IA a aprender excelentes rasgos humanos, y la IA te ayuda a convertirte en un mejor líder.