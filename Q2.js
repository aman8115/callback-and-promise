function ManipulateString(inputString,callback){
    let manipulate = inputString.toUpperCase();
     return callback(manipulate)
}
function logString(manipulate){
    console.log(`the manipulate string is :  ${manipulate}`);
}
ManipulateString("hello world",logString)

