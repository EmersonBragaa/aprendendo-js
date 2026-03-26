// Clássica!
function parOuImmparClassic(arr){
    let par = 0;
    let impar = 0;
        for(let index = 0; index < arr.length; index += 1){
            if(arr[index] % 2 === 0){
                par += 1;
            } else if(arr[index] % 2 === 1){
                impar += 1;
            }
        }
   console.log(`Impar: ${impar}`);
   console.log(`Par: ${par}`);
}
parOuImmparClassic([1, 2, 3, 5, 9, 13, 15, 12]);

// A mais moderna (For...of + Ternário)
function parOuImparModern(arr){
    let par = 0;
    let impar = 0;
    for (let num of arr) {
        num % 2 === 0 ? par++ : impar++;
    }
    console.log(`[Modern]  Pares: ${par}, Ímpares: ${impar}`);
}
parOuImparModern([2, 3, 7, 8, 4, 5])