
import type { Metadata } from "next";
import Link from "next/link";

const contactEmail = "avenor.system@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Avernek",
  description:
    "Privacy Policy for Avernek AI automation, lead management, CRM, and Meta-connected business communication workflows.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-12 text-ink">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-muted underline underline-offset-4 hover:text-ink"
        >
          Main page
        </Link>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-muted">
          Avernek Compliance
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
          Privacy Policy
        </h1>

        <p className="mt-2 text-sm text-muted">
          Last updated: June 16, 2026
        </p>

        <section className="mt-10 space-y-5 text-base leading-7 text-graphite">
          <p>
            Avernek provides AI automation, inquiry response systems, CRM
            workflows, lead routing, appointment support, and growth systems for
            businesses. This Privacy Policy explains how we collect, use, store,
            and protect information handled through our website, services, and
            Meta-connected business communication workflows.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            Information We May Collect
          </h2>

          <p>
            Depending on how a user interacts with Avernek or a connected
            business account, we may collect or receive information such as name,
            email address, phone number, message content, inquiry details, form
            submissions, page interaction data, business account identifiers,
            appointment details, CRM records, and support or sales communication.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            Meta-Connected Information
          </h2>

          <p>
            When Avernek systems are connected to Meta products, we may receive
            information from Facebook Pages, Instagram accounts, Messenger, lead
            forms, comments, or other Meta business tools. This information is
            used only to operate the requested communication, automation, lead
            management, or customer support workflow.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            How We Use Information
          </h2>

          <p>
            We use information to respond to inquiries, qualify and route leads,
            manage customer communication, support appointments, improve
            workflows, operate CRM and automation systems, provide requested
            services, protect security, and comply with legal or platform
            requirements.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            Sharing of Information
          </h2>

          <p>
            We do not sell personal information. Information may be shared only
            with service providers, automation platforms, CRM tools, hosting
            providers, communication systems, or connected business accounts when
            necessary to provide the service, complete a user-requested action,
            comply with law, protect security, or maintain platform integrity.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            Data Storage and Security
          </h2>

          <p>
            We take reasonable technical and organizational measures to protect
            information from unauthorized access, misuse, loss, or disclosure.
            However, no online system can be guaranteed to be completely secure.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            Data Retention
          </h2>

          <p>
            We retain information only for as long as necessary to provide our
            services, manage business communication, maintain records, resolve
            disputes, comply with legal obligations, or meet platform and
            security requirements.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            User Rights and Choices
          </h2>

          <p>
            Users may request access, correction, or deletion of their personal
            information by contacting us at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-ink underline underline-offset-4"
            >
              {contactEmail}
            </a>
            . We may need to verify the request before taking action.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            Contact
          </h2>

          <p>
            For privacy questions or data requests, contact{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-ink underline underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}