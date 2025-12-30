
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-blue-50 py-20 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-4 uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-600">Effective Date: October 2024</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-blue prose-sm md:prose-base">
          <div className="space-y-12 text-zinc-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">1. Introduction</h2>
              <p>
                Koviat Leads For Manufacturers ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our Website, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Personal Identifiers:</strong> Name, email address, telephone number, and business name when you fill out forms.</li>
                <li><strong>Business Data:</strong> Information about your shop, machinery, and service area provided during intake.</li>
                <li><strong>Usage Data:</strong> Details of your visits to our Website, including traffic data, location data, logs, and other communication data.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To qualify your business for our lead generation systems.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To notify you about changes to our Website or any products or services we offer.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">4. Disclosure of Your Information</h2>
              <p>
                We do not sell your personal information. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To contractors, service providers, and other third parties we use to support our business (e.g., CRM providers, analytics tools).</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>With your consent.</li>
                <li>To comply with any court order, law, or legal process.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">5. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">6. Contact Information</h2>
              <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
              <p className="mt-4 font-bold text-blue-950">
                Email: contact@koviatleads.com<br />
                WhatsApp: +233244446682
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
