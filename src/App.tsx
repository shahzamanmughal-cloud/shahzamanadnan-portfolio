import { Routes, Route } from 'react-router-dom';
import { useLenis } from '@/hooks/useLenis';
import { BlueprintBackground } from '@/components/layout/BlueprintBackground';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

export default function App() {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <BlueprintBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
