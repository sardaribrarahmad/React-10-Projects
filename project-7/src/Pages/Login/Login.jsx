import Crypto from "../../Components/Crypto";
import Form from "../../Components/Form";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen ">
    <div className="container border-black border-4 flex gap-10 flex-col items-center justify-center bg-red-300 w-456 mx-auto h-[20vh ] w-rounded-md" >
    <Crypto 
    title="Welcome to Crypto App" 
    description="Enter your credentials to access the account."/>
    <Form 
        isSignup={false}
        isLogin={true}
        linkHref="Forgot"
        linkText="Forgot pasword"
        buttontext="Log In " 
        />
    </div>
    </div>
  
    </>
  )
}

export default Login;
