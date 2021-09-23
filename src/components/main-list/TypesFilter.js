import TypeButton from '../../UI/TypeButton';
import classes from './TypesFilter.module.css';
import xSvg from '../../assets/svg/x-icon.svg';

const types = [
  'fire',
  'water',
  'bug',
  'grass',
  'poison',
  'ice',
  'psychic',
  'dark',
  'electric',
  'fairy',
  'flying',
  'steel',
  'rock',
  'ground',
  'ghost',
  'fighting',
];

const TypesFilter = (props) => {
  const changeFilterHandler = (event) => {
    const selectedType = event.target.id;

    if (selectedType) {
      props.onFilter('type', selectedType);
    }
  };

  return (
    <div className={classes.filter} onClick={changeFilterHandler}>
      <span id='any'>All</span>

      <img src={xSvg} alt={'x-icon'} onClick={props.onClose} />

      {types.map((type) => (
        <TypeButton text={type} key={type} id={type} />
      ))}
    </div>
  );
};

export default TypesFilter;
