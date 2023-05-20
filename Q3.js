const person = {
    firstname :"mithun",
    lastname:"singh",
    age: 20
}
function ageIndays(person,callback){
    const fullname = `${person.firstname}${person.lastname}`
    const ageinday = person.age*360
    callback(fullname,ageinday)

}
function logresult(fullname,ageinday){
    console.log(`the person is fullname ${fullname} and thier age is ${ageinday}`)
}
ageIndays(person,logresult)