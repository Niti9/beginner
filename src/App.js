import logo from './logo.svg';
import './App.css';

function App() {

  // variables declaration
  let name = '--NitiN--';
  let className = 'App-header';
  
  return (
    <div className="App">
        <div className = {className}>
         Hello this is starting of react {name}
         <Demo></Demo>
         </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
     
        this is like using variables but name is not global variable 
        that's why we can't use it everywhere
    </div>
  );
}


export default App;
