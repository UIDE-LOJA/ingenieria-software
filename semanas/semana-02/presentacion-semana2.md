# Presentación Semana 2: Requerimientos y Elicitación
## Caso de Uso Conductor: Marketplace Agrícola Inclusivo

---

## 🎯 Objetivos de la Presentación

- Traducir la problemática del **Marketplace Agrícola** en requerimientos funcionales y no funcionales claros.
- Seleccionar técnicas de **elicitación** (entrevistas, workshops, prototipos) que conecten con pequeños productores y compradores urbanos.
- Estructurar un **SRS/backlog inicial** que incorpore equidad algorítmica, trazabilidad y certificaciones digitales.
- Definir criterios de aceptación medibles para asegurar rendimiento, seguridad y accesibilidad de la plataforma.

---

## 📊 Agenda

1. **Contexto del caso Agrimarket**
2. **Requerimientos funcionales y no funcionales**
3. **Técnicas de elicitación aplicadas**
4. **Borrador SRS / backlog inicial**
5. **Próximos pasos y métricas de validación**

---

## 🌾 Caso de Uso: Marketplace Agrícola

> *Problemática*: 84.5 % de las UPAs son de agricultura familiar pero poseen solo 20 % de la tierra. El 75.6 % son pequeños productores (<10 ha) y apenas 7.4 % acceden a crédito; 6.8 % recibe asistencia técnica. Pobreza rural 43.3 % vs. 20.9 % urbana.

> *Solución propuesta*: marketplace digital con algoritmo de asignación equitativa, catálogo sin selección directa de productor, rotación automática, trazabilidad de punta a punta, certificaciones orgánicas, geolocalización logística y dashboard analítico.

---

## ✅ Requerimientos Funcionales (RF)

- RF-1: El catálogo permitirá a consumidores describir su pedido (producto, volumen, certificación) sin elegir productor específico; el sistema asignará automáticamente.
- RF-2: El algoritmo de asignación implementará rotación aleatoria ponderada para distribuir pedidos equitativamente entre productores habilitados.
- RF-3: La plataforma registrará la trazabilidad completa (lote, finca, transporte, entrega) disponible para comprador y auditor.
- RF-4: Generar certificados digitales para productos orgánicos o con buenas prácticas, visibles en cada ficha.
- RF-5: Dashboard para productores con métricas de ventas, rotación de inventario y alertas de oportunidad.
- RF-6: Módulo de logística que optimiza rutas mediante geolocalización y disponibilidad de transporte comunitario.

*(Basado en las definiciones de RF del compendio: servicios que el sistema debe proveer, reacciones ante entradas específicas y restricciones de comportamiento).*

---

## 🔒 Requerimientos No Funcionales (RNF)

- **Rendimiento**: procesar al menos 50 transacciones/segundo y responder cotizaciones ≤800 ms en hora pico (atributo de rapidez medible).
- **Seguridad**: el sistema no debe permitir que productores modifiquen certificados ajenos; autenticación MFA para paneles; cifrado TLS 1.3.
- **Fiabilidad/Disponibilidad**: 99.5 % mensual; respaldo con failover regional.
- **Usabilidad/Accesibilidad**: interfaz móvil con lectura fácil (índice Gunning-Fog <12), soporte offline parcial para zonas rurales.
- **Regulatorio**: cumplimiento de normativa MAG sobre trazabilidad y protección de datos personales.
- **Operacional**: la asignación algorítmica debe ser auditable; guardar logs para inspecciones (inspirado en IEEE 830 y buenas prácticas del compendio).

---

## 🧠 Técnicas de Elicitación Aplicadas

- **Entrevistas semiestructuradas** con asociaciones de agricultura familiar para captar escenarios de inequidad y requisitos de certificación.
- **Workshops de co-creación** (clientes finales + cooperativas) para priorizar RNF como accesibilidad y latencia.
- **Prototipos de baja fidelidad** del catálogo y dashboard para validar el flujo sin selección explícita de productor.
- **Observación contextual** en ferias rurales para entender limitaciones de conectividad y procesos de entrega.
- **Escenarios “What if…?”** (Kaner, 2003) para probar variaciones: demandas imprevistas, productor con inventario cero, falla en logística.

Cada técnica se alinea con el compendio (entrevistas, workshops, prototipos) para reducir ambigüedad y descubrir requerimientos implícitos.

---

## 📝 Borrador SRS / Backlog Inicial

1. **Visión general**
   - Propósito, alcance del Marketplace Agrícola y stakeholders (productores, compradores, cooperativas, MAG).
2. **Requerimientos funcionales** (RF-1 … RF-n).
3. **Requerimientos no funcionales** clasificados por producto, organización y externos.
4. **Modelos de usuario** (personas: productora rural, comprador retail, administrador MAG).
5. **Casos de uso prioritarios**:
   - Registrar productor y certificaciones.
   - Capturar demanda de consumo.
   - Ejecutar algoritmo de asignación y notificar resultados.
   - Generar trazabilidad y certificados.
6. **Criterios de aceptación** cuantitativos (rendimiento, seguridad, usabilidad).
7. **Backlog inicial** en formato épica → features → user stories (ej. “Como consumidor quiero ingresar requisitos sin elegir productor para garantizar equidad”).

*(Estructura alineada con IEEE Std 830-1998 y guías de Sommerville & Sawyer).*

---

## 📈 Priorización y Métricas

- **Priorización incremental (Scrum)**: primero funcionalidades núcleo (catálogo, asignación, trazabilidad), luego analytics y optimización logística.
- **KPIs de validación**:
  - % de productores activos asignados por semana (meta ≥80 %).
  - Tiempo medio de asignación (≤2 s).
  - Exactitud de trazabilidad auditada (≥98 %).
  - Accesos móviles exitosos en zonas rurales (≥90 %).
- **Definición de listo**: requerimientos redactados sin ambigüedad, con criterios de aceptación y RNF medibles (siguiendo la recomendación de que los RNF sean cuantificables).

---

## 🚀 Próximos Pasos

1. Validar el algoritmo de asignación con datos históricos (FAO/MAG) y ajustar ponderadores.
2. Ejecutar pruebas piloto de elicitación continua con productores de tres provincias.
3. Completar el SRS compartido para revisión (inspecciones al estilo Gilb & Graham, 1993).
4. Preparar prototipo navegable y escenarios de prueba “What if…?” antes de Semana 3.

---

## 📚 Referencias Clave

- IEEE (1998). *Recommended Practice for Software Requirements Specifications (IEEE Std 830-1998).*
- Kotonya, G. & Sommerville, I. (1998). *Requirements Engineering: Processes and Techniques.*
- Robertson, S. & Robertson, J. (1999). *Mastering the Requirements Process.*
- Kaner, C. (2003). *Scenario Testing.*
- Beck, K. (1999). *Extreme Programming Explained.*

---

*Presentación elaborada a partir del Compendio Semana 2 y contextualizada para el Marketplace Agrícola con asignación equitativa.*
