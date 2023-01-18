
/**
 * Retourne "C'est plus","C'est moins",ou "C'est gagne" en fonction du prix
 * @param prix Le prix du joueur
 * @param justePrix Le prix à trouver
 * @returns "c'est plus" | "C'est moins" | "C'est gagne"
 */
const verifierPrix = (prix:number, justePrix:number):string => {
    if (prix < justePrix)return "C'est plus";
    if (prix > justePrix)return "C'est moins";
    return "C'est Gagné ";
}
/**
 * Verifie si le joueur peut jouer
 * @param nombreVie Nombre de vie restantes
 * @returns true | false en fonction du nombre de vie
 */
const peutJouer = (nombreVie:number):boolean => {
    let res = true;
    if(nombreVie <= 0) res = false;
    return res;
}
export { verifierPrix, peutJouer };