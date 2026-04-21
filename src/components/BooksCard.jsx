import Link from 'next/link';
import React from 'react';

const BooksCard = ({book}) => {
    const {id,title ,author ,price} = book
    return (
        <div className="card card-border bg-base-300 ">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{author}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link href={`/books/${id}`}>
                    <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;