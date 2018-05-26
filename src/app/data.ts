import axios from "axios";

axios.defaults.baseURL = "http://lab.kids-lu-server.xyz/api/v1";

axios.defaults.headers.common["Authorization"] = "Basic dGVzdDp0ZXN0";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

export const getEstates = () => {
  return axios.get("/realty");
};

export const getEstate = id => {
  return axios.get("/realty/" + id);
};

export const createEstate = data => {
  return axios.post("/realty", data);
};

export const updateEstate = (id, data) => {
  return axios.put("/realty/" + id, data);
};

export const deleteEstate = id => {
  return axios.delete("/realty/" + id);
};
