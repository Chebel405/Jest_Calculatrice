"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculatrice_1 = __importDefault(require("./Calculatrice"));
describe('Calculatrice', () => {
    describe("L'addition", () => {
        it("doit pouvoir faire la somme de 2 et 3 et retouner 5", () => {
            expect(Calculatrice_1.default.addition(2, 3)).toBe(5);
        });
        it("doit pouvoir faire la somme de 2 et -3 et retouner -1", () => {
            expect(Calculatrice_1.default.addition(2, -3)).toBe(-1);
        });
        it("doit pouvoir faire la somme de 0.1 et 0.2 et retouner 0.3", () => {
            expect(Calculatrice_1.default.addition(0.1, 0.2)).toBe(0.3);
        });
        describe('La soustraction', () => {
            it("doit faire la difference entre 3 et 2 pour retourner 1", () => {
                expect(Calculatrice_1.default.soustraction(3, 2)).toBe(1);
            });
        });
        describe('La division', () => {
            it("doit faire la division entre 4 et 2 pour retourner 2", () => {
                expect(Calculatrice_1.default.division(4, 2)).toBe(2);
            });
        });
    });
});
