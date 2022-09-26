import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Open-Sourced on{" "}
          <a href="https://github.com/MimiB96" target="_blank" rel="noreferrer">
            Github
          </a>{" "}
          by Mimi Bribena
        </footer>
      </div>
    </div>
  );
}
