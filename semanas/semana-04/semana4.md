I. Desarrollo Dirigido por un Plan vs. Desarrollo Ágil (Scrum y Kanban)
El proceso de ingeniería de software se clasifica a menudo en procesos dirigidos por un plan (plan-driven) o procesos ágiles. El equilibrio entre estos enfoques depende del tipo de proyecto y las habilidades del personal disponible.
1. Desarrollo Dirigido por un Plan
Los procesos dirigidos por un plan, como el Modelo en Cascada (waterfall), requieren que todas las actividades del proceso se planifiquen y programen con anticipación, y el avance se mide en función de dicho plan.
En un enfoque basado en un plan, la iteración ocurre dentro de las actividades, utilizando documentos formales para la comunicación entre las etapas del proceso, como un documento de especificación de requerimientos. Estos enfoques son la manera tradicional de gestionar grandes proyectos y son adecuados para sistemas críticos de seguridad que requieren un análisis exhaustivo antes de la implementación.
Un ejemplo de la secuencia de un proceso dirigido por un plan es el Modelo V de desarrollo, que vincula los planes de prueba con las actividades de desarrollo secuenciales.
2. Desarrollo Ágil
Los métodos ágiles surgieron como respuesta al descontento con los enfoques engorrosos de la ingeniería de software basada en la planeación, que a menudo incurrían en costos de documentación y diseño demasiado altos para sistemas pequeños y medianos.
Los métodos ágiles se basan en el enfoque incremental para la especificación, el desarrollo y la entrega del software. Están diseñados para enfrentar los requerimientos que cambian rápidamente durante el proceso de desarrollo.
La filosofía ágil se rige por el Manifiesto Ágil, que valora:
• A los individuos y las interacciones sobre los procesos y las herramientas.
• Al software operativo sobre la documentación exhaustiva.
• La colaboración con el cliente sobre la negociación del contrato.
• La respuesta al cambio sobre el seguimiento de un plan.
Según Sommerville (2012), la decisión de adoptar un enfoque ágil o basado en un plan debe considerar varios factores:
1. ¿Se requiere una especificación y diseño detallados antes de la implementación? Si es así, se recomienda un enfoque basado en un plan.
2. ¿Es práctica una estrategia de entrega incremental? En caso afirmativo, deben considerarse los métodos ágiles.
3. ¿Qué tan grande es el sistema? Los métodos ágiles son más efectivos con equipos pequeños que pueden comunicarse de manera informal.
4. ¿Cuál es el tiempo de vida esperado del sistema? Los sistemas con lapsos de vida prolongados podrían requerir más documentación de diseño.
3. Marcos Ágiles: Scrum y Kanban
Scrum Scrum es una metodología ágil de desarrollo de software muy popular, concebida por Jeff Sutherland y su equipo a principios de la década de 1990.
Scrum es un marco liviano y ágil que ofrece pautas para dirigir y supervisar el proceso de desarrollo de software y productos. Si bien Scrum no prescribe prácticas técnicas de desarrollo (a diferencia de XP), es prescriptivo en la definición de roles y el proceso.
• El Sprint: El trabajo en Scrum se realiza en períodos fijos de tiempo llamados sprints, que generalmente duran entre dos y cuatro semanas (o un mes o menos). Los sprints son la unidad de planeación en la que se valora, se selecciona y se implementa el software. El objetivo del sprint no puede cambiarse durante su ejecución.
• Roles Clave:
    ◦ Propietario del Producto (Product Owner): Es responsable de optimizar el valor añadido del producto y del trabajo realizado por el equipo. También se encarga de gestionar el Backlog del Producto y priorizar sus elementos.
    ◦ Scrum Master: Es un experto en Scrum cuyo trabajo es guiar al equipo en el uso efectivo del método. Actúa como líder y asistente del Equipo Scrum, protegiendo al equipo de distracciones externas y asegurando la comprensión y aplicación de Scrum.
    ◦ Equipo de Desarrollo (Development Team): Se compone de profesionales que trabajan y completan los productos acabados incrementales. El equipo es autoorganizado; no recibe instrucciones sobre cómo convertir el Product Backlog en incrementos de funcionalidad potencialmente liberable.
Kanban El método Kanban es una metodología lean (esbelta) que describe prácticas para mejorar cualquier proceso o flujo de trabajo. Kanban se enfoca en la gestión del cambio y la entrega de servicios, promoviendo la comprensión de las necesidades y expectativas del cliente.
Kanban depende de seis prácticas centrales:
1. Visualizar el flujo de trabajo usando un Kanban board.
2. Limitar la cantidad de trabajo en curso (Work In Process o WIP).
El uso de un tablero Kanban facilita la gestión del trabajo y la visualización del progreso, lo que puede ser utilizado incluso por un equipo Scrum para organizar su reunión de planeación diaria.

