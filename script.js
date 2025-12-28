const quadrants = document.querySelectorAll('.quadrant');

const config = {
    Q1: { color: '#FF00FF', cursor: 'crosshair' },
    Q2: { color: '#00FFFF', cursor: 'grab' },
    Q3: { color: '#FFFF00', cursor: 'pointer' },
    Q4: { color: '#FF00AA', cursor: 'move' }
};

quadrants.forEach(q => {
    q.querySelector('h2').style.opacity = '0';
    q.querySelector('p').style.opacity = '0';
});

quadrants.forEach(q => {
    q.querySelector('h2').style.opacity = '0';
    q.querySelector('p').style.opacity = '0';
});

function activate(target) {
    
    quadrants.forEach(q => {
        q.style.background = 'white';
        q.classList.remove('active');
        q.querySelector('h2').style.opacity = '0';
        q.querySelector('p').style.opacity = '0';
        q.querySelector('h2').style.opacity = '0';
        q.querySelector('p').style.opacity = '0';
        q.querySelector('p').textContent = '';
    });

    
    
    const settings = config[target.id];
    const title = target.querySelector('h2');
    const label = target.querySelector('p');
    title.style.opacity = '1';
    label.style.opacity = '1';
    title.style.color = 'white';
    label.style.color = 'white';

    title.style.opacity = '1';
    title.style.color = 'white';
    label.style.opacity = '1';
    label.style.color = 'white';
    target.style.background = settings.color;
    target.style.cursor = settings.cursor;
    
    target.classList.add('active');
}

quadrants.forEach(q => {
    q.onmouseenter = () => activate(q);
});
document.querySelector('.container').onmouseleave = () => {
    quadrants.forEach(q => {
        q.style.background = 'white';
        q.classList.remove('active');
        q.querySelector('h2').style.opacity = '0';
        q.querySelector('p').style.opacity = '0';
    });
};




