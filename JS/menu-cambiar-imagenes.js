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


// ╔═════════════════════════════════════════╗
// ║ ----------- Galería Roblox ------------ ║
// ╚═════════════════════════════════════════╝
const imagenes_RB = [
    "MEDIA/roblox-moment/roblox-base.png",
    "MEDIA/roblox-moment/roblox-1.png",
    "MEDIA/roblox-moment/roblox-2.png",
    "MEDIA/roblox-moment/roblox-3.png",
    "MEDIA/roblox-moment/roblox-4.png",
    "MEDIA/roblox-moment/roblox-5.png",
    "MEDIA/roblox-moment/roblox-6.png",
    "MEDIA/roblox-moment/roblox-7.png",
    "MEDIA/roblox-moment/roblox-8.png",
    "MEDIA/roblox-moment/roblox-9.png",
    "MEDIA/roblox-moment/roblox-10.png",
    "MEDIA/roblox-moment/roblox-11.png",
    "MEDIA/roblox-moment/roblox-12.png",
    "MEDIA/roblox-moment/roblox-13.png",
    "MEDIA/roblox-moment/roblox-14.png",
    "MEDIA/roblox-moment/roblox-15.png",
    "MEDIA/roblox-moment/roblox-16.png",
    "MEDIA/roblox-moment/roblox-17.png",
    "MEDIA/roblox-moment/roblox-18.png",
    "MEDIA/roblox-moment/roblox-19.png"
];

document.querySelectorAll("#galeria-roblox").forEach((galeria) => {
    const imagen = galeria.querySelector("#foto-enorme-roblox img");
    const botonAnterior = galeria.querySelector("#boton-izquierdo-RB");
    const botonSiguiente = galeria.querySelector("#boton-derecho-RB");
    const contenedor = galeria.parentElement;
    const fecha = contenedor.querySelector("#fecha-RB h2");
    const texto = contenedor.querySelector("#texto-RB p");
    const fechaPredeterminada = fecha.textContent;
    const textoPredeterminado = texto.innerHTML;
    const informacion_RB = [
        null,
        { fecha: "11 - 01 - 2026", texto: "Aquel momento en q empezamos a probar un<br>cosplay de ManChester :D" },
        { fecha: "11 - 01 - 2026", texto: "Amé del como mi polola puso esa<br>cabecita toda cute en su avatar <3" },
        { fecha: "11 - 01 - 2026", texto: "Somos inseparables..." },
        { fecha: "15 - 02 - 2026", texto: "Ahí fue cuando probé Maple Hospital por 2da vez<br>me gustó, y más cuando estuve junto con ella ;3" },
        { fecha: "15 - 02 - 2026", texto: "Me encantó como  mi polola fue a hacer<br>un avatar similar al mio jsjs" },
        { fecha: "15 - 02 - 2026", texto: "[Sus moment]<br>Por algúna razón aproveché ese<br>momento cuando ella cayó bien tiesa-" },
        { fecha: "21 - 02 - 2026", texto: "Nos fuimos a Creador de Avatar de Catálogo y<br>amé dl como creó su avatar todo hermoso :D" },
        { fecha: "21 - 02 - 2026", texto: "Juntos somos lo mejor en<br>nuestra relacion..." },
        { fecha: "05 - 03 - 2026", texto: "Bloxburg Time :3" },
        { fecha: "21 - 03 - 2026", texto: "Hubo una vez en q nos fuimos a Brookhaven<br>y mi esposita volvió a ser un kitsune" },
        { fecha: "21 - 03 - 2026", texto: "y si nos volvemos a besarnos mi Yuki¿<br>quiero seguir haciendolo..." },
        { fecha: "21 - 01 - 2026", texto: "Como amo a mi Youka, amo todo d ella <3" },
        { fecha: "08 - 04 - 2026", texto: "Ojalá pueda mimir con use irl..." },
        { fecha: "08 - 04 - 2026", texto: "Youka chikita, q cute se ve jsjs" },
        { fecha: "13 - 06 - 2026", texto: "Chinchillaaaas, ijkdjaiosdj amoo" },
        { fecha: "14 - 06 - 2026", texto: "Nosotros con nuestras pets q nos corresponde :3<br>Youka con su murcielaguito<br>Magia con su kitsune" },
        { fecha: "15 - 06 - 2026", texto: "He esperado un buen rato para q ella esté aqui<br>y finalmente vino a por mi... <3" },
        { fecha: "21 - 10 - 2026", texto: "El garden d mi Yuki lleno de murcielagos enormes :D" },
        { fecha: "21 - 10 - 2026", texto: "Volvimos a estar juntos en el<br>Roblo despues de un buen tiempo..." },
    ];
    let indiceActual = 0;

    ajustarImagenAlContenedor(imagen);

    const mostrarImagen = (indice) => {
        indiceActual = (indice + imagenes_RB.length) % imagenes_RB.length;
        imagen.src = imagenes_RB[indiceActual];
        imagen.alt = `Imagen ${indiceActual + 1} de ${imagenes_RB.length}`;

        const informacion = informacion_RB[indiceActual];
        fecha.textContent = informacion?.fecha ?? fechaPredeterminada;
        texto.innerHTML = informacion?.texto ?? textoPredeterminado;
    };

    botonAnterior.addEventListener("click", () => {
        mostrarImagen(indiceActual - 1);
    });

    botonSiguiente.addEventListener("click", () => {
        mostrarImagen(indiceActual + 1);
    });
});