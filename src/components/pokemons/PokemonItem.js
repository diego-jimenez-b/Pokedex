import { Fragment, useState } from 'react';
import Card from '../../UI/Card';
import TypeButton from '../../UI/TypeButton';
import PokemonsDetails from './pokemon-details/PokemonDetails';
import classes from './PokemonItem.module.css';

const PokemonItem = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const { num, name, img, type } = data;
  const nameUp = name.charAt(0).toUpperCase() + name.slice(1);

  const showDetailsHandler = () => {
    setShowDetails(true);
  };
  const hideDetailsHandler = () => {
    setShowDetails(false);
  };

  return (
    <Fragment>
      <li onClick={showDetailsHandler}>
        <Card className={classes.item}>
          <span>{num}</span>
          <span>{nameUp}</span>
          <img src={img} alt={name} />
          <div>
            {type.map((typeText, idx) => (
              <TypeButton key={`btn_${num}_${idx}`} text={typeText} />
            ))}
          </div>
        </Card>
      </li>

      {showDetails && (
        <PokemonsDetails
          data={{ ...data, name: nameUp }}
          onClose={hideDetailsHandler}
        />
      )}
    </Fragment>
  );
};

export default PokemonItem;
