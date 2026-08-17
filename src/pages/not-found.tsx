import { Link } from 'wouter';
import Navigation from '@/components/Navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2C1F0E] flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1
            className="text-white font-serif mb-6"
            style={{
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              lineHeight: '1',
              letterSpacing: '0.05em',
            }}
            data-testid="text-404-title"
          >
            404
          </h1>
          <p className="text-white/80 text-sm tracking-[0.3em] mb-8">
            PAGE NOT FOUND
          </p>
          <p className="text-white/60 text-sm leading-relaxed tracking-wide mb-12 max-w-md mx-auto">
            The page you are looking for does not exist. It may have been moved or
            deleted.
          </p>
          <Link
            href="/"
            className="inline-block text-white text-xs tracking-[0.3em] border border-white px-12 py-4 hover:bg-white hover:text-[#2C1F0E] transition-all duration-300"
            data-testid="link-return-home"
          >
            RETURN HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
