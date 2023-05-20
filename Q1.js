function DblArr (arra,callback){
    let doublearray = arra.map((num) =>{
        return callback(num)
    })
    return doublearray
}
const original = [1,2,3,4]
function callback(num){
    return num*2;
}
const answer = DblArr(original,callback)
console.log("new Array is :",answer);