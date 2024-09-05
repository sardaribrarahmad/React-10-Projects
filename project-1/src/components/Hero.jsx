



import { useState } from 'react';
import Form from 'react-bootstrap/Form';


const Hero = () => {

    const [data, setData] = useState ({
        "name":'',
        'email':'',
        'password':''
    });

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value});
    };
    const Submit = (e) => {
        e.preventDefault();
        console.log(data);
    }




    return (


        <main className="hero">


             <form onSubmit={Submit}>

                <input onChange={changeHandler}
                value = {data.name}
                type="name"
                placeholder='name'
                name='name' />

                <input onChange={changeHandler}
                value= {data.email}
                type="email" 
                placeholder='email'
                name='email'/>

                <input onChange={changeHandler}
                value= {data.password}
                type="password" 
                name='password'/>

                <button>submit</button>
             </form>


            {/* <div className="hero-content">
                <h1>
                YOUR FEET DESERVE THE BEST
                </h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES
                </p>

               <div className="hero-buttons">
                 <button>shopnow</button>
                <button  className="secondary-btn">category
                </button>
                </div>

                <div className="shopping">
                    <p>
                     Also Available On
                    </p>
                


                </div>
                <div className="Icons">
                    <img src="/flipkart.png" alt="" />
                    <img src="/amazon.png" alt="" />

                </div>
            
            </div>

            


            <div className="hero-image">
                <img src="/shoe_image.png" alt="shoe" />
            </div> */}
        </main>
    
    ) ;

  
};
export default Hero;