import styles from './ContatcHeader.module.css'
const ContactHeader = () => {
  return (
    <div className={styles.Contact}>
        <h1>
            CONTACT US

        </h1>
        <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , 
            YOU CAN REACH OUT TO US <b>THROUGH THE CONTACT FORM</b> OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIALMEDIA.
            {""} 
        </p>
            
    </div>
  );
};

export default ContactHeader;