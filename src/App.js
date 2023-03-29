import { useState } from "react";
import Counter from "./component/Counter";
// import './App.css'
// import Header from './component/Header'
function App() {
  // const data='COOL'
  // const data1='Aljo'
  // return (
    
  //   <div>
  //     <Header data1={data1}/>
  //     <h1 className='hello'>Hello World</h1>   
  // <h1 style={{color:'red'}}>hello world</h1>
  // <p>react is so {data}</p>
  // <Demo/>
  // </div>
  // );
const [count,setCount] =useState(0)
function addCount(){
  setCount(count+1)
}
let obj={
  title:'1st',
  count:count
}
return(
<div className="App">
  <button onClick={addCount}>Add</button>
 {/* <Counter title="1st" count={count}/> */}
 <Counter {...obj}/>
 <Counter title="2nd" count={count}/>
</div>
);

}

// function Demo(){
//   return(
//     <h2>Easy to use</h2>
//   )
// }

export default App;
