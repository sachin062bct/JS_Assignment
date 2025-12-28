const quadrants = document.querySelectorAll('.quadrant');

const quadrantSettings = {
    Q1: { color: '#FF00FF', cursor: 'crosshair' },
    Q2: { color: '#00FFFF', cursor: 'grab' },
    Q3: { color: '#FFFF00', cursor: 'pointer' },
    Q4: { color: '#FF00AA', cursor: 'move' }
};

quadrants.forEach(function(quad) {
    const heading = quad.querySelector('h2');
    const paragraph = quad.querySelector('p');
    heading.style.opacity = '0';
    paragraph.style.opacity = '0';
});


function activateQuadrant(targetElement) {
    
    for (let i = 0; i < quadrants.length; i++) {
        const q = quadrants[i];
        q.style.background = 'white';
        q.classList.remove('active');
        

        const h2Element = q.querySelector('h2');
        const pElement = q.querySelector('p');
        h2Element.style.opacity = '0';
        pElement.style.opacity = '0';
        pElement.textContent = '';
    }

   
    const quadId = targetElement.id;
    const settings = quadrantSettings[quadId];
    
    const titleElement = targetElement.querySelector('h2');
    const labelElement = targetElement.querySelector('p');

    titleElement.style.opacity = '1';
    titleElement.style.color = 'white';
    labelElement.style.opacity = '1';
    labelElement.style.color = 'white';
    
    targetElement.style.background = settings.color;
    targetElement.style.cursor = settings.cursor;
    
    targetElement.classList.add('active');
}

function resetAllQuadrants() {
    quadrants.forEach(function(q) {
        q.style.background = 'white'; 
        q.style.cursor = 'default';   
        q.classList.remove('active');
        
        const h2Element = q.querySelector('h2');
        const pElement = q.querySelector('p');
        h2Element.style.opacity = '0';
        pElement.style.opacity = '0';
        pElement.textContent = '';
    });
}

quadrants.forEach(function(quadrant) {
    quadrant.addEventListener('mouseenter', function() {
        activateQuadrant(quadrant);
    });
    quadrant.addEventListener('mouseleave', function() {
        resetAllQuadrants();
    });
});




