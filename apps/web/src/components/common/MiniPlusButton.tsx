import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface Props {
  href?: string;
  onClick?: () => void;

  className?: string;
}

const MiniPlusButton = ({ href, onClick, className }: Props) => {
  if (href)
    return (
      <Link
        href={href}
        className={`group flex items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-800/70 p-1 transition hover:bg-zinc-800 ${className}`}
      >
        <PlusIcon className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-300" />
      </Link>
    );

  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-800/70 p-1 transition hover:bg-zinc-800 ${className}`}
    >
      <PlusIcon className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-300" />
    </button>
  );
};

export default MiniPlusButton;