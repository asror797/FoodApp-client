
 function cancelOrder({closeModal, id , load}) {

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
                     className=' btn edit-btn'>
                     Cancel
                  </button>

                   <button 
                     onClick={() => {
                        fetch(`http://localhost:9000/order/${id}`,{
                           method:"PUT",
                           headers:{
                              "Content-Type":"application/json"
                           }
                        })
                           .then(res => res.json())
                           .then(data => {
                              console.log(data);
                           })
                           load(true)
                           closeModal(false)

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

 export default cancelOrder;
