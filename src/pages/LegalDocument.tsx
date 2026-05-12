import { useEffect } from "react";
import { Link } from "react-router-dom";
import logoText from "@/assets/logo-text.png";

export type LegalSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: LegalSubsection[];
};

type LegalDocumentProps = {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

const LegalDocument = ({ title, effectiveDate, intro, sections }: LegalDocumentProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-muted/30 text-foreground">
      <div className="mx-4 my-4 rounded-[2rem] overflow-hidden hero-gradient">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-6 md:py-8 flex items-center justify-between gap-4">
          <img src={logoText} alt="Shoflak Klba" className="h-8 object-contain" />
          <Link
            to="/"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Back to home
          </Link>
        </div>

        <main className="max-w-5xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="bg-card/95 backdrop-blur rounded-[2rem] border border-border/40 shadow-card p-6 md:p-10 lg:p-12">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Legal</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mt-3">{title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">Effective Date: {effectiveDate}</p>

            <div className="mt-8 space-y-4 text-base leading-7 text-foreground/80">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-7 text-foreground/80">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-foreground/80">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.subsections?.map((subsection) => (
                    <div key={subsection.title} className="space-y-3 pt-2">
                      <h3 className="font-display text-xl font-semibold tracking-tight">{subsection.title}</h3>

                      {subsection.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-7 text-foreground/80">
                          {paragraph}
                        </p>
                      ))}

                      {subsection.bullets && (
                        <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-foreground/80">
                          {subsection.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LegalDocument;