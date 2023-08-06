import { PropsWithChildren } from "react";

export const XlLogoBackground = ({ children }: PropsWithChildren) => (
  <div className="bg-logo bg-cover bg-fixed bg-left-top bg-no-repeat">
    {children}
  </div>
);
