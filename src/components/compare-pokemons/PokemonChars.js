import Card from '../../UI/Card';
import TypeButton from '../../UI/TypeButton';

const PokemonChars = (props) => {
  const { name, num, img, type, weaknesses, resistant } = props.pokemonInfo;

  const nameUp = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Card className={props.className}>
      <span>{num}</span>
      <h2>{nameUp}</h2>
      <img src={img} alt={name} />

      <h3>Type</h3>
      {type.map((typeText, idx) => (
        <TypeButton key={`btn_${num}_type_${idx}`} text={typeText} />
      ))}

      <h3>Resistant to</h3>
      {resistant.map((resText, idx) => (
        <TypeButton key={`btn_${num}_ res_${idx}`} text={resText} />
      ))}

      <h3>Weaknesses</h3>
      {weaknesses.map((weaknText, idx) => (
        <TypeButton key={`btn_${num}_weak_${idx}`} text={weaknText} />
      ))}
    </Card>
  );
};

export default PokemonChars;
