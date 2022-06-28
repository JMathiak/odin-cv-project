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

6/22/22
-Display all data
-Add edit buttons
-Format data
-Add PDF button


Edit logic:
Find index of the object (Make this a state) -> pos = myArray.map(function(e) { return e.uniqueID; }).indexOf(this.props.shcool.uniqueID);
Set relating states to the value of that object to fill in form
Change state that dictates what the button does/says
In onclick function add an if statement that checks for editing status
-if editing then use the index state to edit the state. Copy the education array, use index state to edit the copied array
-assign the array to the state


*/
