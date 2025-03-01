/**Nombre:ancho*alto
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * wqhd 2560x 1440
 * fhd 1920  1080
 * hd 1280 x 720
 */


function nombreREsolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return '8k';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4k'
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD'
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD'
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD'
    }
}

let nombre = nombreREsolucion(3840, 1440)
console.log(nombre)