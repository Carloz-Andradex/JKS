document.addEventListener('DOMContentLoaded', function () {
    const flowerContainer = document.getElementById('flowerContainer');
    const addFlowerButton = document.getElementById('addFlowerButton');
    const message = document.getElementById('message');
    let flowerCount = 0;

    addFlowerButton.addEventListener('click', function () {
        // Crear una nueva flor
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Crear los pétalos
        for (let i = 0; i < 8; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            flower.appendChild(petal);
        }

        // Crear el centro de la flor
        const center = document.createElement('div');
        center.classList.add('center');
        flower.appendChild(center);

        // Crear el tallo de la flor
        const stem = document.createElement('div');
        stem.classList.add('stem');
        flower.appendChild(stem);

        // Agregar la flor al contenedor de flores
        flowerContainer.appendChild(flower);

        // Incrementar el contador de flores
        flowerCount++;

        // Mostrar el mensaje si hay al menos una flor
        if (flowerContainer.children.length > 0) {
            message.classList.remove('hidden');
        }

        // Redirigir a un enlace después de generar 7 flores
        if (flowerCount === 7) {
            window.location.href = 'https://www.youtube.com/watch?v=07A2dxfzsIg'; // Cambia este enlace por el que desees
        }
    });
});
