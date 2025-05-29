import { Gallery } from '@/data/galleries';

interface GalleryCardProps {
  gallery: Gallery;
}

export function GalleryCard({ gallery }: GalleryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4">
        {/* Location badge */}
        <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800 mb-2">
          {gallery.continent}
        </span>
        
        {/* Gallery name */}
        <h3 className="text-lg font-bold text-gray-900 mb-1">{gallery.name}</h3>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {gallery.city}, {gallery.country}
        </div>
        
        {/* Type and specialization */}
        <div className="flex flex-wrap gap-1 mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800">
            {gallery.type}
          </span>
          
          {gallery.specialization && (
            <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-800">
              {gallery.specialization}
            </span>
          )}
          
          {gallery.focusOnEmergingArtists && (
            <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-purple-100 text-purple-800">
              Artisti Emergenti
            </span>
          )}
        </div>
        
        {/* Website link */}
        {gallery.website && (
          <a 
            href={gallery.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Visita il sito
          </a>
        )}
      </div>
    </div>
  );
}