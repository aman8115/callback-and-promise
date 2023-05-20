const books = 

[{title: "A bunch of old letters",author:"jawahar lal Nehru",year:1958},{title:"A House fo mr. biswas", author:"V.S Naipaul",year:1961} ,{title:"Kamayani",author :"jay shankar prasad" ,year:1937},{title:"The Red sari",author:"Javier moro" , year: 2008}

]
function Odering( books, callback){
    const titles = books.map((book =>(book.title)))
    callback(titles)
}
function titleslog(titles){
    titles.sort();
    console.log(titles.join(","))
}
Odering(books,titleslog)