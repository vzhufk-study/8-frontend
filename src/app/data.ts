import axios from "axios";

axios.defaults.baseURL = "http://lab.kids-lu-server.xyz/api/v1";

axios.defaults.headers.common["Authorization"] = "Basic dGVzdDp0ZXN0";

export const getEstates = async () => {
  return await axios.get("/realty");
};

export const getEstate = async id => {
  return await axios.get("/realty/" + id);
};

export const createEstate = async data => {
  return await axios.post("/realty", data);
};
