import express, { Request, Response } from 'express';
import cors from 'cors';
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
}

function sendEmail({ email, subject, message }: EmailOptions): Promise<{ message: string }> {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "v.saccone4@gmail.com",
        pass: "VanVin2004",
      },
    });

    const mail_configs = {
      from: "v.saccone4@gmail.com",
      to: email,
      subject: subject,
      html: `
      <p>${message}</p>
      <p>Best Regards</p>
      `,
    };

    transporter.sendMail(mail_configs, (error, info) => {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.get("/", (req: Request, res: Response) => {
  sendEmail(req.query as unknown as EmailOptions)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
