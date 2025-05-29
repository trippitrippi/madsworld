import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';
import { GalleryCard } from '@/components/GalleryCard';
import { galleries, continents, countries, cities, galleryTypes, Gallery } from '@/data/galleries';

// Google Maps API key
const googleMapsApiKey = 'AIzaSyBWXNE96Eb23e16DCw7Zfb9rkYwxRiTUfQ';

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

const defaultCenter = {
  lat: 30,
  lng: 0
};

// Options for marker clusterer
const clustererOptions = {
  imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
  maxZoom: 15,
  zoomOnClick: true,
  averageCenter: true,
  minimumClusterSize: 3
};

export function HomePage() {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [filteredGalleries, setFilteredGalleries] = useState<Gallery[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [galleriesPerPage] = useState(24); // Increased from 9 to 24
  const [selectedMarker, setSelectedMarker] = useState<Gallery | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(galleries.length);
  
  const [filters, setFilters] = useState({
    continent: '',
    country: '',
    city: '',
    type: '',
    search: ''
  });
  
  // Memoized filter function for better performance
  const applyFilters = useCallback((page = 1) => {
    setIsLoading(true);
    
    // Use setTimeout to prevent UI freezing with large dataset
    setTimeout(() => {
      let result = galleries;
      
      // Apply filters
      if (filters.continent) {
        result = result.filter(gallery => gallery.continent === filters.continent);
      }
      
      if (filters.country) {
        result = result.filter(gallery => gallery.country === filters.country);
      }
      
      if (filters.city) {
        result = result.filter(gallery => gallery.city === filters.city);
      }
      
      if (filters.type) {
        result = result.filter(gallery => gallery.type === filters.type);
      }
      
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        result = result.filter(gallery => 
          gallery.name.toLowerCase().includes(searchLower) || 
          (gallery.description && gallery.description.toLowerCase().includes(searchLower))
        );
      }
      
      setTotalCount(result.length);
      
      // Calculate pagination
      const indexOfLastGallery = page * galleriesPerPage;
      const indexOfFirstGallery = indexOfLastGallery - galleriesPerPage;
      
      // Only slice the galleries needed for the current page
      const paginatedResult = result.slice(indexOfFirstGallery, indexOfLastGallery);
      setFilteredGalleries(paginatedResult);
      setIsLoading(false);
    }, 0);
  }, [filters, galleriesPerPage]);
  
  // Apply filters when filters change
  useEffect(() => {
    setCurrentPage(1); // Reset to first page when filters change
    applyFilters(1);
  }, [filters, applyFilters]);
  
  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    applyFilters(page);
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [applyFilters]);
  
  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const resetFilters = () => {
    setFilters({
      continent: '',
      country: '',
      city: '',
      type: '',
      search: ''
    });
  };
  
  // Calculate total pages
  const totalPages = Math.ceil(totalCount / galleriesPerPage);
  
  // Generate page numbers with ellipsis for large page counts
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtonCount = 7; // Maximum number of page buttons to show
    
    if (totalPages <= maxPageButtonCount) {
      // Show all pages if there are fewer than maxPageButtonCount
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Show ellipsis or page numbers
      if (currentPage > 3) {
        pageNumbers.push('...');
      }
      
      // Show current page and surrounding pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Show ellipsis or page numbers
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  // Map center based on filtered galleries
  const mapCenter = useMemo(() => {
    // For performance with large datasets, use preset centers based on continent filter
    if (filters.continent) {
      switch (filters.continent) {
        case 'Europa':
          return { lat: 48, lng: 10 };
        case 'Asia Pacifico':
          return { lat: 30, lng: 120 };
        case 'Nord America':
          return { lat: 40, lng: -100 };
        case 'Sud America':
          return { lat: -20, lng: -60 };
        case 'Africa':
          return { lat: 5, lng: 20 };
        case 'Medio Oriente':
          return { lat: 30, lng: 40 };
        default:
          break;
      }
    }
    
    // If country filter is applied, use country-specific centers
    if (filters.country) {
      // Add some common country centers
      const countryCenters: Record<string, { lat: number, lng: number }> = {
        'Italia': { lat: 42, lng: 12 },
        'Germania': { lat: 51, lng: 10 },
        'Francia': { lat: 47, lng: 2 },
        'Regno Unito': { lat: 54, lng: -2 },
        'Spagna': { lat: 40, lng: -3 },
        'Stati Uniti': { lat: 37, lng: -95 },
        'Giappone': { lat: 36, lng: 138 },
        'Cina': { lat: 35, lng: 105 },
        'Australia': { lat: -25, lng: 135 },
        'Brasile': { lat: -10, lng: -55 }
      };
      
      if (countryCenters[filters.country]) {
        return countryCenters[filters.country];
      }
    }
    
    // Default center if no specific filters or for small datasets
    if (totalCount < 100) {
      const validGalleries = galleries
        .filter(gallery => 
          gallery.latitude && 
          gallery.longitude && 
          (filters.continent ? gallery.continent === filters.continent : true) &&
          (filters.country ? gallery.country === filters.country : true) &&
          (filters.city ? gallery.city === filters.city : true) &&
          (filters.type ? gallery.type === filters.type : true)
        )
        .slice(0, 100); // Limit to first 100 for performance
      
      if (validGalleries.length > 0) {
        const totalLat = validGalleries.reduce(
          (sum, gallery) => sum + (gallery.latitude || 0), 
          0
        );
        
        const totalLng = validGalleries.reduce(
          (sum, gallery) => sum + (gallery.longitude || 0), 
          0
        );
        
        return {
          lat: totalLat / validGalleries.length,
          lng: totalLng / validGalleries.length
        };
      }
    }
    
    return defaultCenter;
  }, [filters.continent, filters.country, filters.city, totalCount]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Database Mondiale Gallerie d'Arte Emergenti
          </h1>
          <p className="text-gray-600">
            {filteredGalleries.length} gallerie trovate
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex">
          <button 
            onClick={() => setView('list')}
            className={`px-3 py-1 rounded-l text-sm ${
              view === 'list' 
                ? 'bg-amber-700 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Elenco Gallerie
          </button>
          <button 
            onClick={() => setView('map')}
            className={`px-3 py-1 rounded-r text-sm ${
              view === 'map' 
                ? 'bg-amber-700 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Mappa
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Cerca gallerie..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          
          <div>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={filters.continent}
              onChange={(e) => handleFilterChange('continent', e.target.value)}
            >
              <option value="">Continente</option>
              {continents.map(continent => (
                <option key={continent} value={continent}>{continent}</option>
              ))}
            </select>
          </div>
          
          <div>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={filters.country}
              onChange={(e) => handleFilterChange('country', e.target.value)}
            >
              <option value="">Paese</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          
          <div>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={filters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
            >
              <option value="">Città</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          
          <div>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">Tipo di Spazio</option>
              {galleryTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button
            onClick={resetFilters}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded text-sm"
          >
            Reset Filtri
          </button>
        </div>
      </div>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-center my-12">
          <div className="inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Caricamento in corso...
          </div>
        </div>
      )}
      
      {!isLoading && view === 'list' ? (
        <>
          {/* Gallery count and result summary */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <p className="text-gray-700">
              {totalCount > 0 ? (
                <>
                  Mostrando <span className="font-semibold">{Math.min(galleriesPerPage, totalCount)}</span> di <span className="font-semibold">{totalCount}</span> gallerie
                  {filters.continent && <span> in <span className="font-semibold">{filters.continent}</span></span>}
                  {filters.country && <span> in <span className="font-semibold">{filters.country}</span></span>}
                  {filters.city && <span> a <span className="font-semibold">{filters.city}</span></span>}
                  {filters.type && <span> di tipo <span className="font-semibold">{filters.type}</span></span>}
                </>
              ) : (
                'Nessuna galleria trovata con i filtri selezionati.'
              )}
            </p>
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGalleries.map(gallery => (
              <GalleryCard key={gallery.id} gallery={gallery} />
            ))}
            
            {filteredGalleries.length === 0 && !isLoading && (
              <div className="col-span-4 text-center py-10">
                <p className="text-gray-600">Nessuna galleria trovata con i filtri selezionati.</p>
                <button
                  onClick={resetFilters}
                  className="mt-2 px-4 py-2 bg-amber-700 text-white rounded"
                >
                  Reset Filtri
                </button>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {totalCount > 0 && (
            <div className="flex justify-center mt-8">
              <nav>
                <ul className="flex items-center flex-wrap">
                  <li>
                    <button
                      onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded-l border border-gray-300 bg-white text-gray-600 disabled:opacity-50"
                    >
                      &laquo;
                    </button>
                  </li>
                  
                  {getPageNumbers().map((number, index) => (
                    <li key={index}>
                      {number === '...' ? (
                        <span className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-600">
                          {number}
                        </span>
                      ) : (
                        <button
                          onClick={() => handlePageChange(number as number)}
                          className={`px-3 py-1 border-t border-b border-gray-300 ${
                            currentPage === number 
                              ? 'bg-amber-700 text-white' 
                              : 'bg-white text-gray-600'
                          }`}
                        >
                          {number}
                        </button>
                      )}
                    </li>
                  ))}
                  
                  <li>
                    <button
                      onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded-r border border-gray-300 bg-white text-gray-600 disabled:opacity-50"
                    >
                      &raquo;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          
          {/* Page size selector */}
          {totalCount > 0 && (
            <div className="flex justify-center mt-4">
              <div className="text-sm text-gray-600">
                Pagina {currentPage} di {totalPages}
              </div>
            </div>
          )}
        </>
      ) : !isLoading ? (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={3}
              options={{
                gestureHandling: 'greedy',
                maxZoom: 18
              }}
            >
              {/* Map markers with clustering */}
              {(() => {
                // Get a sample of galleries to show on map (for performance)
                const mapGalleries = galleries
                  .filter(gallery => 
                    gallery.latitude && 
                    gallery.longitude && 
                    (filters.continent ? gallery.continent === filters.continent : true) &&
                    (filters.country ? gallery.country === filters.country : true) &&
                    (filters.city ? gallery.city === filters.city : true) &&
                    (filters.type ? gallery.type === filters.type : true)
                  )
                  .slice(0, 2000); // Limit to 2000 markers for performance
                
                return mapGalleries.map(gallery => (
                  <Marker
                    key={gallery.id}
                    position={{
                      lat: gallery.latitude!,
                      lng: gallery.longitude!
                    }}
                    onClick={() => setSelectedMarker(gallery)}
                  />
                ));
              })()}
              
              {selectedMarker && (
                <InfoWindow
                  position={{
                    lat: selectedMarker.latitude!,
                    lng: selectedMarker.longitude!
                  }}
                  onCloseClick={() => setSelectedMarker(null)}
                >
                  <div className="p-2 max-w-xs">
                    <h3 className="font-bold text-gray-900">{selectedMarker.name}</h3>
                    <p className="text-sm text-gray-600">{selectedMarker.city}, {selectedMarker.country}</p>
                    <p className="text-xs mt-1">{selectedMarker.type}</p>
                    {selectedMarker.website && (
                      <a 
                        href={selectedMarker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-xs hover:underline mt-1 block"
                      >
                        Visita il sito
                      </a>
                    )}
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
          
          <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
            <div className="text-sm text-gray-600 text-center mb-2 md:mb-0">
              {totalCount > 2000 ? 
                `Mostrando 2000 delle ${totalCount} gallerie sulla mappa per performance` : 
                `Mostrando ${totalCount} gallerie sulla mappa`}
            </div>
            
            <div className="flex justify-center gap-4">
              <Link 
                to="/statistiche" 
                className="px-4 py-2 bg-amber-700 text-white rounded text-sm"
              >
                Vedi Statistiche
              </Link>
              
              <Link 
                to="/proponi-galleria" 
                className="px-4 py-2 bg-gray-800 text-white rounded text-sm"
              >
                Proponi Galleria
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}