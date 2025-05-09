import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { HelpPageStyle } from '../styles/PagesStyles'; // optional styled component
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <HelpPageStyle>
      <h2>Help & Support</h2>
      <p>Welcome! Here you'll find answers to common questions and guidance on using the platform effectively.</p>

      <Accordion multiple activeIndex={[0]}>
        
        {/* Getting Started */}
        <AccordionTab header="Getting Started">
          <ul>
            <li>Create an account from the <Link to="/get-started">registration page</Link>.</li>
            <li>Choose your role (Buyer or Seller) during signup.</li>
            <li>Verify your email if prompted.</li>
            <li>Start exploring the platform from your dashboard.</li>
          </ul>
        </AccordionTab>

        {/* For Buyers */}
        <AccordionTab header="Using the Platform as a Buyer">
          <ul>
            <li>Browse products from the <Link to="/shop">Shop page</Link>.</li>
            <li>Add items to your cart or wishlist using the buttons under each product.</li>
            <li>Go to your cart to review your order and click "Checkout" to place an order.</li>
            <li>Track order status from your <Link to="/account/order-details">Order page</Link>.</li>
            <li>Payments are processed securely. Contact support if there's an issue.</li>
          </ul>
        </AccordionTab>

        {/* For Sellers */}
        <AccordionTab header="Using the Platform as a Seller">
          <ul>
            <li>Upload new products using the "Add Product" button in your seller dashboard.</li>
            <li>Set price, description, category, and stock.</li>
            <li>View and manage orders placed for your products.</li>
            <li>Update product status (e.g., "Shipped") as needed.</li>
            <li>Track your earnings and payout schedule.</li>
          </ul>
        </AccordionTab>

        {/* Account & Security */}
        <AccordionTab header="Account & Security">
          <ul>
            <li>Update your profile from the <Link to="/account">Settings page</Link>.</li>
            <li>Reset password from the login page or account settings.</li>
            <li>Enable 2FA if available (coming soon).</li>
            <li>To delete your account, contact support via email.</li>
          </ul>
        </AccordionTab>

        {/* Contact & Support */}
        <AccordionTab header="Contact & Support">
          <p>If you're experiencing issues or have questions not answered here, reach out to us:</p>
          <ul>
            <li>Email: <a href="mailto:support@example.com">techiesinagric@gmail.com</a></li>
            <li>Live Chat: Available 9am - 5pm (Mon-Fri)</li>
            <li>Phone: +234 123 456 7890</li>
          </ul>
        </AccordionTab>

        {/* FAQ */}
        <AccordionTab header="Frequently Asked Questions (FAQ)">
          <ul>
            <li><strong>What payment methods are supported?</strong> — We accept debit cards, credit cards, and bank transfers.</li>
            <li><strong>Can I cancel my order?</strong> — Orders can be canceled within 1 hour of placement.</li>
            <li><strong>How long does delivery take?</strong> — Delivery takes 2–5 business days depending on your location.</li>
            <li><strong>How do I become a seller?</strong> — Select “Seller” during registration or upgrade from your profile settings.</li>
          </ul>
        </AccordionTab>

      </Accordion>
    </HelpPageStyle>
  );
};

export default Help;
