module.exports = (app, db) => {

    app.post(`/api/bookings`, async (req,res) => {

        const {date_booking,time_booking,patient_id} = req.body;

        const getbookings = await db.oneOrNone(`insert into`)

    })

    app.post('/api/heartrate', async (req, res)=> {
        try {
            const {average_heart_rate, danger_heart_rate} = req.body
            const rate = await db.one(`insert into heart_rate (average_heart_rate, danger_heart_rate) values($1, $2) returning *`,[average_heart_rate,danger_heart_rate]);
            if(average_heart_rate <= 90) {
                res.json({
                data: rate,
                message: 'Please keep safe!'
            })
        }else{
            res.json({
                message: 'We are sending our Armed Response your way and have alerted the police',
                status: 401
            })
        }
            console.log(rate);
            console.log(average_heart_rate);
            console.log(danger_heart_rate);
            
        } catch (error) {
            res.status(500)
            .json({
                message: error.message
            })
        }
        
    })
    
}