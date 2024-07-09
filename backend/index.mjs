import './loadEnv.js';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors()); // cors to prevent errors

app.use(bodyParser.json());

app.get('/config', (req, res) => {
  res.json({
    SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    USER_ID: process.env.EMAILJS_USER_ID,
  });
});

app.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: {
        email: email,
        message: message,
      },
    }),
  });

  if (response.ok) {
    res.status(200).json({ message: 'Email sent successfully' });
  } else {
    res.status(response.status).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
