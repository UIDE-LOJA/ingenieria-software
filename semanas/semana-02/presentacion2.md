# Presentación Semana 2: Requerimientos y Elicitación de Software
## Requerimientos Funcionales, No Funcionales y Técnicas de Documentación

---

## 🎯 Objetivos de la Presentación

- Comprender los **requerimientos funcionales y no funcionales** en desarrollo de software
- Analizar técnicas de **elicitación de requerimientos** efectivas
- Explorar estrategias de **documentación inicial** (SRS vs. Backlog)
- Identificar **métricas de calidad** para requerimientos no funcionales

---

## 📊 Agenda

1. **Requerimientos Funcionales y No Funcionales**
2. **Técnicas de Elicitación**
3. **Documentación de Requerimientos**
4. **Enfoques Ágiles vs. Tradicionales**
5. **Aplicaciones Prácticas**

---

## 💼 Conceptos Fundamentales de Requerimientos

### Definición Central

> *"Los requerimientos de software son descripciones de lo que el sistema debe hacer: los servicios que ofrece y las restricciones en su operación"*

### Características Clave
- **Reflejan necesidades del cliente** para que el sistema atienda un propósito específico
- **Clasificación principal**: Funcionales y No Funcionales
- **Contexto**: Fundamentales en ingeniería de software
- **Impacto**: Determinan el éxito o fracaso del proyecto

---

## 🔧 Requerimientos Funcionales (RF)

### Concepto Central
> *"Enunciados acerca de servicios que el sistema debe proveer, de cómo debería reaccionar el sistema a entradas particulares y de cómo debería comportarse el sistema en situaciones específicas"*

### Características Principales
- **Servicios específicos** que el sistema debe proporcionar
- **Comportamiento del sistema** ante entradas particulares
- **Reacciones esperadas** en situaciones específicas
- **Especificaciones** de lo que el sistema NO debe hacer

### Niveles de Especificación
- **Generales**: Funcionalidad principal del sistema
- **Específicos**: Formas de trabajo locales o sistemas preexistentes

---

## 🌾 Caso de Estudio: Marketplace Agrícola

### Requerimiento del Usuario
> *"El MHC-PMS elaborará mensalmente informes administrativos que revelen el costo de los medicamentos prescritos por cada clínica durante ese mes"*

### Problemática Nacional (Ecuador)
> **84.5%** de unidades productivas agropecuarias = agricultura familiar  
> **Solo 20%** de tierra agrícola controlada por pequeños productores  
> **75.6%** son productores pequeños (<10 hectáreas) = **636,375 UPAs**  
> **Solo 7.4%** acceso a crédito + **6.8%** asistencia técnica  
> **Pobreza rural: 43.3%** vs **urbana: 20.9%**

### Especificación Funcional del Sistema
| **ID** | **Descripción** |
|--------|-----------------|
| **RF1** | Registro y perfil de productores con ubicación, cultivos y capacidad productiva |
| **RF2** | Catálogo de productos con precios dinámicos basados en oferta/demanda regional |
| **RF3** | Sistema de cotizaciones directas entre productores y compradores |
| **RF4** | Módulo de microcréditos con evaluación automática de riesgo |
| **RF5** | Plataforma de asistencia técnica con agrónomos certificados |
| **RF6** | Calculadora de costos de producción y rentabilidad por cultivo |

### Requerimientos No Funcionales Críticos
| **Tipo** | **Especificación** | **Justificación** |
|----------|-------------------|-------------------|
| **Accesibilidad** | Compatible con dispositivos móviles básicos (2G/3G) | 67% de productores rurales usa telefonía básica |
| **Usabilidad** | Interfaz en español con iconografía visual | Nivel educativo promedio: primaria incompleta |
| **Disponibilidad** | 95% uptime durante horarios agrícolas (5AM-7PM) | Dependencia crítica para transacciones diarias |
| **Seguridad** | Encriptación de datos financieros y verificación de identidad | Protección contra fraude en transacciones |

### Beneficios del Enfoque Contextualizado
- **Relevancia social**: Aborda problemática real del agro ecuatoriano
- **Impacto medible**: Métricas específicas para población objetivo
- **Sostenibilidad**: Modelo de negocio que beneficia a pequeños productores

---

## 🛡️ Requerimientos No Funcionales (RNF)

### Definición Fundamental
> *"Limitaciones sobre servicios o funciones que ofrece el sistema, a menudo descritos como atributos de calidad, atributos de rendimiento, atributos de seguridad o restricciones generales"*

