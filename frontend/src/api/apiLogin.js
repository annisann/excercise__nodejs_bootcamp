import axios from "axios";
import config from "../config/config";

const ApiLogin = {
  login: async (username, password) => {
    let option = {
      url: config.baseUrl + config.endpoint.auth + "/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: username,
        password: password,
      },
    };

    try {
      // Handling blank username and password.
      if (option.data.username !== "" && option.data.password !== "") {
        let result = await axios(option);
        return result.data;
      }
    } catch (error) {
      return error;
    }
  },
};

export default ApiLogin;