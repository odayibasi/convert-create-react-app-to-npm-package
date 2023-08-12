import "./App.css";
import SampleUMDApp from "@odayibasi/sample-umd";
import "@odayibasi/sample-umd/build/static/css/main.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">This is Host App</header>
      <SampleUMDApp multiplier={10} />
    </div>
  );
}

export default App;
