import "./App.css";
import Navbar from "./components/Navbar";
import Entry from "./components/Entry";

import entries from "./data";

function App() {
  console.log(entries);
  const entriesJSX = entries.map((entry) => (
    <Entry key={entry.id} item={entry} />
  ));

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main className="main-section">{entriesJSX}</main>
    </div>
  );
}

export default App;
