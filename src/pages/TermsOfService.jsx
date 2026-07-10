import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-black text-primary mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-text/80 leading-relaxed">
            <p>
              Welcome to MK PRIME! These terms and conditions outline the rules and regulations for the use of 
              MK PRIME's Website and Services.
            </p>
            <p>
              By accessing this website and engaging our services, we assume you accept these terms and conditions. 
              Do not continue to use MK PRIME if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Services Provided</h2>
            <p>
              MK PRIME provides professional painting, waterproofing, and related contracting services. All project scopes, 
              timelines, and costs will be agreed upon in writing via an official quote or contract before work commences.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Estimates and Quotes</h2>
            <p>
              Quotes provided are estimates based on the initial inspection and information provided by the client. 
              If unforeseen issues arise that require additional materials or labor, MK PRIME will discuss these with 
              the client and require approval before proceeding with the additional work.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Payment Terms</h2>
            <p>
              Payment schedules are outlined in the individual project contracts. Typically, a deposit is required before 
              the commencement of any work to cover initial materials. The remaining balance is due upon completion and 
              final inspection of the project. Late payments may incur additional fees.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Warranties and Guarantees</h2>
            <p>
              We stand by the quality of our workmanship. Specific warranties for painting and waterproofing services 
              will be provided in your contract. This warranty covers peeling or blistering due to defective workmanship 
              but does not cover damage caused by normal wear and tear, structural defects, or extreme weather conditions.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Tamil Nadu, India, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
