import Part from "./Part";

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <div>
      <Part name={part1} count={exercises1} />
      <Part name={part2} count={exercises2} />
      <Part name={part3} count={exercises3} />
    </div>
  );
};

export default Content;
