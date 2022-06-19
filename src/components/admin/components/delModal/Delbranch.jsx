import Loading from '../modal/loading';
import './modal.css'

 function DelModal({closeModal,load, id}) {


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
                        console.log(id);
                        console.log(`http://localhost:9000/branch/${id}`);
                        fetch(`http://localhost:9000/branch/${id}`,{
                           method:"DELETE",
                           headers:{
                              "Content-Type":"application/json"
                           }
                        })
                           .then(res => res.json())
                           .then(data => {
                              console.log(data);
                              closeModal(false)
                              load(true)
                           })
                           .catch(error => {
                              console.log(error);
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
