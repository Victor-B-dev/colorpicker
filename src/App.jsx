import { useState } from 'react'

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")

  const Color = ({color, setSelectedColor}) => {
    return <div className={color} onClick={() => setSelectedColor(color)}> </div> 
  };


  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}> {selectedColor} </div>
      </div>

      <div id="colors-list"> 
        <Color color="red" setSelectedColor={setSelectedColor}/>
        <Color color="violet" setSelectedColor={setSelectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;