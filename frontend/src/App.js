import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search />
    </div>
  );
}

export default App;
