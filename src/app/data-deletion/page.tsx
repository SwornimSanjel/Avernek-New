import type { Metadata } from "next";
import Link from "next/link";

const contactEmail = "avenor.system@gmail.com";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Avernek",
  description:
    "Instructions for requesting deletion of personal data handled by Avernek through Meta-connected business communication workflows.",
};

export default function DataDeletionPage() {
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
          Data Deletion Instructions
        </h1>

        <p className="mt-2 text-sm text-muted">
          Last updated: June 16, 2026
        </p>

        <section className="mt-10 space-y-5 text-base leading-7 text-graphite">
          <p>
            Avernek builds AI automation, customer communication, lead routing,
            CRM, and growth systems for businesses. Some of these workflows may
            connect with Meta products such as Facebook Pages, Instagram
            accounts, Messenger, lead forms, and related business messaging
            tools.
          </p>

          <p>
            Users may request deletion of personal information associated with
            Avernek-operated or Avernek-connected Meta workflows by contacting
            us at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-ink underline underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            How to Request Data Deletion
          </h2>

          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Email{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-ink underline underline-offset-4"
              >
                {contactEmail}
              </a>{" "}
              with the subject line “Data Deletion Request”.
            </li>

            <li>
              Include enough information for us to locate the relevant records,
              such as your name, email address, phone number, Facebook or
              Instagram profile name, business page name, form submission
              details, or message reference.
            </li>

            <li>
              We will review and verify the request before deleting eligible
              personal information from active systems used for communication,
              automation, lead management, or customer support.
            </li>

            <li>
              Once the request is completed, we will reply with confirmation or
              provide a status update if additional verification is required.
            </li>
          </ol>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            Information That May Be Deleted
          </h2>

          <p>
            Deletion may include eligible contact details, inquiry information,
            message records, lead form submissions, CRM entries, workflow logs,
            and other personal information connected to Avernek-managed business
            communication systems.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">
            Retention Exceptions
          </h2>

          <p>
            Some information may be retained when required for legal compliance,
            fraud prevention, security, accounting, dispute resolution, platform
            integrity, or legitimate business recordkeeping. Any retained data
            will be limited to what is necessary for those purposes.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">Contact</h2>

          <p>
            For deletion requests or questions about this process, contact{" "}
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
