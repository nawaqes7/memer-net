import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-['Cairo',sans-serif] text-gray-900 ltr:text-left rtl:text-right" dir="rtl">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
        <BreakingNews />
        <HeroSection />
        <MainContent />
      </main>

      <Footer />
    </div>
  );
}

export default App;