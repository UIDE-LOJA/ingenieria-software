# Presentación Semana 3: Ingeniería de Requerimientos y Validación
## Historias de Usuario, Casos de Uso, Validación y Trazabilidad

---

## 🎯 Objetivos de la Presentación

- Dominar **historias de usuario y casos de uso** como técnicas de especificación
- Comprender **criterios de aceptación** y su rol en el contrato del sistema
- Aplicar **métodos de validación** (revisiones, prototipos, pruebas de aceptación)
- Implementar **trazabilidad y administración** de requerimientos
- Integrar **verificación y validación** en el proceso de desarrollo

---

## 📊 Agenda

1. **Historias de Usuario vs Casos de Uso**
2. **Criterios de Aceptación y Contratos**
3. **Métodos de Validación de Software**
4. **Trazabilidad y Administración de Requerimientos**
5. **Integración en Procesos de Desarrollo**

---

## 📖 Fundamentos: Requerimientos del Sistema

### Definición de Requerimientos
> *"Los requerimientos son las descripciones de lo que el sistema debe hacer, incluyendo los servicios que ofrece y las restricciones en su operación"*

### Técnicas Basadas en Escenarios
- **Historias de Usuario**: Enfoque ágil y centrado en el usuario
- **Casos de Uso**: Técnica formal UML para interacciones
- **Criterios de Aceptación**: Definición de "terminado" y aceptable

### Importancia Estratégica
Las técnicas de especificación determinan la calidad y precisión del sistema final, actuando como contrato entre cliente y desarrollador.

---

## 📝 Historias de Usuario: Enfoque Ágil

### Origen y Contexto
> *"Las historias de usuario son la forma en que la Programación Extrema (XP) expresa los requerimientos del usuario, y generalmente se escriben en tarjetas"*

### Características Principales
- **Formato de tarjeta**: Descripciones concisas y manejables
- **Priorización del usuario**: El cliente define importancia
- **Entrada para planeación**: Base del "juego de planeación" XP
- **Descomposición en tareas**: Estimación de esfuerzo y recursos

### Proceso de Desarrollo
1. **Cliente crea historias**: Expresadas como escenarios prioritarios
2. **Equipo descompone**: Historias en tareas específicas
3. **Estimación**: Esfuerzo y recursos necesarios
4. **Implementación**: Desarrollo iterativo

---

## ⚖️ Historias de Usuario: Ventajas vs Desventajas

### Ventajas
- **Simplicidad**: Fáciles de comprender y manejar
- **Enfoque en usuario**: Perspectiva del cliente final
- **Agilidad**: Permiten cambios rápidos
- **Comunicación**: Facilitan diálogo cliente-desarrollador

### Desventajas
- **Brevedad problemática**: Puede faltar detalle necesario
- **Ambigüedad**: Interpretaciones múltiples posibles
- **Falta de estructura**: Sin formato estándar riguroso
- **Documentación limitada**: Dificultades para sistemas complejos

### Consideraciones Éticas
> *"Es crucial considerar el contexto ético al diseñarlas, ya que la ingeniería de historias de usuario puede ser sensible éticamente"*

---

## 🎭 Casos de Uso: Técnica UML Formal

### Definición y Origen
> *"Los casos de uso son una técnica de descubrimiento de requerimientos que se introdujo por primera vez en el método Objectory (Jacobson et al., 1993)"*

### Evolución Histórica
- **Método Objectory (1993)**: Introducción original
- **UML**: Incorporación como característica fundamental
- **Estándar actual**: Técnica establecida en ingeniería de software

### Componentes Clave
- **Actores**: Personas u otros sistemas que interactúan
- **Interacciones**: Tipos específicos de intercambio
- **Información adicional**: Detalles de la interacción con el sistema

---

## 🏥 Ejemplo Práctico: Sistema MHC-PMS

### Diagrama de Casos de Uso
```
Sistema de Información para Pacientes (MHC-PMS)

[Médico] ────────── (Prescribir medicamento)
[Médico] ────────── (Establecer consulta)  
[Paciente] ←─────── (Actualizar registro)
[Auxiliar médico] ── (Actualizar registro)
```

### Análisis del Modelo
- **Actores identificados**: Médico, Paciente, Auxiliar médico
- **Casos de uso**: Prescribir medicamento, Establecer consulta, Actualizar registro
- **Relaciones**: Diferentes actores pueden compartir casos de uso

### Representación de Interacciones
> *"El conjunto de casos de uso representa todas las interacciones posibles que se describirán en los requerimientos del sistema"*

