import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component';

class CardList extends Component {

    render(){
        console.log(this.props)
        const {itemList} = this.props;
        return (
        <div className='card-list'>
            {itemList.map((item) => (
                <Card item={item} />
                )
            )}
        </div>
        )
    }
}

export default CardList;