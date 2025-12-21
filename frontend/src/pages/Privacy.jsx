export default function Privacy() {
  return (
    <section className="min-h-screen bg-[#0A0B0D] text-white py-28">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-semibold">
          Privacy Policy
        </h1>

        <p className="mt-6 text-gray-400">
          Last updated: January 2025
        </p>

        <div className="mt-12 space-y-10 text-sm text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              1. Overview
            </h2>
            <p>
              Citadel Flow is a demonstration and learning project built to
              showcase payment system design, analytics, and optimization.
              No real personal or financial data is processed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              2. Data Collection
            </h2>
            <p>
              This application does not collect or store real user data.
              All payment flows are simulated or use sandbox environments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              3. Cookies & Tracking
            </h2>
            <p>
              No cookies, analytics trackers, or third-party monitoring
              tools are used in this prototype.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              4. Security
            </h2>
            <p>
              While this project follows secure coding practices,
              it is not intended for production use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">
              5. Contact
            </h2>
            <p>
              For any questions, please reach out via the Contact page.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}
