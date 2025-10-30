// Initialize Mermaid
mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    themeVariables: {
        primaryColor: '#23356e',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#e9ab21',
        lineColor: '#23356e'
    }
});

// Initialize Reveal.js
Reveal.initialize({
    hash: true,
    transition: 'slide',
    transitionSpeed: 'default',
    backgroundTransition: 'fade',
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],

    // Responsive settings
    width: 1200,
    height: 800,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0
});

// AI Adoption Chart Function
function createAIAdoptionChart() {
    const data = [
        { year: '2019', adoption: 2, label: '2019 (Early Adopters)', color: '#8ca7d1', description: '~2% early adopters (herramientas pioneras como Kite/TabNine)' },
        { year: '2022', adoption: 25, label: '2022 (Crecimiento)', color: '#6b8bc3', description: 'Estimación de crecimiento con GitHub Copilot y primeras herramientas masivas' },
        { year: '2024', adoption: 62, label: '2024 (Uso Actual)', color: '#23356e', description: '62% usan IA actualmente - 76% usan o planean usar (Stack Overflow Survey 2024)' },
        { year: '2028', adoption: 75, label: '2028 (Proyección)', color: '#e9ab21', description: '75% de ingenieros empresariales usarán asistentes de código (Gartner 2024)' }
    ];

    const margin = { top: 40, right: 30, bottom: 60, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 350 - margin.top - margin.bottom;

    // Clear any existing chart
    d3.select("#ai-adoption-chart").selectAll("*").remove();

    const svg = d3.select("#ai-adoption-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("background", "transparent");

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.year))
        .range([0, width])
        .padding(0.2);

    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);

    // Create tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "chart-tooltip")
        .style("opacity", 0);

    // Add title
    g.append("text")
        .attr("class", "chart-title")
        .attr("x", width / 2)
        .attr("y", -10)
        .text("Adopción de IA en Desarrollo de Software (Datos Reales)");

    // Add axes
    g.append("g")
        .attr("class", "chart-axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

    g.append("g")
        .attr("class", "chart-axis")
        .call(d3.axisLeft(yScale).tickFormat(d => d + "%"));

    // Add axis labels
    g.append("text")
        .attr("class", "chart-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Porcentaje de Adopción (%)");

    g.append("text")
        .attr("class", "chart-label")
        .attr("transform", `translate(${width / 2}, ${height + margin.bottom - 10})`)
        .style("text-anchor", "middle")
        .text("Año");

    // Add bars with animation
    const bars = g.selectAll(".chart-bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "chart-bar")
        .attr("x", d => xScale(d.year))
        .attr("width", xScale.bandwidth())
        .attr("y", height)
        .attr("height", 0)
        .attr("fill", d => d.color)
        .attr("rx", 4)
        .attr("ry", 4);

    // Animate bars
    bars.transition()
        .duration(1000)
        .delay((d, i) => i * 200)
        .attr("y", d => yScale(d.adoption))
        .attr("height", d => height - yScale(d.adoption));

    // Add value labels on bars
    const labels = g.selectAll(".bar-label")
        .data(data)
        .enter().append("text")
        .attr("class", "bar-label")
        .attr("x", d => xScale(d.year) + xScale.bandwidth() / 2)
        .attr("y", height)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .attr("font-size", "12px")
        .text(d => d.adoption + "%");

    // Animate labels
    labels.transition()
        .duration(1000)
        .delay((d, i) => i * 200)
        .attr("y", d => yScale(d.adoption) + 20);

    // Add interactivity
    bars.on("mouseover", function (event, d) {
        d3.select(this)
            .transition()
            .duration(200)
            .attr("opacity", 0.8)
            .attr("stroke", "#333")
            .attr("stroke-width", 2);

        tooltip.transition()
            .duration(200)
            .style("opacity", .9);

        tooltip.html(`
            <strong>${d.label}</strong><br/>
            <strong>${d.adoption}%</strong> de adopción<br/>
            ${d.description}
        `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
        .on("mouseout", function (d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", 1)
                .attr("stroke", "none");

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .on("click", function (event, d) {
            // Add click animation
            d3.select(this)
                .transition()
                .duration(100)
                .attr("transform", "scale(1.05)")
                .transition()
                .duration(100)
                .attr("transform", "scale(1)");

            // Show detailed info
            alert(`Detalles de ${d.label}:\n${d.description}\n\nFuentes: Stack Overflow Developer Survey 2024, Gartner 2024. Los datos reflejan el uso real reportado por desarrolladores y proyecciones para ingenieros empresariales.`);
        });

    // Add trend line
    const line = d3.line()
        .x(d => xScale(d.year) + xScale.bandwidth() / 2)
        .y(d => yScale(d.adoption))
        .curve(d3.curveMonotoneX);

    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#e9ab21")
        .attr("stroke-width", 3)
        .attr("stroke-dasharray", "5,5")
        .attr("opacity", 0.7)
        .attr("d", line);

    // Add trend points
    g.selectAll(".trend-point")
        .data(data)
        .enter().append("circle")
        .attr("class", "trend-point")
        .attr("cx", d => xScale(d.year) + xScale.bandwidth() / 2)
        .attr("cy", d => yScale(d.adoption))
        .attr("r", 4)
        .attr("fill", "#e9ab21")
        .attr("stroke", "white")
        .attr("stroke-width", 2);
}
// SDLC D3.js Circular Diagram
function createSDLCDiagram() {
    const container = d3.select("#sdlc-d3-diagram");
    container.selectAll("*").remove(); // Clear previous diagram

    // Get container dimensions for better centering
    const containerNode = container.node();
    const containerRect = containerNode.getBoundingClientRect();
    const width = Math.min(containerRect.width || 500, 500);
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;

    const phases = [
        {
            id: 1, name: "Análisis", icon: "fas fa-search", title: "Análisis y Especificación",
            description: "Identificación de requerimientos, stakeholders y restricciones del sistema",
            tools: ["Entrevistas con stakeholders", "Análisis de procesos de negocio", "Documentación de requerimientos", "Casos de uso", "Historias de usuario"]
        },
        {
            id: 2, name: "Diseño", icon: "fas fa-drafting-compass", title: "Diseño y Arquitectura",
            description: "Definición de la estructura, componentes e interfaces del sistema",
            tools: ["UML (Diagramas de clases, secuencia)", "Patrones de diseño", "Arquitectura de software", "Mockups y wireframes", "Especificaciones técnicas"]
        },
        {
            id: 3, name: "Implementación", icon: "fas fa-code", title: "Implementación",
            description: "Codificación, integración y construcción del software",
            tools: ["IDEs (VS Code, IntelliJ)", "Lenguajes de programación", "Frameworks y librerías", "Control de versiones (Git)", "Herramientas de build"]
        },
        {
            id: 4, name: "Pruebas", icon: "fas fa-vial", title: "Pruebas y Validación",
            description: "Verificación de funcionalidad, rendimiento y calidad",
            tools: ["Testing frameworks (Jest, JUnit)", "Pruebas automatizadas", "Herramientas de QA", "Testing de performance", "Validación con usuarios"]
        },
        {
            id: 5, name: "Despliegue", icon: "fas fa-rocket", title: "Despliegue y Mantenimiento",
            description: "Puesta en producción, soporte y evolución continua",
            tools: ["CI/CD pipelines", "Contenedores (Docker)", "Monitoreo (Prometheus)", "Cloud platforms", "Gestión de incidentes"]
        }
    ];

    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("display", "block")
        .style("margin", "0 auto");

    // Create gradient for center circle
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
        .attr("id", "centerGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");

    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#23356e");

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#91004a");

    // Create flow circle (animated dashed circle)
    const flowCircle = svg.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radius + 25)
        .attr("class", "sdlc-flow-path")
        .style("stroke", "#e9ab21")
        .style("stroke-width", "3")
        .style("fill", "none")
        .style("opacity", "0.6");

    // Animate the flow circle
    flowCircle
        .style("stroke-dasharray", "15,8")
        .style("stroke-dashoffset", 0)
        .transition()
        .duration(15000)
        .ease(d3.easeLinear)
        .style("stroke-dashoffset", -150)
        .on("end", function repeat() {
            d3.select(this)
                .style("stroke-dashoffset", 0)
                .transition()
                .duration(15000)
                .ease(d3.easeLinear)
                .style("stroke-dashoffset", -150)
                .on("end", repeat);
        });

    // Create center circle
    svg.append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", 60)
        .attr("fill", "url(#centerGradient)")
        .attr("stroke", "#e9ab21")
        .attr("stroke-width", 3);

    // Center icon using FontAwesome
    svg.append("foreignObject")
        .attr("x", centerX - 18)
        .attr("y", centerY - 25)
        .attr("width", 36)
        .attr("height", 36)
        .append("xhtml:div")
        .style("text-align", "center")
        .style("line-height", "36px")
        .style("font-size", "28px")
        .style("color", "white")
        .html('<i class="fas fa-sync-alt"></i>');

    svg.append("text")
        .attr("x", centerX)
        .attr("y", centerY + 25)
        .attr("class", "sdlc-center-text")
        .style("font-size", "16px")
        .text("Proceso Iterativo");

    // Create tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "sdlc-tooltip-d3");

    // Position phases in circle
    phases.forEach((phase, i) => {
        const angle = (i * 2 * Math.PI) / phases.length - Math.PI / 2; // Start from top
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        // Create phase group
        const phaseGroup = svg.append("g")
            .attr("class", "sdlc-node")
            .attr("transform", `translate(${x}, ${y})`);

        // Phase circle - Ajustado para mejor proporción
        phaseGroup.append("circle")
            .attr("r", 55)
            .attr("class", "sdlc-node-circle");

        // Phase icon using FontAwesome
        phaseGroup.append("foreignObject")
            .attr("x", -16)
            .attr("y", -28)
            .attr("width", 32)
            .attr("height", 32)
            .append("xhtml:div")
            .style("text-align", "center")
            .style("line-height", "32px")
            .style("font-size", "26px")
            .style("color", "var(--uide-primary)")
            .style("transition", "all 0.3s ease")
            .html(`<i class="${phase.icon}"></i>`);

        // Phase name - Ajustado para mejor legibilidad
        phaseGroup.append("text")
            .attr("y", 18)
            .attr("class", "sdlc-node-text")
            .style("font-size", "12px")
            .style("font-weight", "bold")
            .style("text-anchor", "middle")
            .text(phase.name);

        // Add interactivity
        phaseGroup
            .on("mouseover", function (event) {
                d3.select(this).select(".sdlc-node-circle")
                    .transition().duration(200)
                    .attr("r", 60);

                // Change icon color and size on hover
                d3.select(this).select("foreignObject div")
                    .style("color", "white")
                    .style("font-size", "30px");

                tooltip.html(`
                    <h4>${phase.title}</h4>
                    <p>${phase.description}</p>
                    <strong>Herramientas:</strong>
                    <ul>
                        ${phase.tools.map(tool => `<li>${tool}</li>`).join('')}
                    </ul>
                `)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 10) + "px")
                    .classed("show", true);
            })
            .on("mouseout", function () {
                d3.select(this).select(".sdlc-node-circle")
                    .transition().duration(200)
                    .attr("r", 55);

                // Reset icon color and size
                d3.select(this).select("foreignObject div")
                    .style("color", "var(--uide-primary)")
                    .style("font-size", "26px");

                tooltip.classed("show", false);
            })
            .on("click", function () {
                // Click animation
                d3.select(this)
                    .transition().duration(100)
                    .attr("transform", `translate(${x}, ${y}) scale(1.1)`)
                    .transition().duration(100)
                    .attr("transform", `translate(${x}, ${y}) scale(1)`);
            });
    });
}
// Responsive Static Methodology Comparison Diagram
function createMethodologyTransformation() {
    const container = d3.select("#methodology-transformation");
    container.selectAll("*").remove();

    const containerNode = container.node();
    const containerRect = containerNode.getBoundingClientRect();
    
    // Responsive dimensions
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    let width = Math.min(containerRect.width || 900, 900);
    let height = isMobile ? 800 : 450; // Taller on mobile for stacked layout
    
    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("display", "block")
        .style("margin", "0 auto")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    // Create arrow markers
    const defs = svg.append("defs");
    defs.append("marker")
        .attr("id", "arrowhead")
        .attr("markerWidth", 10)
        .attr("markerHeight", 7)
        .attr("refX", 9)
        .attr("refY", 3.5)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3.5, 0 7")
        .attr("fill", "#636e72");

    defs.append("marker")
        .attr("id", "deployArrow")
        .attr("markerWidth", 12)
        .attr("markerHeight", 8)
        .attr("refX", 11)
        .attr("refY", 4)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 12 4, 0 8")
        .attr("fill", "#0984e3");

    // Responsive positioning
    const waterfallX = isMobile ? width / 2 - 90 : 80;
    const waterfallStartY = isMobile ? 80 : 100;
    const agileX = isMobile ? width / 2 : width - 250;
    const agileY = isMobile ? height - 200 : height / 2;

    // Waterfall phases data with FontAwesome icons (in Spanish)
    const waterfallPhases = [
        { name: "REQUERIMIENTOS", icon: "fas fa-search", x: waterfallX, y: waterfallStartY, width: 180, height: 50, color: "#ff8c42" },
        { name: "DISEÑO", icon: "fas fa-drafting-compass", x: waterfallX, y: waterfallStartY + 70, width: 180, height: 50, color: "#ff8c42" },
        { name: "IMPLEMENTACIÓN", icon: "fas fa-code", x: waterfallX, y: waterfallStartY + 140, width: 180, height: 50, color: "#ff8c42" },
        { name: "PRUEBAS", icon: "fas fa-vial", x: waterfallX, y: waterfallStartY + 210, width: 180, height: 50, color: "#ff8c42" },
        { name: "MANTENIMIENTO", icon: "fas fa-tools", x: waterfallX, y: waterfallStartY + 280, width: 180, height: 50, color: "#ff8c42" }
    ];

    // Agile cycle data with coherent phases (in Spanish)
    const agileCycle = {
        centerX: agileX,
        centerY: agileY,
        radius: isMobile ? 100 : 120,
        phases: [
            { name: "Planificar", icon: "fas fa-clipboard-list", angle: 0, color: "#6c5ce7" },
            { name: "Diseñar", icon: "fas fa-drafting-compass", angle: 72, color: "#00b894" },
            { name: "Desarrollar", icon: "fas fa-code", angle: 144, color: "#0984e3" },
            { name: "Probar", icon: "fas fa-vial", angle: 216, color: "#e17055" },
            { name: "Desplegar", icon: "fas fa-rocket", angle: 288, color: "#fdcb6e" }
        ]
    };

    // Create title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .attr("font-size", isMobile ? "20px" : "24px")
        .attr("font-weight", "bold")
        .attr("fill", "#2d3436")
        .text("Cascada vs. Ágil");

    // Create waterfall model
    const waterfallGroup = svg.append("g").attr("class", "waterfall-model");

    // Waterfall title
    waterfallGroup.append("text")
        .attr("x", waterfallX + 90)
        .attr("y", waterfallStartY - 20)
        .attr("text-anchor", "middle")
        .attr("font-size", isMobile ? "16px" : "18px")
        .attr("font-weight", "bold")
        .attr("fill", "#636e72")
        .text("Modelo en Cascada");

    // Create waterfall phases
    const waterfallPhaseGroups = waterfallGroup.selectAll(".waterfall-phase")
        .data(waterfallPhases)
        .enter().append("g")
        .attr("class", "waterfall-phase");

    // Waterfall rectangles
    waterfallPhaseGroups.append("rect")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("width", d => d.width)
        .attr("height", d => d.height)
        .attr("fill", d => d.color)
        .attr("rx", 12)
        .attr("ry", 12)
        .attr("stroke", "#ddd")
        .attr("stroke-width", 2);

    // Waterfall FontAwesome icons
    waterfallPhaseGroups.append("foreignObject")
        .attr("x", d => d.x + 15)
        .attr("y", d => d.y + d.height / 2 - 12)
        .attr("width", 24)
        .attr("height", 24)
        .append("xhtml:div")
        .style("text-align", "center")
        .style("line-height", "24px")
        .style("font-size", "18px")
        .style("color", "white")
        .html(d => `<i class="${d.icon}"></i>`);

    // Waterfall text
    waterfallPhaseGroups.append("text")
        .attr("x", d => d.x + 50)
        .attr("y", d => d.y + d.height / 2 + 6)
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .attr("font-size", isMobile ? "12px" : "14px")
        .text(d => d.name);

    // Waterfall arrows
    const waterfallArrows = waterfallGroup.selectAll(".waterfall-arrow")
        .data(waterfallPhases.slice(0, -1))
        .enter().append("g")
        .attr("class", "waterfall-arrow");

    waterfallArrows.append("path")
        .attr("d", (d, i) => {
            const startY = d.y + d.height;
            const endY = waterfallPhases[i + 1].y;
            const x = d.x + d.width / 2;
            return `M ${x} ${startY + 5} L ${x} ${endY - 15} L ${x - 8} ${endY - 25} M ${x} ${endY - 15} L ${x + 8} ${endY - 25}`;
        })
        .attr("stroke", "#636e72")
        .attr("stroke-width", 3)
        .attr("fill", "none");

    // Create agile model
    const agileGroup = svg.append("g").attr("class", "agile-model");

    // Agile title
    agileGroup.append("text")
        .attr("x", agileCycle.centerX)
        .attr("y", isMobile ? agileCycle.centerY - agileCycle.radius - 30 : 70)
        .attr("text-anchor", "middle")
        .attr("font-size", isMobile ? "16px" : "18px")
        .attr("font-weight", "bold")
        .attr("fill", "#636e72")
        .text("Metodología Ágil");

    // Central circle
    const centralRadius = isMobile ? 40 : 50;
    agileGroup.append("circle")
        .attr("cx", agileCycle.centerX)
        .attr("cy", agileCycle.centerY)
        .attr("r", centralRadius)
        .attr("fill", "#74b9ff")
        .attr("stroke", "#ddd")
        .attr("stroke-width", 2);

    agileGroup.append("text")
        .attr("x", agileCycle.centerX)
        .attr("y", agileCycle.centerY - 5)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .attr("font-size", isMobile ? "14px" : "16px")
        .text("Ágil");

    agileGroup.append("text")
        .attr("x", agileCycle.centerX)
        .attr("y", agileCycle.centerY + 15)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-size", isMobile ? "10px" : "12px")
        .text("Iterativo");

    // Agile phase circles
    const phaseRadius = isMobile ? 28 : 35;
    agileCycle.phases.forEach((phase, i) => {
        const angle = (phase.angle - 90) * Math.PI / 180;
        const x = agileCycle.centerX + agileCycle.radius * Math.cos(angle);
        const y = agileCycle.centerY + agileCycle.radius * Math.sin(angle);

        const phaseGroup = agileGroup.append("g");

        // Phase circle
        phaseGroup.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", phaseRadius)
            .attr("fill", phase.color)
            .attr("stroke", "#ddd")
            .attr("stroke-width", 2);

        // Phase FontAwesome icon
        phaseGroup.append("foreignObject")
            .attr("x", x - 10)
            .attr("y", y - 15)
            .attr("width", 20)
            .attr("height", 20)
            .append("xhtml:div")
            .style("text-align", "center")
            .style("line-height", "20px")
            .style("font-size", isMobile ? "12px" : "14px")
            .style("color", "white")
            .html(`<i class="${phase.icon}"></i>`);

        // Phase name
        phaseGroup.append("text")
            .attr("x", x)
            .attr("y", y + 8)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-weight", "bold")
            .attr("font-size", isMobile ? "8px" : "10px")
            .text(phase.name);

        // Connecting lines to center
        phaseGroup.append("line")
            .attr("x1", agileCycle.centerX + centralRadius * Math.cos(angle))
            .attr("y1", agileCycle.centerY + centralRadius * Math.sin(angle))
            .attr("x2", x - phaseRadius * Math.cos(angle))
            .attr("y2", y - phaseRadius * Math.sin(angle))
            .attr("stroke", "#ddd")
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", "5,5");
    });

    // Circular arrow around agile cycle
    const arcPath = d3.arc()
        .innerRadius(agileCycle.radius + (isMobile ? 35 : 45))
        .outerRadius(agileCycle.radius + (isMobile ? 35 : 45))
        .startAngle(0)
        .endAngle(2 * Math.PI);

    agileGroup.append("path")
        .attr("d", arcPath)
        .attr("transform", `translate(${agileCycle.centerX}, ${agileCycle.centerY})`)
        .attr("stroke", "#74b9ff")
        .attr("stroke-width", 4)
        .attr("fill", "none")
        .attr("stroke-dasharray", "10,5");

    // Add "Product Backlog" label (positioned responsively)
    const backlogX = isMobile ? agileCycle.centerX - 60 : agileCycle.centerX - 150;
    const backlogY = isMobile ? agileCycle.centerY + agileCycle.radius + 50 : agileCycle.centerY + 80;
    
    agileGroup.append("rect")
        .attr("x", backlogX)
        .attr("y", backlogY)
        .attr("width", 120)
        .attr("height", 30)
        .attr("fill", "#00b894")
        .attr("rx", 15)
        .attr("stroke", "#ddd")
        .attr("stroke-width", 1);

    agileGroup.append("text")
        .attr("x", backlogX + 60)
        .attr("y", backlogY + 20)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .attr("font-size", isMobile ? "10px" : "12px")
        .text("Product Backlog");

    // Deploy arrow (positioned responsively)
    if (!isMobile) {
        agileGroup.append("path")
            .attr("d", `M ${agileCycle.centerX + 70} ${agileCycle.centerY + 95} L ${agileCycle.centerX + 130} ${agileCycle.centerY + 95}`)
            .attr("stroke", "#0984e3")
            .attr("stroke-width", 6)
            .attr("fill", "none")
            .attr("marker-end", "url(#deployArrow)");

        agileGroup.append("text")
            .attr("x", agileCycle.centerX + 100)
            .attr("y", agileCycle.centerY + 85)
            .attr("text-anchor", "middle")
            .attr("fill", "#0984e3")
            .attr("font-weight", "bold")
            .attr("font-size", "12px")
            .text("Desplegar");
    }

    // Add responsive behavior
    function handleResize() {
        const newWidth = containerNode.getBoundingClientRect().width;
        if (newWidth !== width) {
            createMethodologyTransformation(); // Recreate diagram on resize
        }
    }

    window.addEventListener('resize', handleResize);

    // Remove transformation functions - static diagram only
    window.playTransformation = function() { /* No animation */ };
    window.resetTransformation = function() { /* No animation */ };
}

// Agile Metrics Chart
function createAgileMetricsChart() {
    const container = d3.select("#agile-metrics-chart");
    container.selectAll("*").remove();

    const containerNode = container.node();
    const containerRect = containerNode.getBoundingClientRect();
    
    // Responsive margins and dimensions
    const isMobile = window.innerWidth < 768;
    const margin = isMobile 
        ? { top: 30, right: 20, bottom: 100, left: 60 }
        : { top: 40, right: 60, bottom: 80, left: 80 };
    
    const width = Math.max(300, (containerRect.width || 700) - margin.left - margin.right);
    const height = isMobile ? 350 - margin.top - margin.bottom : 450 - margin.top - margin.bottom;

    const svg = container.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("display", "block")
        .style("margin", "0 auto");

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Data for before/after comparison
    const metricsData = [
        {
            metric: "Velocidad\n(Time-to-Market)",
            traditional: 35,
            agile: 64,
            improvement: "+64%",
            color: "#007bff"
        },
        {
            metric: "Calidad\n(Reducción Defectos)",
            traditional: 28,
            agile: 47,
            improvement: "+47%",
            color: "#28a745"
        },
        {
            metric: "Satisfacción\n(Equipo)",
            traditional: 42,
            agile: 71,
            improvement: "+71%",
            color: "#ffc107"
        },
        {
            metric: "Adaptabilidad\n(Respuesta Cambios)",
            traditional: 25,
            agile: 58,
            improvement: "+58%",
            color: "#17a2b8"
        }
    ];

    // Create scales
    const xScale = d3.scaleBand()
        .domain(metricsData.map(d => d.metric))
        .range([0, width])
        .padding(0.3);

    const yScale = d3.scaleLinear()
        .domain([0, 80])
        .range([height, 0]);

    // Create tooltip
    const tooltip = container.append("div")
        .attr("class", "chart-tooltip")
        .style("position", "absolute")
        .style("background", "rgba(0, 0, 0, 0.9)")
        .style("color", "white")
        .style("padding", "8px 12px")
        .style("border-radius", "4px")
        .style("font-size", "12px")
        .style("pointer-events", "none")
        .style("opacity", 0);

    // Add title
    g.append("text")
        .attr("class", "chart-title")
        .attr("x", width / 2)
        .attr("y", -10)
        .attr("text-anchor", "middle")
        .style("font-size", isMobile ? "14px" : "16px")
        .style("font-weight", "bold")
        .style("fill", "var(--uide-primary)")
        .text(isMobile ? "Ágiles vs Tradicionales" : "Impacto de Metodologías Ágiles vs Tradicionales");

    // Add axes
    g.append("g")
        .attr("class", "chart-axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text")
        .style("font-size", isMobile ? "9px" : "11px")
        .attr("transform", isMobile ? "rotate(-45)" : "rotate(-30)")
        .style("text-anchor", "end");

    g.append("g")
        .attr("class", "chart-axis")
        .call(d3.axisLeft(yScale).tickFormat(d => d + "%"));

    // Add Y axis label
    g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#666")
        .text("Efectividad (%)");

    // Create bar groups
    const barGroups = g.selectAll(".bar-group")
        .data(metricsData)
        .enter().append("g")
        .attr("class", "bar-group")
        .attr("transform", d => `translate(${xScale(d.metric)}, 0)`);

    const barWidth = xScale.bandwidth() / 2.5;

    // Traditional bars (left)
    barGroups.append("rect")
        .attr("class", "traditional-bar")
        .attr("x", 0)
        .attr("y", height)
        .attr("width", barWidth)
        .attr("height", 0)
        .attr("fill", "#dc3545")
        .attr("opacity", 0.7)
        .attr("rx", 4)
        .transition()
        .delay((d, i) => i * 300)
        .duration(1000)
        .attr("y", d => yScale(d.traditional))
        .attr("height", d => height - yScale(d.traditional));

    // Agile bars (right)
    barGroups.append("rect")
        .attr("class", "agile-bar")
        .attr("x", barWidth + 5)
        .attr("y", height)
        .attr("width", barWidth)
        .attr("height", 0)
        .attr("fill", "#28a745")
        .attr("opacity", 0.8)
        .attr("rx", 4)
        .transition()
        .delay((d, i) => i * 300 + 500)
        .duration(1000)
        .attr("y", d => yScale(d.agile))
        .attr("height", d => height - yScale(d.agile));

    // Add value labels
    barGroups.append("text")
        .attr("class", "traditional-label")
        .attr("x", barWidth / 2)
        .attr("y", height)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .attr("font-size", isMobile ? "9px" : "11px")
        .text(d => d.traditional + "%")
        .transition()
        .delay((d, i) => i * 300 + 800)
        .duration(500)
        .attr("y", d => yScale(d.traditional) + 15);

    barGroups.append("text")
        .attr("class", "agile-label")
        .attr("x", barWidth + 5 + barWidth / 2)
        .attr("y", height)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .attr("font-size", isMobile ? "9px" : "11px")
        .text(d => d.agile + "%")
        .transition()
        .delay((d, i) => i * 300 + 1300)
        .duration(500)
        .attr("y", d => yScale(d.agile) + 15);

    // Add improvement arrows and labels
    barGroups.append("path")
        .attr("class", "improvement-arrow")
        .attr("d", d => {
            const startY = yScale(d.traditional) - 10;
            const endY = yScale(d.agile) - 10;
            const x = barWidth + 2.5;
            return `M ${x} ${startY} L ${x} ${endY + 15} L ${x - 3} ${endY + 20} M ${x} ${endY + 15} L ${x + 3} ${endY + 20}`;
        })
        .attr("stroke", "#28a745")
        .attr("stroke-width", 2)
        .attr("fill", "none")
        .attr("opacity", 0)
        .transition()
        .delay((d, i) => i * 300 + 1800)
        .duration(800)
        .attr("opacity", 1);

    barGroups.append("text")
        .attr("class", "improvement-label")
        .attr("x", barWidth + 2.5)
        .attr("y", d => (yScale(d.traditional) + yScale(d.agile)) / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "#28a745")
        .attr("font-weight", "bold")
        .attr("font-size", isMobile ? "10px" : "12px")
        .attr("opacity", 0)
        .text(d => d.improvement)
        .transition()
        .delay((d, i) => i * 300 + 2000)
        .duration(500)
        .attr("opacity", 1);

    // Add legend
    const legend = g.append("g")
        .attr("class", "legend")
        .attr("transform", isMobile 
            ? `translate(${width / 2 - 60}, -25)` 
            : `translate(${width - 150}, 20)`);

    legend.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", isMobile ? 12 : 15)
        .attr("height", isMobile ? 12 : 15)
        .attr("fill", "#dc3545")
        .attr("opacity", 0.7);

    legend.append("text")
        .attr("x", isMobile ? 16 : 20)
        .attr("y", isMobile ? 10 : 12)
        .attr("font-size", isMobile ? "10px" : "12px")
        .text("Tradicional");

    legend.append("rect")
        .attr("x", isMobile ? 80 : 0)
        .attr("y", isMobile ? 0 : 25)
        .attr("width", isMobile ? 12 : 15)
        .attr("height", isMobile ? 12 : 15)
        .attr("fill", "#28a745")
        .attr("opacity", 0.8);

    legend.append("text")
        .attr("x", isMobile ? 96 : 20)
        .attr("y", isMobile ? 10 : 37)
        .attr("font-size", isMobile ? "10px" : "12px")
        .text("Ágil");

    // Add interactivity
    barGroups.selectAll("rect")
        .on("mouseover", function (event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", 1)
                .attr("stroke", "#333")
                .attr("stroke-width", 2);

            const isTraditional = d3.select(this).classed("traditional-bar");
            const value = isTraditional ? d.traditional : d.agile;
            const method = isTraditional ? "Tradicional" : "Ágil";

            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);

            tooltip.html(`
                <strong>${method}</strong><br/>
                ${d.metric.replace('\n', ' ')}: <strong>${value}%</strong><br/>
                ${!isTraditional ? `Mejora: <strong>${d.improvement}</strong>` : ''}
            `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function () {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", d3.select(this).classed("traditional-bar") ? 0.7 : 0.8)
                .attr("stroke", "none");

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
}
// Add some interactivity
document.addEventListener('DOMContentLoaded', function () {
    // Add click animation to concept boxes
    const conceptBoxes = document.querySelectorAll('.concept-box, .highlight-box, .success-box, .warning-box');
    conceptBoxes.forEach(box => {
        box.addEventListener('click', function () {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Initialize AI Adoption Chart when the slide is visible
    setTimeout(() => {
        if (document.getElementById('ai-adoption-chart')) {
            createAIAdoptionChart();
        }
    }, 1000);

    // Initialize SDLC D3 Diagram
    if (document.getElementById('sdlc-d3-diagram')) {
        createSDLCDiagram();
    }

    // Initialize Methodology Transformation
    if (document.getElementById('methodology-transformation')) {
        createMethodologyTransformation();
    }

    // Initialize Agile Metrics Chart
    if (document.getElementById('agile-metrics-chart')) {
        createAgileMetricsChart();
    }

    // Add button event listeners
    const playBtn = document.getElementById('play-transformation');
    const resetBtn = document.getElementById('reset-transformation');
    
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (window.playTransformation) {
                window.playTransformation();
            }
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (window.resetTransformation) {
                window.resetTransformation();
            }
        });
    }
});

// Reveal.js event listeners for chart initialization
Reveal.on('slidechanged', event => {
    // Check if the current slide contains the AI chart
    if (event.currentSlide.querySelector('#ai-adoption-chart')) {
        setTimeout(() => {
            createAIAdoptionChart();
        }, 500);
    }

    // Check if the current slide contains the SDLC diagram
    if (event.currentSlide.querySelector('#sdlc-d3-diagram')) {
        setTimeout(() => {
            createSDLCDiagram();
        }, 300);
    }

    // Check if the current slide contains the methodology transformation
    if (event.currentSlide.querySelector('#methodology-transformation')) {
        setTimeout(() => {
            createMethodologyTransformation();
        }, 300);
    }

    // Check if the current slide contains the agile metrics chart
    if (event.currentSlide.querySelector('#agile-metrics-chart')) {
        setTimeout(() => {
            createAgileMetricsChart();
        }, 500);
    }
});

// Add resize listener for responsive charts
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recreate agile metrics chart if visible
        if (document.querySelector('#agile-metrics-chart') && 
            document.querySelector('#agile-metrics-chart').offsetParent !== null) {
            createAgileMetricsChart();
        }
    }, 300);
});