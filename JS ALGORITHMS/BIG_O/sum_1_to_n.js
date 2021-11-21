function AddUpTo(n){
    let total=0;
    for(let i=1;i<=n;i++){
        total+=i;
    }
    return total;
}

// console.log(AddUpTo(6));

let t1=performance.now();
AddUpTo(1000000000);
let t2=performance.now();
console.log(`Time elapsed: ${(t2-t1)/1000} seconds`);