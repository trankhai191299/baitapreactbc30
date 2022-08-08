import logo from './logo.svg';
import './App.css';
import BaiTapComponent from './Component/BaiTapComponent/BaiTapComponent';
import BaiTapGlasses from './State/BaiTapGlasses/BaiTapGlasses';
import ExerciseCart from './Props/BaiTapGioHang/ExerciseCart';

function App() {
  return (
    <div className="App">
      {/* <BaiTapComponent/> */}
      {/* <BaiTapGlasses/> */}
      <ExerciseCart/>
    </div>
  );
}

export default App;
