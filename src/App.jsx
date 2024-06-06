import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ColorPanelView from "./view/ColorPanelView.jsx";
import CalculatorView from "./view/CalculatorView.jsx";
import TicTacToe from "./view/TictactoeView.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route path="color-panel" element={<ColorPanelView />} />
        <Route path="calculator" element={<CalculatorView />} />
        <Route path="tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;
