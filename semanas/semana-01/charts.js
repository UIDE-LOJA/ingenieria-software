/**
 * Charts.js - Three.js 3D Charts for Semana 1
 * AI Adoption Chart and other visualizations
 */

/**
 * Creates a 3D bar chart showing AI adoption rates from 2024-2028
 */
function createAIAdoptionChart() {
    const container = document.getElementById('aiAdoptionChart');
    if (!container) return;
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);
    
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
    
    // Data points
    const years = [2024, 2025, 2026, 2027, 2028];
    const adoptionRates = [14, 35, 55, 75, 90];
    const colors = [0xe74c3c, 0xf39c12, 0xf1c40f, 0x2ecc71, 0x27ae60];
    
    // Create bars
    years.forEach((year, index) => {
        const barHeight = adoptionRates[index] / 10; // Scale down for visualization
        const geometry = new THREE.BoxGeometry(1.5, barHeight, 1.5);
        const material = new THREE.MeshLambertMaterial({ color: colors[index] });
        const bar = new THREE.Mesh(geometry, material);
        
        bar.position.x = (index - 2) * 3; // Spread bars horizontally
        bar.position.y = barHeight / 2; // Position at half height
        scene.add(bar);
        
        // Add text labels (simplified approach)
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 128;
        context.fillStyle = '#23356e';
        context.font = 'Bold 32px Arial';
        context.textAlign = 'center';
        context.fillText(year.toString(), 128, 40);
        context.fillText(adoptionRates[index] + '%', 128, 80);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set((index - 2) * 3, barHeight + 2, 0);
        sprite.scale.set(3, 1.5, 1);
        scene.add(sprite);
    });
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);
    
    // Position camera
    camera.position.set(0, 8, 12);
    camera.lookAt(0, 4, 0);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate scene slowly
        scene.rotation.y += 0.005;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
}

/**
 * Initialize all charts when the DOM is ready
 */
function initializeCharts() {
    // Add delay to ensure Three.js is loaded and slide is visible
    setTimeout(() => {
        createAIAdoptionChart();
    }, 1000);
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCharts);

// Re-initialize charts when presentation is ready (for Reveal.js)
if (typeof Reveal !== 'undefined') {
    Reveal.addEventListener('ready', initializeCharts);
}