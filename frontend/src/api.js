import axios from 'axios'

const SERVER_URL = 'http://localhost:8000';

export default {
    postMember(thName, enName, idcard, facebook, email, address, phone) {
        const url = SERVER_URL + `/api/employee`;
        return axios.post(url, {
            thName: thName,
            enName: enName,
            idcard: idcard,
            facebook: facebook,
            email: email,
            address: address,
            phone: phone,
        }).then(function (response) {
            console.log(response.data)
        })
            .catch(function (error) {
                console.log(error.response)
            });
    },

    getallmember() {
        const url = SERVER_URL + `/api/employees`;
        return axios.get(url).then(response => response.data);
    },

    deletemember(id){
        const url = SERVER_URL + `/api/employee/` + id;
        return axios.delete(url).then(function (response) {
            console.log("Deleted"+response)
        })
            .catch(function (error) {
                console.log(error)
            });
    }, 
}