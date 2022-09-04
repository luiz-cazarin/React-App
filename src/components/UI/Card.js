import "./Card.css";

function Card(props) {
  const classes = "card" + props.className;
  // props.children is a reservate name, we can use to create styles components
  // can pass html values in component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
