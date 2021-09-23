import SelectPoke from '../components/compare-pokemons/SelectPoke';
import Card from '../UI/Card';
import classes from './ComparePoke.module.css';

const ComparePoke = () => {
  return (
    <div className={classes.comparison}>
      <Card className={classes.card}>
        Enter two pokemon names, to compare their weaknesses and strengths
      </Card>

      <div className={classes.selections}>
        <SelectPoke />
        <SelectPoke />
      </div>
    </div>
  );
};

export default ComparePoke;
