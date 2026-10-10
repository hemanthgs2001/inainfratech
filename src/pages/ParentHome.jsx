
import { useEffect, useState } from "react";

import {
  ArrowRight,
  Building2,
  Code2,
  Users,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Calendar,
  CheckCircle2,
  HardHat,
  Menu,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";

const constructionUrl = "/construction";
const softwareUrl = "https://software.inainfratech.com";
const logoUrl = "/ina.png";

// HERO SLIDESHOW IMAGES
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=2000&q=90",
    alt: "Construction site and structural development",
    position: "center"
  },
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
    alt: "Modern commercial buildings and architecture",
    position: "center"
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=90",
    alt: "Software development workspace",
    position: "center"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=90",
    alt: "Technology professionals collaborating",
    position: "center"
  }
];

// BUSINESS CARD IMAGES
const constructionCardImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90";

const softwareCardImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=90";

const constructionOverviewImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=85";

const softwareOverviewImage =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=85";

// COMPANY STRENGTHS
const strengths = [
  {
    icon: Users,
    title: "Integrated Expertise",
    description: "A unique combination of construction and technology."
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "Modern solutions for a changing world."
  },
  {
    icon: ShieldCheck,
    title: "Quality & Trust",
    description: "Commitment to excellence in everything we do."
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Building a better and smarter tomorrow."
  }
];

// COMPANY STATISTICS
// Replace illustrative figures with verified company figures.
const stats = [
  { icon: Calendar, value: "100+", label: "Projects Delivered" },
  { icon: CheckCircle2, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: HardHat, value: "2", label: "Business Verticals" }
];

// CONSTRUCTION SERVICES
const constructionServices = [
  "Residential Construction",
  "Commercial Construction",
  "Road & Highway Infrastructure",
  "Industrial Projects",
  "Renovation & Interiors"
];

