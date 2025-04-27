document.addEventListener('DOMContentLoaded', function() {
    const imagenDetalle = document.getElementById('imagen-detalle');
    const tituloDetalle = document.getElementById('titulo-detalle');
    const autorDetalle = document.getElementById('autor-detalle');
    const descripcionDetalle = document.getElementById('descripcion-detalle');

    const imagenes = [
    
        {
            
            id: 'jardin-delicias',
            urlMiniatura: 'imagenes/jardin-delicias.jpg',
            urlDetalle: 'imagenes/jardin-delicias.jpg',
            titulo: 'El Jardín de las delicias',
            autor: 'El Bosco',
            descripcion: 'Representa el Jardín del Edén, con la creación de Eva y una atmósfera de inocencia. Muestra un paraíso terrenal lleno de figuras desnudas entregadas a placeres sensuales, animales fantásticos y frutos gigantes. El panel derecho ilustra el Infierno, un paisaje oscuro y tortuoso lleno de tormentos grotescos y criaturas demoníacas. La obra está repleta de simbolismo y alegorías, cuyo significado exacto sigue siendo objeto de debate.',
            categoria: 'renacimiento-flamenco-temprano'
        },
        {
            id: 'el-grito',
            urlMiniatura: 'imagenes/el-grito.png',
            urlDetalle: 'imagenes/el-grito.png',
            titulo: 'El grito',
            autor: 'Edvard Munch',
            descripcion: 'Esta pintura expresionista icónica representa una figura andrógina en primer plano, con el rostro angustiado y la boca abierta en un grito silencioso. La figura se encuentra en un puente, con un paisaje turbulento y un cielo de colores intensos y ondulantes en el fondo. Dos figuras oscuras se distinguen a lo lejos. La obra transmite una profunda sensación de ansiedad, alienación y terror existencial, capturando una experiencia emocional intensa.',
            categoria: 'expresionismo'
         },
         {
            id: 'noche-estrellada', 
            urlMiniatura: 'imagenes/noche-estrellada.jpg',
            urlDetalle: 'imagenes/noche-estrellada.jpg',
            titulo: 'La noche estrellada', 
            autor: 'Vincent van Gogh',
            descripcion: 'Esta icónica pintura postimpresionista representa la vista desde la ventana del asilo de Saint-Rémy-de-Provence durante la noche...',
            categoria: 'postimpresionismo'
        },
        {
            id: 'auto-retrato',
            urlMiniatura: 'imagenes/auto-retrato.jpg',
            urlDetalle: 'imagenes/auto-retrato.jpg',
            titulo: 'Autorretrato con oreja vendada',
            autor: 'Vincent van Gogh',
            descripcion: 'Este es uno de los varios autorretratos que Van Gogh pintó después del incidente en el que se cortó parte de su oreja. Se le representa con un vendaje cubriendo la oreja derecha y llevando un abrigo de piel y un sombrero de piel verde. En el fondo, se aprecia una ventana abierta que muestra un paisaje nevado y un caballete. La expresión de su rostro es estoica y pensativa, reflejando quizás la turbulencia emocional y física que estaba experimentando.',
            categoria: 'postimpresionismo'
        },
        {
            id: 'almuerzo-remeros',
            urlMiniatura: 'imagenes/almuerzo-remeros.jpg',
            urlDetalle: 'imagenes/almuerzo-remeros.jpg',
            titulo: 'El almuerzo de los remeros',
            autor: 'Pierre-Auguste Renoir',
            descripcion: 'Esta vibrante pintura impresionista captura un momento de ocio y camaradería en la terraza del restaurante Fournaise, a orillas del Sena, en Chatou. Representa a un grupo de amigos de Renoir disfrutando de una comida, bebiendo y conversando. La luz del sol se filtra a través de los toldos, creando efectos de luz y sombra sobre las figuras y los objetos. La composición es dinámica, con una mezcla de retratos individuales y escenas grupales, capturando la atmósfera alegre y relajada del momento.',
            categoria: 'impresionismo'
        },
    ];

       // Función para obtener el valor de un parámetro de la URL
       function obtenerParametroDeURL(nombre) {
        nombre = nombre.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + nombre + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Obtener el ID de la obra de la URL
    const idObra = obtenerParametroDeURL('id');

    // Buscar la obra en el array 'imagenes'
    const obra = imagenes.find(img => img.id === idObra);

    // Mostrar los detalles si se encuentra la obra
    if (obra) {
        imagenDetalle.src = obra.urlDetalle;
        imagenDetalle.alt = obra.titulo;
        tituloDetalle.textContent = obra.titulo;
        autorDetalle.textContent = obra.autor;
        descripcionDetalle.textContent = obra.descripcion;
    } else {
        // Si no se encuentra la obra, mostrar un mensaje de error
        detalleObra.innerHTML = '<p>Obra no encontrada.</p>';
    }
});

  


      