---

## ✅ Criterios de Aceptación: Contrato del Sistema

### Definición Fundamental
> *"Los criterios de aceptación forman parte del contrato del sistema y tienen que convenirse entre el cliente y el desarrollador"*

### Rol en Métodos Ágiles
- **Responsabilidad del cliente**: Parte del equipo de desarrollo
- **Definición de pruebas**: Determinar soporte de historias de usuario
- **Bloqueo del avance**: No se avanza hasta pasar pruebas de aceptación
- **Validación continua**: Verificación constante de cumplimiento

### Importancia Contractual
Los criterios de aceptación definen objetivamente qué hace que un sistema sea aceptable para uso operacional, estableciendo límites claros de responsabilidad.

---

## 🔍 Validación vs Verificación: Conceptos Clave

### Diferenciación de Barry Boehm (1979)
- **Validación**: *"¿Construimos el producto correcto?"*
- **Verificación**: *"¿Construimos bien el producto?"*

### Propósito de la Validación
> *"Su propósito principal es verificar el software para asegurar que sea lo que el cliente requiere"*

### Técnicas Esenciales
1. **Revisiones e inspecciones**
2. **Creación de prototipos**
3. **Pruebas de aceptación**

### Actividad Fundamental
La validación es una de las cuatro actividades fundamentales de todos los procesos de software.

---

## 📋 Revisiones e Inspecciones: V&V Estáticas

### Características
- **Técnicas estáticas**: No requieren ejecutar software
- **Verificación de calidad**: Comprobar entregables
- **Cumplimiento de estándares**: Asegurar calidad establecida

### Proceso Estructurado (3 Fases)
1. **Actividades previas**: Planeación, equipo, lectura independiente
2. **Reunión de revisión**: Discusión de problemas, registro de errores
3. **Seguimiento**: Corrección de errores y acciones correctivas

### Revisión de Requerimientos
- **Participantes**: Grupo cliente-desarrollador
- **Objetivo**: Buscar errores, anomalías e inconsistencias
- **Resultado**: Negociación y resolución de problemas

---

## 🔧 Creación de Prototipos: Validación Temprana

### Definición
> *"Un prototipo es una versión inicial de un sistema de software que se utiliza para demostrar conceptos, probar opciones de diseño y obtener más información sobre el problema"*

### Propósitos Clave
- **Demostrar conceptos**: Validar ideas fundamentales
- **Probar opciones de diseño**: Evaluar alternativas
- **Obtener información**: Comprender mejor problema y soluciones
- **Anticipar cambios**: Identificar modificaciones necesarias

### Principios de Desarrollo
- **Rapidez**: Desarrollo ágil para controlar costos
- **Iteración**: Mejora continua basada en feedback
- **Enfoque**: Funcionalidad esencial vs características completas

---

## 🔄 Proceso de Prototipado: Flujo Iterativo

### Etapas del Proceso
1. **Establecimiento de objetivos**: Definir propósito del prototipo
2. **Definición de funcionalidad**: Decidir qué incluir/excluir
3. **Desarrollo del prototipo**: Crear versión ejecutable
4. **Evaluación del prototipo**: Generar reporte de evaluación

### Decisiones de Alcance
- **Incluir**: Funcionalidad core esencial
- **Excluir**: Manejo de errores, requerimientos no funcionales complejos
- **Flexibilidad**: Requerimientos no funcionales adaptables

### Ejemplo de Aplicación
> *"Para los juegos de computadora, a menudo se recomienda diseñarlos utilizando una serie de prototipos"*

---

## 🧪 Pruebas de Aceptación: Validación Final

### Definición
> *"Las pruebas de aceptación constituyen la etapa final del proceso de pruebas antes de que el sistema se acepte para uso operacional"*

### Características Distintivas
- **Entorno real**: Cliente prueba en su propio ambiente
- **Datos reales**: Suministrados por cliente, no simulados
- **Usuario final**: Pruebas realizadas por usuarios reales
- **Decisión final**: Aceptación o rechazo del sistema

### Objetivos de las Pruebas
- **Revelar errores**: En definición de requerimientos
- **Evaluar rendimiento**: Verificar aceptabilidad de performance
- **Validar cumplimiento**: Contra criterios establecidos

---

## 📊 Proceso de Pruebas de Aceptación: 6 Etapas

