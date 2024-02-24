import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import {ClassComponent,ClassComponent1} from './Components/ClassComponent';
import { Click } from './Components/Click';
import { Counter } from './Components/Counter';
function App() {
  return (
<div>
<h1>Hello</h1>
<h2>Welcome</h2>
<FunctionalComp></FunctionalComp>
<ClassComponent></ClassComponent>
<ClassComponent1 />
<Click />
<Counter />
</div>

  );
}

export default App;
