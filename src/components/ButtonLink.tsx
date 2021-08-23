import clsx from 'clsx';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

type ButtonLinkProps = {
  variant?: 'primary' | 'secondary';
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'py-2 inline-block px-4 rounded font-bold hover:text-primary-400 animated-underline',
        'border border-gray-600',
        {
          'bg-dark text-white': variant === 'primary',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark transition-colors':
            variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
