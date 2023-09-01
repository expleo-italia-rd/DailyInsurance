/* eslint-disable jsx-a11y/anchor-is-valid */
import emailjs from '@emailjs/browser';
import { Carousel } from 'flowbite-react';
import Card from '../Componets/Card'
import { Button } from 'flowbite-react';
import first from '../IMG/firstImg.png'
import second from '../IMG/secondImg.png'
import third from '../IMG/thirdImg.png'
import four from '../IMG/fourImg.png'
import five from '../IMG/fiveImg.png'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate('/map')
  }
  
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send("service_cp9m70c","template_eju2u9g",{},"Y87NswbaykWV91WOU");
      console.log('Email sent successfully');
      handleNavigate(); // Call the navigation function after sending the email
    } catch (error) {
      console.log('Error sending email:', error);
    }
  };
  return (
    <div className='flex items-center w-full h-full gap-1'>
    <Carousel className='w-[70%] h-[75%] mt-1'>
      <img
        alt="..."
        src={first}
        className='h-full'
      />
      <img
        alt="..."
        src={second}
        className='h-full'

      />
      <img
        alt="..."
        src={third}
        className='h-full'

      />
      <img
        alt="..."
        src={four}
        className='h-full'

      />
      <img
        alt="..."
        src={five}
        className='h-full'

      />
    </Carousel>
    <div className='w-[30%] h-[75%] flex flex-col justify-center items-center gap-[1rem]'>
        <Card/>
        <Button onClick={sendEmail} className='rounded-full h-[10%]' size='xl'>
        Attiva Assicurazione
        </Button>
    </div>
    </div>
    
  )
}

export default Login
