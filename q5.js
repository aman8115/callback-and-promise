function greet(name){
    return new Promise(function exu(reslove){
        const greeting = `Hello ${name}!`
        reslove(greeting )
    })
}
greet("mithun").then(function f (message){
    console.log(message);
})
// expected out put == Hello mithun!