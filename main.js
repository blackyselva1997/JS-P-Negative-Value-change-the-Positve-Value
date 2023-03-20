var a = [100,-4,6,-7,-9,15];
var b = [];

function negative(){
    for (i=0; i<a.length; i++){
        if (a[i] < 0){
            b.push(a[i]*-1);
        }
    }
    return b;
}
negative();
console.log(b);