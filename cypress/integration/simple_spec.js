describe('Generacion de paletas ', function () {

    it('Visitar la pagina desarrollada en la primera fase', function () {
        cy.visit('https://japereza.github.io/taller06-VRT-primerafase/palette.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.screenshot('CapturaInicial');
    })

    it('Prueba 1 con screenshots', function () {
        cy.get('#nuevapaleta').click()
        //cy.screenshot('CapturaPrueba01');
        cy.screenshot('CapturaFinal');
    })

    //    it('Prueba 2 con screenshots', function () {
    //        cy.get('#nuevapaleta').click()
    //        cy.screenshot('CapturaPrueba02');
    //    })

    //    it('Prueba 3 con screenshots', function () {
    //        cy.get('#nuevapaleta').click()
    //        cy.screenshot('CapturaPrueba03');
    //    })
})
