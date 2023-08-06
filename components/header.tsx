import { PropsWithChildren, ReactNode } from "react";

type HeaderProps = {
  headline: string;
  subhead: ReactNode;
};

export const Header = ({
  children,
  headline,
  subhead,
}: PropsWithChildren<HeaderProps>) => (
  <div className="mx-auto mt-14 max-w-7xl px-4 pt-16 sm:mt-16 sm:px-6 sm:pt-24">
    <div className="text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 xxs:text-6xl md:text-7xl">
        {headline}
      </h1>
      <h2 className="mt-1 text-2xl font-light tracking-tighter text-gray-900 xxs:text-3xl md:text-4xl">
        {subhead}
      </h2>
      {children && (
        <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          {children}
        </p>
      )}
    </div>
  </div>
);
