import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);

const mailgunClient = mailgun.client({
  username: process.env.MAILGUN_USERNAME,
  key: process.env.MAILGUN_KEY, // Secure API key from env
});

const mailgunDomain = process.env.MAILGUN_DOMAIN; // Your Mailgun domain

export { mailgunClient, mailgunDomain };