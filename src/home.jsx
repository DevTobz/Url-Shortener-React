import './home.css'
import ShortenerDisplay from './components/ShortenedLink'
import { useState, useEffect} from 'react';
import Footer from './components/Footer'
import Header from './components/Header'


const Home = () => {
    const [link,setLink] = useState("");
    const [linksCollection,setLinksCollection] = useState([]);
    const [shortenedLink,setShortenedLink] = useState("");




    const handleSubmit = async (e)=>{
       
       e.preventDefault();
       const url = `https://api.shrtco.de/v2/shorten?url=${link}`

try {
	const response = await fetch(url);
	const resultJson =  await response.json();
	
    const shortLink = resultJson.result.full_short_link;
    console.log(response)
    setShortenedLink(shortLink);
    setLinksCollection(prev=>[...prev,{link:link,shortLink:shortLink,id:crypto.randomUUID(), isCopied:false}])
    console.log("link generation successful");
    //console.log(shortLink);
    //console.log(linksCollection)
  
} catch (error) {
	console.error(error);
}

     
 }


    return ( 
    <>
      <div className='header'>
        <Header/>
      </div>
      <div className='z-wrapper'>
        <div className='floater'>
          <div className='input-div'>
            <form onSubmit={(e)=>handleSubmit(e)} className='form-d'>
              <input type="text" name={link}  placeholder='Enter your link' onChange={(e)=>setLink(e.target.value)}/>
              <button type='submit'>Shorten it!!</button>
            </form>
          </div>
          <ShortenerDisplay collection={linksCollection} setLinksCollection={setLinksCollection}/>
        </div>


      </div>
      <div className='footer-wrap'>
        <Footer/>
      </div>
      
    </>
       

    );
}
 
export default Home;