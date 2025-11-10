import { forwardRef } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Input from '../Shared/Input/Input';
import './Contact.css';
import Button from '../Shared/Button/Button';

const Contact = forwardRef((props, ref) => {
    const formRef = useRef()

    const handleSubmit = async event => {
        event.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, {publicKey: import.meta.env.VITE_PUBLIC_KEY})
        .then((result) => {
            console.log(result.text);
            formRef.current.reset();
        }, (error) => {
            console.log(error);
        });
    }


    return (
        <div ref={ref} className="contact-box">
            <h1 className="contact-heading">Contact</h1>

            <div className='contact-info'>

                <p> ✉️ anniv.mustonen@gmail.com</p>
                <p>📞 +358 451 244 064 </p>
                <p> 📍 Tampere, Suomi </p>
                <br/>
                <a href="./././public/CV2025_syksy.pdf"> 📂 Open CV (Finnish)</a>
                <br/>
                <a href="./././public/CV2025_syksy.pdf" download> 📁 Download CV (Finnish)</a>
            </div>

            <form ref={formRef} className='contact-form' onSubmit={handleSubmit}>
                <h2 className='form-label'>Send me an email:</h2>
                <input type="hidden" name="time" value="Mar 10 2025 08:46"></input>
                <Input id="name" name="name" type="text" label="Name" required="True" placeholder="Enter name"/>
                <Input id="topic" name="topic" type="text" label="Topic" required="True" placeholder="Enter topic"/>
                <Input id="email" name="email" type="email" label="Email" required="True" placeholder="Enter email"/>
                <Input id="message" name="message" type="text" label="Message" rows={5} required="True" placeholder="Enter message"/>
                <Button inverse type="submit" value="Send">Send Email</Button>
            </form>

        </div>
    )
});

export default Contact;

            // <InputField
            //   id="description"
            //   name="description"
            //   value={formData.description}
            //   onChange={handleChange}
            //   rows={4}
            //   required
            // />