--------------------------------------------------------------------------------
II. Grooming del Backlog y Planning
1. El Backlog del Producto
El desarrollo de productos se impulsa mediante un "Product Backlog", que es una lista de tareas pendientes (to-do list) que define lo que se debe hacer para completar el producto. Esta lista se refina e incrementa durante el proceso de desarrollo.
2. Backlog Grooming (Refinamiento)
El término "backlog grooming" (o refinamiento del backlog) se utiliza para cubrir las actividades que modifican el Product Backlog.
Estas actividades incluyen:
1. Refinamiento: Análisis y refinamiento de los elementos existentes del Product Backlog (PBIs) para crear PBIs más detallados. Esto puede generar nuevos elementos.
2. Estimación: Asignar estimaciones de esfuerzo (a menudo en story points) a los PBIs.
3. Priorización: Reorganizar los PBIs para reflejar las prioridades cambiantes del cliente o del negocio.
4. Adición de ítems: Integrar nuevos requerimientos o defectos descubiertos en la lista.
El Propietario del Producto tiene un rol crítico, ya que es la autoridad para decidir qué elementos del backlog tienen prioridad y si el backlog debe reorganizarse debido a los cambios sugeridos.
3. Planificación de Sprint (Scrum)
Cada sprint comienza con una Reunión de Planificación del Sprint (Sprint Planning Meeting), donde los miembros del equipo deciden colectivamente qué PBIs se implementarán.
La reunión de planificación involucra a todo el Equipo Scrum. El Propietario del Producto presenta el objetivo del sprint y los elementos del Product Backlog de mayor prioridad listos para la implementación.
Durante la planificación, el equipo realiza tres acciones principales:
1. Selección: El equipo selecciona los elementos a mover desde el Product Backlog al Sprint Backlog.
2. Determinación del trabajo: El equipo de desarrollo determina qué puede entregar dentro de la caja de tiempo (time-box) asignada para el sprint y define el trabajo necesario para entregar ese incremento.
3. Roles: El equipo decide qué roles se necesitan y cómo se cubrirán.
El Sprint Backlog es el registro que documenta todos los requisitos del sprint actual en los que se va a trabajar, y se crea durante el proceso de planificación.
Ejemplo Visual: Tablero Kanban Conceptual
Aunque un tablero Kanban es una herramienta ágil, puede ser útil para la visualización de la planificación en tiempo real. La figura 3.4 de las fuentes muestra un tablero organizado en columnas que representan las etapas de desarrollo, como:
Selected (Seleccionado)
Analysis (Análisis)
Development (Desarrollo)
Testing (Pruebas)
Done (Terminado)
Expedite Lane (Carril Rápido)
Doing / Done
Doing / Done
Doing / Done
...
Las tarjetas en el tablero contienen historias de usuario o defectos y se avanzan de "to do" a "doing" y "done" a medida que progresa el proyecto.
Planeación Ágil en Programación Extrema (XP) En la Programación Extrema (XP), la planeación se realiza mediante el "juego de planeación" (planning game), que involucra al equipo de desarrollo y a los representantes del cliente.
Las etapas del juego de planeación incluyen:
1. Identificación de la historia: El equipo y el cliente identifican las historias de usuario que reflejan la funcionalidad.
2. Estimación inicial: El equipo clasifica las historias según el tiempo que tardará su implementación, asignando puntos de esfuerzo hipotéticos.
3. Planeación de la entrega (release): Se seleccionan y refinan las historias para una entrega específica, asegurando que la estimación del esfuerzo sea coherente con la fecha de entrega elegida. Si el trabajo no puede completarse a tiempo, la filosofía XP es reducir el alcance del trabajo en lugar de extender el calendario.

