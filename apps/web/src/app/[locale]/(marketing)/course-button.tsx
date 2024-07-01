import { cn } from '@/lib/utils';

export const DottedButton = ({
  children,
  className,
  isDark = false,
  forceLight = false,
}: {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
  forceLight?: boolean;
}) => {
  return (
    <button
      className={cn(
        'flex flex-col items-center justify-center gap-4 rounded-lg border-2 px-6 py-3 text-center font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none',
        forceLight
          ? 'border-black bg-white text-black'
          : 'border-foreground bg-background text-foreground',
        isDark
          ? 'hover:shadow-[4px_4px_0px_white] dark:hover:shadow-[4px_4px_0px_black]'
          : 'hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white]',
        className
      )}
    >
      {children}
    </button>
  );
};
