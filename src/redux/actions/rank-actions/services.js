import Axios from "axios";
import { rewardURL } from "../../../constant";

export const getFullRank = () => Axios({
    method: 'GET',
    url: `${rewardURL}/API/Rank/GetAllRank`,
    responseType: 'json'
})