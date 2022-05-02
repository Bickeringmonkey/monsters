
import CardContent from '../card-content/card.content';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map (monster => {
            return <CardContent monster={monster} />;
        })}
    </div>
);

export default CardList;