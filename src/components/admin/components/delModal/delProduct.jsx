import './modal.css'

 function ProductDel({closeModal, id , load}) {

    return(
       <>
          <div className="modalBox">
             <div className="delmodal">
                <p>Are You sure ?</p>
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
                        fetch(`http://localhost:9000/product/${id}`,{
                           method:"DELETE",
                           headers:{
                              "Content-Type":"application/json"
                           }
                        })
                           .then(res => res.json())
                           .then(data => {
                              closeModal(false)
                              load(true)
                              console.log(data);
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

 export default ProductDel;
