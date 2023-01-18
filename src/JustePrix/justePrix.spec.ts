                                        //TEST UNITAIRES
import { peutJouer, verifierPrix } from "./justePrix";

describe('verfierPrix', () => { 
    const justePrix = 500;

    it("doit retourner c'est plus quand le prix est inférieur au juste prix", () => {
        expect(verifierPrix(0, justePrix)).toBe("C'est plus");
    });

    it("doit retourner c'est moins quand le prix est supérieur au juste prix", () => {
        expect(verifierPrix(1000, justePrix)).toBe("C'est moins");
    });

    it("doit retourner c'est gagné quand le prix est égal au juste prix", () => {
        expect(verifierPrix(justePrix, justePrix)).toBe("C'est gagné");
    });
 });

describe('peutJouer', () => { 
    it("doit retourner true si le nombre de vie est supérieur ou égal à 0",
    ()=>{
        expect(peutJouer(10)).toBe(true);
    });

    it("doit retourner false si le nombre de vie est inférieur à 0",
    ()=>{
        expect(peutJouer(0)).toBe(false);
    });
 });