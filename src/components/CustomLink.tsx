import clsx from 'clsx';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'inline-flex items-center font-bold text-primary-400 animated-underline',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
