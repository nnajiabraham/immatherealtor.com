// Import the sendgrid/mail module
import sgMail from '@sendgrid/mail';

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Example POST handler for your contact form
export default async function (req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for POST method
  if (req.method !== 'POST') {
    return res.status(405).end(); //Method Not Allowed
  }

  // Structure the email
  const message = {
    to: 'immatherealtor@gmail.com', // Replace with your email or the agent's email
    from: 'immatherealtor@gmail.com', // This needs to be the email you verified with SendGrid
    reply_to: body.email,
    subject: `New Contact From Website: ${body.subject}`,
    text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`,
    html: `<strong>Name:</strong> ${body.name}<br><strong>Email:</strong> ${body.email}<br><strong>Phone:</strong> ${body.phone}<br><strong>Message:</strong> ${body.message}`,
  };

  try {
    // Send the email
    await sgMail.send(message);
    // Send a 200 response to the client
    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.error('Error sending email', error);
    if (error.response) {
      console.error(error.response.body);
    }
    // Send an error response back to the client
    res.status(500).json({ status: 'Error', message: 'Error sending email' });
  }
}