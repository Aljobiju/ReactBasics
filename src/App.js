import './App.css'
import Header from './component/Header'
function App() {
  const data='COOL'
  const data1='Aljo'
  return (
    
    <div>
      <Header data1={data1}/>
      <h1 className='hello'>Hello World</h1>   
  {/* <h1 style={{color:'red'}}>hello world</h1> */}
  <p>react is so {data}</p>
  <Demo/>
  </div>
  );
}

function Demo(){
  return(
    <h2>Easy to use</h2>
  )
}

export default App;
