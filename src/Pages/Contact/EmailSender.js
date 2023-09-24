import emailjs from 'emailjs-com'
import { useState } from 'react'

function EmailSender() {

    const [ toggleNotify, setToggleNotify ] = useState(false)
    const [ emailObj, setEmailObj ] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    function updateEmailObj(e){
        const copy = {...emailObj}
        copy[e.target.name] = e.target.value
        setEmailObj(copy)
    }

    function sendEmail(e){
        e.preventDefault()
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            emailObj,
            process.env.REACT_APP_USER_ID
        ).then( res => {
            if(res.status === 200){
                setToggleNotify(true)
                setEmailObj({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                })
                setTimeout(()=>{
                    setToggleNotify(false)
                },3000)
            }
        })
    }
    
    return ( 


            <form onSubmit={sendEmail} className='emailerContainer '>

                <label className=''>name</label>
                <input className='emailerInput' required name='name' value={emailObj.name} onChange={updateEmailObj}/>

                <label className=''>email: </label>
                <input className='emailerInput' required type='email' name='email' value={emailObj.email} onChange={updateEmailObj}/>
        
                <label className=''>company </label>
                <input className='emailerInput' placeholder='optional' name='company' value={emailObj.company} onChange={updateEmailObj}/>

                <label className=''>message </label>
                <textarea className='emailerInput h-[10vh]' required name='message' value={emailObj.message} onChange={updateEmailObj} />

                <button className='underline'>Send Email</button>

            </form> 

     
    );
}

export default EmailSender;