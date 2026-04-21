import React from 'react';

const ProductsCard = ({product}) => {
    const { name , description ,price} = product;
    return (
        <div className="card  bg-blue-400 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default ProductsCard;