import EmailSender from "./EmailSender";
import phone from '../../Assets/icons/icons8-phone-100.png'
import email from '../../Assets/icons/icons8-email-100.png'
import pin from '../../Assets/icons/icons8-region-100.png'


function Contact() {
    return ( 
        <div id='contact'
        className='pt-[10vh] relative h-screen '
        >
            <p className='banner'>CONTACT</p>

            <div className='flex flex-col gap-[5vh] py-[5vh]'>

                <div className='contactItemsContainer flex-col sm:flex-row'
                >
                    <div className='contactInfoItem '>
                        <img className='contactIcon' alt='phone' src={phone}/>
                        <p className=''>845 709 0116</p>
                    </div>

                    <div className='contactInfoItem'>
                        <img className='contactIcon' alt='email' src={email}/>
                        <p className=''>LVAS248@GMAIL.COM</p>
                    </div>

                    <div className='contactInfoItem'>
                        <img className='contactIcon' alt='pin' src={pin}/>
                        <p className=''>NEW YORK, NY</p>
                    </div>
                </div>
                
                <EmailSender />

            </div>
        </div> 
    );
}

export default Contact;