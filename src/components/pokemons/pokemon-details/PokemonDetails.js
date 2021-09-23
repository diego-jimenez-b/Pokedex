import Modal from '../../../UI/Modal';
import TypeButton from '../../../UI/TypeButton';
import DetailsSection from './DetailsSection';
import EvolutionFrame from './EvolutionFrame';
import classes from './PokemonDetails.module.css';

const PokemonsDetails = (props) => {
  const {
    num,
    name,
    img,
    type,
    resistant,
    weaknesses,
    evolution,
    'quick-move': quickMoves,
    'special-attack': specialAttacks,
  } = props.data;

  console.log(props.data);

  const getButtons = (array) => {
    return array.map((item, ind) => (
      <TypeButton
        key={`details_${num}_${ind}`}
        text={typeof item === 'object' ? item.name : item}
      />
    ));
  };

  const evolutionsList = [];
  const getEvolutions = (currPokemon) => {
    if (currPokemon['next-evolution']) {
      evolutionsList.push(currPokemon['next-evolution'][0]);
      getEvolutions(currPokemon['next-evolution'][0]);
    }
    return evolutionsList;
  };
  getEvolutions(evolution);
  const evolutionsNum = evolutionsList.length;

  return (
    <Modal onClose={props.onClose} className={classes['details-modal']}>
      <div className={classes.main}>
        <div className={classes.info}>
          <span>{num}</span>
          <h2>{name}</h2>
        </div>
        <img src={img} alt={name} />
        <div className={classes.btns}>{getButtons(type)}</div>
      </div>

      <section className={classes.section}>
        <DetailsSection
          title={'Resistant'}
          mapBtns={getButtons.bind(null, resistant)}
        />
        <DetailsSection
          title={'Weaknesses'}
          mapBtns={getButtons.bind(null, weaknesses)}
        />
        <DetailsSection
          title={'Special Attacks'}
          mapBtns={getButtons.bind(null, specialAttacks)}
        />
        <DetailsSection
          title={'Quick Moves'}
          mapBtns={getButtons.bind(null, quickMoves)}
        />
      </section>

      {evolutionsNum > 0 && (
        <div className={classes.evolutions}>
          <span>{`Next evolution${evolutionsNum > 1 ? 's' : ''}:`} </span>
          <ul className={classes['evol-list']}>
            {evolutionsList.map((evol) => (
              <EvolutionFrame
                name={evol.name}
                num={evol.num}
                key={`${evol.name}_${evol.num}`}
              />
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default PokemonsDetails;
