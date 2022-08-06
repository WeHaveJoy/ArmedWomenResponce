import PulseRate from './checkpulse_screen'
import Counseling from './counseling_screen'
import Bookings from './makebooking'
import Notifications from './notifications'
import CheckSafety from './safety_screen'


const remote_url=import.meta.env.VITE_SERVER_URL
const Responded = ()=>{
    return{
        ...PulseRate(),
        ...Counseling(),
        ...Bookings(),
        ...Notifications(),
        ...CheckSafety(),       

    
        init(){
  
        },
}
}

export default Responded