### Etapas Secuenciales (Sommerville, 2011)
1. **Definir criterios de aceptación**: Establecer estándares medibles
2. **Planear prueba de aceptación**: Diseñar estrategia de testing
3. **Derivar pruebas de aceptación**: Crear casos de prueba específicos
4. **Correr pruebas de aceptación**: Ejecutar pruebas planificadas
5. **Negociar resultados**: Discutir hallazgos con stakeholders
6. **Aceptar o rechazar**: Decisión final sobre el sistema

### Fase de Negociación
- **Análisis de resultados**: Evaluación conjunta cliente-desarrollador
- **Resolución de discrepancias**: Acuerdo sobre hallazgos
- **Toma de decisión**: Aceptación condicional, rechazo o aceptación total

---

## 📈 Administración de Requerimientos: Gestión del Cambio

### Definición
> *"La administración de requerimientos (GR) es el proceso de comprender y controlar los cambios en los requerimientos del sistema"*

### Necesidad del Proceso
- **Sistemas grandes**: Problemas no completamente definibles
- **Comprensión evolutiva**: Cambio constante de perspectiva
- **Gestión posterior**: Cambios tras aprobación de documento

### Realidad de los Proyectos
> *"Los requerimientos de los sistemas de software grandes siempre cambian"*

---

## 🔧 Componentes de la Administración de Requerimientos

### 1. Identificación de Requerimientos
- **Identificación única**: Cada requerimiento debe ser exclusivo
- **Referencias cruzadas**: Vinculación con otros requerimientos
- **Evaluaciones de seguimiento**: Trazabilidad en el tiempo

### 2. Proceso de Administración del Cambio
- **Evaluación de impacto**: Análisis de efectos
- **Evaluación de costos**: Estimación de recursos necesarios
- **Toma de decisiones**: Aprobación o rechazo de cambios

### 3. Políticas de Seguimiento
- **Relaciones entre requerimientos**: Mapeo de dependencias
- **Relación requerimiento-diseño**: Vinculación con arquitectura
- **Mantenimiento de registros**: Documentación continua

---

## 🔗 Trazabilidad: Seguimiento de Relaciones

### Definición
> *"La trazabilidad implica registrar las relaciones entre los requerimientos, sus fuentes y el diseño del sistema"*

### Propósito Fundamental
> *"Seguir la huella de las relaciones entre requerimientos, sus fuentes y el diseño del sistema, de modo que usted pueda analizar las razones para los cambios propuestos"*

### Beneficios Clave
- **Análisis de impacto**: Evaluar efectos de cambios propuestos
- **Justificación de cambios**: Entender razones de modificaciones
- **Gestión de dependencias**: Identificar componentes afectados

---

## 📋 Ejemplo Práctico: Matriz de Trazabilidad

### Requerimiento de Integración
```
ID: REQ-006
Requerimiento: El sistema de autorrecuperación y sus componentes 
               seleccionados deben integrarse de forma directa con 
               Azure DevOps, sin desarrollos adicionales.
Peso: 4 (Fundamental)
Criterio de Aceptación: Cumple (Puntaje 4)
```

### Caso de Prueba Asociado
```
ID del Código: CP-REQ06-INT
Objetivo: REQ06 (Integración Azure DevOps)
Actividades previas: Diseño de Arquitectura de Integración completado

Pasos:
1. Intentar integración del componente X en Azure DevOps
2. Registrar necesidad de desarrollos adicionales

Resultado Esperado: 
Integración completa sin desarrollos adicionales, 
cumpliendo criterio de aceptación (Puntaje 4)
```

---

## 🛠️ Herramientas de Apoyo

### Necesidad de Automatización
> *"El uso de herramientas de apoyo es fundamental debido a la gran cantidad de información a procesar"*

### Tipos de Herramientas
- **Sistemas especializados**: Software dedicado a gestión de requerimientos
- **Bases de datos**: Almacenamiento estructurado de información
- **Software genérico**: Herramientas adaptables (hojas de cálculo, wikis)

### Funcionalidades Clave
- **Gestión de cambios**: Workflow de aprobación
- **Trazabilidad automatizada**: Vinculación de elementos
- **Reportes**: Generación de documentación automática
- **Control de versiones**: Historial de modificaciones

---

## 📊 Integración: Requerimientos en el Proceso de Desarrollo

### Validación durante Desarrollo de Pruebas
> *"Si el desarrollo de pruebas se realiza como parte de la validación, esto revela con frecuencia problemas en los requerimientos"*

