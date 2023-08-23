import '../components/Footer.css'

const Footer = () => {
    return (  
        <>
        <div className="div-1">
            <div id='text-div'>
                <div className='text-div1'>
                    <h1>Advanced Statistics</h1>
                    <br />
                    <div className='text-div2'>
                        <p>Track how your links are performing across the web with
                       with our advance statistics dashboard</p>

                    </div>
                    
                </div>
            </div>
            <div className='grid-div'>
                <div id='div1'>
                    <div className='indexed divi1'>

                    </div>
                    <div className='inner div1'>
                        <p className='title-head'>Brand Recongnition</p>
                        <p className='title-body'>Boost your brand recongnition with each click. Generic links don't mean a thing. Branded links helps instill confidence in your content</p>
                    </div>
                </div>
                <div id='div2'>
                    <div className='indexed divi2'>

                    </div>
                    <div className='inner div2'>
                        <p className='title-head'>Detailed Records</p>
                        <p className='title-body'>Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform  better decisions</p>
                    </div>
                </div>
                <div id='div3'>
                    <div className='indexed divi3'>

                    </div>
                    <div className='inner div3'>
                        <p className='title-head'>Fully Customizable</p>
                        <p className='title-body'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="div-2">
            <div>
                <p className='texti'>
                    <b>Boost your links today</b>
                </p>
                <button id='button'>Get Started</button>
            </div>
        </div>
        <div className="div-3">
            <div className='logo-footer-div'>
                <p>Shortify</p>
            </div>
            <div className='list-div'>
                <h3>Features</h3>
                <p>Link Shortening</p>
                <p>Branded Link</p>
                <p>Analytics</p>

            </div>
            <div className='list-div'>
                 <h3>Resources</h3>
                <p>Blog</p>
                <p>Developer</p>
                <p>Support</p>

            </div>
            <div className='list-div'>
                 <h3>Company</h3>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>

            </div>
            <div className='icon-div'>
              <div className='icon-divs face'>

              </div>
               <div className='icon-divs twitter'>

              </div>
              <div className='icon-divs pin'>

               </div>
               <div className='icon-divs ig'>

               </div>
            </div>

        </div>
        </>
       
    );
}
 
export default Footer;