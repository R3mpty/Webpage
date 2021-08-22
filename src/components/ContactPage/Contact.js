import React, { Component } from 'react'
import './Contact.css';

function ContactMe(){

    return( 
        <div>

        <div className="ContactMe" id = "Contact">

                <div className="box">
                    <div className="contactInfo">

                        <div>
                            <h2> Contact Me </h2>
                            <ul className="info">
                                <li>
                                    <div id = "testing">
                                        <span> <img id ="imgsInContact" src="/contactImg/email.png" alt= "email" /> </span>
                                        <span id="email"> riescontactinfo@gmail.com </span> 
                                    </div>

                                </li>
                            </ul>
                        </div>

                        <ul className="sci">
                            <li> <a href=""> <img id ="imgsInContact" src="/contactImg/github.png" alt="github" /></a></li>
                            <li> <a href=""> <img id ="imgsInContact" src="/contactImg/lin.png" alt="lin" /></a></li>
                        </ul>


                    </div>

                    <div className="contactForm">
                        <h2>Send me a message</h2>
                        {/* className="formBox */}
                        <div> 

                            <form action="https://formsubmit.co/riescontactinfo@gmail.com" method="POST" className="formBox">  

                                <div className="inputBox w47">
                                    <input type="text" name="name" required />
                                    <span> First Name</span>
                                </div>

                                <div className="inputBox w47">
                                    <input type="text" name="" required />
                                    <span> Last Name</span>
                                </div>

                                <div className="inputBox w47">
                                    <input type="email" name="email" required />
                                    <span> Email </span>
                                </div>

                                <div className="inputBox w47">
                                    <input type="text" name=""  />
                                    <span> Mobile Number (Optional) </span>
                                </div>

                                <div className="inputBox w100">
                                    <textarea name="" required></textarea>
                                    <span> Your message: </span>
                                </div>

                                <div className="inputBox w100">
                                    <input type="submit" value = "Send"/>
                                </div>

                            </form>  

                        </div>
                    </div>

                </div>

        </div> 

        
    
        </div>
    )


}


export default ContactMe


{/* <div id = "mobile"> 

<form action="https://formsubmit.co/riescontactinfo@gmail.com" method="POST" className="formBox">  

    <div className="inputBox w47">
        <input type="text" name="name" required />
        <span> First Name</span>
    </div>

    <div className="inputBox w47">
        <input type="text" name="" required />
        <span> Last Name</span>
    </div>

    <div className="inputBox w47">
        <input type="email" name="email" required />
        <span> Email </span>
    </div>

    <div className="inputBox w47">
        <input type="text" name=""  />
        <span> Mobile Number (Optional) </span>
    </div>

    <div className="inputBox w100">
        <textarea name="" required></textarea>
        <span> Your message: </span>
    </div>

    <div className="inputBox w100">
        <input type="submit" value = "Send"/>
    </div>

</form>  

</div> */}