--------------------------------------------------------------------------------
III. Git Básico y Flujo de Trabajo del Equipo
Los conceptos de Git y el flujo de trabajo del equipo se enmarcan en la Administración de la Configuración (CM), que es un proceso de gestión esencial para asegurar que los cambios se apliquen de forma controlada.
1. Gestión de Versiones y SCM
El corazón del flujo de trabajo de código en equipo es el sistema de gestión de versiones (Version Control System - VCS), que rastrea, almacena y controla el acceso a las diferentes versiones de los componentes. Ejemplos de estos sistemas incluyen herramientas de código abierto como Subversion (SVN) y CVS.
El sistema de gestión de versiones permite a los desarrolladores trabajar en paralelo sin interferencia.
2. Flujo de Trabajo y Espacios de Trabajo
Para facilitar el desarrollo independiente, los sistemas de gestión de versiones utilizan el concepto de repositorio público y espacio de trabajo privado.
• Repositorio (Público): Contiene las versiones controladas y estables de los componentes.
• Espacio de trabajo (Workspace) (Privado): Es un área privada donde los desarrolladores pueden modificar el software sin afectar a otros desarrolladores.
El flujo de trabajo básico del equipo incluye:
1. Sacar (Check-out, co): Un desarrollador obtiene componentes del repositorio público para llevarlos a su espacio de trabajo privado.
2. Modificación: El desarrollador realiza cambios en su espacio de trabajo privado.
3. Ingresar (Check-in): El desarrollador devuelve los componentes modificados al repositorio, momento en el que el sistema de gestión de versiones garantiza que no haya interferencia con otros cambios (por ejemplo, notificando conflictos si dos personas modificaron el mismo componente).
Cuando varios miembros del equipo trabajan en paralelo en el mismo componente, el sistema de gestión de versiones a menudo utiliza técnicas como deltas (listas de diferencias) entre versiones para ahorrar espacio y recrear versiones anteriores.
3. Ramificación (Branching) y Combinación (Merging)
Las herramientas de gestión de versiones soportan la gestión de líneas de código (codelines) y líneas base (baselines). Una línea de código es un conjunto de versiones de un componente de software.
El concepto de ramificación (branching) permite el desarrollo en paralelo de diferentes versiones de un sistema, y la combinación (merging) integra los cambios de una ramificación a otra. Esto es crucial cuando se desarrollan nuevas funcionalidades sin interrumpir la línea principal (mainline).
Ejemplo Conceptual Visual: Ramificación y Combinación
Aunque las fuentes no proporcionan código explícito de Git, sí ilustran el concepto de ramificación y combinación utilizando líneas de código.
El desarrollo se realiza en la Línea de Código 1. Se crea una ramificación (branch) para desarrollar una nueva característica. Cuando la característica está lista, se realiza una combinación (merge) para volver a integrar los cambios a la línea principal (Línea de Código 2).
# Flujo de trabajo conceptual de Gestión de Versiones
# Línea de Código 1 (Principal)
V1.0 --- V1.1 --- V1.2
            |
            --- <ramificación> (Creación de Codeline 2.1)
                 |
               V2.1.1 -- V2.1.2 
                 |
            --- <combinación> (Integración en Línea de Código 2)
(Representación basada en la Figura 25.9, que conceptualiza la ramificación y la combinación de codelines).
El uso de sistemas de gestión de versiones robustos y flujos de trabajo claros (como los basados en Git, que implementan estos principios) es esencial para la repetibilidad y la consistencia en los procesos estructurados de Integración Continua/Entrega Continua (CI/CD), que son fundamentales en arquitecturas cloud native.

--------------------------------------------------------------------------------
Referencias Bibliográficas
Ahern, T., et al. (2001). CMMI: Guidelines for Process Integration and Product Improvement. (Citado en).
Arlow, J., & Neustadt, I. (2005). UML 2 and the Unified Process (2nd ed.). (Citado en).
Astels, D. (2003). Test-Driven Development: A Practical Guide. (Citado en).
Beck, K. (1999). Extreme Programming Explained: Embrace Change. Addison-Wesley. (Citado en).
Beck, K. (2000). Extreme Programming Explained: Embrace Change, 2nd ed. Addison-Wesley. (Citado en).
Beck, K. (2002). Test-Driven Development: By Example. Addison-Wesley. (Citado en).
Cohn, M. (2005). Agile Estimating and Planning. Prentice Hall. (Citado en).
Firdaus, J., et al. (2019). Agile-scrum Software Development Monitoring System. International Conference on Electrical, Electronics and Information Engineering (ICEEIE). https://doi.org/10.1109/ICEEIE47180.2019.8981471 (Citado en).
Gonçalves, L. (2018). Scrum. The methodology to become more agile. Controlling & (Citado en).
Garlan, D., & Shaw, M. (1993). An introduction to software architecture. Advances in Software Engineering and Knowledge Engineering, 1, 1–39. (Citado en).
Humphrey, W. S. (1989). Managing the Software Process. Addison-Wesley. (Citado en).
Krutchen, P. (2003). The Rational Unified Process: An Introduction (3rd ed.). Addison-Wesley. (Citado en).
Massol, T., & Husted, S. (2003). JUnit in Action. Manning Publications. (Citado en).
Pilato, C., et al. (2008). Subversion Version Control: Official Guide. O’Reilly Media. (Citado en).
Royce, W. W. (1970). Managing the development of large software systems: concepts and techniques. Proceedings of the 9th International Conference on Software Engineering (ICSE 87). (Citado en).
Schwaber, K. (2004). Agile Project Management with Scrum. Microsoft Press. (Citado en).
Schwaber, K., & Beedle, M. (2001). Agile Software Development with Scrum. Prentice Hall. (Citado en).
Srivastava, V., et al. (2017). SCRUM Model for Agile Methodology. International Conference on Computing, Communication and Automation (ICCCA). https://doi.org/10.1109/CCAA.2017.8229928 (Citado en).
Sommerville, I. (2012). Ingeniería de Software (9a ed.). (Material de origen). (Citado en).