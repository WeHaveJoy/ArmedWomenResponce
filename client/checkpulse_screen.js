import axios from 'axios'

const remote_url=import.meta.env.VITE_SERVER_URL
const PulseRate = ()=>{
    return{
        
        average : [],
        danger:[],
        average_heart_rate: '',
        danger_heart_rate: '',
        message: '',
        init(){
  
        },
        checkPulse(){
            axios
            .post(`${remote_url}/api/heartrate`,{
                average_heart_rate : this.average_heart_rate,
                danger_heart_rate : this.danger_heart_rate
            })
            .then(results=>{
               this.message = results.data.message
               console.log(this.message);
            //    console.log(this.danger_heart_rate);
            })
        },
    }
}

export default PulseRate