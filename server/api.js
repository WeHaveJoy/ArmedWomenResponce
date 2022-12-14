module.exports = (app, db) => {


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
                message: 'Are you in a safe place? Please send us a response!',
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



    app.get("/api/getMentalHealth", async (req, res) => {

        try {

            const mentalHealth = await db.manyOrNone(`select * from mental_health`);
            console.log(mentalHealth);
            
            res.status(200).json({
                mentalHealth: mentalHealth,
                message: "Get the help you need",
            });
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                error: error.message,
            });
        }
    })

    app.get("/api/getEmotionalAbuse", async (req, res) => {

        try {

            const emotionaAbuse = await db.manyOrNone(`select * from emotional_abuse`);

            res.status(200).json({
                emotionaAbuse: emotionaAbuse,
                message: "Get the help you need",
            });
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                error: error.message,
            });
        }
    })


    app.get("/api/getPhysicalAbuse", async (req, res) => {

        try {

            const physicalAbuse = await db.manyOrNone(`select * from physical_abuse`);

            res.status(200).json({
                physicalAbuse: physicalAbuse,
                message: "Get the help you need",
            });
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                error: error.message,
            });
        }
    })

    app.get("/api/getSexualAbuse", async (req, res) => {

        try {

            const sexualAbuse = await db.manyOrNone(`select * from sexual_abuse`);

            res.status(200).json({
                sexualAbuse: sexualAbuse,
                message: "Get the help you need",
            });
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                error: error.message,
            });
        }
    })


    app.get("/api/getTechnologicalAbuse", async (req, res) => {

        try {

            const technologicalAbuse = await db.manyOrNone(`select * from technological_abuse`);

            res.status(200).json({
                technologicalAbuse: technologicalAbuse,
                message: "Get the help you need",
            });
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                error: error.message,
            });
        }
    })
    
}