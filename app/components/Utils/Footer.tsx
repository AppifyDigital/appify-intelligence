import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    className="h-4 w-4"
  >
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
  </svg>
);

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white pb-12 text-black">
      <div className="container mx-auto space-y-8 px-4 sm:space-y-12">
        {/* Logo Section */}
        <div className="flex justify-center"></div>

        {/* Quick Links */}
        <nav className="flex flex-col items-center justify-center space-y-4 text-center sm:flex-row sm:space-x-8 sm:space-y-0 sm:text-left">
          <Link href="/" className="cursor-pointer transition-opacity hover:opacity-80">
            <Image
              src="/assets/svg/logo.svg"
              alt="Appify - consult, develop, support"
              width={153}
              height={49}
              className="h-12 w-auto"
            />
          </Link>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/case-studies" className="transition-colors hover:text-primary">
            Case Studies
          </Link>
          <Link href="/blog" className="transition-colors hover:text-primary">
            Explore Our Blog
          </Link>
          <Link href="/resources" className="transition-colors hover:text-primary">
            Resources
          </Link>
          <Link href="/faq" className="transition-colors hover:text-primary">
            FAQ
          </Link>
          <Link href="/contact" className="text-primary hover:text-primary">
            Contact us
          </Link>
        </nav>

        {/* Main Footer Content - 4 Columns */}
        <div className="w-full border-y border-black/10 py-10">
          <div className="container mx-auto grid grid-cols-1 gap-x-4 gap-y-8 px-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {/* Column 1: Company Info + Head Office */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="mb-4 inline-flex items-center font-bold uppercase tracking-wider text-black">
                Appify
              </h3>
              <div className="flex flex-col space-y-3 text-base text-black/80">
                <h4 className="font-semibold leading-snug">
                  Award Winning App Developers Ireland
                </h4>
                <p className="text-sm leading-relaxed">
                  Expert app developers in Ireland, building mobile apps and digital
                  products for startups, enterprises, and well-known brands.
                </p>
              </div>
              <h3 className="mb-4 mt-6 inline-flex items-center font-bold uppercase tracking-wider text-black">
                Schedule a meeting
              </h3>
              <div className="text-sm text-black/80">
                <p className="mb-3">
                  Book a free initial consultation with our app development experts and
                  let&apos;s discuss your app design and development options.
                </p>
                <a
                  href="https://calendly.com/karl-appify/free-initial-consultation-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80"
                >
                  Book a Call
                </a>
              </div>
            </div>

            {/* Column 2: Business Hours + Contact */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="mb-4 inline-flex items-center font-bold uppercase tracking-wider text-black">
                Business Hours
              </h3>
              <div className="flex flex-col space-y-2 text-sm text-black/80">
                <div className="flex justify-between gap-4">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Saturday - Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>

              <h3 className="mb-4 mt-6 inline-flex items-center font-bold uppercase tracking-wider text-black">
                Contact
              </h3>
              <div className="flex flex-col space-y-2 text-sm text-black/80">
                <a
                  href="tel:1800852307"
                  className="inline-flex items-center transition-colors hover:text-amber-400"
                >
                  <span className="font-medium">1 800 852 307</span>
                </a>
                <a
                  href="mailto:hello@appify.digital"
                  className="inline-flex items-center transition-colors hover:text-amber-400"
                >
                  <span className="font-medium">hello@appify.digital</span>
                </a>
              </div>
              <h3 className="mb-2 mt-6 inline-flex items-center font-bold uppercase tracking-wider text-black">
                Head Office
              </h3>
              <div className="flex flex-col space-y-1 text-sm text-black/80">
                <p className="font-medium">
                  Appify Ltd., Ashfield, Tullamore, Co. Offaly, Ireland. R35 KX60
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/NQCkccByo57vE3mC7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-sm text-black transition-colors hover:text-black/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                View on Map
              </a>
            </div>

            {/* Column 3: Reviews */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="mb-4 inline-flex items-center font-bold uppercase tracking-wider text-black">
                Customer Reviews
              </h3>
              <div className="mb-2 flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-black/80">5.0</span>
                <span className="text-sm text-black/60">(22 reviews)</span>
              </div>

              <div className="space-y-3">
                <div className="bg-[#F8F8F8] p-3 text-sm">
                  <p className="font-semibold text-black/90">Jaspal Kharbanda</p>
                  <p className="mt-1 text-black/70">
                    &quot;What is really impressive was a value-driven engagement with
                    Appify. They genuinely care about delivering quality.&quot;
                  </p>
                </div>
                <div className="bg-[#F8F8F8] p-3 text-sm">
                  <p className="font-semibold text-black/90">Stephen Gribben</p>
                  <p className="mt-1 text-black/70">
                    &quot;Appify have become more than just my tech partner... Their
                    communication led to seamless collaboration.&quot;
                  </p>
                </div>
              </div>

              <a
                href="https://clutch.co/profile/appify-0#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-amber-400 transition-colors hover:text-amber-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                Leave a Review
              </a>
            </div>

            {/* Column 4: Map */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="mb-4 inline-flex items-center font-bold uppercase tracking-wider text-black">
                Find Us
              </h3>
              <div className="w-full overflow-hidden rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.229925929481!2d-7.501659331216853!3d53.26884505814724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485db107805f045f%3A0x1862614913b56d19!2sAppify%20Ltd.!5e1!3m2!1sen!2srs!4v1760012876682!5m2!1sen!2srs"
                  title="Appify Digital - Google Maps"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 flex w-full flex-wrap gap-2">
                <a
                  href="https://maps.app.goo.gl/NQCkccByo57vE3mC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full bg-black px-2 py-2 text-center text-xs font-medium text-white hover:bg-black/80"
                >
                  Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir//Appify+Ltd.,+Ashfield,+Tullamore,+Co.+Offaly,+R35+KX60,+Ireland/@53.2693111,-7.5032193,786m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x485db107805f045f:0x1862614913b56d19!2m2!1d-7.501048!2d53.2685746!3e0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full bg-black px-2 py-2 text-center text-xs font-medium text-white hover:bg-black/80"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-8 sm:flex-row sm:space-y-0">
          <div className="flex flex-col space-y-4 text-center sm:flex-row sm:space-x-8 sm:space-y-0">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            {/* Bottom Section <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link> */}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              href="https://www.linkedin.com/company/appify-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-black/80 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://youtube.com/@appifydigital"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-black/80 hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="https://www.instagram.com/appify_digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-black/80 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://tiktok.com/@appify_digital"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-black/80 hover:text-primary"
            >
              <TikTokIcon />
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              href="https://www.facebook.com/appify.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-black/80 hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-black/60">
          © Appify Digital {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
