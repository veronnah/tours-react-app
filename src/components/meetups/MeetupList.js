import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((el) => (
        <MeetupItem
          items
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

export default MeetupList;
