//Name:Manuel Leyva
//Project Name: Advice Generator
//You will recieve advice after clicking on the dice
//LvL 3
//Peer Review: Ulisess Ortega
//When looking at the code I noticed how organized it was because when loing at it
// I noticed that he had his javascript and css in the same folder which makes it easier
// to locate your code and see where it's at, when launching it I noticed how similar it is 
//to the example that was given to us which is a good thing, but one thing I noticed that wasa little wrong was the 
//responsive for the mobile but everything else was good, other than that he did a good job




import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdviceGen from './Components/AdviceGen';
import {BrowserRouter, Routes, Route } from 'react-dom'


function App() {
  return (
    <div>
      
    <AdviceGen />
      
    </div>
  );
}

export default App;
