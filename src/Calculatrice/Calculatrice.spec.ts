import Calculatrice from "./Calculatrice";


describe('Calculatrice', () => {
    describe("L'addition", () => {
        it("doit pouvoir faire la somme de 2 et 3 et retouner 5", () =>{
            expect(Calculatrice.addition(2,3)).toBe(5);
        });
        it("doit pouvoir faire la somme de 2 et -3 et retouner -1", () =>{
            expect(Calculatrice.addition(2,-3)).toBe(-1);
        });
        it("doit pouvoir faire la somme de 0.1 et 0.2 et retouner 0.3", () =>{
            expect(Calculatrice.addition(0.1,0.2)).toBe(0.3);
        });

        describe('La soustraction', () => {
            it("doit faire la difference entre 3 et 2 pour retourner 1", () => {
                expect(Calculatrice.soustraction(3,2)).toBe(1);
            });
        })       
    })
})