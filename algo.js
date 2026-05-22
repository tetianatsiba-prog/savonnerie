export function calculerEcoScore(poidsPackage, estLocal) {
    if (poidsPackage < 0) return 0;

    let score = 100;
    score -= Math.floor(poidsPackage * 0.5);
    if (estLocal) score += 10;

    return Math.max(0, Math.min(100, score));
}