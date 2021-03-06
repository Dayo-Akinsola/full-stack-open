import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

interface coursePartType {
  name: string,
  exerciseCount: number,
}

const App = () => {
  const courseName: string = "Half Stack application development";
  const courseParts: Array<coursePartType> = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
