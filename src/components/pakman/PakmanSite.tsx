import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/brand/Logo";
import { Intro } from "./Intro";
import { content, type Lang } from "./content";

import { categoryImages, siteImages } from "@/lib/site-images";

const clientLogos = [
  { name: "Subbie", url: siteImages.clients.subbie, transparent: true },
  { name: "Basamh Trading Company", url: siteImages.clients.btc, transparent: false },
  { name: "Tasting Spoon Catering", url: siteImages.clients.tastingSpoon, transparent: false },
  { name: "Evolve", url: siteImages.clients.evolve, transparent: false },
  { name: "Prepd", url: siteImages.clients.prepd, transparent: false },
  { name: "Fornia", url: siteImages.clients.fornia, transparent: false },
  { name: "Circle Section", url: siteImages.clients.circleSection, transparent: false },
];

const workImages = categoryImages;

export function PakmanSite({ lang }: { lang: Lang }) {
  const c = content[lang];
  const isRTL = c.dir === "rtl";
  const [showIntro, setShowIntro] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Per-load intro
  useEffect(() => {
    if (typeof window === "undefined") return;
    const key = "pakman_intro_seen";
    if (sessionStorage.getItem(key)) {
      setShowIntro(false);
    } else {
      sessionStorage.setItem(key, "1");
    }
  }, []);

  // Sticky shrink on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal observer for .reveal elements
  useEffect(() => {
    if (typeof window === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang, showIntro]);

  // Apply dir to <html>
  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    const prevDir = html.getAttribute("dir");
    const prevLang = html.getAttribute("lang");
    html.setAttribute("dir", c.dir);
    html.setAttribute("lang", c.htmlLang);
    return () => {
      if (prevDir) html.setAttribute("dir", prevDir); else html.removeAttribute("dir");
      if (prevLang) html.setAttribute("lang", prevLang); else html.removeAttribute("lang");
    };
  }, [c.dir, c.htmlLang]);

  const fieldClass = "h-12 rounded-none border-0 border-b border-hairline bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground placeholder:text-concrete";
  const labelClass = "text-[10px] uppercase tracking-[0.22em] text-graphite";

  return (
    <div className="min-h-screen bg-charcoal text-canvas" dir={c.dir}>
      {showIntro && <Intro tagline={c.introTagline} onDone={() => setShowIntro(false)} />}

      {/* Nav — fixed; transparent over dark hero, light blur after scroll */}
      <nav
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "backdrop-blur-xl bg-charcoal/85 border-b border-white/8 shadow-[0_4px_24px_-12px_oklch(0_0_0/0.5)]"
            : "bg-transparent border-b border-transparent"
        } text-canvas`}
      >
        <div
          className={`container-x flex items-center justify-between gap-6 transition-all duration-500 ${
            scrolled ? "h-20 md:h-20" : "h-24 md:h-28"
          }`}
        >
          <a href={lang === "en" ? "/" : "/ar"} className="flex items-center">
            <Logo
              className={`w-auto transition-all duration-500 ${scrolled ? "h-12 md:h-14" : "h-16 md:h-20"}`}
              style={{ filter: "invert(1) brightness(2.2)" }}
            />
          </a>
          <div className="hidden lg:flex items-center gap-10 text-sm text-canvas/85">
            <a className="hover:text-champagne transition-colors" href="#about">{c.nav.about}</a>
            <a className="hover:text-champagne transition-colors" href="#products">{c.nav.products}</a>
            <a className="hover:text-champagne transition-colors" href="#solutions">{c.nav.solutions}</a>
            <a className="hover:text-champagne transition-colors" href="#work">{c.nav.work}</a>
            <a className="hover:text-champagne transition-colors" href="#clients">{c.nav.clients}</a>
            <a className="hover:text-champagne transition-colors" href="#contact">{c.nav.contact}</a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={c.nav.switchHref}
              className="text-xs tracking-[0.18em] uppercase text-canvas/80 hover:text-champagne transition-colors"
            >
              {c.nav.switchLang}
            </a>
            <Button size="sm" asChild className="hidden sm:inline-flex bg-canvas text-charcoal hover:bg-champagne">
              <a href="#quote">{c.nav.cta}</a>
            </Button>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center size-11 rounded-full border border-white/30 text-canvas hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-charcoal/95 backdrop-blur-xl border-t border-white/10 ${
            mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container-x py-6 flex flex-col gap-1 text-base">
            {[
              ["#about", c.nav.about],
              ["#products", c.nav.products],
              ["#solutions", c.nav.solutions],
              ["#work", c.nav.work],
              ["#clients", c.nav.clients],
              ["#contact", c.nav.contact],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-3 border-b border-white/10 text-canvas hover:text-champagne transition-colors"
              >
                {label}
              </a>
            ))}
            <Button size="lg" asChild className="mt-6 bg-canvas text-charcoal hover:bg-champagne">
              <a href="#quote" onClick={() => setMobileOpen(false)}>{c.nav.cta}</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero — DARK cinematic, packaging arrangement on the right */}
      <section className="relative overflow-hidden dark-section">
        <div className="container-x relative pt-36 md:pt-44 pb-24 md:pb-32 grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 fade-up">
            <h1 className="display-1 text-canvas">
              {c.hero.title1}
              <br />
              <span className="text-canvas/55">{c.hero.title2}</span>
            </h1>
            <p className="body-lg mt-8 max-w-xl text-canvas/75">{c.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-canvas text-charcoal hover:bg-champagne hover:text-charcoal">
                <a href="#quote">{c.hero.ctaPrimary}</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-canvas/30 text-canvas hover:bg-canvas hover:text-charcoal hover:border-canvas">
                <a href="#products">{c.hero.ctaSecondary}</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_40px_120px_-40px_oklch(0_0_0/0.7)] border border-white/5">
              <img
                src={siteImages.hero}
                alt=""
                width={1920}
                height={1320}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(120deg, oklch(0 0 0 / 0.25), transparent 40%, transparent 60%, oklch(0 0 0 / 0.25))" }}
              />
            </div>
          </div>
        </div>
        <div className="gold-rule absolute bottom-0 inset-x-0 opacity-50" />
      </section>

      {/* Clients — DARK premium cards */}
      <section id="clients" className="dark-section border-y border-white/5">
        <div className="container-x py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12 reveal">
            <div className="lg:col-span-7">
              <h2 className="display-2 text-canvas">{c.clients.title}</h2>
            </div>
            <p className="lg:col-span-5 body-lg text-canvas/70">{c.clients.text}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4">
            {clientLogos.map((l, i) => (
              <div
                key={l.name}
                className="reveal aspect-square flex items-center justify-center rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] hover:border-champagne/40 group overflow-hidden relative"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background:
                    "linear-gradient(155deg, oklch(from var(--charcoal) calc(l + 0.04) c h / 0.6), oklch(from var(--charcoal) l c h / 0.3))",
                  boxShadow: "inset 0 1px 0 0 oklch(from var(--canvas) l c h / 0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "inset 0 1px 0 0 oklch(from var(--canvas) l c h / 0.06), 0 20px 60px -20px oklch(from var(--champagne) l c h / 0.35), 0 0 0 1px oklch(from var(--champagne) l c h / 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "inset 0 1px 0 0 oklch(from var(--canvas) l c h / 0.06)";
                }}
                title={l.name}
              >
                {l.transparent ? (
                  <img
                    src={l.url}
                    alt={l.name}
                    loading="lazy"
                    className="max-h-[55%] max-w-[72%] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                ) : (
                  <div className="w-[78%] aspect-square rounded-xl bg-canvas flex items-center justify-center overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                    <img
                      src={l.url}
                      alt={l.name}
                      loading="lazy"
                      className="max-h-[78%] max-w-[82%] object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — packaging image + dark feature pillars sidebar */}
      <section id="about" className="section-y dark-section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 reveal">
            <div className="lg:col-span-5">
              <h2 className="display-2 text-canvas">{c.about.title}</h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="body-lg text-canvas/75">{c.about.body1}</p>
              <p className="body-lg text-canvas/75">{c.about.body2}</p>
            </div>
          </div>

          <div className="mt-20 grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-8 reveal relative overflow-hidden rounded-2xl border border-white/5" style={{ minHeight: "520px" }}>
              <img src={siteImages.about} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.05]" />
            </div>
            <div className="lg:col-span-4 reveal dark-card p-8 md:p-10 flex flex-col gap-6 justify-between" style={{ minHeight: "520px" }}>
              {[
                { t: lang === "en" ? "Founded in Jeddah, 2024" : "تأسست في جدة عام 2024", d: lang === "en" ? "A Saudi company built for the local hospitality scene." : "شركة سعودية بنيت لخدمة قطاع الضيافة المحلي." },
                { t: lang === "en" ? "Specialized in Food Packaging" : "متخصصون في تغليف الأغذية", d: lang === "en" ? "Restaurants, cafés, bakeries, catering and food brands." : "للمطاعم والمقاهي والمخابز وشركات الإعاشة." },
                { t: lang === "en" ? "Premium Quality Materials" : "خامات بجودة عالية", d: lang === "en" ? "Food safe and finished to a luxury standard." : "آمنة للأغذية وبتشطيب فاخر." },
                { t: lang === "en" ? "Support Idea to Delivery" : "دعم من الفكرة إلى التسليم", d: lang === "en" ? "Design, prototyping, print and reliable supply." : "تصميم ونماذج وطباعة وتوريد موثوق." },
              ].map((f, i) => (
                <div key={f.t} className="flex gap-4 items-start">
                  <span className="mt-1 size-8 rounded-full flex items-center justify-center text-[10px] font-display tracking-[0.18em]" style={{ background: "oklch(from var(--champagne) l c h / 0.18)", color: "var(--champagne)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-canvas text-[15px] leading-tight">{f.t}</h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-canvas/65">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products — DARK luxury grid */}
      <section id="products" className="section-y dark-section relative overflow-hidden">
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end reveal">
            <div className="lg:col-span-8">
              <h2 className="display-2 max-w-3xl text-canvas">{c.products.title}</h2>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <Button asChild variant="outline" className="border-canvas/30 text-canvas hover:bg-canvas hover:text-charcoal hover:border-canvas">
                <a href="#quote">{c.nav.cta}</a>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
            {c.products.list.map((name, i) => (
              <article
                key={name}
                className="reveal group dark-card overflow-hidden"
                style={{ transitionDelay: `${(i % 12) * 40}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={categoryImages[i] ?? categoryImages[categoryImages.length - 1]}
                    alt={name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.10]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-30"
                    style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0 0 0 / 0.55))" }}
                  />
                </div>
                <div className="px-3 py-4 md:px-4 md:py-5 flex items-center justify-between gap-2">
                  <h3 className="font-display text-[13px] md:text-sm leading-tight text-canvas/90 group-hover:text-champagne transition-colors">{name}</h3>
                  <span className="text-[9px] tracking-[0.2em] text-canvas/35 font-display">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="section-y dark-section">
        <div className="container-x">
          <div className="max-w-3xl reveal">
            <h2 className="display-2 text-canvas">{c.solutions.title}</h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {c.solutions.cards.map((card, i) => (
              <div key={card.t} className="reveal dark-card p-10 group" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="font-display text-xs text-champagne tracking-[0.2em]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="heading-lg mt-6 text-canvas group-hover:text-champagne transition-colors">{card.t}</h3>
                <p className="mt-4 text-sm text-canvas/65 leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work / gallery */}
      <section id="work" className="section-y dark-section border-t border-white/5">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-end reveal">
            <div className="lg:col-span-7">
              <h2 className="display-2 text-canvas">{c.work.title}</h2>
            </div>
            <p className="lg:col-span-5 body-lg text-canvas/70">{c.work.text}</p>
          </div>

          <div className="mt-16 grid grid-cols-6 gap-3 md:gap-5">
            <div className="col-span-6 md:col-span-4 relative aspect-[16/10] overflow-hidden rounded-2xl">
              <img src={workImages[15]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="col-span-3 md:col-span-2 relative aspect-square overflow-hidden rounded-2xl">
              <img src={workImages[0]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="col-span-3 md:col-span-2 relative aspect-square overflow-hidden rounded-2xl">
              <img src={workImages[3]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="col-span-3 md:col-span-2 relative aspect-square overflow-hidden rounded-2xl">
              <img src={workImages[2]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-2 relative aspect-square overflow-hidden rounded-2xl">
              <img src={workImages[12]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="col-span-3 md:col-span-3 relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={workImages[5]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="col-span-3 md:col-span-3 relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={workImages[10]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>


      {/* Why */}
      <section className="section-y bg-charcoal text-canvas">
        <div className="container-x grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <h2 className="display-2 text-canvas">{c.why.title}</h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {c.why.points.map((p, i) => (
              <div key={p} className="border-t border-white/15 pt-5 flex gap-5">
                <span className="font-display text-warm-gray text-sm">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="section-y dark-section">
        <div className="container-x grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 reveal">
            <h2 className="display-2 text-canvas">{c.quote.title}</h2>
            <p className="body-lg mt-6 text-canvas/70">{c.quote.text}</p>
          </div>
          <form className="lg:col-span-7 reveal dark-card p-8 md:p-10 space-y-7">
            <div className="grid sm:grid-cols-2 gap-7">
              {[
                ["name", c.quote.fields.name],
                ["company", c.quote.fields.company],
                ["type", c.quote.fields.type],
                ["phone", c.quote.fields.phone],
                ["email", c.quote.fields.email],
                ["qty", c.quote.fields.qty],
              ].map(([id, label]) => (
                <div key={id} className="space-y-2">
                  <Label htmlFor={id} className="text-[10px] uppercase tracking-[0.22em] text-canvas/60">{label}</Label>
                  <Input id={id} className="h-12 rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-canvas focus-visible:ring-0 focus-visible:border-champagne placeholder:text-canvas/30" dir={c.dir} />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="products" className="text-[10px] uppercase tracking-[0.22em] text-canvas/60">{c.quote.fields.products}</Label>
              <Input id="products" className="h-12 rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-canvas focus-visible:ring-0 focus-visible:border-champagne" dir={c.dir} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.22em] text-canvas/60">{c.quote.fields.message}</Label>
              <Textarea id="message" rows={4} dir={c.dir} className="rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-canvas focus-visible:ring-0 focus-visible:border-champagne resize-none" />
            </div>
            <div className={`flex flex-wrap items-center justify-between gap-4 pt-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <p className="text-xs text-canvas/55">{c.quote.note}</p>
              <Button size="lg" type="submit" className="bg-canvas text-charcoal hover:bg-champagne">{c.quote.submit}</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Location — luxury dark map */}
      <section id="location" className="dark-section border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.saudiMap}
            alt=""
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-70"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, var(--charcoal) 0%, oklch(from var(--charcoal) l c h / 0.85) 35%, oklch(from var(--charcoal) l c h / 0.35) 65%, transparent 100%)",
            }}
          />
        </div>
        <div className="container-x section-y relative">
          <div className="max-w-xl reveal">
            <h2 className="display-2 text-canvas">{c.locationSection.title}</h2>
            <p className="body-lg mt-6 text-canvas/75">{c.locationSection.sub}</p>
            <div className="mt-10 dark-card p-8 md:p-10">
              <p className="font-display text-xl text-canvas">{c.locationSection.company}</p>
              <div className="mt-5 space-y-1.5 text-canvas/80 font-display text-base leading-relaxed">
                <p>{c.locationSection.city}</p>
                <p>{c.locationSection.district}</p>
                <p>{c.locationSection.area}</p>
              </div>
              <a
                href={c.locationSection.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-canvas text-charcoal px-7 py-3.5 text-sm font-display tracking-wide hover:bg-champagne transition-colors"
              >
                {c.locationSection.cta}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dark-section border-t border-white/5">
        <div className="container-x section-y grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 reveal">
            <h2 className="display-2 text-canvas">{c.contact.title}</h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">{lang === "en" ? "Location" : "الموقع"}</p>
              <p className="mt-3 font-display text-lg text-canvas">{c.contact.location}</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">{c.contact.phoneLabel}</p>
              <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`} className="mt-3 font-display text-lg block text-canvas hover:text-champagne transition-colors" dir="ltr">{c.contact.phone}</a>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">{c.contact.emailLabel}</p>
              <a href={`mailto:${c.contact.email}`} className="mt-3 font-display text-lg block text-canvas hover:text-champagne transition-colors" dir="ltr">{c.contact.email}</a>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">WhatsApp</p>
              <a
                href={`https://wa.me/${c.contact.phone.replace(/[^0-9]/g, "")}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-display text-lg text-canvas hover:text-champagne transition-colors"
              >
                {c.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-canvas">
        <div className="container-x py-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Logo className="h-16 md:h-20 w-auto" style={{ filter: "invert(1) brightness(2.2)" }} />
            <p className="mt-6 font-display text-xl text-canvas max-w-md">{c.footer.title}</p>
            <p className="mt-4 text-sm text-warm-gray max-w-md leading-relaxed">{c.footer.text}</p>
          </div>
          <div className="lg:col-span-3">
            
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#about", c.nav.about],
                ["#products", c.nav.products],
                ["#solutions", c.nav.solutions],
                ["#work", c.nav.work],
                ["#clients", c.nav.clients],
              ].map(([href, label]) => (
                <li key={href}><a href={href} className="text-warm-gray hover:text-canvas transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            
            <ul className="mt-5 space-y-3 text-sm text-warm-gray">
              <li>{c.contact.location}</li>
              <li dir="ltr">{c.contact.phone}</li>
              <li dir="ltr">{c.contact.email}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-x py-6 flex flex-wrap justify-between gap-3 text-xs text-concrete">
            <span>{c.footer.rights}</span>
            <a href={c.nav.switchHref} className="hover:text-canvas transition-colors">{c.nav.switchLang}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
