import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;

/*
Main component -> form and display split the page. 
form -> states for each text field. Composed of 3 components for each section of the form
display -> pass states used in form


Plan:
1) Set up forms and functions for changing each text field
2) Submit buttons to update states + display data




*/
