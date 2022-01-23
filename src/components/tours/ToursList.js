import TourItem from "./TourItem";
import classes from "./ToursList.module.css";

function ToursList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((el) => (
        <TourItem
          key={el.id}
          id={el.id}
          image={el.image}
          title={el.title}
          address={el.address}
          description={el.description}
        />
      ))}
    </ul>
  );
}

export default ToursList;
