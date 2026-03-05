import Link from "next/link";
import { BOOK_NOW_URL, NAV_LINKS, CONTACT, SOCIALS, SERVICE_AREAS } from "@/lib/constants";

function SocialIcon({ name }: { name: string }) {
  const letter = name.charAt(0);
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-dark text-sm font-bold text-text-secondary transition-colors hover:bg-brand-orange hover:text-brand-black">
      {letter}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-dark">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Autoelite home">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange">
                <span className="text-xs font-extrabold text-brand-black">AE</span>
              </div>
              <span className="text-lg font-bold text-white">
                Auto<span className="text-brand-orange">elite</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Premium automotive service in Montreal. Professional diagnostics, repairs, and performance upgrades — serving the West Island and beyond.
            </p>
            <a
              href={BOOK_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-bold text-brand-black transition-all hover:brightness-110"
            >
              Book your appointment online
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/fleet" className="text-sm text-text-secondary transition-colors hover:text-white">
                  Fleet Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-text-secondary">
              <li>{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="pt-1 text-text-muted">{CONTACT.hours}</li>
            </ul>

            {/* Social */}
            <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-text-muted">
              Follow Us
            </h3>
            <div className="mt-3 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Autoelite on ${s.name}`}
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Service Areas — local SEO */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Areas We Serve
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-text-secondary">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-surface-border pt-8 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Autoelite. All rights reserved. | Professional automotive service in Montreal, QC.
        </div>
      </div>
    </footer>
  );
}
