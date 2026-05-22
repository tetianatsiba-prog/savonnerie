import { calculerEcoScore } from '../algo.js';

describe('Tests de l\'algorithme Éco-Score', () => {
    test('Devrait retourner 100 pour un produit local sans poids', () => {
        expect(calculerEcoScore(0, true)).toBe(100);
    });

    test('Devrait baisser le score si le produit est lourd', () => {
        expect(calculerEcoScore(50, false)).toBe(75);
    });

    test('Ne devrait jamais descendre en dessous de 0', () => {
        expect(calculerEcoScore(500, false)).toBe(0);
    });
});