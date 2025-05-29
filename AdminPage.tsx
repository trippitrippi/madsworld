import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { galleries } from '@/data/galleries';

export function AdminPage() {
  const { isAuthenticated } = useAuth();
  const [pendingCount, setPendingCount] = useState(3);
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Dashboard Amministrativo
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Gallerie Totali</h2>
          <p className="text-3xl font-bold text-amber-700">{galleries.length}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Gallerie in Attesa</h2>
          <p className="text-3xl font-bold text-amber-700">{pendingCount}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Ultima Modifica</h2>
          <p className="text-gray-600">29 Maggio 2025, 03:26</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Gallerie in Attesa di Approvazione</h2>
        </div>
        
        <div className="p-4">
          {pendingCount > 0 ? (
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Nuovo Spazio Arte Milano</h3>
                <p className="text-sm text-gray-600">Milano, Italia</p>
                <div className="flex mt-2">
                  <button className="bg-green-600 text-white px-3 py-1 text-sm rounded mr-2">
                    Approva
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 text-sm rounded mr-2">
                    Rifiuta
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded">
                    Dettagli
                  </button>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Barcelona Arts Project</h3>
                <p className="text-sm text-gray-600">Barcellona, Spagna</p>
                <div className="flex mt-2">
                  <button className="bg-green-600 text-white px-3 py-1 text-sm rounded mr-2">
                    Approva
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 text-sm rounded mr-2">
                    Rifiuta
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded">
                    Dettagli
                  </button>
                </div>
              </div>
              
              <div className="pb-4">
                <h3 className="font-medium text-gray-900">Modern Art Institute</h3>
                <p className="text-sm text-gray-600">Vienna, Austria</p>
                <div className="flex mt-2">
                  <button className="bg-green-600 text-white px-3 py-1 text-sm rounded mr-2">
                    Approva
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 text-sm rounded mr-2">
                    Rifiuta
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded">
                    Dettagli
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Non ci sono gallerie in attesa di approvazione.</p>
          )}
        </div>
      </div>
    </div>
  );
}