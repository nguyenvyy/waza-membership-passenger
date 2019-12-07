import Axios from "axios";
// import { rewardURL } from "../../../constant";
import { rewardVirtualService as rewardURL } from "../../../test/virtual-service";
// coreReward
export const getFullRank = () => Axios({
    method: 'GET',
    url: `${rewardURL}/API/Rank/GetAllRank`,
    responseType: 'json'
})