import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendQuoteEmail, sendConfirmationEmail } from '../utils/emailService.js';

const router = express.Router();

// Quote request endpoint
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
  
  body('address')
    .trim()
    .notEmpty().withMessage('Address is required')
    .isLength({ min: 5 }).withMessage('Please provide a complete address'),
  
  body('plan')
    .trim()
    .notEmpty().withMessage('Plan selection is required')
    .isIn(['Home 5Mbps', 'Home 10Mbps', 'Premium 20Mbps', 'Business 30Mbps'])
    .withMessage('Invalid plan selected'),
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

    const { firstName, lastName, email, phone, address, plan } = req.body;

    try {
      // Send email to company
      await sendQuoteEmail({ firstName, lastName, email, phone, address, plan });
      console.log('✅ Quote email sent to company');
    } catch (emailError) {
      console.error('⚠️ Company quote email failed:', emailError.message);
      // Continue - don't fail the request if company email fails
    }

    try {
      // Send confirmation email to user
      await sendConfirmationEmail(email, 'quote', { firstName, plan });
      console.log('✅ Quote confirmation email sent to user');
    } catch (emailError) {
      console.error('⚠️ Confirmation email failed:', emailError.message);
      // Continue - don't fail the request if confirmation email fails
    }

    return res.status(200).json({
      success: true,
      message: 'Your quote request has been received. Our team will contact you shortly!',
      data: {
        firstName,
        email,
        plan,
      }
    });
  } catch (error) {
    console.error('Quote form error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process your quote request. Please try again later.',
      error: error.message
    });
  }
});

export default router;
