/* global React ReactDOM */
const ce = React.createElement;

const MyTitle = function (props) {
  return (
    ce('div', null,
      ce('h1', {style: {color: props.color}}, props.title)
    )
  );
}
const MyFirstComponent = function() {
  return ce('div', null,
      ce(MyTitle, {color: 'rebeccapurple', title: 'Archer'}),
      ce(MyTitle, {color: 'peru', title: 'The Simpsons'}),
      ce(MyTitle, {color: 'burlywood', title: 'The West Wing'})
  );
};

ReactDOM.render(
  ce(MyFirstComponent),
  document.getElementById("app")
);
