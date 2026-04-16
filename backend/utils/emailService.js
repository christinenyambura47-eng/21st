import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Ensure environment variables are loaded
dotenv.config();

console.log('🔧 Email Service Initializing...');
console.log(`   SMTP Host: ${process.env.SMTP_HOST || 'NOT SET'}`);
console.log(`   SMTP Port: ${process.env.SMTP_PORT || 'NOT SET'}`);
console.log(`   SMTP User: ${process.env.SMTP_USER || 'NOT SET'}`);

// Create transporter with explicit configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false, // Use STARTTLS for port 587
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  logger: false, // Disable nodemailer logging to reduce noise
  debug: false,
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Failed:', error.message);
    console.error('   Host:', process.env.SMTP_HOST);
    console.error('   Port:', process.env.SMTP_PORT);
    console.error('   User:', process.env.SMTP_USER);
  } else {
    console.log('✅ SMTP Connection Verified Successfully');
  }
});

/**
 * Send contact form email
 */
export const sendContactEmail = async (formData) => {
  const { firstName, lastName, email, phone, message } = formData;

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This email was sent from the 21st Electronics website contact form.</small></p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

/**
 * Send quote request email
 */
export const sendQuoteEmail = async (formData) => {
  const { firstName, lastName, email, phone, address, plan } = formData;

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `New Quote Request from ${firstName} ${lastName} - ${plan} Plan`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Plan of Interest:</strong> <strong>${plan}</strong></p>
      <hr>
      <p><small>This email was sent from the 21st Electronics website quote form.</small></p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Quote email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending quote email:', error);
    throw error;
  }
};

/**
 * Send confirmation email to user
 */
export const sendConfirmationEmail = async (email, type = 'contact', data = {}) => {
  const subject = type === 'quote' ? 'Quote Request Received - 21st Electronics' : 'Contact Form Received - 21st Electronics';
  
  const html = type === 'quote' 
    ? `
      <h2>Thank You for Your Quote Request!</h2>
      <p>Hi ${data.firstName},</p>
      <p>We've received your quote request for our <strong>${data.plan}</strong> plan.</p>
      <p>Our team will review your information and contact you within 2 hours during business hours.</p>
      <p>In the meantime, feel free to explore our plans at <a href="${process.env.FRONTEND_URL}/products">21st Electronics Products</a>.</p>
      <p>Best regards,<br>21st Electronics Team</p>
    `
    : `
      <h2>Thank You for Contacting Us!</h2>
      <p>Hi ${data.firstName},</p>
      <p>We've received your message and will get back to you as soon as possible.</p>
      <p>Our support team typically responds within 2 hours during business hours.</p>
      <p>Contact us anytime at <a href="tel:+254720778496">+254 720 778 496</a> for urgent matters.</p>
      <p>Best regards,<br>21st Electronics Support Team</p>
    `;

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: subject,
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};
