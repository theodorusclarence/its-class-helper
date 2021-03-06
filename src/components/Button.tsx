import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({ children, className = '', variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2 px-4 rounded font-bold hover:text-primary-400 animated-underline',
        'border border-gray-600',
        {
          'bg-dark text-white': variant === 'primary',
          'bg-white text-dark border-gray-300 hover:bg-gray-200 hover:text-dark transition-colors':
            variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </button>
  );
}
