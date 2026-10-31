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
        { fecha: "15 - 02 - 2026", texto: "Me encantó como  mi polola fue a hacer<br>un avatar similar al mio jsjs" },
        { fecha: "15 - 02 - 2026", texto: "[Sus moment]<br>Por algúna razón aproveché ese<br>momento cuando ella cayó bien tiesa-" }
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
        { fecha: "15 - 06 - 2026", texto: "He esperado un buen rato para q ella esté aqui<br>y finalmente vino a por mi... <3" },
        { fecha: "21 - 10 - 2026", texto: "El garden d mi Yuki lleno de murcielagos enormes :D" },
        { fecha: "21 - 10 - 2026", texto: "Volvimos a estar juntos en el<br>Roblo despues de un buen tiempo..." },
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