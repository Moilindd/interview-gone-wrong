import React from 'react'
import { useEffect , useRef} from 'react'
import '../components/modal.css'


function Modal({killPop}) {
    let menuRef = useRef()
    useEffect(()=>{

        document.addEventListener("mousedown" , (event) =>{
          if (!menuRef.current.contains(event.target))
          killPop(false)
        })
      
      })
  return (
      
    
 
      <div className='modalbg' >


          
          
          <div ref = {menuRef} className='modalcontainer' >

          


              <h1>Got internship?</h1>
              <div  className='btn-modal'>
              
                  <ul>

                  <button type="button" className="btn btn-success">Yes</button>
                  <button type="button" className="btn btn-danger">No</button>
                  <button type="button" className="btn btn-primary" onClick={() => killPop(false)}>Close</button>
              </ul>
              </div>
          </div>
      
   
    </div>
  )
}

export default Modal