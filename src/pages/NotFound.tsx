import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-parchment px-6 text-center">
      <div
        className="text-[7rem] font-bold text-forest/10 leading-none select-none mb-4"
        style={{ fontFamily: 'Fraunces, Georgia, serif' }}
      >
        404
      </div>
      <h1 className="text-3xl font-bold text-forest mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
        Page Not Found
      </h1>
      <p className="text-ink/55 text-[15px] mb-8 max-w-sm">
        The page you're looking for doesn't exist — but a great education does. Let's guide you home.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest text-white font-semibold text-[15px]
          hover:bg-forest-hover transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
