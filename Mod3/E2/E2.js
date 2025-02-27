const maakBestelling = (drank = "cola", snack = "chips") => ({
    drank,
    snack,
    timestamp: new Date().toLocaleString()
});

const bestelling1 = maakBestelling();
const bestelling2 = maakBestelling("fanta");
const bestelling3 = maakBestelling("sprite", "nootjes");

console.log(bestelling1);
console.log(bestelling2);
console.log(bestelling3);
