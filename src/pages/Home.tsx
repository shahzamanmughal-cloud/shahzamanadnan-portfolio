import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { EducationTimeline } from '@/components/sections/EducationTimeline';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Achievements } from '@/components/sections/Achievements';
import { Journey } from '@/components/sections/Journey';
import { Services } from '@/components/sections/Services';
import { Technologies } from '@/components/sections/Technologies';
import { GithubStats } from '@/components/sections/GithubStats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EducationTimeline />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Journey />
      <Services />
      <Technologies />
      <GithubStats />
      <Testimonials />
      <Contact />
    </>
  );
}