### Importancia Crítica
- **Más significativos** que requerimientos funcionales individuales
- **Fracaso catastrófico**: Su incumplimiento hace el sistema inútil
- **Ejemplo**: Sistema de aeronave sin fiabilidad no se certifica como seguro

### Dificultades Comunes
- **Articulación compleja** para los interesados
- **Medición objetiva** requiere métricas específicas
- **Interdependencias** con múltiples componentes del sistema

---

## 📊 Clasificación de RNF

### 1. Requerimientos del Producto
- **Rendimiento**: Rapidez, throughput, tiempo de respuesta
- **Fiabilidad**: Tolerancia a fallos, disponibilidad
- **Seguridad**: Protección contra intrusiones
- **Usabilidad**: Facilidad de uso y aprendizaje

### 2. Requerimientos de la Organización
- **Operacionales**: Entorno de funcionamiento
- **Proceso de desarrollo**: Estándares, metodologías
- **Políticas corporativas**: Procedimientos internos

### 3. Requerimientos Externos
- **Regulaciones de seguridad**: Cumplimiento normativo
- **Legislación de privacidad**: Protección de datos
- **Estándares de interoperabilidad**: Compatibilidad

---

## ⚡ Rendimiento y Eficiencia

### Concepto Central
> *"El software debe diseñarse para no desperdiciar los recursos del sistema, como la memoria y los ciclos del procesador"*

### Principio de Medición
**Los requerimientos no funcionales deben escribirse de manera cuantitativa siempre que sea posible**

### Métricas de Rendimiento

| **Propiedad** | **Medida** |
|---------------|------------|
| **Rapidez** | Transacciones/segundo procesadas |
| **Responsividad** | Tiempo de respuesta usuario/evento |
| **Visualización** | Tiempo de regeneración de pantalla |
| **Throughput** | Volumen de datos procesados por unidad de tiempo |

### Consideraciones de Diseño
- **Optimización de algoritmos** para eficiencia computacional
- **Gestión de memoria** para evitar desperdicios
- **Balanceadores de carga** para distribución de trabajo
- **Cacheo estratégico** para reducir latencias

---

## 🔒 Seguridad del Sistema

### Definición
> *"Capacidad del sistema para protegerse contra intrusión accidental o deliberada y habilidad de un sistema para protegerse a sí mismo contra ataques externos"*

### Consecuencias de Fallas
- **Pérdida de disponibilidad** del sistema
- **Daño al sistema** o a sus datos
- **Fuga de información** a personas no autorizadas
- **Compromiso de integridad** de los datos

### Tipos de Requerimientos
- **Requerimientos "no debe"**: Comportamiento inaceptable
- **Ejemplo**: "El sistema no debe permitir que los usuarios modifiquen los permisos de acceso sobre algún archivo que no hayan creado"

---

## 🛡️ Proceso de Análisis de Seguridad

### Metodología
1. **Identificación de activos** a proteger
2. **Evaluación de amenazas** potenciales
3. **Análisis de riesgos** y probabilidades
4. **Diseño de controles** de seguridad
5. **Implementación** de medidas protectivas

### Ejemplo: Marketplace Agrícola - Técnicas de Elicitación

| **Técnica** | **Aplicación en Marketplace** | **Stakeholder** |
|-------------|----------------------------|-----------------|
| **Entrevistas** | Sesiones con productores rurales para entender necesidades específicas | Agricultores familiares, cooperativas |
| **Talleres colaborativos** | Workshops con compradores mayoristas para definir criterios de calidad | Distribuidores, supermercados |
| **Observación directa** | Visitas a mercados locales para entender dinámicas comerciales | Intermediarios, consumidores finales |
| **Prototipos** | App móvil básica para validar usabilidad con productores | Usuarios finales del sistema |
| **Cuestionarios** | Encuestas digitales sobre acceso a tecnología y preferencias | Muestra representativa de 1000+ productores |

---

## 👥 Accesibilidad y Usabilidad

### Usabilidad
> *"Se relaciona con qué tan fácil es para el usuario aprender a utilizar el software y con la facilidad de uso del sistema"*

### Características Deseables
- **Facilidad de aprendizaje** para nuevos usuarios
- **Eficiencia de uso** para usuarios experimentados
- **Tolerancia a errores** del usuario
- **Satisfacción subjetiva** durante el uso

