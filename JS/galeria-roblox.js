// ╔═════════════════════════════════════════╗
// ║ ---- Ajuste automático de Imágenes ---- ║
// ╚═════════════════════════════════════════╝
const ajustarImagenRobloxAlContenedor = (imagen) => {
    imagen.style.width = "100%";
    imagen.style.height = "100%";
    imagen.style.objectFit = "contain";
};


// ╔═════════════════════════════════════════╗
// ║ -------- Galería Maple Hospital ------- ║
// ╚═════════════════════════════════════════╝
const imagenes_MH = [
    "MEDIA/roblox-moment/MH-1.png",
    "MEDIA/roblox-moment/MH-2.png",
    "MEDIA/roblox-moment/MH-3.png"
];

document.querySelectorAll("#galeria-MH").forEach((galeria) => {
    const imagen = galeria.querySelector("#foto-enorme-MH img");
    const botonAnterior = galeria.querySelector("#boton-izquierdo-MH");
    const botonSiguiente = galeria.querySelector("#boton-derecho-MH");
    const contenedor = galeria.parentElement;
    const fecha = contenedor.querySelector("#fecha-MH h2");
    const texto = contenedor.querySelector("#texto-MH p");
    const fechaPredeterminada = fecha.textContent;
    const textoPredeterminado = texto.innerHTML;
    const informacion_MH = [
        null,
        { fecha: "15 - 02 - 2026", texto: "Me encantó como  mi polola fue a hacer un avatar similar al mio jsjs" },
        { fecha: "15 - 02 - 2026", texto: "[Sus moment]<br>Por algúna razón aproveché ese momento cuando ella cayó bien tiesa-" }
    ];
    let indiceActual = 0;

    ajustarImagenRobloxAlContenedor(imagen);

    const mostrarImagen = (indice) => {
        indiceActual = (indice + imagenes_MH.length) % imagenes_MH.length;
        imagen.src = imagenes_MH[indiceActual];
        imagen.alt = `Imagen ${indiceActual + 1} de ${imagenes_MH.length}`;

        const informacion = informacion_MH[indiceActual];
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



// ╔═════════════════════════════════════════╗
// ║ -------- Galería Grow a Garden -------- ║
// ╚═════════════════════════════════════════╝
const imagenes_GAG = [
    "MEDIA/roblox-moment/GAG-1.png",
    "MEDIA/roblox-moment/GAG-2.png",
    "MEDIA/roblox-moment/GAG-3.png",
    "MEDIA/roblox-moment/GAG-4.png",
    "MEDIA/roblox-moment/GAG-5.png"
];

document.querySelectorAll("#galeria-GAG").forEach((galeria) => {
    const imagen = galeria.querySelector("#foto-enorme-GAG img");
    const botonAnterior = galeria.querySelector("#boton-izquierdo-GAG");
    const botonSiguiente = galeria.querySelector("#boton-derecho-GAG");
    const contenedor = galeria.parentElement;
    const fecha = contenedor.querySelector("#fecha-GAG h2");
    const texto = contenedor.querySelector("#texto-GAG p");
    const fechaPredeterminada = fecha.textContent;
    const textoPredeterminado = texto.innerHTML;
    const informacion_GAG = [
        null,
        { fecha: "14 - 06 - 2026", texto: "Nosotros con nuestras pets q nos corresponde :3<br>Youka con su murcielaguito<br>Magia con su kitsune" },
        { fecha: "15 - 06 - 2026", texto: "He esperado un buen rato para q ella esté aqui y finalmente vino a por mi... <3" },
        { fecha: "21 - 10 - 2026", texto: "El garden d mi Yuki lleno de murcielagos enormes :D" },
        { fecha: "21 - 10 - 2026", texto: "Volvimos a estar juntos en el Roblo despues de un buen tiempo..." },
    ];
    let indiceActual = 0;

    ajustarImagenRobloxAlContenedor(imagen);

    const mostrarImagen = (indice) => {
        indiceActual = (indice + imagenes_GAG.length) % imagenes_GAG.length;
        imagen.src = imagenes_GAG[indiceActual];
        imagen.alt = `Imagen ${indiceActual + 1} de ${imagenes_GAG.length}`;

        const informacion = informacion_GAG[indiceActual];
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



// ╔══════════════════════════════════════════╗
// ║ ---- Galería Catalog Avatar Creator ---- ║
// ╚══════════════════════════════════════════╝
const imagenes_CAC = [
    "MEDIA/roblox-moment/CAC-1-1.png",
    "MEDIA/roblox-moment/CAC-1-2.png",
    "MEDIA/roblox-moment/CAC-1-3.png",
    "MEDIA/roblox-moment/CAC-2-1.png",
    "MEDIA/roblox-moment/CAC-2-2.png",
    "MEDIA/roblox-moment/CAC-2-3.png"
];

document.querySelectorAll("#galeria-CAC").forEach((galeria) => {
    const imagen = galeria.querySelector("#foto-enorme-CAC img");
    const botonAnterior = galeria.querySelector("#boton-izquierdo-CAC");
    const botonSiguiente = galeria.querySelector("#boton-derecho-CAC");
    const contenedor = galeria.parentElement;
    const fecha = contenedor.querySelector("#fecha-CAC h2");
    const texto = contenedor.querySelector("#texto-CAC p");
    const fechaPredeterminada = fecha.textContent;
    const textoPredeterminado = texto.innerHTML;
    const informacion_CAC = [
        null,
        { fecha: "[] - 2026", texto: "Amo estar con ella, amo hacer match con ella, amo siempre hacer actividades con ella" },
        { fecha: "[] - 2026", texto: "Jamás pensé q si llegamos a separarnos, mi vida estaría decayendo..." },
        { fecha: "[] - 2026", texto: "Mi Youka hermosa... q preciosa se ve ahí..." },
        { fecha: "[] - 2026", texto: "Siempre quise estar sentada alfrente suyo y jugar con ella <3" },
        { fecha: "[] - 2026", texto: "Youka wonita y preciosa, q linda<br>carita tiene como para besarla" }
    ];
    let indiceActual = 0;

    ajustarImagenRobloxAlContenedor(imagen);

    const mostrarImagen = (indice) => {
        indiceActual = (indice + imagenes_CAC.length) % imagenes_CAC.length;
        imagen.src = imagenes_CAC[indiceActual];
        imagen.alt = `Imagen ${indiceActual + 1} de ${imagenes_CAC.length}`;

        const informacion = informacion_CAC[indiceActual];
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



// ╔═════════════════════════════════════════╗
// ║ ---- Galería Bienvenido a Bloxburg ---- ║
// ╚═════════════════════════════════════════╝
const imagenes_BAB = [
    "MEDIA/roblox-moment/BAB-1.png",
    "MEDIA/roblox-moment/BAB-2.png",
    "MEDIA/roblox-moment/BAB-3.png"
];

document.querySelectorAll("#galeria-BAB").forEach((galeria) => {
    const imagen = galeria.querySelector("#foto-enorme-BAB img");
    const botonAnterior = galeria.querySelector("#boton-izquierdo-BAB");
    const botonSiguiente = galeria.querySelector("#boton-derecho-BAB");
    const contenedor = galeria.parentElement;
    const fecha = contenedor.querySelector("#fecha-BAB h2");
    const texto = contenedor.querySelector("#texto-BAB p");
    const fechaPredeterminada = fecha.textContent;
    const textoPredeterminado = texto.innerHTML;
    const informacion_BAB = [
        null,
        { fecha: "08 - 04 - 2026", texto: "Cambió d color a un rosita pero se ve muy linda<br>Ojala pudiera mimir con ella irl..." },
        { fecha: "08 - 04 - 2026", texto: "jkjsskj ayy q cute se ve del como apenas alcanza la mesita :3" },
    ];
    let indiceActual = 0;

    ajustarImagenRobloxAlContenedor(imagen);

    const mostrarImagen = (indice) => {
        indiceActual = (indice + imagenes_BAB.length) % imagenes_BAB.length;
        imagen.src = imagenes_BAB[indiceActual];
        imagen.alt = `Imagen ${indiceActual + 1} de ${imagenes_BAB.length}`;

        const informacion = informacion_BAB[indiceActual];
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



// ╔══════════════════════════════════════════╗
// ║ ---------- Galería Brookhaven ---------- ║
// ╚══════════════════════════════════════════╝
const imagenes_BH = [
    "MEDIA/roblox-moment/BH-1.png",
    "MEDIA/roblox-moment/BH-2.png",
    "MEDIA/roblox-moment/BH-3.png"
];

document.querySelectorAll("#galeria-BH").forEach((galeria) => {
    const imagen = galeria.querySelector("#foto-enorme-BH img");
    const botonAnterior = galeria.querySelector("#boton-izquierdo-BH");
    const botonSiguiente = galeria.querySelector("#boton-derecho-BH");
    const contenedor = galeria.parentElement;
    const fecha = contenedor.querySelector("#fecha-BH h2");
    const texto = contenedor.querySelector("#texto-BH p");
    const fechaPredeterminada = fecha.textContent;
    const textoPredeterminado = texto.innerHTML;
    const informacion_BH = [
        null,
        { fecha: "21 - 03 - 2026", texto: "mua! muaa, besito en nuestra casita para mas tarde ir a lo profund-" },
        { fecha: "21 - 03 - 2026", texto: "Mi Youka estando en mi espada, jsjs a mi polola le encanta estar conmigo <3" },
    ];
    let indiceActual = 0;

    ajustarImagenRobloxAlContenedor(imagen);

    const mostrarImagen = (indice) => {
        indiceActual = (indice + imagenes_BH.length) % imagenes_BH.length;
        imagen.src = imagenes_BH[indiceActual];
        imagen.alt = `Imagen ${indiceActual + 1} de ${imagenes_BH.length}`;

        const informacion = informacion_BH[indiceActual];
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