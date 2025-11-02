Compendio Exhaustivo sobre Requerimientos, Elicitación y Documentación Inicial de Software
Este compendio presenta un análisis detallado sobre los requerimientos funcionales y no funcionales (incluyendo rendimiento, seguridad y accesibilidad), las principales técnicas de elicitación (entrevistas, workshops y prototipos) y la estructura de un borrador de Documento de Requerimientos de Software (SRS) o backlog inicial, basándose estrictamente en las fuentes proporcionadas.

--------------------------------------------------------------------------------
I. Requerimientos Funcionales y No Funcionales
Los requerimientos de software son descripciones de lo que el sistema debe hacer: los servicios que ofrece y las restricciones en su operación. Estos requerimientos reflejan las necesidades de los clientes para que un sistema atienda un propósito específico. Los requerimientos del sistema se clasifican comúnmente en funcionales y no funcionales.
A. Requerimientos Funcionales
Los requerimientos funcionales (RF) son "enunciados acerca de servicios que el sistema debe proveer, de cómo debería reaccionar el sistema a entradas particulares y de cómo debería comportarse el sistema en situaciones específicas". En ciertos casos, también especifican lo que el sistema no debe hacer.
Los requerimientos funcionales pueden variar desde enunciados generales que cubren la funcionalidad principal del sistema hasta requerimientos muy específicos que reflejan las formas de trabajo locales o los sistemas preexistentes de una organización.
Ejemplo de Requerimiento Funcional (RF)
A continuación, se presenta un ejemplo de cómo un requerimiento funcional de usuario se descompone en requerimientos de sistema más detallados, relacionado con el sistema de Gestión de Pacientes de Salud Mental (MHC-PMS):
Definición del requerimiento del usuario:
1. El MHC-PMS elaborará mensualmente informes administrativos que revelen el costo de los medicamentos prescritos por cada clínica durante ese mes.
Especificación de los requerimientos del sistema: 1.1 En el último día laboral de cada mes se redactará un resumen de los medicamentos prescritos, su costo y las clínicas que los prescriben. 1.2 El sistema elaborará automáticamente el informe que se imprimirá después de las 17:30 del último día laboral del mes. 1.5 El acceso a los informes de costos se restringirá a usuarios autorizados en la lista de control de acceso administrativo.
B. Requerimientos No Funcionales (RNF)
Los requerimientos no funcionales (RNF) son "limitaciones sobre servicios o funciones que ofrece el sistema", y a menudo se les describe como atributos de calidad, atributos de rendimiento, atributos de seguridad o restricciones generales en un sistema. Estos requerimientos suelen ser más difíciles de articular para los interesados.
Un aspecto crucial de los RNF es que a menudo son más significativos que los requerimientos funcionales individuales, ya que "el fracaso para cubrir los requerimientos no funcionales haría que todo el sistema fuera inútil". Por ejemplo, si un sistema de aeronave no cumple con sus requerimientos de fiabilidad, no se certificará como dispositivo seguro.
Los RNF pueden clasificarse en tres categorías principales,:
1. Requerimientos del producto: Especifican o restringen el comportamiento del software. Incluyen rendimiento, fiabilidad, seguridad y usabilidad.
2. Requerimientos de la organización: Derivan de las políticas y procedimientos en la organización del cliente y del desarrollador. Incluyen requerimientos operacionales y de proceso de desarrollo.
3. Requerimientos externos: Provienen de fuentes externas, como regulaciones de seguridad o legislación sobre privacidad.
1. Rendimiento (Eficiencia)
El rendimiento es un requerimiento del producto que forma parte de la eficiencia del sistema,. El software debe diseñarse para "no desperdiciar los recursos del sistema, como la memoria y los ciclos del procesador".
Es fundamental que los requerimientos no funcionales se escriban de manera cuantitativa siempre que sea posible, para que puedan ponerse a prueba objetivamente.
Ejemplo: Métricas de Rendimiento (Rapidez)
Propiedad
Medida
Rapidez
Transacciones/segundo procesadas
Tiempo de respuesta usuario/evento
Tiempo de regeneración de pantalla
2. Seguridad
La seguridad (security) es la "capacidad del sistema para protegerse contra intrusión accidental o deliberada" y refleja la "habilidad de un sistema para protegerse a sí mismo contra ataques externos". Las fallas de seguridad pueden resultar en pérdida de disponibilidad, daño al sistema o a sus datos, o fuga de información a personas no autorizadas.
Los requerimientos de seguridad a menudo se expresan como requerimientos "no debe", que definen el comportamiento inaceptable del sistema,.
Por ejemplo, un requerimiento de seguridad "no debe" es: "El sistema no debe permitir que los usuarios modifiquen los permisos de acceso sobre algún archivo que no hayan creado".
El proceso de especificar requerimientos de seguridad implica un análisis y valoración del riesgo, comenzando por la identificación y evaluación de los activos a proteger.
Ejemplo: Amenaza y Control de Seguridad (Fragmento del MHC-PMS)
A partir del análisis de riesgos para un sistema de información hospitalario (MHC-PMS), se pueden identificar amenazas y controles. Por ejemplo, si un activo es la "Información del paciente y del registro médico", una amenaza sería el acceso no autorizado a los datos.
El control asociado podría ser: "El acceso a la información confidencial de los pacientes por parte del personal médico se registra en un archivo de auditoría".
3. Accesibilidad y Usabilidad
La usabilidad se relaciona con qué tan fácil es para el usuario aprender a utilizar el software y con la facilidad de uso del sistema.
Aunque la usabilidad a menudo se propone como una meta general ("El sistema debe ser fácil de usar por parte de los profesionales de la salud con experiencia"), idealmente debe ser cuantificable.
Ejemplo: Métrica de Usabilidad
Propiedad
Medida
Facilidad de uso
Tiempo de capacitación
Número de cuadros de ayuda
La accesibilidad, aunque no se detalla extensamente como concepto independiente, se relaciona con la tolerancia para el error y la facilidad con que el sistema se diseñó para evitar y tolerar errores de entrada del usuario.