### Cuantificación de Usabilidad

| **Propiedad** | **Medida** |
|---------------|------------|
| **Facilidad de uso** | Tiempo de capacitación |
| **Soporte al usuario** | Número de cuadros de ayuda |
| **Curva de aprendizaje** | Tiempo para alcanzar productividad |
| **Eficiencia** | Tareas completadas por hora |

### Accesibilidad
- **Tolerancia para el error**: Prevención de errores de entrada
- **Diseño inclusivo**: Consideración de usuarios con discapacidades
- **Interfaces adaptativas**: Personalización según necesidades

---

## 🎯 Técnicas de Elicitación de Requerimientos

### Concepto Central
> *"La actividad donde los ingenieros de software trabajan con clientes y usuarios finales para descubrir el dominio de aplicación, qué servicios debe proporcionar el sistema, el desempeño requerido, las restricciones de hardware, etcétera"*

### Objetivos de la Elicitación
- **Descubrir el dominio** de aplicación
- **Identificar servicios** del sistema
- **Determinar restricciones** técnicas y operativas
- **Comprender necesidades** de los stakeholders

### Proceso de Descubrimiento
- **Interacción** con participantes del sistema
- **Análisis de documentación** existente
- **Exploración de requerimientos** de dominio

---

## 💬 Entrevistas como Técnica Principal

### Concepto
> *"El equipo formula preguntas a los participantes sobre el sistema actual y el sistema a desarrollar, y los requerimientos se derivan de las respuestas"*

### Tipos de Entrevistas

#### 1. Entrevistas Cerradas
- **Características**: Conjunto de preguntas preestablecidas
- **Ventajas**: Estructura clara, comparabilidad de respuestas
- **Desventajas**: Limitación en exploración de temas emergentes

#### 2. Entrevistas Abiertas
- **Características**: Sin agenda predefinida
- **Objetivo**: Explorar conflictos y desarrollar comprensión
- **Flexibilidad**: Adaptación según respuestas del entrevistado

### Fortalezas y Limitaciones

#### Fortalezas
- **Comprensión global** de actividades de participantes
- **Interacción directa** con usuarios finales
- **Exploración profunda** de necesidades específicas

#### Limitaciones
- **Conocimiento de dominio**: Menos útil para comprensión técnica profunda
- **Restricciones organizacionales**: Dificultad para descubrir limitaciones
- **Conflictos políticos**: Renuencia a discutir problemas organizacionales

---

## 🤝 Enfoques Colaborativos (Workshops)

### Naturaleza Colaborativa
> *"La elicitación de requerimientos es inherentemente una actividad colaborativa que implica discusiones grupales y el trabajo conjunto con los participantes (stakeholders)"*

### Actividades Clave
- **Priorización** de requerimientos
- **Negociación** entre stakeholders
- **Resolución de conflictos** inevitables
- **Compromiso** en requerimientos finales

### Proceso de Resolución
- **Reuniones de participantes** para resolver diferencias
- **Búsqueda de consenso** en requerimientos
- **Documentación de acuerdos** alcanzados

### Técnicas Empleadas
- **Escenarios de uso** para contextualizacion
- **Prototipos interactivos** para validación
- **Diagramas colaborativos** para visualización

---

## 🔧 Prototipos y Escenarios

### Creación de Prototipos

#### Definición
> *"Modelo ejecutable del sistema en cuestión [que se] muestra a los usuarios finales y clientes para que experimenten con este modelo y constaten si cubre sus necesidades reales"*

#### Funciones Principales
1. **Selección y validación** de requerimientos del sistema
2. **Búsqueda de soluciones** específicas de software
3. **Apoyo al diseño** de interfaces del usuario

#### Ventajas
- **Validación temprana** de requerimientos
- **Retroalimentación directa** de usuarios
- **Desarrollo rápido** de interfaces gráficas

#### Desventajas
- **Falta de documentación** por desarrollo rápido
- **Degradación estructural** del sistema
- **Costos de mantenimiento** elevados
- **Dificultad** para cubrir requerimientos no funcionales

---

## 📖 Escenarios (Historias de Usuario)

### Concepto
> *"Descripciones de sesiones de interacción que son más fáciles de comprender y criticar para las personas que las descripciones abstractas de requerimientos"*

### Utilidad Principal
- **Detallar** descripciones de requerimientos bosquejadas
- **Ejemplificar** sesiones de interacción
- **Facilitar comprensión** para stakeholders no técnicos

