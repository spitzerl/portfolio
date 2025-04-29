import { Timeline } from '@/components/Timeline';
import { Navbar } from '@/components/Navbar';

export default function VeillePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <Navbar />
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Veille Technologique Web
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Découvrez les évolutions majeures des technologies web depuis septembre 2023.
        </p>
        <Timeline />
      </div>
    </main>
  );
} 