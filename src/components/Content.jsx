import Part from "./Part";

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part name={part1.name} count={part1.exercises} />
      <Part name={part2.name} count={part2.exercises} />
      <Part name={part3.name} count={part3.exercises} />
    </div>
  );
};

export default Content;