### Implementación en XP
- **Expresión de requerimientos** como escenarios o historias
- **Priorización por usuario** para desarrollo
- **Iteraciones cortas** basadas en historias prioritarias

### Beneficios
- **Lenguaje natural** comprensible para todos
- **Contexto real** de uso del sistema
- **Base para estimación** y planificación

---

## 📋 Documento de Requerimientos de Software (SRS)

### Definición
> *"El comunicado oficial de lo que deben implementar los desarrolladores. Incluye los requerimientos del usuario y una especificación detallada de los requerimientos del sistema"*

### Importancia Estratégica
- **Esencial** especialmente con contratistas externos
- **Compromiso** entre comunicación, detalle y evolución
- **Base contractual** para desarrollo
- **Referencia** para validación y pruebas

### Usuarios del Documento
- **Clientes**: Comprensión de funcionalidades
- **Administradores**: Gestión de proyecto
- **Ingenieros**: Especificaciones técnicas
- **Examinadores**: Criterios de verificación

---

## 📖 Estructura del SRS (IEEE 1998)

### Componentes Principales

| **Capítulo** | **Descripción** |
|--------------|-----------------|
| **Prefacio** | Define los lectores, la historia de versiones y el resumen de cambios |
| **Introducción** | Describe la necesidad del sistema, sus funciones y cómo se ajusta a los objetivos empresariales |
| **Glosario** | Define los términos técnicos usados en el documento |
| **Definición de requerimientos del usuario** | Presenta los servicios ofrecidos al usuario, usando lenguaje natural, diagramas comprensibles |
| **Especificación de requerimientos del sistema** | Detalla los requerimientos funcionales y no funcionales |
| **Apéndices** | Información específica detallada (hardware, bases de datos) |

### Características de Calidad
- **Completitud**: Todos los requerimientos especificados
- **Consistencia**: Sin contradicciones internas
- **Verificabilidad**: Criterios objetivos de cumplimiento
- **Trazabilidad**: Vinculación entre necesidades y especificaciones

---

## 🏃‍♂️ Backlog Inicial (Enfoque Ágil)

### Filosofía Ágil
> *"Los métodos de desarrollo ágil argumentan que el documento de requerimientos formal se vuelve obsoleto rápidamente"*

### Alternativa Propuesta
- **Enfoques incrementales** como Programación Extrema (XP)
- **Historias de usuario** en lugar de documentos formales
- **Adaptabilidad** a cambios frecuentes
- **Colaboración continua** con stakeholders

### Ventajas del Enfoque Ágil
- **Flexibilidad** ante cambios de requerimientos
- **Retroalimentación rápida** de usuarios
- **Desarrollo iterativo** con valor temprano
- **Menor documentación** formal requerida

---

## 📝 Historias de Usuario (User Stories)

### Concepto en XP
> *"Los requerimientos se recopilan de manera incremental y se escriben en tarjetas como historias de usuario. El usuario las prioriza para su implementación en el siguiente incremento del sistema"*

### Características
- **Expresión narrativa** de requerimientos
- **Priorización por usuario** para desarrollo
- **Descomposición en tareas** por equipo técnico
- **Base para estimación** de esfuerzo

### Proceso de Desarrollo
1. **Escritura** de historias de usuario
2. **Priorización** por valor de negocio
3. **Estimación** de esfuerzo técnico
4. **Descomposición** en tareas específicas
5. **Implementación** incremental

### Ejemplo: Historia de Usuario - Marketplace Agrícola
> **Como** productor agrícola familiar  
> **Quiero** publicar mis productos con precios competitivos  
> **Para** vender directamente sin intermediarios y obtener mejor rentabilidad

**Criterios de Aceptación:**
- Registro con ubicación GPS y verificación de identidad
- Catálogo con fotos, descripción y precio por unidad/kg
- Sistema de calificaciones de compradores
- Notificaciones push para ofertas recibidas

---

## 📊 Backlog del Producto (Scrum)

### Marco de Trabajo Scrum
- **Product Backlog**: Registro de requerimientos establecido por Product Owner
- **Sprint Backlog**: Documentación de requisitos del sprint actual
- **Desarrollo iterativo**: Sprints de 2 a 4 semanas
- **Entrega incremental**: Valor en cada iteración

### Estructura de Proyecto

