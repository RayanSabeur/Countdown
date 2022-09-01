import {React , useState, useEffect } from 'react';
import Countdown from './Countdown';
import hills from '../Images/pattern-hills.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faInstagram,
 faPinterest,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';


const Home = () => {

    const [ days, setDays] = useState();
    const [ hours, setHours] = useState();
    const [ minutes, setMinutes] = useState();
    const [ seconds, setSeconds] = useState();

    let interval;

    const Timer = () => {

       interval = setInterval(() => {
           
        const currentdate = new Date().getTime();

        const futurdate = new Date("September 20, 2022").getTime();

        const distance = futurdate - currentdate;


        let dayTime = Math.floor(distance / 1000 / 60 / 60 / 24);
        let hourTime = Math.floor(distance   / 1000 / 60 / 60) % 24;
        let minuteTime = Math.floor(distance  / 1000 / 60) % 60;
        let secondTime = Math.floor(distance / 1000) % 60;
      
        function correction () {

            dayTime = dayTime <  10 ? setDays('0' + dayTime) : setDays(dayTime);
            hourTime = hourTime < 10 ? setHours('0' + hourTime) : setHours(hourTime);
         
           }  

        if(distance < 0) 
        {
            clearInterval(interval.current)
        }  else {

               correction();
               setMinutes(minuteTime);
               setSeconds(secondTime);                        
        }

       });

      
    };

    useEffect(() => {
          
        Timer();
    },[]);

    return (
     <>

    <div className='home-render main'>
        <h1> WE'RE LAUNCHING SOON </h1> 
          <Countdown  hours={hours} minutes={minutes} seconds={seconds} days={days}/>
      
       <footer className='hill'> 

    <div className='footericon'>
      <a href=" 
       https://fr-fr.facebook.com"  >   <FontAwesomeIcon icon={faFacebook} color="hsl(237, 18%, 59%)" className='reseau'/></a>
      <a href="
     https://www.instagram.com/?hl=fr">  <FontAwesomeIcon icon={faPinterest} color="hsl(237, 18%, 59%)" className='reseau'/></a>
      <a href="
      https://www.pinterest.fr/">  <FontAwesomeIcon icon={faInstagram} color="hsl(237, 18%, 59%)" className='reseau'/></a>
    </div>

        <img src={hills} alt="hills-background" srcSet="" className='hills-footer'/>

       </footer>
       
    </div>

     
     </>
    );
};

export default Home;