import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-black text-primary mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-text/80 leading-relaxed">
            <p>
              At MK PRIME, accessible from our website, one of our main priorities is the privacy of our visitors. 
              This Privacy Policy document contains types of information that is collected and recorded by MK PRIME 
              and how we use it.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
              will be made clear to you at the point we ask you to provide your personal information.
              If you contact us directly, we may receive additional information about you such as your name, email 
              address, phone number, the contents of the message and/or attachments you may send us, and any other 
              information you may choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service</li>
              <li>Send you emails related to your quotes and service requests</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Log Files</h2>
            <p>
              MK PRIME follows a standard procedure of using log files. These files log visitors when they visit 
              websites. All hosting companies do this and a part of hosting services' analytics. The information collected 
              by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date 
              and time stamp, referring/exit pages, and possibly the number of clicks.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at 
              kesavanmeiyappan@gmail.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
