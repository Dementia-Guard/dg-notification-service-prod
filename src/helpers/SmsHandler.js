import axios from "axios";
import smsConfig from "../config/SmsConfig.js";

class SmsHandler {
  constructor() {
    this.apiUrl = smsConfig.apiUrl;
    this.authToken = smsConfig.authToken;
    this.senderId = smsConfig.senderId;
  }

  async sendSMS(mobile, message) {
    try {
      const msgData = {
        recipient: mobile,
        sender_id: this.senderId,
        message: decodeURIComponent(message),
      };

      const response = await axios.post(this.apiUrl, msgData, {
        headers: {
          Authorization: `Bearer ${this.authToken}`,
          "Content-Type": "application/json",
        },
      });

      return response.data; // Returning response data
    } catch (error) {
      throw error.response ? error.response.data : { message: "Internal Server Error" };
    }
  }
}

export default new SmsHandler();