### Requerimientos Comprobables
- **Característica esencial**: Todos los requerimientos deben ser testeable
- **Identificación temprana**: Problemas detectados durante diseño de pruebas
- **Refinamiento continuo**: Mejora de especificaciones

### Administración de Configuración
La trazabilidad apoya la administración de configuración al ayudar a descubrir:
- **Qué cambios se realizaron**: Historial de modificaciones
- **Compilación y vinculación**: Ensamblaje de componentes
- **Creación del sistema**: Proceso de build completo

---

## 🔄 Ciclo de Vida de Requerimientos

### Fases del Proceso
1. **Elicitación**: Historias de usuario / Casos de uso
2. **Especificación**: Criterios de aceptación definidos
3. **Validación**: Revisiones, prototipos, pruebas
4. **Gestión**: Trazabilidad y administración de cambios

### Interrelaciones
- **Historias ↔ Casos de uso**: Complementarios según contexto
- **Criterios ↔ Pruebas**: Definición directa de testing
- **Trazabilidad ↔ Cambios**: Gestión de impacto
- **Validación ↔ Refinamiento**: Mejora continua

---

## 📈 Métricas y Medición

### Indicadores de Calidad de Requerimientos
- **Completitud**: % de funcionalidades cubiertas
- **Consistencia**: Ausencia de contradicciones
- **Verificabilidad**: % de requerimientos testeable
- **Trazabilidad**: % de vínculos documentados

### Métricas de Proceso
- **Tiempo de validación**: Duración de revisiones
- **Defectos encontrados**: Errores por fase
- **Cambios gestionados**: Número y tipo de modificaciones
- **Satisfacción del cliente**: Aceptación de deliverables

---

## 🎯 Mejores Prácticas

### Para Historias de Usuario
- **Criterios INVEST**: Independent, Negotiable, Valuable, Estimable, Small, Testable
- **Colaboración continua**: Cliente parte del equipo
- **Refinamiento iterativo**: Mejora basada en feedback

### Para Casos de Uso
- **Identificación clara de actores**: Todos los stakeholders
- **Escenarios completos**: Flujos principales y alternativos
- **Documentación detallada**: Información suficiente para desarrollo

### Para Validación
- **Validación temprana**: Prototipos en fases iniciales
- **Múltiples técnicas**: Combinar revisiones, prototipos y pruebas
- **Participación del usuario**: Involucrar desde el inicio

---

## 🔍 Síntesis: Integración de Técnicas

### Complementariedad de Enfoques
- **Ágil**: Historias de usuario para flexibilidad
- **Formal**: Casos de uso para sistemas complejos
- **Híbrido**: Combinación según necesidades del proyecto

### Elementos Críticos de Éxito
1. **Criterios de aceptación claros**: Base para validación
2. **Trazabilidad completa**: Gestión efectiva de cambios
3. **Validación continua**: Detección temprana de problemas
4. **Herramientas adecuadas**: Soporte automatizado al proceso

### Resultado Esperado
Sistema que cumple expectativas del cliente, desarrollado eficientemente y mantenible a largo plazo.

---

## 💡 Reflexiones Finales

### Preguntas para Considerar
- ¿Cuándo **priorizar** historias de usuario vs casos de uso?
- ¿Cómo **equilibrar** flexibilidad ágil con rigor formal?
- ¿Qué **nivel de trazabilidad** justifica el esfuerzo invertido?

### Desafío Profesional
> *"La calidad de un sistema de software se determina en gran medida por la calidad de sus requerimientos y la efectividad de su proceso de validación"*

---

## 🎯 Para Profundizar

### Herramientas Especializadas
- **Jira**: Gestión ágil de historias de usuario
- **Enterprise Architect**: Modelado UML y casos de uso
- **IBM DOORS**: Gestión empresarial de requerimientos
- **Azure DevOps**: Integración completa de ciclo de vida

### Frameworks y Metodologías
- **SAFe**: Scaled Agile Framework para grandes organizaciones
- **RUP**: Rational Unified Process con casos de uso
- **Scrum**: Framework ágil con historias de usuario
- **BABOK**: Business Analysis Body of Knowledge

### Certificaciones Relevantes
- **CBAP**: Certified Business Analysis Professional
- **PMI-PBA**: Professional in Business Analysis
- **IREB**: International Requirements Engineering Board
- **Agile certifications**: CSM, PSM, SAFe

---

*Presentación basada en el Compendio Exhaustivo sobre Ingeniería de Requerimientos y Validación de Software - Semana 3, LTI_05A_INS-IS-ASC*