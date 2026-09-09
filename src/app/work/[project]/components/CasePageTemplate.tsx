import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ProjectData } from '@/data/projects';
import CaseHero from './CaseHero';
import CaseChallenge from './CaseChallenge';
import CaseApproach from './CaseApproach';
import CaseSolution from './CaseSolution';
import CaseResults from './CaseResults';
import CaseVisualStory from './CaseVisualStory';
import CaseServices from './CaseServices';
import CaseCTA from './CaseCTA';

interface CasePageTemplateProps {
  project: ProjectData;
}

export default function CasePageTemplate({ project }: CasePageTemplateProps) {
  const hasCaseStudy = Boolean(project.challenge || project.approach || project.solution);

  return (
    <>
      <Navbar />
      <main>
        <CaseHero project={project} />
        {project.challenge && (
          <CaseChallenge challenge={project.challenge} image={project.challengeImage} />
        )}
        {project.approach && <CaseApproach steps={project.approach} />}
        {project.solution && (
          <CaseSolution items={project.solution} images={project.solutionImages} />
        )}
        {project.results && project.results.length > 0 && (
          <CaseResults
            results={project.results}
            context={project.resultContext ?? ''}
            style={project.resultsStyle ?? 'metrics'}
          />
        )}
        {project.visualStory && project.visualStory.length > 0 && (
          <CaseVisualStory images={project.visualStory} />
        )}
        {!hasCaseStudy && (
          /* Minimal entry - real project, detailed case notes not yet published */
          <section className="section-canvas section-spacing" aria-label="About this project">
            <div className="container-page">
              <div className="max-w-2xl border-l-2 border-mist pl-8">
                <p className="eyebrow mb-4">About This Entry</p>
                <p
                  className="font-polysans text-graphite mb-4"
                  style={{ fontSize: '22px', letterSpacing: '-0.02em', lineHeight: 1.35 }}
                >
                  {project.description}
                </p>
                <p className="font-inter text-steel leading-relaxed" style={{ fontSize: '16px' }}>
                  This is a summary entry for a delivered project. The full case study - covering
                  the brief, the build and the outcome - is written from source material and shared
                  during conversations. Ask us about it via the contact page.
                </p>
              </div>
            </div>
          </section>
        )}
        <CaseServices services={project.services} />
        <CaseCTA title={project.title} industry={project.industry} />
      </main>
      <Footer />
    </>
  );
}
