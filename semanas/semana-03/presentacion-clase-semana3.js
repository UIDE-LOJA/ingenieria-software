// Custom JavaScript for Semana 3 - Historias de Usuario, Casos de Uso y Validación

// ===== FUNCIONES GLOBALES PARA REQUERIMIENTOS =====
// Declarar funciones globales temprano para evitar errores de referencia
let showRequirementsInfo, closeOverlay;

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('Presentación Semana 3 - Historias de Usuario, Casos de Uso y Validación cargada');

    // Add interactive behaviors
    initializeInteractiveElements();

    // Add keyboard shortcuts
    addKeyboardShortcuts();

    // Initialize timers for activities
    initializeTimers();
});

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add hover effects to concept boxes
    const conceptBoxes = document.querySelectorAll('.concept-box');
    conceptBoxes.forEach(box => {
        box.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });

        box.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add click effects to interactive boxes
    const interactiveBoxes = document.querySelectorAll('.interactive-box');
    interactiveBoxes.forEach(box => {
        box.addEventListener('click', function () {
            this.style.background = 'rgba(233, 171, 33, 0.3)';
            setTimeout(() => {
                this.style.background = 'rgba(233, 171, 33, 0.2)';
            }, 200);
        });
    });
}

// Add keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function (event) {
        // Press 'h' to show help
        if (event.key === 'h' || event.key === 'H') {
            showHelp();
        }

        // Press 't' to toggle timer
        if (event.key === 't' || event.key === 'T') {
            toggleTimer();
        }

        // Press 'r' to show requirements guide
        if (event.key === 'r' || event.key === 'R') {
            showRequirementsInfo();
        }
    });
}

// Show help overlay
function showHelp() {
    const helpContent = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 9999; display: flex; 
                    align-items: center; justify-content: center;" id="helpOverlay">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 500px;">
                <h3>Atajos de Teclado</h3>
                <ul style="text-align: left;">
                    <li><strong>H:</strong> Mostrar esta ayuda</li>
                    <li><strong>T:</strong> Activar/desactivar temporizador</li>
                    <li><strong>R:</strong> Mostrar guía de requerimientos</li>
                    <li><strong><i class="fas fa-clipboard-list"></i> (icono flotante):</strong> Mostrar guía de técnicas</li>
                    <li><strong>ESC:</strong> Cerrar overlays</li>
                    <li><strong>Espacio:</strong> Siguiente slide</li>
                    <li><strong>Shift + Espacio:</strong> Slide anterior</li>
                </ul>
                <button onclick="closeOverlay('helpOverlay')" 
                        style="margin-top: 1rem; padding: 0.5rem 1rem; 
                               background: #28a745; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', helpContent);

    // Close on ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeOverlay('helpOverlay');
        }
    });
}

// Show requirements information guide
function showRequirementsInfo() {
    const requirementsContent = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 9999; display: flex; 
                    align-items: center; justify-content: center;" id="requirementsOverlay">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 600px; max-height: 80vh; overflow-y: auto;">
                <h3><i class="fas fa-clipboard-list"></i> Guía Rápida: Técnicas de Requerimientos</h3>
                
                <div style="margin: 1rem 0;">
                    <h4 style="color: #910048;"><i class="fas fa-user-edit"></i> Historias de Usuario</h4>
                    <ul style="font-size: 0.9em; text-align: left;">
                        <li><strong>Formato:</strong> "Como [usuario], quiero [funcionalidad] para [beneficio]"</li>
                        <li><strong>Características:</strong> Simples, centradas en el usuario, ágiles</li>
                        <li><strong>Criterios INVEST:</strong> Independent, Negotiable, Valuable, Estimable, Small, Testable</li>
                    </ul>
                </div>

                <div style="margin: 1rem 0;">
                    <h4 style="color: #23356E;"><i class="fas fa-sitemap"></i> Casos de Uso</h4>
                    <ul style="font-size: 0.9em; text-align: left;">
                        <li><strong>Componentes:</strong> Actores, interacciones, información adicional</li>
                        <li><strong>Origen:</strong> Método Objectory (1993), incorporado en UML</li>
                        <li><strong>Ventaja:</strong> Técnica formal y estructurada</li>
                    </ul>
                </div>

                <div style="margin: 1rem 0;">
                    <h4 style="color: #E9AB21;"><i class="fas fa-check-circle"></i> Criterios de Aceptación</h4>
                    <ul style="font-size: 0.9em; text-align: left;">
                        <li><strong>Función:</strong> Contrato del sistema cliente-desarrollador</li>
                        <li><strong>Características:</strong> Medibles, verificables, acordados mutuamente</li>
                        <li><strong>Rol:</strong> Base para pruebas de aceptación</li>
                    </ul>
                </div>

                <div style="margin: 1rem 0;">
                    <h4 style="color: #28a745;"><i class="fas fa-vial"></i> Métodos de Validación</h4>
                    <ul style="font-size: 0.9em; text-align: left;">
                        <li><strong>Revisiones:</strong> Técnicas estáticas, no requieren ejecutar software</li>
                        <li><strong>Prototipos:</strong> Versión inicial para demostrar conceptos</li>
                        <li><strong>Pruebas de Aceptación:</strong> Etapa final antes del uso operacional</li>
                    </ul>
                </div>

                <div style="margin: 1rem 0; padding: 1rem; background: rgba(35, 53, 110, 0.1); border-radius: 8px;">
                    <h4 style="color: #23356E; margin: 0 0 0.5rem 0;"><i class="fas fa-lightbulb"></i> Recordatorio Clave</h4>
                    <p style="margin: 0; font-style: italic;">
                        <strong>Validación:</strong> "¿Construimos el producto correcto?"<br>
                        <strong>Verificación:</strong> "¿Construimos bien el producto?"
                    </p>
                </div>

                <button onclick="closeOverlay('requirementsOverlay')" 
                        style="margin-top: 1rem; padding: 0.5rem 1rem; 
                               background: #910048; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Cerrar Guía
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', requirementsContent);

    // Close on ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeOverlay('requirementsOverlay');
        }
    });
}

// Close overlay function
function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.remove();
    }
}

// Timer functionality
let timer1, timer2;
let timer1Running = false, timer2Running = false;
let timer1Seconds = 0, timer2Seconds = 0;

function initializeTimers() {
    // Timer functionality will be added if needed for specific activities
    console.log('Timers initialized for requirements activities');
}

function toggleTimer() {
    // Simple timer toggle functionality
    console.log('Timer toggle functionality available');
}

// Format time for display
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Add smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Enhanced presentation interactions
function enhancePresentation() {
    // Add fade-in animation to slides
    const slides = document.querySelectorAll('.reveal .slides section');
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        slide.style.transform = 'translateY(20px)';
        slide.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            slide.style.opacity = '1';
            slide.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize Mermaid diagrams
document.addEventListener('DOMContentLoaded', function() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true
            },
            themeVariables: {
                primaryColor: '#910048',
                primaryTextColor: '#ffffff',
                primaryBorderColor: '#23356E',
                lineColor: '#23356E',
                secondaryColor: '#E9AB21',
                tertiaryColor: '#f8f8f8'
            },
            // Configuración responsiva global
            maxTextSize: 90000,
            maxEdges: 999,
            // Configuración específica para presentaciones
            securityLevel: 'loose'
        });
    }
});

// Export functions for global access
window.showRequirementsInfo = showRequirementsInfo;
window.closeOverlay = closeOverlay;

console.log('Presentación Semana 3 - Ingeniería de Software - JavaScript cargado completamente');