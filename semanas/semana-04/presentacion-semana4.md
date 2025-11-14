# Presentación Semana 4: Estrategia de Desarrollo y Flujo de Trabajo
## Caso de Uso Conductor: Marketplace Agrícola Inclusivo

---

## 🎯 Objetivos de la Presentación

- Evaluar cuándo aplicar enfoques **plan-driven** vs. **ágiles** para el marketplace agrícola.
- Operativizar **Scrum + Kanban** para entregar incrementos que garanticen la asignación equitativa de pedidos.
- Implementar ciclos de **backlog grooming y sprint planning** alineados con los productores y stakeholders rurales.
- Normalizar un **flujo Git colaborativo** que preserve la trazabilidad del código y facilite CI/CD.

---

## 📊 Agenda

1. Contexto del proyecto Marketplace Agrícola
2. Plan-driven vs. Ágil: criterios de decisión
3. Scrum + Kanban aplicados al caso
4. Grooming del backlog y planeación de sprints
5. Flujo Git y gestión de versiones del equipo

---

## 🌱 Contexto del Marketplace Agrícola

- 84.5 % de las UPAs son familiares y solo controlan 20 % de la tierra; 75.6 % son pequeños productores (<10 ha).
- Menos del 10 % accede a crédito (7.4 %) o asistencia técnica (6.8 %); pobreza rural alcanza 43.3 %.
- Plataforma digital propuesta:
  - Catálogo sin selección directa del productor.
  - Algoritmo de asignación/rotación equitativa.
  - Certificaciones orgánicas y trazabilidad del lote.
  - Logística geolocalizada y dashboard para productores.
- Necesitamos un proceso que combine formalidad (para transparencia ante MAG/FAO) con adaptabilidad a requerimientos cambiantes de campo.

---

## ⚖️ Plan-Driven vs. Ágil en el Caso

| Factor (Sommerville, 2012) | Necesidad del Marketplace | Enfoque sugerido |
| --- | --- | --- |
| Especificaciones detalladas previas | Certificaciones, trazabilidad y cumplimiento MAG requieren documentación exhaustiva | **Plan-driven** para módulos regulados |
| Entrega incremental práctica | Algoritmo equitativo y app móvil necesitan iteraciones frecuentes con usuarios rurales | **Ágil** |
| Tamaño del equipo | Célula de 8–10 personas multidisciplinaria | **Agile-friendly** |
| Vida útil prolongada | Plataforma nacional con soporte ≥5 años | Mezcla: documentación base + releases incrementales |

**Decision**: Arquitectura y requisitos regulatorios siguen un mini-V Model (planes de prueba ligados a requerimientos); funcionalidades de front/logística se desarrollan con Scrum iterativo.

---

## 🌀 Scrum + Kanban para el Marketplace

- **Sprint** de 2 semanas, con objetivo inmutable (ej. “Liberar dashboard de trazabilidad”).
- **Roles**:
  - Product Owner: representante del consorcio productor, prioriza backlog y vela por equidad.
  - Scrum Master: facilita ceremonias, elimina impedimentos (e.g., bloqueos legales).
  - Development Team: UX, backend, data, mobile y QA auto-organizados.
- **Kanban board** complementario (Selected → Analysis → Development → Testing → Done + Expedite Lane) para visualizar WIP y urgencias (ej. bug en pagos).
- **Prácticas Kanban clave**: visualizar el flujo y limitar WIP (máx. 2 historias por dev) para evitar congestión en integración.

---

## 📋 Grooming del Backlog y Sprint Planning

- **Product Backlog** = lista viva de épicas/historias (equidad algorítmica, trazabilidad, certificaciones, logística).
- **Grooming continuo**:
  1. **Refinamiento**: desglosar historias (“Como productor quiero recibir pedidos rotados…”) en PBIs listos.
  2. **Estimación**: story points mediante planning poker (apoyo de Cohn, 2005).
  3. **Priorización**: PO ordena según valor social (número de productores impactados) y riesgos regulatorios.
  4. **Adición**: incorporar hallazgos de campo o defectos (ej. fallas en geolocalización).
- **Sprint Planning**:
  - PO presenta objetivo del sprint (e.g., “activar certificaciones digitales piloto”).
  - Equipo selecciona PBIs listos y define tareas técnicas.
  - Se crea el **Sprint Backlog** y se confirman responsables.
- **XP Planning Game** como apoyo para releases: si no llegamos a la fecha de feria agrícola, se reduce alcance, no se extiende calendario.

---

## 🔧 Git Básico y Flujo de Trabajo

- **Repositorio central** (Git) + espacios de trabajo locales.
- Flujo recomendado:
  1. `git pull` / checkout de rama principal.
  2. Crear branch por historia (`feature/asignacion-equitativa`).
  3. Desarrollar y commitear incrementalmente (mensajes claros).
  4. Merge mediante Pull Request con revisión cruzada (code review + pruebas).
- **Branching model**:
  - `main`/`release`: versiones estables auditables (para MAG).
  - `develop`: integración continua.
  - Feature branches y hotfix branches según sea necesario.
- **Sincronización**: uso de diffs/deltas para optimizar cambios; merges frecuentes para evitar divergencias largas.
- Soporte a CI/CD: cada merge dispara pruebas y despliegues al entorno de staging para pilotos con productores.

---

## 🚀 Próximos Pasos Operativos

1. Documentar la decisión híbrida (mini-V para cumplimiento + Scrum/Kanban para funcionalidades).
2. Completar un ciclo de backlog grooming con representantes de agricultores de 3 provincias.
3. Establecer límites de WIP y políticas claras para el Expedite Lane (casos críticos).
4. Configurar el repositorio Git con ramas iniciales y pipeline CI/CD.
5. Preparar la planificación del Sprint 1 enfocada en MVP de catálogo + asignación equitativa.

---

## 📚 Referencias Clave

- Sommerville, I. (2012). *Ingeniería de Software (9ª ed.).*
- Schwaber, K. (2004). *Agile Project Management with Scrum.*
- Cohn, M. (2005). *Agile Estimating and Planning.*
- Beck, K. (2000). *Extreme Programming Explained.*
- Pilato, C. et al. (2008). *Subversion Version Control* (principios aplicados a Git).

---

*Presentación basada en el compendio de Semana 4 y contextualizada para el Marketplace Agrícola inclusivo.*
