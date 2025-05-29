export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Mads World</h3>
            <p className="text-sm text-gray-400">Database Mondiale Gallerie d'Arte Emergenti</p>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Mads World. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}