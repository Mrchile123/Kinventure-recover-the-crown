# Kinventure: Maicol adventure the app  Android App  )

Este reporepositoriotiene el c贸digo fuente de la interfaappe usuario en su etapa de distribuci贸n para la app m贸vil basada en **Capacitor**, usando un dise帽o responsivo inspirado en interfazlataforma de streaming **Netflix**.

## 馃摫 Estructura del Proyecto (`www/`)

El directorio principal contiene los recursos contiene distribuidos de la siguiente manera:

* **`index.html`**: Estructura principal sem谩ntica que contiene la barra de navegaci贸quee superior fija (`Series/Spin-off`, `Informaci贸n`, `M谩s`), los contenedores de los controles deslizantes por temporadas y el contenedor global del reproductor nativo de video en ventana modal.
* **`style.css`**: Configuraci贸n de estilos visuales optimizados para pantallas m贸viles y web. Define una paleta de colores oscuros (`#141414`), transiciones suaves de escalado (`scale(1.05)`) en hover para simular selecci贸n f铆sica de cap铆tulos, y el enmascarado de barras de scroll laterales.
* **`script.js`**: Motor l贸gico en JavaScript puro. Mapea de manera exacta los archivos de video multimedia locales de las carpetas `Temporada1/` y `Temporada2/`, controlando la inyecci贸n din谩mica en el DOM y deteniendo los buffers de reproducci贸n al cerrar el reproductor para optimizar la memoria RAM del tel茅fono.

## 馃搧 Ubicaci贸n y Mapeo de Videos

El script est谩 configurado para buscar de deatas siguientes archivos multimedia dentro de tu almacenamiento:

### Temporada 1 (`www/Temporada1/`)
* `Ep 1 T1.mp4`
* `Ep 2 t1.mp4`
* `Ep 3 t1.mp4`
* `Ep 4 t1.mp4`
* `Ep 5 t1.mp4`
* `Ep 6 t1.mp4`
* `ep 7 t1.mp4`
* `Ep 8 t1.mp4`
* `Ep 9 t1.mp4`
* `ep 10 t1.mp4`

### Temporada 2 (`www/Temporada2/`)
* `Ep1 t2.mp4`
* `Ep 2 t2.mp4` *(Episodio de alta densidad optimizado desde enero)*
* `Ep 3 t2.mp4`
* `Ep 4 t2.mp4`
* `Ep 5 T2.mp4`
* `Ep 6 T2.mp4`
* `Ep 7 t2.mp4`

## 馃殌 Caracter铆sticas Clave

1.  **Desplazamiento El谩stico**: Los carruseles desde tanto navegaci贸n t谩ctil (arrastrar con el dedo en tel茅fonos) como navegaci贸n por clics precisos con las flechas flotantes laterales (`鉂甡 y `鉂痐).
2.  **Men煤 Conmutable**: Cambia instant谩neamente entre el cat谩logo, la sinopsis de producci贸n en "Informaci贸n" y los enlaces comunitarios en la pesta帽a "M谩s".
3.  **Optimizaci贸n M贸vil**: Uso de etiquetas `playsinline` en el reproductor de video para prevenir aperturas forzadas del reproductor por defecto del sistema Android, manteniendo al usuario dentro de larzadas experiencia de la app.
pp
