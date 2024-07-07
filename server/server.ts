import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Middleware per analizzare il corpo della richiesta JSON
app.use(express.urlencoded({ extended: true }));

// Middleware per consentire l'accesso da qualsiasi origine
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Funzione per inviare l'email
async function sendEmail(email: string, subject: string, message: string): Promise<string> {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER!,
      to: process.env.RECEIVER_EMAIL!,
      subject: subject,
      html: `<p>${message}</p><p>Best Regards</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return 'Email sent successfully';
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('An error occurred while sending email');
  }
}

// Route per gestire la richiesta POST
app.post('/send-email', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    const response = await sendEmail(email, 'Nuovo messaggio', `${name} ha scritto:\n\n${message}`);
    res.send(response);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
