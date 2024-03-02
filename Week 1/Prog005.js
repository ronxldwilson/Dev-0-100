let a = [1,2,3,4,5,6,7,8,9,10];

let biggest=a[0];

a.forEach(i => {
    if(biggest<a[i]){
        biggest = a[i];
    }      
});


console.log(biggest);


