import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-safety text-ink hover:bg-safety-dark',
  outline: 'bg-transparent border-2 border-paper text-paper hover:bg-paper hover:text-ink',
  dark: 'bg-ink text-paper hover:bg-steel'
};

function Button({ children, to, href, onClick, type = 'button', variant = 'primary', className = '' }) {
  const baseClass = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-display font-medium tracking-wide text-sm uppercase transition-colors focus-ring ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}

export default Button;
