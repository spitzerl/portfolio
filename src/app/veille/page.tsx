import { Timeline } from '@/components/Timeline';

export default function VeillePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Veille Technologique Web
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Découvrez les évolutions majeures des technologies web depuis septembre 2023.
          Cette frise chronologique présente les innovations et mises à jour importantes
          qui façonnent l'avenir du développement web.
        </p>
        <Timeline />
      </div>
    </main>
  );
} 