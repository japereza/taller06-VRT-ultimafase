const cypress = require("cypress");
const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff() {
    const options = {
        output: {
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
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    const data1 = await compareImages(
        await fs.readFile("./cypress/screenshots/simple_spec.js/CapturaInicial.png"),
        await fs.readFile("./cypress/screenshots/simple_spec.js/CapturaFinal.png"),
        options
    );

    await fs.writeFile("./Diferencia.png", data1.getBuffer());
}

cypress.run({
    spec: './cypress/integration/simple_spec.js'
})
    .then((results) => {
        getDiff();
    })
    .catch((err) => {
        console.log(err);
    });