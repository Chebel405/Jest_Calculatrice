"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculatrice {
    static addition(nombre1, nombre2) {
        let res = 0;
        res = nombre1 + nombre2;
        return +res.toFixed(9);
    }
    static soustraction(nombre1, nombre2) {
        return nombre1 - nombre2;
    }
    static division(numerateur, denominateur) {
        return numerateur / denominateur;
        ;
    }
}
exports.default = Calculatrice;
