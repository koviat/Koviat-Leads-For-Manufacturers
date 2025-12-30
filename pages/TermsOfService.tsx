
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-blue-50 py-20 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-4 uppercase tracking-tight">Terms of Service</h1>
          <p className="text-zinc-600">Last Updated: October 2024</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-blue prose-sm md:prose-base">
          <div className="space-y-12 text-zinc-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Koviat Leads For Manufacturers website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display;</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                <li>Remove any copyright or other proprietary notations from the materials;</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">3. Lead Generation Disclaimer</h2>
              <p>
                Koviat Leads For Manufacturers provides a lead generation system. While we strive to provide high-quality, pre-qualified leads, we do not guarantee the closing of any specific contracts or a specific volume of leads. Success depends on various factors, including your shop's quoting speed, pricing, and manufacturing capabilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall Koviat Leads For Manufacturers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which our primary business operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">6. Modifications</h2>
              <p>
                We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
