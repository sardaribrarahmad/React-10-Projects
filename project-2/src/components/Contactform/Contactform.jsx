import Button from '../Button/Button';
import styles from './Contactform.module.css'
import { MdMessage } from "react-icons/md"
import { LuPhone } from "react-icons/lu"
import { IoMdMail } from "react-icons/io"

const contactform = () => {

    const onSubmit = (event) =>
    {
        event.preventDefault();

        console.log(event);
        alert('Form submitted');

    };

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.button}>
            <Button  text="VIA SUPPORT CHAT" icon={< MdMessage fontSize="24px"/>} />
            <Button  text="VIA Call" icon={< LuPhone fontSize="24px"/>} />
            </div>
            <Button 
                blank={true}
                text="VIA EMAIL FORM"
                icon={< IoMdMail fontSize="24px"/>} 
            />
            
            <form onSubmit ={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
        
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="name">E-Mail</label>
                    <input type="email" name="name" />
        
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows="8"/>
        
                </div>
                <div className={styles.submit}>
                <Button text="SUBMIT"/>
                </div>

            </form>   
        </div>
        <div className="contact_img">
            <img src= "./images/Service 24_7-pana 1.png" alt="" />
        </div>
    </section>
)
}

export default contactform;