import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  icon?: ReactNode;
  download?: boolean;
  target?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit';
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-scalpel text-paper shadow-glow hover:bg-scalpel-bright hover:shadow-glow-lg',
  secondary:
    'bg-transparent text-paper border border-ink-500 hover:border-scalpel-bright hover:text-scalpel-bright',
  ghost: 'bg-transparent text-ink-300 hover:text-paper',
};

/**
 * A single, reusable button used across the whole site (Hero CTAs, forms,
 * project links, etc). Keeping every button here means one place to tweak
 * the interaction feel.
 */
export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  download,
  target,
  ariaLabel,
  type = 'button',
}: ButtonProps) {
  const classes = `group relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium tracking-wide transition-all duration-300 ${variantClasses[variant]}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
