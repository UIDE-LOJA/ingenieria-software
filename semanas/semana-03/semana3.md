Compendio Exhaustivo sobre Ingeniería de Requerimientos y Validación de Software
Este compendio presenta un análisis detallado sobre las historias de usuario y casos de uso como herramientas de especificación, la importancia de los criterios de aceptación, los métodos clave de validación, y las prácticas esenciales de trazabilidad y administración de requerimientos, siguiendo el formato APA.

--------------------------------------------------------------------------------
1. Historias de Usuario, Casos de Uso y Criterios de Aceptación
Los requerimientos son las descripciones de lo que el sistema debe hacer, incluyendo los servicios que ofrece y las restricciones en su operación. Estos requerimientos se pueden describir utilizando técnicas basadas en escenarios, siendo las historias de usuario y los casos de uso dos enfoques predominantes.
1.1 Historias de Usuario (User Stories)
Las historias de usuario son la forma en que la Programación Extrema (XP) expresa los requerimientos del usuario, y generalmente se escriben en tarjetas. Estas historias representan escenarios o interacciones que el usuario prioriza para su desarrollo.
La importancia de este enfoque radica en que el cliente utiliza estas tarjetas como las entradas principales para el proceso de planeación XP o "juego de planeación". Una vez creadas, el equipo de desarrollo las descompone en tareas, y estima el esfuerzo y los recursos necesarios para implementarlas.
Cita textual corta (Narrativa): La programación extrema (XP) es un método ágil en el cual los requerimientos del usuario se expresan como historias, y "cada historia se escribe en una tarjeta".
A pesar de su simplicidad y enfoque en el código, el uso de este formato de tarjeta genera debate. Una ventaja es que son fáciles de comprender y manejar. Sin embargo, su brevedad puede ser también una desventaja, como se plantea en la fuente:
La programación extrema expresa los requerimientos del usuario como historias, y cada historia se escribe en una tarjeta. Analice las ventajas y desventajas de este enfoque para la descripción de requerimientos.
Además, es crucial considerar el contexto ético al diseñarlas, ya que la ingeniería de historias de usuario puede ser sensible éticamente (Kamthan & Shahmir, 2021).
1.2 Casos de Uso (Use Cases)
Los casos de uso son una técnica de descubrimiento de requerimientos que se ha convertido en una característica fundamental del Lenguaje de Modelado Unificado (UML). Se centran en identificar a los actores implicados en una interacción y nombrar el tipo de interacción.
Cita textual larga: Según Sommerville (2011), los casos de uso son una forma poderosa de especificar interacciones:
Los casos de uso son una técnica de descubrimiento de requerimientos que se introdujo por primera vez en el método Objectory (Jacobson et al., 1993). Ahora se ha convertido en una característica fundamental del modelado de lenguaje unificado. En su forma más sencilla, un caso de uso identifica a los actores implicados en una interacción, y nombra el tipo de interacción. Entonces, esto se complementa con información adicional que describe la interacción con el sistema.
El conjunto de casos de uso representa todas las interacciones posibles que se describirán en los requerimientos del sistema. Los casos de uso son particularmente efectivos para adquirir requerimientos de los participantes que interactúan directamente con el sistema.
Ejemplo Visual (Estructura de Caso de Uso UML): Un diagrama de caso de uso de alto nivel representa a los actores (personas u otros sistemas) como figuras sencillas y cada clase de interacción como una elipse con etiqueta.
Suponga que estamos modelando un sistema de información para pacientes (MHC-PMS):
[Médico] -- (Prescribir medicamento)
[Médico] -- (Establecer consulta)
[Paciente] <--- (Actualizar registro)
[Auxiliar médico] -- (Actualizar registro)
Modelo Conceptual: Médico, Paciente y Auxiliar médico son actores que interactúan con las funciones del sistema (casos de uso).
1.3 Criterios de Aceptación
Los criterios de aceptación son fundamentales, especialmente en el contexto de las pruebas de usuario, ya que definen qué hace que un sistema sea aceptable para su uso operacional.
Cita textual corta (Parentética): "Los criterios de aceptación forman parte del contrato del sistema y tienen que convenirse entre el cliente y el desarrollador".
Definir estos criterios es el primer paso en el proceso formal de pruebas de aceptación. En los métodos ágiles, como la Programación Extrema (XP), el cliente que forma parte del equipo de desarrollo es responsable de definir las pruebas que permiten determinar si el software desarrollado soporta o no la historia del usuario. El desarrollo no avanza hasta que se pasan estas pruebas de aceptación.
2. Validación (Revisiones, Prototipos, Aceptación)
La validación del software es una de las cuatro actividades fundamentales de todos los procesos de software. Su propósito principal es verificar el software para asegurar que sea lo que el cliente requiere.
Barry Boehm (1979) resume la diferencia entre verificación y validación con dos preguntas clave: “Validación: ¿construimos el producto correcto?” y “Verificación: ¿construimos bien el producto?”.
La validación incluye tres técnicas esenciales: revisiones, creación de prototipos y pruebas de aceptación.
2.1 Revisiones e Inspecciones
Las revisiones e inspecciones son técnicas de Verificación y Validación (V&V) estáticas, donde no es necesario ejecutar el software. Se utilizan para comprobar la calidad de los entregables y asegurarse de que se siguieron los estándares de calidad.
El proceso de revisión se estructura generalmente en tres fases:
1. Actividades previas a la revisión: Incluyen la planeación, el establecimiento del equipo de revisión y la lectura independiente de los documentos o el código por parte de los miembros.
2. Reunión de revisión: Se discuten los problemas y se registran los errores y omisiones.
3. Seguimiento: Se corrigen los errores y se toman acciones.
Un tipo específico de revisión es la revisión de requerimientos, donde un grupo del cliente y el desarrollador leen el documento de requerimientos buscando errores, anomalías e inconsistencias para negociar su resolución.
2.2 Creación de Prototipos (Protos)
Un prototipo es una versión inicial de un sistema de software que se utiliza para demostrar conceptos, probar opciones de diseño y obtener más información sobre el problema y sus posibles soluciones. Es crucial que el desarrollo de prototipos sea rápido e iterativo para controlar los costos.
Cita textual narrativa: La creación de prototipos se emplea en el proceso de desarrollo de software para contribuir a anticipar los cambios que se requieran, ya sea para "establecer los requerimientos funcionales del sistema o desarrollar un sistema que demuestre a los administradores la factibilidad de la aplicación".
La creación de prototipos se puede usar en la adquisición de requerimientos para ayudar a los participantes a entender cómo será el sistema. Por ejemplo, para los juegos de computadora, a menudo se recomienda diseñarlos utilizando una serie de prototipos.
Ejemplo de proceso de prototipado (flujo abstracto): El proceso de desarrollo de prototipos es iterativo e incluye:
1. Establecimiento de objetivos del prototipo.
2. Definición de la funcionalidad del prototipo (decidir qué incluir y qué dejar fuera, como el manejo de errores o requerimientos no funcionales flexibles).
3. Desarrollo del prototipo (resultado: prototipo ejecutable).
4. Evaluación del prototipo (resultado: reporte de evaluación).
2.3 Pruebas de Aceptación (Aceptación)
Las pruebas de aceptación constituyen la etapa final del proceso de pruebas antes de que el sistema se acepte para uso operacional. El objetivo es que el cliente o usuario real pruebe el sistema en su propio entorno.
La fase final en el proceso de pruebas de un sistema comercial incluye la prueba de aceptación. En esta fase:
• Se utiliza datos suministrados por el cliente del sistema, en lugar de datos de prueba simulados.
• Las pruebas revelan errores y omisiones en la definición de requerimientos, o si el rendimiento es inaceptable.
• El proceso culmina con una fase de Negociación de los resultados de la prueba, seguida de la Aceptación o rechazo del sistema.
Ejemplo real (Proceso de pruebas de aceptación): El proceso de pruebas de aceptación consta de seis etapas principales (Sommerville, 2011):
1. Definir los criterios de aceptación.
2. Planear la prueba de aceptación.
3. Derivar pruebas de aceptación.
4. Correr las pruebas de aceptación.
5. Negociar los resultados de la prueba.
6. Aceptar o rechazar el sistema.
3. Trazabilidad y Administración de Requerimientos
Los requerimientos de los sistemas de software grandes siempre cambian. La administración de requerimientos y la trazabilidad son esenciales para gestionar este cambio continuo.
3.1 Administración de Requerimientos
La administración de requerimientos (GR) es el proceso de comprender y controlar los cambios en los requerimientos del sistema. Este proceso es necesario porque los grandes sistemas suelen desarrollarse para resolver problemas que no se pueden definir por completo, y la comprensión del problema por parte de los participantes cambia constantemente.
El proceso de administración del cambio debe aplicarse a todos los cambios propuestos a los requerimientos de un sistema después de que el documento de requerimientos ha sido aprobado.
Cita textual larga (Definición y Proceso): La administración de requerimientos implica actividades de planeación para establecer cómo se gestionarán los cambios y los seguimientos. Como parte de la planeación, se tiene que:
1. Identificación de requerimientos Cada requerimiento debe identificarse de manera exclusiva, de forma que pueda tener referencia cruzada con otros requerimientos y usarse en las evaluaciones de seguimiento.
2. Un proceso de administración del cambio Éste es el conjunto de actividades que valoran el efecto y costo de los cambios. En la siguiente sección se estudia con más detalle este proceso.
3. Políticas de seguimiento Dichas políticas definen las relaciones entre cada requerimiento, así como entre los requerimientos y el diseño del sistema que debe registrarse. La política de seguimiento también tiene que definir cómo mantener dichos registros. [183, la cursiva es mía]
El uso de herramientas de apoyo (sistemas especializados de administración de requerimientos, bases de datos o software genérico) es fundamental debido a la gran cantidad de información a procesar.
3.2 Trazabilidad de Requerimientos
La trazabilidad, o seguimiento de requerimientos, es una parte clave de la administración de requerimientos y del proceso de administración del cambio. La trazabilidad implica registrar las relaciones entre los requerimientos, sus fuentes y el diseño del sistema.
La importancia de la trazabilidad reside en su capacidad para facilitar el análisis del impacto del cambio:
Cita textual corta (Parentética): Es indispensable "seguir la huella de las relaciones entre requerimientos, sus fuentes y el diseño del sistema, de modo que usted pueda analizar las razones para los cambios propuestos, así como el efecto que dichos cambios tengan probablemente sobre otras partes del sistema".
Ejemplo de Trazabilidad y su uso en Pruebas: La trazabilidad es crucial en el proceso de validación de requerimientos porque los requerimientos deben ser comprobables. Si el desarrollo de pruebas se realiza como parte de la validación, "esto revela con frecuencia problemas en los requerimientos".
Para lograr la trazabilidad, cada requerimiento debe tener una identificación única.
Supongamos que tenemos un requerimiento identificado como REQ-006 (Integración) en una matriz de requerimientos:
ID Requerimiento
Requerimiento
Peso
Criterio de Aceptación
REQ06
El sistema de autorrecuperación y sus componentes seleccionados deben integrarse de forma directa con Azure DevOps, sin desarrollos adicionales o personalizados.
4
Cumple: Puntaje 4
Este requerimiento es fundamental (Peso 4). Para garantizar la trazabilidad durante las pruebas, se diseñaría un caso de prueba que se vincule directamente a este requerimiento y a su criterio de aceptación, asegurando que si la prueba falla, se sabe exactamente qué requerimiento (y, por ende, qué parte del diseño) debe revisarse.
Ejemplo de Caso de Prueba con Trazabilidad (Estructura de la fuente): Un caso de prueba (CP) se define con su ID, el objetivo asociado, actividades previas, pasos y resultado esperado.
ID del Código de Pruebas: CP-REQ06-INT
Objetivo Específico asociado: REQ06
Actividades previas: Diseño de la Arquitectura de Integración completado.

