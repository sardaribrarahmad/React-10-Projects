import { createContext } from "react";

const UserContext = createContext(null);

const UserProvider = (props)=>{
  const { childern } = props ;
      const user={
        name:'sardar',
        email:'sardar@gmail.com',
        
      };

      return <>
      </>;
}
