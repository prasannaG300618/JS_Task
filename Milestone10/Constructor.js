function Library(Book_name, Year, Type){
    this.Book_name = Book_name,
    this.Year = Year,
    this.Type = Type,
    Book_Details = function(){
        console.log( "Book name id", this.Book_name, " It was Published at year of ", this.Year)
    }
}



let Jungle_book = new Library("Jungle Book",2020,"Comedy")
Jungle_book.Book_Details()
let Unakul_unai_thedu = new Library("Unakul unnai thedu",2016,"Motivation")
Unakul_unai_thedu.Book_Details()