import { axios } from "../../../library/axios";
import storage from "../../../utilities/storage";


export const adminLogout = async () => {
  await axios.post('/auth/signout')
  storage.clearToken();
}