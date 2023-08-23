import { useRef, useState } from 'react';
import '../components/ShortenedDisplay.css'


const ShortenLinkDIsplay = ({collection,setLinksCollection}) => {

  const[copiedLink, setCopiedlink] = useState('');
  const linkRef = useRef(null);


  const handleCopied = async (text,id)=>{
    try {
      const linkArray = collection.map(link=> link.id === id ? {...link,isCopied:!link.isCopied}:{...link});
      setLinksCollection(linkArray);
      console.log(linkArray);
       await navigator.clipboard.writeText(text);
       //setIsCopied(prev=> !prev);
       console.log('Successfully Copied');
    } catch (error) {
      console.log("Error logged", error)
    }
   

    
  
  }
    return ( 
        <div className='short-container'>
            {collection.map((link)=>(
             <div key={link.id} className="printed-div">
               <div className='link-div'>
                  <p>{link.link}</p>
               </div>
               <div className='btn-div3'>
                   <p ref={linkRef}>{link.shortLink}</p>
                   {link.isCopied === false ? 
                   <button className='falseBtn' onClick={()=>handleCopied(link.shortLink,link.id)}>Copy</button>:
                    <button className='trueBtn' onClick={()=>handleCopied(link.shortLink)}>Copied!</button>}
               </div>
            
               
             </div>
             

           ) )}
        </div>
     );
}
 
export default ShortenLinkDIsplay;