function ParentHome() {
  const [activeImage, setActiveImage] = useState(0);

  // Change hero background every five seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10">

          {/* COMPANY LOGO AND NAME */}
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <img
              src="INA.png"
              alt="INA Logo"
              className="h-36 w-16 shrink-0 object-contain sm:h-30 sm:w-20"
            />

            <span className="whitespace-nowrap text-sm font-bold tracking-wide text-white sm:text-base lg:text-lg">
              INA <span className="text-amber-400">INFRATECH</span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-6 text-sm font-medium text-white lg:flex xl:gap-7">

            <a href="#home" className="border-b-2 border-amber-400 pb-2">
              Home
            </a>

            <a href="#about" className="transition hover:text-amber-400">
              About Us
            </a>

            <a href="#businesses" className="transition hover:text-amber-400">
              Our Businesses
            </a>

            <a
              href={`${constructionUrl}/projects`}
              className="transition hover:text-amber-400"
            >
              Projects
            </a>

            <a href="#contact" className="transition hover:text-amber-400">
              Contact
            </a>

          </div>

          {/* GET IN TOUCH */}
          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 xl:flex"
          >
            Get in Touch
            <ArrowRight size={17} />
          </a>

          {/* MOBILE NAVIGATION SHORTCUT */}
          <a
            href="#businesses"
            aria-label="Explore our businesses"
            className="text-white lg:hidden"
          >
            <Menu size={27} />
          </a>

        </nav>
      </header>

      {/* HERO SECTION WITH IMAGE SLIDESHOW */}
      <section
        id="home"
        className="relative isolate flex min-h-[590px] items-center justify-center overflow-hidden bg-slate-950 pb-36 pt-32 sm:min-h-[620px] lg:min-h-[530px] lg:pb-28 lg:pt-24"
      >

        {heroImages.map((image, index) => (
          <div
            key={image.url}
            role="img"
            aria-label={image.alt}
            className={`absolute inset-0 bg-cover transition-opacity duration-1000 ease-in-out ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image.url}")`,
              backgroundPosition: image.position,
              zIndex: 0
            }}
          />
        ))}

        {/* LIGHT IMAGE OVERLAYS */}
        <div className="absolute inset-0 z-[1] bg-slate-950/25" />

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/30 via-slate-950/35 to-slate-950/30" />

        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/25" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center sm:px-8">

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[58px]">
            Building a
            <span className="block text-amber-400">
              Smarter Tomorrow
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white sm:text-base sm:leading-7">
            INAINFRATECH brings together construction excellence
            and innovative technology solutions to create a better,
            smarter and more connected future.
          </p>

          <a
            href="#businesses"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 sm:mt-7 sm:px-7 sm:py-3.5"
          >
            Explore Our Businesses
            <ArrowRight size={18} />
          </a>

          {/* SLIDESHOW INDICATORS */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {heroImages.map((image, index) => (
              <button
                key={image.url}
                type="button"
                aria-label={`Show image ${index + 1}: ${image.alt}`}
                aria-pressed={activeImage === index}
                onClick={() => setActiveImage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? "w-7 bg-amber-400"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* BUSINESS CARDS */}
      <section
        id="businesses"
        className="relative z-10 mx-auto -mt-16 max-w-6xl px-5 sm:-mt-20 sm:px-8 lg:-mt-28 lg:px-10"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* CONSTRUCTION CARD */}
          <a
            href={constructionUrl}
            className="group relative flex min-h-[220px] items-center overflow-hidden rounded-2xl border border-amber-400/80 bg-slate-950 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl sm:min-h-[230px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url("${constructionCardImage}")` }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/55 via-amber-950/40 to-slate-950/35" />

            <div className="relative z-10 w-full px-6 py-7 text-center sm:px-8">

              <Building2 size={38} className="mx-auto mb-3 text-amber-400" />

              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Construction Services
              </h2>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white">
                Building spaces that inspire and last for generations.
              </p>

              <span className="mt-4 inline-flex items-center gap-3 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition group-hover:bg-amber-300">
                Explore Construction
                <ArrowRight size={17} />
              </span>

            </div>
          </a>

          {/* IT SOLUTIONS CARD */}
          <a
            href={softwareUrl}
            className="group relative flex min-h-[220px] items-center overflow-hidden rounded-2xl border border-sky-500/80 bg-slate-950 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl sm:min-h-[230px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url("${softwareCardImage}")` }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/40 to-sky-950/30" />

            <div className="relative z-10 w-full px-6 py-7 text-center sm:px-8">

              <Code2 size={38} className="mx-auto mb-3 text-sky-400" />

              <h2 className="text-xl font-bold text-white sm:text-2xl">
                IT Solutions
              </h2>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white">
                Innovative software solutions to drive your business forward.
              </p>

              <span className="mt-4 inline-flex items-center gap-3 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-sky-400">
                Explore IT Solutions
                <ArrowRight size={17} />
              </span>

            </div>
          </a>

        </div>
      </section>

      {/* COMPANY STRENGTHS */}
      <section
        id="about"
        className="px-5 pb-12 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-7"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Two Strengths. One Vision.
            </h2>

            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-amber-500" />

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
              From constructing world-class infrastructure to delivering
              cutting-edge digital solutions, INAINFRATECH combines
              expertise and innovation to create lasting value.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4 lg:gap-7">

            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="text-center">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-amber-600/70 text-amber-700 sm:h-14 sm:w-14">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-3 text-sm font-bold sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[230px] text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* STATISTICS STRIP */}
      <section className="relative overflow-hidden bg-slate-950 py-7 sm:py-8">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85')"
          }}
        />

        <div className="absolute inset-0 bg-slate-950/40" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-7 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">

          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">

              <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {stat.value}
              </div>

              <p className="mt-1 text-xs text-slate-100 sm:text-sm">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* OUR BUSINESSES */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-7 text-center">

            <h2 className="text-2xl font-bold sm:text-3xl">
              Our Businesses
            </h2>

            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-amber-500" />

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* CONSTRUCTION OVERVIEW */}
            <a
              href={constructionUrl}
              className="group flex min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={constructionOverviewImage}
                alt="Modern residential construction project"
                loading="lazy"
                className="w-28 shrink-0 object-cover sm:w-36"
              />

              <div className="flex flex-1 items-center gap-3 p-4 sm:p-5">

                <div className="min-w-0 flex-1">

                  <h3 className="text-sm font-bold sm:text-base">
                    Construction Services
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
                    Residential, commercial and industrial construction
                    with a focus on quality and sustainability.
                  </p>

                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-700 text-white transition group-hover:bg-amber-500">
                  <ArrowRight size={18} />
                </span>

              </div>
            </a>

            {/* IT SOLUTIONS OVERVIEW */}
            <a
              href={softwareUrl}
              className="group flex min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={softwareOverviewImage}
                alt="Technology professionals collaborating"
                loading="lazy"
                className="w-28 shrink-0 object-cover sm:w-36"
              />

              <div className="flex flex-1 items-center gap-3 p-4 sm:p-5">

                <div className="min-w-0 flex-1">

                  <h3 className="text-sm font-bold sm:text-base">
                    IT Solutions
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
                    Custom software development, IT consulting and
                    digital transformation for modern businesses.
                  </p>

                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white transition group-hover:bg-sky-500">
                  <ArrowRight size={18} />
                </span>

              </div>
            </a>

          </div>
        </div>
      </section>

      {/* COMPACT FOOTER */}
      <footer id="contact" className="scroll-mt-0 bg-[#142131] text-white">

        {/* FOUR COLUMNS WITH REDUCED PADDING AND GAPS */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-x-8 gap-y-6 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4 lg:px-10 lg:py-7">

          {/* COLUMN 1: COMPANY INFORMATION */}
        
{/* COLUMN 1: COMPANY INFORMATION */}
<div className="min-w-0">

  <a href="#home" className="inline-flex items-center gap-2.5">
    <img
      src="/INA.png"
      alt="INA Logo"
      className="h-22 w-22 shrink-0 object-contain sm:h-24 sm:w-24"
    />

    <span className="text-sm font-bold tracking-wide">
      INA <span className="text-amber-400">INFRATECH</span>
    </span>
  </a>

  <p className="mt-0 max-w-xs text-sm leading-5 text-slate-300">
    Bringing together construction excellence and innovative
    software solutions to build a smarter future.
  </p>

  {/* SOCIAL LINKS */}
  <div className="mt-3 flex gap-2">
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
      className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-200 transition hover:bg-amber-500 hover:text-slate-950"
    >
      <Facebook size={16} />
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-200 transition hover:bg-amber-500 hover:text-slate-950"
    >
      <Instagram size={16} />
    </a>

    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-200 transition hover:bg-amber-500 hover:text-slate-950"
    >
      <Linkedin size={16} />
    </a>

    <a
      href="https://twitter.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Twitter"
      className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-200 transition hover:bg-amber-500 hover:text-slate-950"
    >
      <Twitter size={16} />
    </a>
  </div>

</div>


          {/* COLUMN 2: QUICK LINKS */}
          <div className="min-w-0">

            <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-slate-300">

              <li>
                <a href="#home" className="transition hover:text-amber-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-amber-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#businesses" className="transition hover:text-amber-400">
                  Our Businesses
                </a>
              </li>

              <li>
                <a
                  href={`${constructionUrl}/projects`}
                  className="transition hover:text-amber-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-amber-400">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="min-w-0">

            <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              Services
            </h3>

            <ul className="space-y-2 text-sm leading-5 text-slate-300">

              {constructionServices.map((service) => (
                <li key={service}>
                  <a
                    href={constructionUrl}
                    className="transition hover:text-amber-400"
                  >
                    {service}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href={softwareUrl}
                  className="transition hover:text-amber-400"
                >
                  Software Development
                </a>
              </li>

              <li>
                <a
                  href={softwareUrl}
                  className="transition hover:text-amber-400"
                >
                  IT Consulting
                </a>
              </li>

            </ul>

          </div>

          {/* COLUMN 4: CONTACT DETAILS */}
          <div className="min-w-0">

            <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              Contact
            </h3>

            {/* OFFICE ADDRESS */}
            <div className="flex items-start gap-2.5">

              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-amber-500"
              />

              <address className="break-words text-sm not-italic leading-5 text-slate-300">
                Floor No.: 1st Floor
                <br />
                Building No./Flat No.: No. 8
                <br />
                Road/Street: 1st Main, III Cross
                <br />
                PF Office Road
                <br />
                Dasanayakanahalli Palya,
                <br />
                Goraguntepalya
                <br />
                Bengaluru Urban, Karnataka
                <br />
                PIN Code: 560022
              </address>

            </div>

            {/* PHONE */}
            <a
              href="tel:9686000021"
              className="mt-3 flex items-center gap-2.5 text-sm text-slate-300 transition hover:text-amber-400"
            >
              <Phone size={16} className="shrink-0 text-amber-500" />
              <span>9686000021</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:inainfratech@gmail.com"
              className="mt-2 flex items-start gap-2.5 text-sm text-slate-300 transition hover:text-amber-400"
            >
              <Mail size={16} className="mt-0.5 shrink-0 text-amber-500" />
              <span className="break-all">inainfratech@gmail.com</span>
            </a>

          </div>

        </div>

        {/* COMPACT COPYRIGHT BAR */}
        <div className="border-t border-white/10">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-3 text-center sm:flex-row sm:px-8 lg:px-10">

            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} INAINFRATECH. All rights reserved.
            </p>

            <a
              href="#home"
              className="text-xs text-slate-400 transition hover:text-amber-400"
            >
              Back to top ↑
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}

export default ParentHome;
