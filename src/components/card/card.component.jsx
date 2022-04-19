import {Component} from 'react';
import './card.styles.css';

const Card = ({item}) => {
    const { name, id, email } = item;
    return (
        <div className='card-container' key={id}>
            <img alt={`user ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;