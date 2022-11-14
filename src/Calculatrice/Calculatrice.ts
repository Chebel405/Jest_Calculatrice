class Calculatrice {

    static addition (nombre1: number, nombre2: number): number {
        let res = 0;
        res = nombre1 + nombre2;
        return +res.toFixed(9);
    }
    static soustraction(nombre1: number, nombre2: number): number {
        return nombre1 - nombre2;
    }

}

export default Calculatrice;