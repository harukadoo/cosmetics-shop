import { Route, Routes } from "react-router-dom";
import routes from "./data/router";
import { Overlay } from "./components/overlay/index";

function App() {
  return (
    <div className="App">
        <Overlay>
          <Routes>
            {routes.map((r: typeof routes[0], i: number) => (
              <Route path={r.path} element={r.element} key={i} />
            ))}
          </Routes>
        </Overlay>
    </div>
  );
}

export default App;