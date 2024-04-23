import React, { } from 'react';
import './App.css';
import MyButton from './components/Button';
import CounterProvider from './provider/Counter';
import MyCounter from './components/Counter';





function App(){

  return (
    <div>
      

      
       {/* <MyButton onClick={() => alert("click me")} text="click me"/> */}
       {/* <MyButton text="click me" /> */}
       <CounterProvider>
          <MyCounter text="click me"/>
       </CounterProvider>
    </div>
  );
}

export default App;
