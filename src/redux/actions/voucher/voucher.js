import Axios from "axios";
import { serverURL } from "../../../constant";

export const getMyVoucherAPI = userId => Axios({
    method: 'GET',
    url: `${serverURL}/passenger/myvoucher`,
    responseType: 'json',
    timeout: 20000,
    params: {
        user_name: userId
    }
})
.then(res => res.data)