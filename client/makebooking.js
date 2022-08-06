import axios from 'axios'
import flatpickr from "flatpickr";

const remote_url=import.meta.env.VITE_SERVER_URL
const Bookings = ()=>{
    return{
        init(){
  
        },
                bookAppointment(date) {
                    // return true to enable
        
                    return (date.getMonth() % 2 === 0 && date.getDate() < 15);
        
                }
}
}

export default Bookings