const cake = document.getElementById('cake');
const closedState = document.getElementById('closedState');
const openState = document.getElementById('openState');

let opened = false;

cake.addEventListener('click', (e) => {
    if (opened) return;
    opened = true;

    // tiny pastel burst where the cake was
    burst(e.clientX, e.clientY);

    // pop the cake away, then reveal the message
    cake.classList.add('pop');
    document.querySelector('.hint').style.display = 'none';

    setTimeout(() => {
        closedState.classList.add('hidden');
        openState.classList.remove('hidden');
    }, 450);
});

function burst(x, y) {
    const colors = ['#e8b4b8', '#f4d8a8', '#b8d8c8', '#c8b8e8', '#f0c8d8'];
    for (let i = 0; i < 14; i++) {
        const d = document.createElement('div');
        d.className = 'dot';
        d.style.left = x + 'px';
        d.style.top = y + 'px';
        d.style.background = colors[Math.floor(Math.random() * colors.length)];
        const angle = (Math.PI * 2 * i) / 14;
        const dist = 45 + Math.random() * 40;
        d.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
        d.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 950);
    }
}