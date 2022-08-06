import axios from 'axios'

const remote_url=import.meta.env.VITE_SERVER_URL
const PulseRate = ()=>{
    return{
        
        average_heart_rate: '',
        danger_heart_rate: '',
        message: '',
        notSafeMessage:{
            danger: 'We are sending police your way and a trained specialist'
        },
        safetyCheckMessage: {
            safe: 'Please keep safe and be vigilante'
        },
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
        safetyCheck(){
         if(this.safe == this.safe){
             console.log(this.safe); 
            return this.safetyCheckMessage.safe
         }
        },
        notSafe(){
            if(this.danger == this.danger){
                console.log(this.danger);
                return this.notSafeMessage.danger
             }
        }
    }
}

export default PulseRate