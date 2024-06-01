// Lógica de movimiento de Pacman y fantasmas, detección de colisiones, etc.

document.addEventListener('keydown', function(event) {
    movePacman(event.key);
});

function movePacman(key) {
    var pacman1 = document.getElementById('pacman1');
    var pacman2 = document.getElementById('pacman2');
    var step = 40; // Tamaño del paso en píxeles

    switch(key) {
        case 'ArrowUp':
            // Lógica para mover a Pacman hacia arriba
            break;
        case 'ArrowDown':
            // Lógica para mover a Pacman hacia abajo
            break;
        case 'ArrowLeft':
            // Lógica para mover a Pacman hacia la izquierda
            break;
        case 'ArrowRight':
            // Lógica para mover a Pacman hacia la derecha
            break;
    }
}
