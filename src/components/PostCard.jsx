import React from 'react';

const PostCard = ({post}) => {
    const {title , body} =post
    console.log(post);
    
    
    return (
        <div className="card bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default PostCard;