import { mailgunClient, mailgunDomain } from "../config/Mailgun.js"

class MailHandler {
  async sendEmail(to, subject, text) {
    try {
      const emailData = {
        from: `Dementia Guard <postmaster@${mailgunDomain}>`,
        to,
        subject,
        text,
      };

      const response = await mailgunClient.messages.create(mailgunDomain, emailData);
      return response;
    } catch (error) {
      throw error.response ? error.response.data : { message: "Internal Server Error" };
    }
  }
}

export default new MailHandler();