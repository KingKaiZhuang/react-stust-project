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
        <Route path="/react-stust-project" element={<h1>hi</h1>} />
        <Route
          path="/react-stust-project/color-panel"
          element={<ColorPanelView />}
        />
        <Route
          path="/react-stust-project/calculator"
          element={<CalculatorView />}
        />
        <Route
          path="/react-stust-project/tic-tac-toe"
          element={<TicTacToe />}
        />
      </Routes>
    </div>
  );
}

export default App;
