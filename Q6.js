async  function datafetch(){
    const response = await fetch("https://jsonplaceholder.com/todos/1")
    const data = await response.json()
    console.log(data)
}
datafetch()