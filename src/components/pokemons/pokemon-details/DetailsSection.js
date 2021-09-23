import classes from './DetailsSection.module.css';

const DetailsSection = (props) => {
  return (
    <div className={classes.section}>
      <h3>{props.title}</h3>
      {props.mapBtns()}
    </div>
  );
};

export default DetailsSection;
