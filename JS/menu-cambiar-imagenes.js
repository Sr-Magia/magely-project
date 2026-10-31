// ╔═════════════════════════════════════════╗
// ║ ---- Ajuste automático de Imágenes ---- ║
// ╚═════════════════════════════════════════╝
const ajustarImagenAlContenedor = (imagen) => {
    imagen.style.width = "100%";
    imagen.style.height = "100%";
    imagen.style.objectFit = "contain";
};


// ╔═════════════════════════════════════════╗
// ║ ------------ Galería Youka ------------ ║
// ╚═════════════════════════════════════════╝
const imagenes_Y_Galeria = [
    "MEDIA/match-youka.png",
    "MEDIA/oc-youka/oc-youka-1.jpg",
    "MEDIA/oc-youka/oc-youka-2.jpg"
];

document.querySelectorAll("#magia-box").forEach((galeria) => {
    const imagen = galeria.querySelector(".pareja img");
    const botonAnterior = galeria.querySelector(".btn-izquierda");
    const botonSiguiente = galeria.querySelector(".btn-derecha");
    let indiceActual = 0;

    ajustarImagenAlContenedor(imagen);

    const mostrarImagen = (indice) => {
        indiceActual = (indice + imagenes_Y_Galeria.length) % imagenes_Y_Galeria.length;
        imagen.src = imagenes_Y_Galeria[indiceActual];
        imagen.alt = `Imagen ${indiceActual + 1} de ${imagenes_Y_Galeria.length}`;
    };

    botonAnterior.addEventListener("click", () => {
        mostrarImagen(indiceActual - 1);
    });

    botonSiguiente.addEventListener("click", () => {
        mostrarImagen(indiceActual + 1);
    });
});


// ╔═════════════════════════════════════════╗
// ║ ------------ Galería Magia ------------ ║
// ╚═════════════════════════════════════════╝
const imagenes_M_Galeria = [
    "MEDIA/match-magia.png",
    "MEDIA/oc-magia/oc-magia-1.png",
    "MEDIA/oc-magia/oc-magia-2.png"
];

document.querySelectorAll("#youka-box").forEach((galeria) => {
    const imagen = galeria.querySelector(".pareja img");
    const botonAnterior = galeria.querySelector(".btn-izquierda");
    const botonSiguiente = galeria.querySelector(".btn-derecha");
    let indiceActual = 0;

    ajustarImagenAlContenedor(imagen);

    const mostrarImagen = (indice) => {
        indiceActual = (indice + imagenes_M_Galeria.length) % imagenes_M_Galeria.length;
        imagen.src = imagenes_M_Galeria[indiceActual];
        imagen.alt = `Imagen ${indiceActual + 1} de ${imagenes_M_Galeria.length}`;
    };

    botonAnterior.addEventListener("click", () => {
        mostrarImagen(indiceActual - 1);
    });

    botonSiguiente.addEventListener("click", () => {
        mostrarImagen(indiceActual + 1);
    });
});