```
MVP Marketplace Agrícola (12 semanas)
├── Sprint 1: Registro y Perfiles de Productores (3 semanas)
│   ├── HU1: Registro básico con verificación SMS
│   ├── HU2: Perfil de productor con ubicación GPS
│   └── HU3: Catálogo de productos con fotos
├── Sprint 2: Sistema de Cotizaciones (3 semanas)
│   ├── HU4: Publicación de ofertas por compradores
│   ├── HU5: Respuestas directas de productores
│   └── HU6: Sistema básico de notificaciones
├── Sprint 3: Transacciones y Pagos (3 semanas)
│   ├── HU7: Integración con pasarelas de pago
│   ├── HU8: Confirmación de entrega
│   └── HU9: Sistema de calificaciones mutuas
└── Sprint 4: Microcréditos Básicos (3 semanas)
    ├── HU10: Evaluación automatizada de riesgo
    ├── HU11: Solicitud y aprobación de créditos
    └── HU12: Dashboard financiero del productor
```

### Características del Proceso
- **Planificación incremental** basada en prioridades
- **Desarrollo oportuno** de características críticas
- **Adaptabilidad** a cambios de requerimientos

---

## ⚖️ Comparación: Enfoque Tradicional vs. Ágil

### Enfoque Tradicional (SRS)

#### Ventajas
- **Documentación completa** y detallada
- **Claridad contractual** para proyectos externos
- **Trazabilidad formal** de requerimientos
- **Base sólida** para proyectos complejos

#### Desventajas
- **Obsolescencia rápida** de documentos
- **Rigidez** ante cambios de requerimientos
- **Overhead** de documentación extensiva
- **Tiempo elevado** de especificación inicial

### Enfoque Ágil (Backlog)

#### Ventajas
- **Flexibilidad** ante cambios frecuentes
- **Desarrollo incremental** con valor temprano
- **Colaboración continua** con stakeholders
- **Adaptación rápida** a feedback

#### Desventajas
- **Menor documentación** formal
- **Dificultad en proyectos** muy complejos
- **Dependencia** de disponibilidad de stakeholders
- **Riesgo** de pérdida de visión global

---

## 🏢 Aplicaciones en el Mundo Real

### Casos de Uso por Industria

#### Sistemas Críticos
- **Aeroespacial**: Requerimientos de seguridad estrictos
- **Médicos**: Regulaciones y certificaciones
- **Financiero**: Auditoría y cumplimiento
- **Enfoque**: Documentación formal (SRS)

#### Aplicaciones Comerciales
- **Software empresarial**: Cambios frecuentes de negocio
- **E-commerce**: Evolución rápida de funcionalidades
- **Startups**: Validación temprana de mercado
- **Marketplace Agrícola**: Adaptación a necesidades rurales específicas
- **Enfoque**: Metodologías ágiles (Backlog)

#### Proyectos Híbridos
- **Sistemas distribuidos**: Combinación de enfoques
- **Modernización legacy**: Migración gradual
- **Integraciones complejas**: Documentación selectiva

---

## 🛠️ Herramientas y Tecnologías

### Herramientas para SRS Tradicional
- **Requisite Pro**: Gestión de requerimientos IBM
- **DOORS**: Dynamic Object-Oriented Requirements System
- **Visure Requirements**: Plataforma ALM completa
- **Enterprise Architect**: Modelado y documentación

### Herramientas Ágiles
- **Jira**: Gestión de user stories y sprints
- **Azure DevOps**: Backlog management integrado
- **Confluence**: Documentación colaborativa
- **Trello**: Gestión visual de requerimientos

### Herramientas de Elicitación
- **Miro/Mural**: Workshops virtuales colaborativos
- **Figma**: Prototipado rápido de interfaces
- **Balsamiq**: Mockups y wireframes
- **InVision**: Prototipos interactivos

---

## 📊 Métricas y Medición de Calidad

### Métricas para Requerimientos Funcionales
- **Completitud**: Porcentaje de funcionalidades especificadas
- **Consistencia**: Ausencia de contradicciones
- **Verificabilidad**: Criterios de aceptación claros
- **Trazabilidad**: Vinculación con objetivos de negocio

### Métricas para Requerimientos No Funcionales

#### Rendimiento
- **Tiempo de respuesta**: < 2 segundos para consultas
- **Throughput**: > 1000 transacciones por segundo
- **Disponibilidad**: 99.9% de uptime anual

#### Seguridad
- **Tiempo de detección**: < 30 segundos para intrusiones
- **Cobertura de auditoría**: 100% de accesos registrados
- **Cumplimiento**: 0 vulnerabilidades críticas

