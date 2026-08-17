import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A120A] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white text-lg font-serif tracking-[0.3em] mb-3 block">
              LUMINA
            </Link>
            <p className="text-white/50 text-[11px] leading-relaxed tracking-wide mb-6">
              Timeless elegance. Modern essence.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 text-[11px] tracking-[0.2em] hover:text-white/80 transition-colors" data-testid="link-social-ig">IG</a>
              <span className="text-white/20 text-[11px]">—</span>
              <a href="#" className="text-white/40 text-[11px] tracking-[0.2em] hover:text-white/80 transition-colors" data-testid="link-social-pt">PT</a>
              <span className="text-white/20 text-[11px]">—</span>
              <a href="#" className="text-white/40 text-[11px] tracking-[0.2em] hover:text-white/80 transition-colors" data-testid="link-social-wb">WB</a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white text-[11px] tracking-[0.28em] mb-6">SHOP</h3>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Rings', 'Bracelets'].map((item) => (
                <li key={item}>
                  <a href="/#collection" className="text-white/50 text-[11px] tracking-wide hover:text-white transition-colors" data-testid={`link-footer-${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white text-[11px] tracking-[0.28em] mb-6">ABOUT</h3>
            <ul className="space-y-3">
              {[
                { label: 'Our Story', href: '/#about' },
                { label: 'Journal', href: '/#journal' },
                { label: 'Stores', href: '/#stores' },
                { label: 'Contact', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/50 text-[11px] tracking-wide hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white text-[11px] tracking-[0.28em] mb-6">CUSTOMER CARE</h3>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Jewelry Care', 'Sizing Guide', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 text-[11px] tracking-wide hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[11px] tracking-wide">
            © {currentYear} LUMINA. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/30 text-[11px] tracking-wide hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-[11px] tracking-wide hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
