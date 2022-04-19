import './card-list.styles.css'
import Card from '../card/card.component';

const CardList = ({itemList}) => {
        return (
        <div className='card-list'>
            {itemList.map((item) => (
                <div key={item.id}>
                <Card item={item} />
                </div>
                )
            )}
        </div>
        )
}

export default CardList;