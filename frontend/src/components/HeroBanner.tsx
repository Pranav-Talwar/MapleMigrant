/*  HeroBanner.tsx  */
import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

export default function HeroBanner({ title, subtitle }: Props) {
  return (
    <section className="relative w-full h-[260px] md:h-[340px] overflow-hidden">
      {/* background image  */}
      <img
        src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/toronto-header.jpg?ssl=1"
        alt="Canada flag"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* darken / blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* centered text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
