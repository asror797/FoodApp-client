import './modal.css'

function DelModal({closeModal, id , res }) {


   return(
      <>
         <div className="modalBox">
            <div className="delmodal">
               <p>Are You sure ? {id}</p>
               <div className="delModal-btns">
                  <button 
                     onClick={() => {
                        closeModal(false)
                     }}
                     className=' btn edit-btn'>Cancel</button>
                  <button 
                     onClick={() => {
                        fetch(`http://localhost:9000/restaurant/${id}`,{
                           method:"DELETE",
                           headers:{
                              "Contetn-Type":"application/json"
                           }
                        })
                           .then(req => req.json())
                           .then(data => {
                              console.log(data)
                              closeModal(false)
                              res(true)
                           })
                     }}
                     className='btn del-btn'>
                     Yes
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default DelModal;