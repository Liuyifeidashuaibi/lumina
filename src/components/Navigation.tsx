import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'COLLECTION', href: '/#collection' },
    { label: 'ABOUT', href: '/#about' },
    { label: 'JOURNAL', href: '/#journal' },
    { label: 'STORES', href: '/#stores' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(26, 18, 10, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-sm font-serif tracking-[0.35em]">
            LUMINA
          </Link>

          {/* Desktop Center Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/85 text-[11px] tracking-[0.28em] hover:text-white transition-colors relative group"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/70 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              className="text-white/85 text-[11px] tracking-[0.28em] hover:text-white transition-colors"
              data-testid="button-search"
            >
              SEARCH
            </button>
            <button
              className="text-white/85 text-[11px] tracking-[0.28em] hover:text-white transition-colors"
              data-testid="button-account"
            >
              ACCOUNT
            </button>
            <button
              className="text-white/85 text-[11px] tracking-[0.28em] hover:text-white transition-colors"
              data-testid="button-cart"
            >
              CART (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
            style={{ background: 'rgba(26, 18, 10, 0.97)', backdropFilter: 'blur(12px)' }}
          >
            <div className="container mx-auto px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/85 text-xs tracking-[0.28em] hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex gap-8">
                <button className="text-white/85 text-xs tracking-[0.25em] hover:text-white transition-colors" data-testid="button-mobile-search">SEARCH</button>
                <button className="text-white/85 text-xs tracking-[0.25em] hover:text-white transition-colors" data-testid="button-mobile-account">ACCOUNT</button>
                <button className="text-white/85 text-xs tracking-[0.25em] hover:text-white transition-colors" data-testid="button-mobile-cart">CART (0)</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
