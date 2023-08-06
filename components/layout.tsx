import { PropsWithChildren } from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LinkedInSvg } from "./svg/linkedin-svg";

type LayoutProps = {
  hasTranslucentFooter?: boolean;
};

export const Layout = ({
  children,
  hasTranslucentFooter = false,
}: PropsWithChildren<LayoutProps>) => (
  <main className="bg-gradient-to-b from-gray-50 to-brand-gradient">
    <div className="relative">
      <Nav />
      {children}
    </div>
    <Footer hasTranslucentFooter={hasTranslucentFooter}>
      <p>&copy; {new Date().getFullYear()} | Endure Consulting</p>
      <p>
        <Link href="/agreements-and-terms">
          <a className="text-xs underline">Agreements and Terms</a>
        </Link>
      </p>
      <p className="mt-4">
        <a href="https://www.linkedin.com/company/endureconsulting">
          <span className="sr-only">LinkedIn</span>
          <LinkedInSvg className="m-auto h-6 w-6" />
        </a>
      </p>
    </Footer>
  </main>
);
