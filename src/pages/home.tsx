import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@assets/微信图片_20260731073118_336_43_1785454635209.png';

// ─── Data ────────────────────────────────────────────────────────────────────

const products = [
  { id: 1, name: 'Halo Hoop', category: 'Earrings', price: '$1,450', image: '/product-1.jpg' },
  { id: 2, name: 'Cascade Chain', category: 'Necklace', price: '$2,890', image: '/product-2.jpg' },
  { id: 3, name: 'Eternal Band', category: 'Ring', price: '$3,200', image: '/product-3.jpg' },
];

const journalPosts = [
  { id: 1, title: 'The Art of Layering', date: 'March 2024', image: '/journal-1.jpg' },
  { id: 2, title: 'Crafting Heirlooms', date: 'February 2024', image: '/journal-2.jpg' },
  { id: 3, title: 'Gold & Light', date: 'January 2024', image: '/journal-3.jpg' },
];

const stores = [
  {
    id: 1,
    city: 'New York',
    address: '15 West 57th Street\nNew York, NY 10019',
    hours: 'Mon – Sat  10:00 – 19:00\nSun  12:00 – 18:00',
  },
  {
    id: 2,
    city: 'London',
    address: '12 New Bond Street\nLondon W1S 3SA',
    hours: 'Mon – Sat  10:00 – 18:30\nSun  Closed',
  },
  {
    id: 3,
    city: 'Tokyo',
    address: '2-7-9 Ginza, Chuo-ku\nTokyo 104-0061',
    hours: 'Daily  11:00 – 20:00',
  },
];

