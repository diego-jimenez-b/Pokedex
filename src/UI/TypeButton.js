import classes from './TypeButton.module.css';

const TypeButton = (props) => {
  let color = 'transparent';

  if (props.text === 'grass') color = 'rgb(133, 240, 112)';
  if (props.text === 'poison') color = 'rgb(206, 125, 238)';
  if (props.text === 'fire') color = 'rgb(241, 103, 103)';
  if (props.text === 'water') color = 'rgb(142, 167, 248)';
  if (props.text === 'bug') color = 'rgb(192, 245, 131)';
  if (props.text === 'ice') color = 'rgb(174, 242, 245)';
  if (props.text === 'psychic') color = 'rgb(253, 144, 253)';
  if (props.text === 'electric') color = 'rgb(248, 246, 147)';
  if (props.text === 'fighting') color = 'rgb(250, 191, 103)';
  if (props.text === 'fairy') color = 'rgb(245, 206, 255)';
  if (props.text === 'flying') color = 'rgb(171, 157, 235)';
  if (props.text === 'steel') color = 'rgb(206, 206, 206)';
  if (props.text === 'rock') color = 'rgb(202, 155, 84)';
  if (props.text === 'ground') color = 'rgb(236, 193, 51)';
  if (props.text === 'ghost') color = 'rgb(149, 118, 185)';
  if (props.text === 'dark') color = 'rgb(146, 136, 153)';

  return (
    <span
      id={props.id ? props.id : ''}
      className={classes.button}
      style={{ backgroundColor: color }}
    >
      {props.text}
    </span>
  );
};

export default TypeButton;
