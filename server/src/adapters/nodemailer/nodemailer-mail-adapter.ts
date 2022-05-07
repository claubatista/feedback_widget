import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fc98a469c89497",
    pass: "46321f23931873",
  },
})
export class NodemailerMailAdapter implements MailAdapter {
  async sendEmail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi.feedget.com>",
      to: "Claudia Batista <contatodaclau@gmail.com>",
      subject,
      html: body,
    });
  }
}
