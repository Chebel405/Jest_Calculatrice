class Calculatrice {

    static addition (nombre1: number, nombre2: number): number {
        let res = 0;
        res = nombre1 + nombre2;
        return +res.toFixed(9);
    }
    static soustraction(nombre1: number, nombre2: number): number {
        return nombre1 - nombre2;
    }
    // static nombreAleatoire(nombre1:number, nombre2:number): number {
    //     let nombre = 0;
    //     for (let i = 0; i < nombre1;i++){
    //         console.log();
    //     }
    //     return nombre;
    // }

    static division(numerateur:number, denominateur:number): number {
        return numerateur/denominateur;
    }

}

export default Calculatrice;