// ─── Fade-up helper ───────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay } }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const collectionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const journalRef = useRef<HTMLDivElement>(null);
  const storesRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  const collectionInView = useInView(collectionRef, { once: true, margin: '-80px' });
  const aboutInView     = useInView(aboutRef,      { once: true, margin: '-80px' });
  const journalInView   = useInView(journalRef,    { once: true, margin: '-80px' });
  const storesInView    = useInView(storesRef,     { once: true, margin: '-80px' });
  const newsletterInView = useInView(newsletterRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen bg-[#2C1F0E]">
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '62% center',
        }}
      >
        {/* Overlay — darker at bottom to anchor text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, rgba(28,18,8,0.18) 0%, rgba(28,18,8,0.52) 60%, rgba(28,18,8,0.72) 100%)',
          }}
        />

        {/* Hero content */}
        <div className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-end pb-20">
          <motion.h1
            className="text-white font-serif mb-5 leading-none"
            style={{ fontSize: 'clamp(4.5rem, 13vw, 11rem)', letterSpacing: '0.04em' }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4 }}
            data-testid="text-hero-title"
          >
            LUMINA
          </motion.h1>

          <motion.p
            className="text-white/90 text-[11px] tracking-[0.45em] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            data-testid="text-hero-subtitle"
          >
            TIMELESS ELEGANCE. MODERN ESSENCE.
          </motion.p>

          <motion.a
            href="#collection"
            className="inline-block text-white text-[11px] tracking-[0.35em] border-b border-white/60 pb-px hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300 w-fit"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05 }}
            data-testid="link-explore-collection"
          >
            EXPLORE COLLECTION
          </motion.a>

          {/* Bottom labels */}
          <motion.span
            className="absolute bottom-7 left-6 lg:left-12 text-white/60 text-[10px] tracking-[0.35em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            data-testid="text-hero-season"
          >
            SPRING / SUMMER 2024
          </motion.span>
          <motion.span
            className="absolute bottom-7 right-6 lg:right-12 text-white/60 text-[10px] tracking-[0.35em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            data-testid="text-hero-pagination"
          >
            01 — 03
          </motion.span>
        </div>
      </section>

      {/* ── COLLECTION ────────────────────────────────────────────────────── */}
      <section id="collection" ref={collectionRef} className="py-24 lg:py-36 bg-[#F5F0E8]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial="hidden"
            animate={collectionInView ? 'show' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <h2
              className="text-[#2C1F0E] font-serif mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.05em', lineHeight: 1 }}
              data-testid="text-collection-title"
            >
              The Collection
            </h2>
            <p className="text-[#3A2912]/60 text-[11px] tracking-[0.25em]">SPRING / SUMMER 2024</p>
          </motion.div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                className="group cursor-pointer"
                initial="hidden"
                animate={collectionInView ? 'show' : 'hidden'}
                variants={fadeUp}
                custom={i * 0.18}
                data-testid={`card-product-${product.id}`}
              >
                {/* Image with hover overlay */}
                <div className="relative aspect-square overflow-hidden mb-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#2C1F0E]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                    <span className="text-white text-[11px] tracking-[0.35em] border-b border-white/60 pb-px">
                      VIEW PIECE
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-1.5">
                  <p className="text-[#3A2912]/50 text-[10px] tracking-[0.3em]">{product.category}</p>
                  <h3 className="text-[#2C1F0E] font-serif text-xl tracking-wide">{product.name}</h3>
                  <p className="text-[#C9A96E] text-sm tracking-wide">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            animate={collectionInView ? 'show' : 'hidden'}
            variants={fadeUp}
            custom={0.6}
          >
            <a
              href="#collection"
              className="inline-block text-[#2C1F0E] text-[11px] tracking-[0.35em] border-b border-[#2C1F0E] pb-px hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors duration-300"
              data-testid="link-view-all"
            >
              VIEW ALL PIECES
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── LOOKBOOK STRIP ────────────────────────────────────────────────── */}
      <section className="bg-[#1A120A] py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] mb-5">LOOKBOOK 2024</p>
              <h2
                className="text-white font-serif mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.04em', lineHeight: 1.05 }}
              >
                The Art<br />of Gold
              </h2>
              <p className="text-white/55 text-sm leading-relaxed tracking-wide max-w-xs">
                Each season, our artisans translate light and shadow into wearable form. This collection explores the quiet power of precious metal in motion.
              </p>
              <a
                href="#collection"
                className="inline-block mt-8 text-white text-[11px] tracking-[0.35em] border-b border-white/40 pb-px hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                DISCOVER THE LOOKBOOK
              </a>
            </motion.div>

            {/* Right 2×2 image grid */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              {['/product-1.jpg', '/product-2.jpg', '/product-3.jpg', '/about-bg.jpg'].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" ref={aboutRef} className="relative py-24 lg:py-36 bg-[#2C1F0E] overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(/about-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <h2
                className="text-white font-serif mb-8"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.05em', lineHeight: 1 }}
                data-testid="text-about-title"
              >
                About LUMINA
              </h2>
              <div className="space-y-5 text-white/75 text-sm leading-relaxed tracking-wide">
                <p>
                  LUMINA was born from a singular vision: to craft jewelry that transcends trends and becomes part of your story. Each piece is a meditation on form — a balance between weight and air, between tradition and the contemporary moment.
                </p>
                <p>
                  We work with ethically sourced materials and master artisans whose hands have held this craft for generations. Every curve, every clasp, every surface is considered. This is jewelry as architecture — built to last, designed to be inherited.
                </p>
                <p>
                  For those who understand that true luxury is quiet, that elegance needs no announcement.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              {[
                { label: 'CRAFTSMANSHIP', body: 'Every LUMINA piece is handcrafted in our atelier using time-honored techniques passed down through generations of master jewelers.' },
                { label: 'MATERIALS', body: 'We source only the finest ethically mined precious metals and conflict-free stones, ensuring beauty without compromise.' },
                { label: 'LEGACY', body: 'LUMINA jewelry is designed to be treasured and passed down, becoming part of your family\'s story for generations to come.' },
              ].map(({ label, body }) => (
                <div key={label}>
                  <h3 className="text-[#C9A96E] text-[10px] tracking-[0.35em] mb-3">{label}</h3>
                  <p className="text-white/65 text-sm leading-relaxed tracking-wide">{body}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── JOURNAL ───────────────────────────────────────────────────────── */}
      <section id="journal" ref={journalRef} className="py-24 lg:py-36 bg-[#F5F0E8]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial="hidden"
            animate={journalInView ? 'show' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <h2
              className="text-[#2C1F0E] font-serif mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.05em', lineHeight: 1 }}
              data-testid="text-journal-title"
            >
              Journal
            </h2>
            <p className="text-[#3A2912]/60 text-[11px] tracking-[0.25em]">STORIES & INSPIRATION</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {journalPosts.map((post, i) => (
              <motion.article
                key={post.id}
                className="group cursor-pointer"
                initial="hidden"
                animate={journalInView ? 'show' : 'hidden'}
                variants={fadeUp}
                custom={i * 0.18}
                data-testid={`card-journal-${post.id}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[#3A2912]/50 text-[10px] tracking-[0.3em] mb-2">{post.date}</p>
                <h3 className="text-[#2C1F0E] font-serif text-2xl tracking-wide mb-3">{post.title}</h3>
                <a
                  href="#journal"
                  className="inline-block text-[#2C1F0E] text-[11px] tracking-[0.3em] border-b border-transparent hover:border-[#2C1F0E] transition-colors duration-300"
                  data-testid={`link-read-more-${post.id}`}
                >
                  READ MORE
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORES ────────────────────────────────────────────────────────── */}
      <section id="stores" ref={storesRef} className="py-24 lg:py-36 bg-[#2C1F0E]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial="hidden"
            animate={storesInView ? 'show' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <h2
              className="text-white font-serif mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.05em', lineHeight: 1 }}
              data-testid="text-stores-title"
            >
              Visit Our Ateliers
            </h2>
            <p className="text-white/50 text-[11px] tracking-[0.25em]">FLAGSHIP LOCATIONS</p>
          </motion.div>

          {/* Store cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {stores.map((store, i) => (
              <motion.div
                key={store.id}
                className="bg-[#2C1F0E] px-10 py-12 group"
                initial="hidden"
                animate={storesInView ? 'show' : 'hidden'}
                variants={fadeUp}
                custom={i * 0.15}
                data-testid={`card-store-${store.id}`}
              >
                <h3
                  className="text-white font-serif mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '0.04em', lineHeight: 1 }}
                >
                  {store.city}
                </h3>
                <p className="text-white/55 text-[11px] leading-relaxed tracking-wide mb-5 whitespace-pre-line">
                  {store.address}
                </p>
                <p className="text-white/40 text-[10px] leading-relaxed tracking-wide mb-8 whitespace-pre-line">
                  {store.hours}
                </p>
                <a
                  href="#stores"
                  className="text-[#C9A96E] text-[11px] tracking-[0.3em] border-b border-[#C9A96E]/40 pb-px hover:border-[#C9A96E] transition-colors duration-300"
                  data-testid={`link-book-visit-${store.id}`}
                >
                  BOOK A VISIT
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────────────────── */}
      <section ref={newsletterRef} className="py-24 lg:py-32 bg-[#1A120A]">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl text-center">
          <motion.div
            initial="hidden"
            animate={newsletterInView ? 'show' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] mb-6">INNER CIRCLE</p>
            <h2
              className="text-white font-serif mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.04em', lineHeight: 1.05 }}
            >
              Join the Inner Circle
            </h2>
            <p className="text-white/55 text-sm leading-relaxed tracking-wide mb-10">
              Exclusive access to new collections, private events, and the stories behind each piece.
            </p>

            {/* Email form */}
            <form
              className="flex border border-white/20 hover:border-white/40 transition-colors duration-300 mb-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent text-white text-[11px] tracking-wide px-5 py-4 outline-none placeholder:text-white/30"
              />
              <button
                type="submit"
                className="text-[11px] tracking-[0.3em] px-8 py-4 text-white/70 hover:text-[#C9A96E] hover:bg-white/5 transition-all duration-300 border-l border-white/20 shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>

            <p className="text-white/30 text-[10px] tracking-wide">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
