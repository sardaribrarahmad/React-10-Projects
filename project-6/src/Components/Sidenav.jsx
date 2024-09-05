
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";

import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"
const Sidenav = () => {

  const navLinks =[
    {
      icons: RxDashboard,
      text: "Dashboard",
      link: "/",
    },

    {
      icons: GrTransaction,
      text: "Tarnsactions",
      link: "/Transaction",
    },
    {
      icons: RxDashboard,
      text: "Support",
      link: "/Support",
    },
  ];
  return (
    <>
    <Stack boxShadow = "2xl" maxW="150px" bg="purple"  gap="10px" padding="20px" height="100vh" >
      <img src="./@DOSOMECODING.png" alt="" />
      {navLinks.map((input) => (
        <Link to={input.link} key={input.text}>
      <HStack>
      <Icon as={input.icons}/>
        <Text> {input.text} </Text>
          </HStack> 
    
      
      </Link>

      ))}
    </Stack>  
    </>
    
  )
}

export default Sidenav;
