
import React,{useState} from "react";


const Card= ({name,id,email,username}) => {
 
  
    const [isActive,setIsActive]=useState(false)
   const [color,setName]=useState(false);
   
    const click=()=>{
      
    setIsActive(!isActive);
    setName (!color);
   }
   return (  
          
    
        <div className= "tc  bg-light-green  dib br3 pa3 ma2 grow bw2 shadow-10"
        style={{ 
          backgroundColor:isActive ?'red':'',
          color:color ?'white':'',
       
        }}
        
        
        >
        
        <img src={`https://robohash.org/${id}test?90x90" alt="robotimg"`} />
       
        <div className="Card">
          <h4>{name}</h4>
          <p>{username}</p>
          <p>{email}</p>
          <button onClick={click} >changecolor </button> 
       
       </div>
              

      
        
      </div>
     
    );
}
 
export default Card;