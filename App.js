
import './App.css';
import { useState,useEffect } from 'react';
import { useRef } from 'react';
import Modal from './components/Modal';






function App(props) {
  let menuRef = useRef()

 const [ModalState ,setModalState] = useState(false); 

 const handleclose = () => setModalState(false);
 useEffect(()=>{

  document.addEventListener("mousedown" , (event) =>{
    if (!menuRef.current.contains(event.target))
    setModalState(false)
  })

})
useEffect(() => {
  const close = (e) => {
    if(e.keyCode === 27){
      handleclose();
    }
  }
  window.addEventListener('keydown', close)
return () => window.removeEventListener('keydown', close)
},[])

  return (
    <div ref = {menuRef}className="App">
  
    <button  className='demo' onClick={ ()=> {setModalState(true);}}>Demo</button>
    {ModalState &&<Modal killPop={setModalState}/>}
    </div>
 
    
  );

  
}

export default App;
