import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const Book = (props) => {
    const{BookName, WriterName, Price, imageURL, _id} = props.book;
    const history = useHistory();

    const handleBuy = () => {
        const url = `/checkout/${_id}`
        history.push(url);
    }

    return (
        <div>
            <div className="book">
                    <img src={imageURL} alt="" />
                    <h2>{BookName}</h2>
                    <p>{WriterName}</p>
                    <div className="price">
                        <p className="price-text">{Price}</p>
                        <Button onClick={handleBuy} variant="contained" color="primary">Buy Now</Button>
                    </div>
                </div>
        </div>
    );
};

export default Book;