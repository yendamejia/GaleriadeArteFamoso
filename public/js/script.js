document.addEventListener('DOMContentLoaded', function() {
    const galeriaImagenes = document.getElementById('galeria-imagenes');
    const botonesFiltro = document.querySelectorAll('#filtros button');
    const imagenes = [
        {
            id: 'noche-estrellada',
            urlMiniatura: 'imagenes/noche-estrellada.jpg',
            urlDetalle: 'imagenes/noche-estrellada.jpg',
            titulo: 'La noche estrellada',
            autor: 'Vincent van Gogh',
            descripcion: 'Esta icónica pintura postimpresionista representa la vista desde la ventana del asilo de Saint-Rémy-de-Provence durante la noche, aunque se cree que algunos elementos fueron añadidos de memoria. Destacan las pinceladas gruesas y arremolinadas que crean un cielo dinámico y lleno de energía. Un ciprés oscuro y flameante se eleva desde la parte inferior, conectando la tierra con el cielo estrellado. Un pequeño pueblo con una iglesia de aguja puntiaguda se sitúa en la parte inferior derecha. La luz de la luna creciente y las brillantes estrellas dominan la composición, irradiando una luminosidad casi sobrenatural.',
            categoría: 'postimpresionismo'
        },
        {
            id: 'jardin-delicias',
            urlMiniatura: 'imagenes/jardin-delicias.jpg',
            urlDetalle: 'imagenes/jardin-delicias.jpg',
            titulo: 'El Jardín de las delicias',
            autor: 'El Bosco',
            descripcion: 'Este tríptico complejo y enigmático es una de las obras maestras del Renacimiento flamenco temprano. El panel izquierdo representa el Jardín del Edén, con la creación de Eva y una atmósfera de inocencia. El panel central, el más grande y famoso, muestra un paraíso terrenal lleno de figuras desnudas entregadas a placeres sensuales, animales fantásticos y frutos gigantes. El panel derecho ilustra el Infierno, un paisaje oscuro y tortuoso lleno de tormentos grotescos y criaturas demoníacas. La obra está repleta de simbolismo y alegorías, cuyo significado exacto sigue siendo objeto de debate.',
            categoría: 'renacimiento-flamenco-temprano'
        },
        {
            id: 'el-grito',
            urlMiniatura: 'imagenes/el-grito.PNG',
            urlDetalle: 'imagenes/el-grito.PNG',
            titulo: 'El grito',
            autor: 'Edvard Munch',
            descripcion: 'Esta pintura expresionista icónica representa una figura andrógina en primer plano, con el rostro angustiado y la boca abierta en un grito silencioso. La figura se encuentra en un puente, con un paisaje turbulento y un cielo de colores intensos y ondulantes en el fondo. Dos figuras oscuras se distinguen a lo lejos. La obra transmite una profunda sensación de ansiedad, alienación y terror existencial, capturando una experiencia emocional intensa.',
            categoría: 'expresionismo'
        },
        {
            id: 'auto-retrato',
            urlMiniatura: 'imagenes/auto-retrato.jpg',
            urlDetalle: 'imagenes/auto-retrato.jpg',
            titulo: 'Auto Retrato con oreja vendada',
            autor: 'Vincent van Gogh',
            descripcion: 'Este es uno de los varios auto retratos que Van Gogh pintó después del incidente en el que se cortó parte de su oreja. Se le representa con un vendaje cubriendo la oreja derecha y llevando un abrigo de piel y un sombrero de piel verde. En el fondo, se aprecia una ventana abierta que muestra un paisaje nevado y un caballete. La expresión de su rostro es estoica y pensativa, reflejando quizás la turbulencia emocional y física que estaba experimentando.',
            categoría: 'postimpresionismo'
        },
        {
            id: 'almuerzo-remeros',
            urlMiniatura: 'imagenes/almuerzo-remeros.jpg',
            urlDetalle: 'imagenes/almuerzo-remeros.jpg',
            titulo: 'El almuerzo de los remeros',
            autor: 'Pierre-Auguste Renoir',
            descripcion: 'Esta vibrante pintura impresionista captura un momento de ocio y camaradería en la terraza del restaurante Fournaise, a orillas del Sena, en Chatou. Representa a un grupo de amigos de Renoir disfrutando de una comida, bebiendo y conversando. La luz del sol se filtra a través de los toldos, creando efectos de luz y sombra sobre las figuras y los objetos. La composición es dinámica, con una mezcla de retratos individuales y escenas grupales, capturando la atmósfera alegre y relajada del momento.',
            categoría: 'impresionismo'
        },
       
    ];

    function mostrarImagenes(arrImagenes) {
        galeriaImagenes.innerHTML = ''; // Limpiar la galería
        arrImagenes.forEach(imagen => {
            const divCol = document.createElement('div');
            divCol.classList.add('col-md-4', 'mb-3');
            divCol.innerHTML = `
                <div class="card">
                    <img src="${imagen.urlMiniatura}" class="card-img-top" alt="${imagen.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${imagen.titulo}</h5>
                        <p class="card-text">${imagen.autor}</p>
                        <a href="detalle.html?id=${imagen.id}" class="btn btn-primary">Ver detalle</a>
                    </div>
                </div>
            `;
            galeriaImagenes.appendChild(divCol);
        });
    }

    function filtrarImagenes(categoría) {
        if (categoría === 'todos') {
            mostrarImagenes(imagenes);
        } else {
            const imagenesFiltradas = imagenes.filter(imagen => imagen.categoría.toLowerCase().replace(/ /g, '-') === categoría);
            mostrarImagenes(imagenesFiltradas);
        }
    }

    // Mostrar todas las imágenes al cargar la página
    mostrarImagenes(imagenes);

    // Event listeners para los botones de filtro
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function() {
            const categoría = this.getAttribute('data-categoría');
            filtrarImagenes(categoría);

            // Remover la clase 'active' de todos los botones y añadirla al botón clickeado
            botonesFiltro.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});