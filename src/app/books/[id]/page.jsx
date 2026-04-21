const generateStaticParams = async() => {
    const res = await fetch(`http://localhost:5000/books`)
    const books = await res.json() ;
    return books.map(book => ({bookId: book.id}))
 
}

const BookDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:5000/books/${id}`)
    const {author , price} = await res.json() ;
 
    
    
    return (
        <div>
            <h2 className="text-3xl">{author}</h2>
            <p>{price}</p>
        </div>
    );
};

export default BookDetailsPage;