--------------------------------------------------------------------------------
II. Técnicas de Elicitación de Requerimientos
La adquisición y el análisis de requerimientos (o elicitación) es la actividad donde los ingenieros de software trabajan con clientes y usuarios finales para "descubrir el dominio de aplicación, qué servicios debe proporcionar el sistema, el desempeño requerido de éste, las restricciones de hardware, etcétera".
El descubrimiento de requerimientos es el proceso de interactuar con los participantes del sistema para descubrir sus requerimientos, así como los requerimientos de dominio y la documentación existente,.
A. Entrevistas
Las entrevistas son una parte fundamental de la ingeniería de requerimientos, donde el equipo formula preguntas a los participantes sobre el sistema actual y el sistema a desarrollar, y los requerimientos se derivan de las respuestas.
Existen dos tipos principales de entrevistas:
1. Entrevistas cerradas: Los participantes responden a un conjunto de preguntas preestablecidas.
2. Entrevistas abiertas: No hay una agenda predefinida, y el equipo explora un rango de conflictos para desarrollar una mejor comprensión de las necesidades de los participantes.
Las entrevistas son valiosas para lograr una comprensión global sobre qué hacen los participantes y cómo pueden interactuar con el nuevo sistema. Sin embargo, son menos útiles para asimilar el conocimiento profundo del dominio de la aplicación o para comprender las restricciones de la organización, ya que "la mayoría de las personas se muestran renuentes a discutir los conflictos políticos y organizacionales que afecten los requerimientos".
B. Enfoques Colaborativos (Workshops y Talleres)
Aunque el término "workshop" no se define explícitamente, la elicitación de requerimientos es inherentemente una actividad colaborativa que implica discusiones grupales y el trabajo conjunto con los "participantes" (stakeholders),.
El proceso de elicitación a menudo incluye la priorización y negociación de requerimientos, una actividad que se preocupa por resolver conflictos inevitablemente surgidos cuando intervienen diversos participantes. Esto generalmente requiere que "los participantes tienen que reunirse para resolver las diferencias y estar de acuerdo con el compromiso de los requerimientos".
Los escenarios de uso y los prototipos, discutidos a continuación, son a menudo técnicas clave empleadas en entornos colaborativos o de workshop.
C. Prototipos y Escenarios
1. Creación de Prototipos
La creación de prototipos es una técnica de validación donde un "modelo ejecutable del sistema en cuestión [se] muestra a los usuarios finales y clientes". Esto les permite "experimentar con este modelo para constatar si cubre sus necesidades reales".
Los prototipos tienen dos funciones principales en el proceso de desarrollo:
1. Ayudar en la selección y validación de requerimientos del sistema.
2. Servir para buscar soluciones específicas de software y apoyar el diseño de interfaces del usuario.
La creación rápida de prototipos con la participación del usuario final es considerada "la única forma sensible para desarrollar interfaces de usuario gráficas para sistemas de software".
No obstante, los prototipos tienen desventajas significativas: el desarrollo rápido puede llevar a que no estén documentados y a la degradación de la estructura del sistema, haciéndolo costoso de mantener. También puede ser difícil corregir el prototipo para cubrir requerimientos no funcionales (como rendimiento o seguridad), que fueron ignorados durante su desarrollo.
2. Escenarios (Historias de Usuario)
Los escenarios (o historias, como se usan en Programación Extrema - XP) son descripciones de sesiones de interacción que son más fáciles de comprender y criticar para las personas que las descripciones abstractas de requerimientos.
"Los escenarios son particularmente útiles para detallar un bosquejo de descripción de requerimientos. Se trata de ejemplos sobre descripciones de sesiones de interacción".
En XP, los requerimientos del usuario se expresan como escenarios o historias, y el usuario los prioriza para su desarrollo.

