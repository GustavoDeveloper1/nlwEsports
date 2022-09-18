import Axios from "axios";

const Api = Axios.create({
    baseURL: 'http://localhost:4900'
});
export default Api;