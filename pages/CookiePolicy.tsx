
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-blue-50 py-20 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-4 uppercase tracking-tight">Cookie Policy</h1>
          <p className="text-zinc-600">Effective Date: October 2024</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-blue prose-sm md:prose-base">
          <div className="space-y-12 text-zinc-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-4 mt-4">
                <li>
                  <strong>Necessary Cookies:</strong> These are essential for you to browse the website and use its features, such as accessing secure areas of the site.
                </li>
                <li>
                  <strong>Performance & Analytics Cookies:</strong> These cookies collect information about how visitors use our website, for instance, which pages visitors go to most often. We use this to improve how our website works.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> These allow the website to remember choices you make (such as your username or the region you are in) and provide enhanced, more personal features.
                </li>
                <li>
                  <strong>Targeting & Advertising Cookies:</strong> These are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement. In our case, this helps us measure the effectiveness of our Google and Bing Ads campaigns.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website, deliver advertisements on and through the Website, and so on. These third parties may include Google Analytics, Google Ads, and Microsoft (Bing) Advertising.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Choices Regarding Cookies</h2>
              <p>
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" className="text-blue-600 underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-blue-600 underline">www.allaboutcookies.org</a>.
              </p>
              <p className="mt-4">
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at <span className="font-bold">contact@koviatleads.com</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
