import "./App.css";
/**
 * Import Component Hello
 */
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <h2>This is Create React App</h2>
      {/*
        Memanggil Component Hello.
        Mengirim props name. 
       */}
      <Hello name="Aufa" />
    </div>
  );
}

export default App;
