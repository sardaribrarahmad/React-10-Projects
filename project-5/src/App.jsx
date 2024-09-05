
import './App.css';
import Screen1 from './Components/Screen1';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import ContactForm from './Components/ContactForm';
import AddContact from './Components/AddContact';
import Create from './Pages/Create';




const App = () => {

const [contacts, setContacts] = useState([]);
const [isOpen, setOpen] = useState(false);

const onOpen = () =>
  {
    setOpen(true); 
  };
const onClose = () =>
  {  
    setOpen(false);   
  };
  useEffect(() => {
    const getContacts = async () => {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
             id: doc.id,
            ...doc.data()
          }
        });
        setContacts(contactLists);
        // console.log (contactsSnapshot);
        console.log (contactLists);

    };

    getContacts();
  }, []);
  

  return (
    <>
      <div className="max-w-[370px] mx-auto pt-2 px-4 bg-customGray min-h-screen">
        <Screen1 />
        
        <div className="flex justify-between gap-3 ">
            <div className="relative  flex items-center flex-grow">
              <img className ="ml-2 absolute"  
                src="./material-symbols_search.png" 
                alt="" />
                <input 
                type="text" 
                className=" pl-9 flex-grow material-symbols_search bg-transparent rounded-lg border h-10 border-white  text-white"
                  placeholder="Search Contact" />
            </div>  

              <div
              onClick={onOpen}
              className="max-w-10 max-h-sm">
                <img 
                  className = " "
                  src="./Group 1.png" 
                  alt="" />
              </div> 
        </div>

          <div>
            {contacts.map((contact) => (
              <ContactForm key={contact.id} contact={contact}/>
                ))}
          </div>

          <AddContact
            isOpen={isOpen}
            onClose={onClose}>hi
            </AddContact>


            <Create />
        
      </div> 

    

      
      
    
    </>
  
  );
}

export default App;
