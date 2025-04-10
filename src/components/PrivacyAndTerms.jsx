import React from "react";

export default function PrivacyAndTerms() {
  return (
    <div className="w-full mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Privacy Policy & Terms</h1>
        <p className="text-gray-500 text-sm">Updated on: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden divide-y divide-gray-200">
        <section className="p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Privacy Policy</h2>
          <div className="space-y-6 text-gray-700 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800">1. Introduction</h3>
              <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our app.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">2. Information We Collect</h3>
              <ul className="list-disc pl-6">
                <li><strong>Personal Information:</strong> Name, phone number, and email (provided during sign-up)</li>
                <li><strong>Location Data:</strong> Used to show nearby shops and for navigation</li>
                <li><strong>Device Information:</strong> Collected for security and app performance</li>
                <li><strong>Shop Listings & User Activity:</strong> Products viewed, booked, and shop interactions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">3. How We Use Your Information</h3>
              <ul className="list-disc pl-6">
                <li>To provide and improve our services</li>
                <li>To show nearby shops based on location</li>
                <li>To facilitate product bookings and store navigation</li>
                <li>To enhance user experience through recommendations and ratings</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">4. Data Sharing & Security</h3>
              <ul className="list-disc pl-6">
                <li>We do not sell your personal data to third parties</li>
                <li>Data is only shared with registered shopkeepers for order processing</li>
                <li>Strong security measures are in place to protect your information</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">5. User Rights</h3>
              <ul className="list-disc pl-6">
                <li>You can update or delete your account at any time</li>
                <li>You may disable location access from your device settings</li>
                <li>You can request a copy of your stored data</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">6. Cookies & Tracking Technologies</h3>
              <p>We may use cookies to improve user experience. You can manage cookie preferences in your browser settings.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">7. Updates to This Privacy Policy</h3>
              <p>We may update this policy periodically. Users will be notified of major changes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">8. Contact Us</h3>
              <p>For any privacy concerns, contact us at <a href="mailto:your@email.com" className="text-indigo-600 hover:underline">your@email.com</a></p>
            </div>
          </div>
        </section>

        <section className="p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Terms of Service</h2>
          <div className="space-y-6 text-gray-700 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800">1. Acceptance of Terms</h3>
              <p>By using our app, you agree to these Terms of Service. If you do not agree, please do not use the app.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">2. User Responsibilities</h3>
              <ul className="list-disc pl-6">
                <li>Users must provide accurate account information</li>
                <li>Online payments are not available; transactions happen directly at shops</li>
                <li>Users should pick up booked products within the reservation period</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">3. Shopkeeper Responsibilities</h3>
              <ul className="list-disc pl-6">
                <li>Shops must list accurate product details and pricing</li>
                <li>Shopkeepers should fulfill customer reservations fairly</li>
                <li>No fraudulent activity or misleading listings are allowed</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">4. Limitation of Liability</h3>
              <ul className="list-disc pl-6">
                <li>We are not responsible for disputes between users and shopkeepers</li>
                <li>Product quality and availability are solely the responsibility of the shopkeeper</li>
                <li>We are not liable for any payment issues as transactions happen offline</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">5. Account Suspension & Termination</h3>
              <p>We reserve the right to suspend or terminate any user or shopkeeper account for violations of these terms.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">6. Changes to Terms</h3>
              <p>We may modify these terms from time to time. Continued use of the app after updates implies acceptance of the new terms.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">7. Contact Us</h3>
              <p>For any queries regarding these terms, contact us at <a href="mailto:your@email.com" className="text-indigo-600 hover:underline">your@email.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
