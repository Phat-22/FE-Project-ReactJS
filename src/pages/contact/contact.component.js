/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <main>
            <section className="container signup">
                <div className="content">
                    <h1>Contact-Us</h1>
                </div>
                <div className="map__company">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125380.16760889789!2d106.52379580300146!3d10.87769756629668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a742dabfd33%3A0xd99a9f06eac63692!2sH%C3%B3c%20M%C3%B4n%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1671934033196!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="main">
                    <div className="heading">
                        <h2>Enter Your Message</h2>
                    </div>
                    <div className="main--input">
                        <input type="text" placeholder="First & Last Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone Number"/>
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="main--button ">
                        <button className="button_signin">Send</button>
                    </div>
                    <div className="main--info">
                        <div className="heading">
                            <h2>Social Networking</h2>
                        </div>
                        <div className="icon--social">
                            <Link href="#"><ion-icon className="facebook" name="logo-facebook"></ion-icon></Link>
                            <Link href="#"><ion-icon className="twitter" name="logo-twitter"></ion-icon></Link>
                            <Link href="#"><ion-icon className="instagram" name="logo-instagram"></ion-icon></Link>
                            <Link href="#"><ion-icon className="whatsapp" name="logo-whatsapp"></ion-icon></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Contact;