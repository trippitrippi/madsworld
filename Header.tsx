import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/images/logo.jpg" 
            alt="Mads World Logo" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-gray-900">Mads World</span>
          <span className="text-sm text-gray-500 hidden sm:inline-block">Database Mondiale Gallerie d'Arte Emergenti</span>
        </Link>
        
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/statistiche" className="text-gray-600 hover:text-gray-900">
                Statistiche
              </Link>
            </li>
            <li>
              <Link to="/proponi-galleria" className="text-gray-600 hover:text-gray-900">
                Proponi Galleria
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <button 
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link 
                  to="/login" 
                  className="bg-amber-700 hover:bg-amber-800 text-white px-3 py-1 rounded text-sm"
                >
                  Admin Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}