import "./App.css";
import Slider from "./components/image-slider/Slider";

function App() {
  return (
    <div className="App">
      {/* 
      서버에서 제공하는 양식에 맞게끔 props로 전달 
      https://picsum.photos/v2/list?page=1&limit=10
      */}
      <Slider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
    </div>
  );
}

export default App;
