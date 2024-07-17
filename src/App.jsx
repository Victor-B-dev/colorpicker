const App = () => {
  const Color = ({color}) => {
    return <div className={color}></div>;
  };


  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>

      <div id="colors-list"> 
        <Color color="red"/>
        <Color color="violet"/>
        <Color color="black"/>
      </div>
    </div>
  );
};

export default App;