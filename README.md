![](/common/images/logo-uniandes.png)

# TALLER 06: VISUAL REGRESSION TESTING

Repo que contiene las evidencias del taller 06 desarrollado por:

- [x] Javier Alexander Perez Arevalo
    - Estudiante MATI - 201811140
    - ja.pereza@uniandes.edu.co

# EVIDENCIAS

## 1. Link al repositorio del código de la primera fase del taller

https://github.com/japereza/taller06-VRT-primerafase


## 2. Link a la página publicada de su aplicación de la primera fase funcionando

https://japereza.github.io/taller06-VRT-primerafase/palette.html


## 3. Los pantallazos obtenidos haciendo uso de Cypress.

Aqui esta el script de los screenshots de Cypress

https://github.com/japereza/taller06-VRT-segundafase/blob/master/cypress/integration/simple_spec.js

* Captura inicial:

![](https://github.com/japereza/taller06-VRT-segundafase/blob/master/cypress/screenshots/simple_spec.js/CapturaInicial%20(1).png)

* Captura prueba 01:

![](https://github.com/japereza/taller06-VRT-segundafase/blob/master/cypress/screenshots/simple_spec.js/CapturaPrueba01%20(1).png)

* Captura prueba 02:

![](https://github.com/japereza/taller06-VRT-segundafase/blob/master/cypress/screenshots/simple_spec.js/CapturaPrueba02%20(1).png)

* Captura prueba 03:

![](https://github.com/japereza/taller06-VRT-segundafase/blob/master/cypress/screenshots/simple_spec.js/CapturaPrueba03%20(1).png)


## 4. Las respuestas a las preguntas planteadas en la tercer fase del taller.

Aqui esta el script de Resemble JS

https://github.com/japereza/taller06-VRT-tercerafase/blob/master/index.js

* Diferencia Captura inicial vs Captura prueba 01:

![](https://github.com/japereza/taller06-VRT-tercerafase/blob/master/Diferencia%20Prueba%201.png)

* Diferencia Captura prueba 01 vs Captura prueba 02:

![](https://github.com/japereza/taller06-VRT-tercerafase/blob/master/Diferencia%20Prueba%202.png)

* Diferencia Captura prueba 02 vs Captura prueba 03:

![](https://github.com/japereza/taller06-VRT-tercerafase/blob/master/Diferencia%20Prueba%203.png)

### ¿Qué información puedo obtener de una imagen al usar resembleJS y que significado tiene cada uno de los componentes de la respuesta?:

Se obtiene un analisis cromático de la imagen:
```
{
   red: 100,
   green: 100,
   blue: 100,
   brightness: 100,
   alpha: 100,
   white: 100,
   black: 100
  }
```

### ¿Qué información puedo obtener al comparar dos imagenes?:

La data obtenida es un porcentaje de diferencias, si es de la misma dimension (o no), etc.:
```
{
    misMatchPercentage : 100, // %
    isSameDimensions: true, // or false
    getImageDataUrl: function(){} 
}
```

### ¿Qué opciones se pueden seleccionar al realizar la comparación?:

Se puede escalar la segunda imagen a la escala de la primera:
```
//diff.useOriginalSize();
diff.scaleToSameSize();
```

Se puede cambiar el metodo de comparacion despues del primer analisis:
```
// diff.ignoreNothing();
// diff.ignoreColors();
// diff.ignoreAlpha();
diff.ignoreAntialiasing();
```

Y cambiar el estilo gráfico de la salida:
```
resemble.outputSettings({
    errorColor: {
        red: 255,
        green: 0,
        blue: 255
    },
    errorType: "movement",
    transparency: 0.3,
    largeImageThreshold: 1200,
    useCrossOrigin: false,
    outputDiff: true
});
// .repaint();
```

## 5. Link al repositorio de su aplicación de automatización.

https://github.com/japereza/taller06-VRT-ultimafase/blob/master/
