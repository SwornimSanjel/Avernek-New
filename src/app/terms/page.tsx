
import type { Metadata } from "next";
import Link from "next/link";

const contactEmail = "avenor.system@gmail.com";

export const metadata: Metadata = {
  title: "Terms of Service | Avernek",
  description:
    "Terms of Service for Avernek AI automation, lead management, CRM, and Meta-connected business communication workflows.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-obsidian px-6 py-12 text-ivory">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-slate underline underline-offset-4 hover:text-ivory"
        >
          Main page
        </Link>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-slate">
          Avernek Compliance
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ivory">
          Terms of Service
        </h1>

        <p className="mt-2 text-sm text-slate">
          Last updated: June 16, 2026
        </p>

        <section className="mt-10 space-y-5 text-base leading-7 text-silver">
          <p>
            These Terms of Service govern the use of Avernek services, including
            AI automation systems, inquiry response workflows, CRM setup, lead
            routing, appointment support, customer communication systems, and
            Meta-connected business operations.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            Use of Services
          </h2>

          <p>
            Avernek services are designed to help businesses manage inquiries,
            automate communication, organize leads, improve response speed, and
            support growth operations. Users and connected businesses are
            responsible for using these services lawfully and in accordance with
            applicable platform policies.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            Acceptable Use
          </h2>

          <p>
            Users may not use Avernek services for unlawful activity, spam,
            harassment, fraud, impersonation, unauthorized data collection,
            platform abuse, scraping, misleading communication, or any activity
            that violates Meta policies or applicable laws.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            User and Business Responsibilities
          </h2>

          <p>
            Users and connected businesses are responsible for providing accurate
            information, maintaining account security, ensuring they have
            permission to process submitted data, reviewing automated outputs
            where appropriate, and complying with all laws, platform rules, and
            customer communication requirements.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            Automation and Communication
          </h2>

          <p>
            Avernek may support automated replies, lead qualification, routing,
            notifications, CRM updates, and related workflow actions. Automated
            systems are intended to assist business operations and should not be
            used to mislead users or replace required human review in sensitive,
            regulated, or high-risk situations.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            Service Availability
          </h2>

          <p>
            Services are provided on an as-available basis. We may update,
            modify, suspend, or discontinue any part of the service for
            maintenance, security, compliance, platform changes, or business
            reasons.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            Third-Party Platforms
          </h2>

          <p>
            Avernek services may rely on third-party platforms such as Meta,
            CRM providers, hosting services, messaging tools, analytics tools,
            and automation platforms. We are not responsible for outages,
            restrictions, policy changes, account actions, or failures caused by
            third-party platforms.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            Limitation of Liability
          </h2>

          <p>
            To the extent permitted by law, Avernek is not liable for indirect,
            incidental, special, consequential, punitive, or business losses
            arising from use of the service, third-party platform issues,
            automation errors, missed messages, or interrupted access.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            Changes to These Terms
          </h2>

          <p>
            We may update these Terms from time to time. Continued use of the
            services after updates means the user or connected business accepts
            the revised Terms.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ivory">
            Contact
          </h2>

          <p>
            For questions about these Terms, contact{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-ivory underline underline-offset-4"
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