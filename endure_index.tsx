import Image from "next/image";
import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { XlLogoBackground } from "@/components/xl-logo-background";
import { Header } from "@/components/header";
import { VideoCta } from "@/components/video-cta";
import eliteTalentSplit from "@/public/elite-talent-split.jpg";

// FIXME: This page needs the latest WhitespaceWrapper and Prose formatting.

export default function HomePage() {
  return (
    <Container>
      <Layout>
        <XlLogoBackground>
          <Header
            headline="Endure Consulting"
            subhead={
              <>
                Integrity. <span className="font-bold">Truth</span>.
                Partnership.
              </>
            }
          />
          <div className="my-16 flex flex-col bg-brand-dark shadow-2xl sm:mt-28 sm:mb-20 sm:flex-row">
            <div className="mx-auto py-14 px-7 sm:max-w-sm sm:py-20 lg:max-w-lg 2xl:max-w-xl">
              <div className="flex flex-col justify-center">
                <h2 className="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Elite Software & Data Engineering Talent Solutions
                </h2>
                <p className="my-4 leading-6 text-brand-gradient">
                  ... It’s what we do best.
                </p>
                <p className="my-4 leading-6 text-brand-gradient">
                  We help companies build and deliver new products and
                  capabilities, enhance existing systems, boost development velocity, and
                  improve operational efficiencies. This help comes in the form
                  of contract engineering talent and team / project-based talent
                  solutions.
                </p>
                <p className="my-4 leading-6 text-brand-gradient">
                  We are known for high-value, <em>effective</em> solutions —
                  that maximize ROI — at the industry’s lowest margins. And
                  there is no catch. In the spirit of taking a stand against the
                  greed-driven industry, we believe in full truth on the pricing
                  model and profit margins of our services. Meaningful
                  partnerships start with trust, so let’s start with being up
                  front and honest.
                </p>
              </div>
            </div>
            <div className="clip-horizontal-left sm:clip-vertical-left relative min-h-[15rem] w-full sm:w-1/2">
              <Image
                priority
                src={eliteTalentSplit}
                alt="Team of programmers working together development Website design and coding technologies in a software develop company office, Coworkers Team concept"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
          <VideoCta />
        </XlLogoBackground>
      </Layout>
    </Container>
  );
}