Pasos:
1. Intentar la integración del componente X en Azure DevOps.
2. Registrar la necesidad de cualquier desarrollo adicional o personalizado.

Resultado Esperado:
La integración se completa sin necesidad de desarrollos adicionales, cumpliendo el Criterio de Aceptación (Cumple: Puntaje 4) [40].
La administración de la configuración también se apoya en esta trazabilidad al ayudar a descubrir "qué cambios se realizaron, así como compilar y vincular componentes para crear un sistema".

--------------------------------------------------------------------------------
Referencias Bibliográficas (Formato APA)
Beck, K. (1999). “Embracing Change with Extreme Programming”. IEEE Computer, 32(10), 70–8. Boehm, B. W. (1979). “Software engineering; R & D Trends and defense needs.” En P. Wegner (Ed.), Research Directions in Software Technology (pp. 1–9). Cambridge, Mass.: MIT Press. IEEE. (1998). “IEEE Recommended Practice for Software Requirements Specifications”. En IEEE Software Engineering Standards Collection. Los Alamitos, Ca.: IEEE Computer Society Press. Jacobson, I., Christerson, M., Jonsson, P., & Övergaard, G. (1993). Object-Oriented Software Engineering: A Use Case Driven Approach. Addison-Wesley. Kamthan, P. & Shahmir, N. (2021). On ethically-sensitive user story engineering. Proceedings of the Association for Computing Machinery (pp. 71–79). Robertson, S. & Robertson, J. (1999). Mastering the Requirements Process. Addison-Wesley. Sommerville, I. (2011). Ingeniería de Software (9a ed.). PEARSON EDUCACIÓN. UPC. (2023). Definición del caso de pruebas CP2-OBE2 [Tabla 64]. (Universidad Peruana de Ciencias Aplicadas).