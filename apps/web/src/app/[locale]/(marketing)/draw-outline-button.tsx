'use client';

export const DrawOutlineButton = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <button
      {...rest}
      className="text-background/70 hover:text-background group relative mb-4 w-full border px-4 py-2 font-medium transition-colors duration-[400ms] md:mb-0 md:w-auto"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="bg-background absolute left-0 top-0 h-[2px] w-0 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="bg-background absolute right-0 top-0 h-0 w-[2px] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="bg-background absolute bottom-0 right-0 h-[2px] w-0 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="bg-background absolute bottom-0 left-0 h-0 w-[2px] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};