#### Usabilidad (Marketplace Agrícola)
- **Tiempo de aprendizaje**: < 30 minutos para registro de producto
- **Tasa de error**: < 3% en proceso de cotización
- **Satisfacción**: > 85% de productores recomendarían la plataforma
- **Accesibilidad**: Compatible con 95% de dispositivos rurales

---

## 🚀 Tendencias y Evolución

### Nuevos Paradigmas

#### 1. Requerimientos Basados en Datos
- **Analytics de usuario** para identificar necesidades
- **A/B testing** para validar funcionalidades
- **Machine learning** para predicción de requerimientos

#### 2. Requerimientos Continuos
- **DevOps integration** para feedback rápido
- **Feature flags** para experimentación
- **Telemetría** en tiempo real

#### 3. Requerimientos Colaborativos
- **Design thinking** para centrar en usuario
- **Co-creation** con stakeholders
- **Crowdsourcing** de ideas

### Tecnologías Emergentes
- **IA para análisis** de requerimientos
- **NLP** para procesamiento de documentos
- **Blockchain** para trazabilidad
- **IoT** para requerimientos de sistemas distribuidos

---

## 🎯 Mejores Prácticas

### Elicitación Efectiva
1. **Involucra stakeholders** diversos desde el inicio
2. **Usa múltiples técnicas** de elicitación
3. **Documenta contexto** y rationale de decisiones
4. **Valida temprano** con prototipos

### Documentación de Calidad
1. **Escritura clara** y sin ambigüedades
2. **Criterios de aceptación** específicos y medibles
3. **Priorización explícita** de requerimientos
4. **Versionado y trazabilidad** completos

### Gestión de Cambios
1. **Proceso formal** para cambios de requerimientos
2. **Análisis de impacto** antes de modificaciones
3. **Comunicación proactiva** a stakeholders
4. **Documentación** de rationale de cambios

---

## 💡 Lecciones Clave

### Principios Fundamentales
1. **Los requerimientos son la base** del éxito del proyecto
2. **Elicitación efectiva** requiere múltiples técnicas
3. **Documentación debe balancear** detalle y flexibilidad
4. **Stakeholders deben participar** activamente

### Decisiones de Diseño
- **Conoce tu contexto**: Proyecto crítico vs. comercial
- **Evalúa capacidades** del equipo y organización
- **Considera horizonte** temporal del proyecto
- **Planifica para evolución** de requerimientos

### Evolución Continua
- **Metodologías híbridas** combinan lo mejor de ambos mundos
- **Herramientas colaborativas** facilitan elicitación
- **Automatización** mejora gestión de requerimientos
- **Feedback continuo** valida decisiones de diseño

---

## 🔮 Reflexiones Finales

### Preguntas para Considerar
- ¿Cómo balancear **documentación formal** vs. **agilidad** en tu contexto?
- ¿Qué **técnicas de elicitación** son más efectivas para tu dominio?
- ¿Cómo **medir objetivamente** requerimientos no funcionales?
- ¿Cuándo es apropiado **cambiar de enfoque** durante el proyecto?

### El Futuro de los Requerimientos
> *"Los requerimientos evolucionarán hacia modelos más colaborativos, basados en datos y adaptativos, integrando feedback continuo y tecnologías emergentes para mejor alineación con necesidades de negocio"*

---

## 📖 Para Profundizar

### Lecturas Fundamentales
- Sommerville, I. & Sawyer, P. *Requirements Engineering: A Good Practice Guide*
- Robertson, S. & Robertson, J. *Mastering the Requirements Process*
- Kotonya, G. & Sommerville, I. *Requirements Engineering: Processes and Techniques*

### Recursos Técnicos
- **Estándares IEEE**: IEEE Std 830-1998 para SRS
- **Metodologías ágiles**: Beck, K. *Extreme Programming Explained*
- **Seguridad**: Pfleeger *Security in Computing*

### Especializaciones Avanzadas
- **Requirements Engineering**: Procesos y técnicas avanzadas
- **User Experience Design**: Técnicas de elicitación centradas en usuario
- **System Architecture**: Requisitos no funcionales para sistemas complejos
- **Agile at Scale**: Gestión de requerimientos en organizaciones grandes

---

*Presentación basada en el compendio de Semana 2 - Ingeniería de Software:  
Requerimientos, Elicitación y Documentación Inicial de Software*