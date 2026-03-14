function bigSorting(unsorted) {
   //return unsorted.sort((a, b) => a - b);    <= Isso para pequenas soluções já da conta;
     unsorted.sort((a, b) => {
        if(a.length === b.length){
            return a > b ? 1 : -1;
        }
        return a.length - b.length;
     })
     return unsorted;
}

console.log(bigSorting(['1', '200', '150', '3']));
