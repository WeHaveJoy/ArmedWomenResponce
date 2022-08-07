import axios from 'axios'

const remote_url = import.meta.env.VITE_SERVER_URL
const Counseling = () => {
    return {

        types_of_abuse: {
            mental: '',
            emotional: '',
            physical: '',
            sexual: '',
            technological: ''
        },

        details:'',
        mentalA:[],
        emotionalA:[],
        physicalA:[],
        sexualA:[],
        technologicalA:[],

        info: [],

        init() {

        },

        mental() {
            axios
                .get(`http://localhost:4004/api/getMentalHealth`)
                .then(results => {
                    console.log(results.mentalHealth);
                    this.mentalA = results.data.mentalHealth;
                    console.log(this.mentalA);
                    // setInterval(() => {
                    // }, 4000);
                    // return true;
                }).catch(e => console.log(e))
        },

        emotional() {

            axios
                .get(`http://localhost:4004/api/getEmotionalAbuse`)
                .then(results => {
                    this.emotionalA = results.data.emotionaAbuse;
                    console.log(results.data);
                    setInterval(() => {
                    }, 4000);
                    return true;
                }).catch(e => console.log(e))

        },

        physical() {

            axios
                .get(`http://localhost:4004/api/getPhysicalAbuse`)
                .then(results => {
                    this.physicalA = results.data.physicalAbuse;
                    console.log(results.data);
                    setInterval(() => {
                    }, 4000);
                    return true;
                }).catch(e => console.log(e))

        },

        sexual() {

            axios
                .get(`http://localhost:4004/api/getSexualAbuse`)
                .then(results => {
                    this.sexualA = results.data.sexualAbuse;
                    console.log(results.data);
                    setInterval(() => {
                    }, 4000);
                    return true;
                }).catch(e => console.log(e))

        },

        technological() {

            axios
                .get(`http://localhost:4004/api/getTechnologicalAbuse`)
                .then(results => {
                    this.technologicalA = results.data.technologicalAbuse;
                    console.log(results.data);
                    setInterval(() => {
                    }, 4000);
                    return true;
                }).catch(e => console.log(e))
        }

    }
}

export default Counseling