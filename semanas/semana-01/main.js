/**
 * Main.js - Principal JavaScript for Semana 1 - Ingeniería de Software
 * Handles Mermaid initialization and Reveal.js configuration
 */

/**
 * Initialize Mermaid with custom theme and settings
 */
function initializeMermaid() {
    mermaid.initialize({ 
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            primaryColor: '#e9ab21',
            primaryTextColor: '#23356e',
            primaryBorderColor: '#23356e',
            lineColor: '#23356e',
            secondaryColor: '#f8f8f8',
            tertiaryColor: '#fff',
            background: '#fff',
            secondaryBorderColor: '#e9ab21'
        },
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true
        },
        timeline: {
            numberSectionStyles: 4,
            showLabel: true
        },
        gitgraph: {
            theme: 'base',
            themeVariables: {
                primaryColor: '#28a745',
                primaryTextColor: '#fff'
            }
        }
    });
}

/**
 * Initialize Reveal.js with full configuration
 */
function initializeReveal() {
    Reveal.initialize({
        hash: true,
        controls: true,
        progress: true,
        history: true,
        center: true,

        transition: 'slide',
        transitionSpeed: 'default',
        backgroundTransition: 'fade',

        autoAnimateEasing: 'ease',
        autoAnimateDuration: 1.0,
        autoAnimateUnmatched: true,

        math: {
            mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
            config: 'TeX-AMS_HTML-full',
        },

        zoom: {
            mouseWheel: false,
            maxZoom: 3,
            controls: true
        },

        search: {
            caseSensitive: false,
            showIcon: true
        },

        keyboard: {
            70: 'fullscreen', // f
            83: 'next', // s
            65: 'prev', // a
            66: 'pause', // b
            90: 'zoom', // z
            191: 'search' // /
        },

        plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealZoom, RevealSearch]
    });
}

/**
 * Initialize all components when DOM is ready
 */
function initializePresentation() {
    // Initialize Mermaid first
    initializeMermaid();
    
    // Then initialize Reveal.js
    initializeReveal();
    
    // Add custom event listeners
    setupCustomEventListeners();
}

/**
 * Setup custom event listeners for enhanced functionality
 */
function setupCustomEventListeners() {
    // Handle slide changes for dynamic content
    Reveal.addEventListener('slidechanged', function(event) {
        // Re-render Mermaid diagrams if needed
        if (event.currentSlide.querySelector('.mermaid')) {
            setTimeout(() => {
                mermaid.init();
            }, 100);
        }
        
        // Handle Three.js charts visibility
        const chartContainer = event.currentSlide.querySelector('#aiAdoptionChart');
        if (chartContainer && typeof createAIAdoptionChart === 'function') {
            setTimeout(createAIAdoptionChart, 200);
        }
    });

    // Handle window resize for responsive behavior
    window.addEventListener('resize', function() {
        // Let Reveal.js handle its own resize
        Reveal.layout();
        
        // Handle custom chart resizing
        setTimeout(() => {
            if (document.getElementById('aiAdoptionChart')) {
                // Chart has its own resize handler
            }
        }, 100);
    });
}

/**
 * Utility function to check if element is visible in viewport
 */
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Enhanced error handling for missing dependencies
 */
function checkDependencies() {
    const dependencies = [
        { name: 'Reveal', object: window.Reveal },
        { name: 'Mermaid', object: window.mermaid },
        { name: 'THREE', object: window.THREE }
    ];
    
    const missing = dependencies.filter(dep => !dep.object);
    
    if (missing.length > 0) {
        console.warn('Missing dependencies:', missing.map(dep => dep.name).join(', '));
        return false;
    }
    
    return true;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (checkDependencies()) {
        initializePresentation();
    } else {
        console.error('Failed to initialize presentation due to missing dependencies');
    }
});

// Fallback initialization for dynamic loading
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initializePresentation, 100);
}