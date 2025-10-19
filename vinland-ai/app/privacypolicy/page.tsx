export const metadata = {
  title: "Privacy Policy — Vinland AI",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-semibold">Privacy Policy</h1>
      <p className="mt-2 text-foreground/70 text-sm">Last updated: {new Date().getFullYear()}</p>

      <section className="mt-10 space-y-6">
        <div className="glass ring-gold rounded-2xl p-6">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="mt-2 text-foreground/80">
            We may collect account details (e.g., email), usage metrics, and journal entries you optionally add. Data is used to power features like stats, training prompts, and insights.
          </p>
        </div>

        <div className="glass ring-gold rounded-2xl p-6">
          <h2 className="text-xl font-semibold">How We Use Data</h2>
          <p className="mt-2 text-foreground/80">
            We use your data to provide the service, personalize guidance, and improve Vinland AI. We do not sell personal data.
          </p>
        </div>

        <div className="glass ring-gold rounded-2xl p-6">
          <h2 className="text-xl font-semibold">User Rights</h2>
          <p className="mt-2 text-foreground/80">
            You can request access, correction, export, or deletion of your data. Depending on your region, additional rights may apply.
          </p>
        </div>

        <div className="glass ring-gold rounded-2xl p-6">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2 text-foreground/80">
            Questions? Email us at <a className="gold-text underline" href="mailto:support@vinland.ai">support@vinland.ai</a>.
          </p>
        </div>
      </section>
    </main>
  );
}