--------------------------------------------------------------------------------
III. Borrador de SRS / Backlog Inicial
A. Documento de Requerimientos de Software (SRS)
El Documento de Requerimientos de Software (SRS) es el comunicado oficial de lo que deben implementar los desarrolladores. Incluye los requerimientos del usuario y una especificación detallada de los requerimientos del sistema.
El documento de requerimientos es esencial, especialmente cuando un contratista externo diseña el sistema. Debe ser un compromiso entre la comunicación de los requerimientos a los clientes, la definición con detalle preciso para desarrolladores y examinadores, y la inclusión de información sobre la posible evolución del sistema.
Estructura del SRS (IEEE, 1998)
Una estructura posible para un documento de requerimientos, basada en un estándar del IEEE, incluye secciones clave para satisfacer a diversos usuarios (clientes, administradores, ingenieros),.
Capítulo
Descripción
Prefacio
Define los lectores, la historia de versiones y el resumen de cambios.
Introducción
Describe la necesidad del sistema, sus funciones y cómo se ajusta a los objetivos empresariales.
Glosario
Define los términos técnicos usados en el documento.
Definición de requerimientos del usuario
Presenta los servicios ofrecidos al usuario, usando lenguaje natural, diagramas u observaciones comprensibles para los clientes. Aquí se describen los RNF del sistema.
Especificación de requerimientos del sistema
Detalla los requerimientos funcionales y no funcionales.
Apéndices
Información específica detallada (ej., hardware, bases de datos).
B. Backlog Inicial (Enfoque Ágil)
En contraste con el enfoque formal del SRS, los métodos de desarrollo ágil argumentan que el documento de requerimientos formal se vuelve obsoleto rápidamente. En su lugar, se utilizan enfoques como la Programación Extrema (XP).
Historias de Usuario (User Stories)
En los enfoques ágiles, como XP, los requerimientos se recopilan de manera incremental y se escriben en tarjetas como historias de usuario. El usuario las prioriza para su implementación en el siguiente incremento del sistema.
Las historias de usuario expresan los requerimientos como escenarios. El equipo de desarrollo valora cada escenario y lo descompone en tareas.
Ejemplo: Descomposición de Historias de Usuario en Tareas (XP)
Aunque no se proporciona un diagrama directo, las fuentes describen la descomposición en XP:
"Escribir pruebas implícitamente define tanto una interfaz como una especificación del comportamiento para la funcionalidad a desarrollar. Se reducen los problemas de la mala interpretación de los requerimientos y la interfaz".
Para una historia de usuario como la prescripción de medicamentos (MHC-PMS), la tarea podría ser:
[Cita Narrativa] "Cada tarea genera una o más pruebas de unidad, que verifican la implementación descrita en dicha tarea. La figura 3.7 es una descripción breve de un caso de prueba que se desarrolló para comprobar que la dosis prescrita de un medicamento no se halle fuera de los límites de seguridad conocidos" (Sommerville, 2011, p. 69).
Backlog del Producto (Scrum)
En el marco de trabajo Scrum, los requerimientos se documentan en un registro conocido como backlog del producto (product backlog), compuesto por las historias de usuario establecidas por el propietario del producto. Este backlog del producto luego se divide en backlogs de sprints, que documentan todos los requisitos del sprint actual.
El desarrollo se realiza de manera iterativa, con sprints que duran "entre 2 y 4 semanas".
Ejemplo Visual: Estructura de Proyecto con Scrum
Para un proyecto que utiliza la metodología ágil Scrum, la descomposición ilustra el flujo desde la concepción hasta los sprints específicos, basados en historias de usuario:
graph TD
    A[Inception] --> B{Sprints};
    B --> C(SPRINT 1: Evaluación del Modelo de Madurez actual);
    C --> C1[Historia Usuario 1];
    C --> C5[Historia Usuario 5];
    B --> D(SPRINT 2: Diseño Alta Disponibilidad Cloud);
    D --> D1[Historia Usuario 6];
    D --> D3[Historia Usuario 9];
    B --> E(SPRINT 3: Diseño del sistema de auto-recuperación);
    E --> E1[Historia Usuario 10];
    E --> E5[Historia Usuario 15];
    A --> F[Gerencia de Proyectos];
    F --> F1[Seguimiento y Control];
    F --> F2[Documentación];
    F --> F3[Cierre];
