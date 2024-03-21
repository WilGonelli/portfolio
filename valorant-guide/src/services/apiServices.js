import { config } from "../configs";

class valorantApi {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getAllAgents() {
    try {
      const response = await fetch(this.baseURL);
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }
}

export default valorantApi = new valorantApi(config.baseURL);
