function saveThePrisoner(n, m, s) {
    return (m - 1 + s) % n || n;

}
console.log(saveThePrisoner(5, 2, 1));
console.log(saveThePrisoner(5, 2, 2));
console.log(saveThePrisoner(7, 19, 2));