(Fuente: Adaptado de Figura 35, Metodología Ágil Scrum)
Este proceso de planificación es inherentemente incremental, donde las características del sistema de mayor prioridad se desarrollan oportunamente en el proceso de desarrollo.

--------------------------------------------------------------------------------
Referencias Bibliográficas
Las siguientes referencias han sido construidas basándose en la información de autor y año citada narrativamente dentro del texto fuente:
Bass, L., Clements, P. y Kazman, R. (2003). Software Architecture in Practice (2a ed.). Boston: Addison-Wesley..
Beck, K. (1999). Extreme Programming Explained: Embrace Change. Reading, Mass.: Addison-Wesley..
Boehm, B. W. (1979). Guidelines for verifying and validating software requirements and design. IEEE Computer, 12(1), 10–21..
Dijkstra, E. W., Dahl, O. J. y Hoare, C. A. R. (1972). Structured Programming. Londres: Academic Press.,.
Fagan, M. E. (1986). Advances in Software Inspections. IEEE Transactions on Software Engineering, SE-12(7), 744–51.,.
Gilb, T. y Graham, D. (1993). Software Inspection. Reading, Mass.: Addison-Wesley..
Gunning, R. (1962). The Technique of Clear Writing. New York: McGraw-Hill..
IEEE. (1998). IEEE Recommended Practice for Software Requirements Specifications (IEEE Std 830-1998). New York: IEEE..
Kaner, C. (2003). The power of ‘What If . . .’ and nine ways to fuel your imagination: Cem Kaner on scenario testing. Software Testing and Quality Engineering, 5(5), 16–22.,.
Kotonya, G. y Sommerville, I. (1998). Requirements Engineering: Processes and Techniques. Chichester, UK: John Wiley & Sons..
Laprie, J. C. (1995). Dependable computing: Concepts, limits, challenges. En Digest of Papers. Twenty-Fifth International Symposium on Fault-Tolerant Computing. Pasadena, CA: IEEE Computer Society Press..
Mills, H. D., Dyer, M. y Linger, R. (1987). Cleanroom Software Engineering. IEEE Software, 4(5), 19–25..
Pfleeger, C. P. y Pfleeger, S. L. (2007). Security in Computing (4th ed.). Boston: Addison-Wesley..
Prowell, S. J., Trammell, C. J., Linger, R. C. y Poore, J. H. (1999). Cleanroom Software Engineering: Technology and Process. Reading, Mass.: Addison-Wesley.,.
Robertson, S. y Robertson, J. (1999). Mastering the Requirements Process. Reading, Mass.: Addison-Wesley..
Sommerville, I. y Sawyer, P. (1997). Requirements Engineering: A Good Practice Guide. Chichester, UK: John Wiley & Sons.,.
Szyperski, C. (2002). Component Software: Beyond Object-Oriented Programming (2nd ed.). Boston: Addison-Wesley..
Whittaker, J. A. (2002). How to Break Software: A Practical Guide to Testing. Boston: Addison-Wesley..