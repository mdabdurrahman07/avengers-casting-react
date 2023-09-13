import { useEffect, useState } from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';



function App() {
      const [card , setcard] = useState([])

        useEffect(()=>{
      fetch('avengers.json')
      .then(res => res.json())
      .then(data => setcard(data))
      }, [])

  return (
    <>
    {/* header */}
    <div>
    <Header></Header>
    </div>
    {/* main */}
     <div className='max-w-7xl m-auto'>
      <Main card={card}></Main>
     </div>
    </>
  )
}

export default App
