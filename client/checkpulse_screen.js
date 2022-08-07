import axios from 'axios'
const remote_url=import.meta.env.VITE_SERVER_URL
const PulseRate = ()=>{
    return{
        popup:false,
        cancelPopup: false,
        average_heart_rate: '',
        danger_heart_rate: '',
        message: '',
        danger: 'We are sending police your way and a trained specialist',
        safe: 'Please keep safe and be vigilante',
        
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
        openPopup() {
            popup.classList.add("popup"),
            this.popup = true
        }, closePopup() {
            popup.classList.remove("popup")
            this.popup = false
        },
        opencancelPopup() {
            cancelPopup.classList.add("cancelPopup"),
            this.cancelPopup = true
        },
        closecancelPopup() {
            cancelPopup.classList.remove("cancelPopup")
            this.cancelPopup = false
        },
        safetycheck(){
            this.openPopup()
         if(this.safe == this.safe){
             console.log(this.safe); 
            return this.safe
         }
        },
        notsafe(){
            this.opencancelPopup()
            if(this.danger == this.danger){
                console.log(this.danger);
                return this.danger
             }
        }
    }
}
export default PulseRate