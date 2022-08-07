const remote_url=import.meta.env.VITE_SERVER_URL
const Bookings = ()=>{
    return{
        init(){
            localStorage.getItem('calendar')
        },
        datetime:'',
        time:'',
        storedate:'',
        sendAppointment(datetime){
            console.log(datetime);
            localStorage.setItem('calendar', datetime)
            // console.log(storedate);
        }
}
}
export default Bookings