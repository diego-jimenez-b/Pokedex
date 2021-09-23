import classes from './EvolutionFrame.module.css';

const EvolutionFrame = (props) => {
  return (
    <div className={classes.frame}>
      <h3>
        {props.num} {props.name}
      </h3>
      <img
        src={`https://www.serebii.net/pokemongo/pokemon/${props.num}.png`}
        alt={props.name}
      />
    </div>
  );
};

export default EvolutionFrame;
