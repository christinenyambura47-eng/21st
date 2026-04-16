import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail, sendConfirmationEmail } from '../utils/emailService.js';

const router = express.Router();

// Contact form endpoint
router.post('/submit', [
  // Validation middleware
  body('firstName')
    .trim()
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 2 }).withMessage('First name must be at least 2 characters'),
  
  body('lastName')
    .trim()
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters'),
  
  body('email')
    .trim()
    .isEmail().withMessage('Valid email is required')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .matches(/^(\+254|0)[0-9]{9}$/).withMessage('Valid Kenyan phone number is required'),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
], async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { firstName, lastName, email, phone, message } = req.body;

    try {
      // Send email to company
      await sendContactEmail({ firstName, lastName, email, phone, message });
      console.log('✅ Company notification email sent');
    } catch (emailError) {
      console.error('⚠️ Company email failed:', emailError.message);
      // Continue - don't fail the request if company email fails
    }

    try {
      // Send confirmation email to user
      await sendConfirmationEmail(email, 'contact', { firstName });
      console.log('✅ Confirmation email sent to user');
    } catch (emailError) {
      console.error('⚠️ Confirmation email failed:', emailError.message);
      // Continue - don't fail the request if confirmation email fails
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will be in touch soon!',
      data: {
        firstName,
        email,
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process your message. Please try again later.',
      error: error.message
    });
  }
});

export default router;
