import axios from 'axios';

class UserService {

    async getToken(email, password) {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ email, password });

        const res = await axios.post('/auth', body, config);
        return res.data.token;
    }

    async getUser() {
        try {
            var res = await axios.get('/user');
            return res.data;
        } catch (err) {
            console.log(err);
            return null;
        }

    }
}

export default UserService;