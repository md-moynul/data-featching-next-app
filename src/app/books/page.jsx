import BooksCard from "@/components/BooksCard";

const getBook = async() => {
    const res = await fetch('http://localhost:5000/books')
    return res.json()
}
const BookPage = async() => {
    const books = await getBook()
    return (
        <div>
            <h1 className="text-5xl text-center">Books : {books.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {books.map(book => <BooksCard key={book.id} book={book}/>)}
            </div>
        </div>
    );
};

export default BookPage;