import { Gallery } from './galleries';
import { citiesByCountry } from './citiesByCountry';
import { galleryNamePatterns, specializations, galleryDescriptions, regionAdjectives } from './galleryNamePatterns';

// Map countries to continents
const countryToContinentMap: Record<string, string> = {
  // Europa
  'Italia': 'Europa',
  'Germania': 'Europa',
  'Francia': 'Europa',
  'Regno Unito': 'Europa',
  'Spagna': 'Europa',
  'Paesi Bassi': 'Europa',
  'Belgio': 'Europa',
  'Svizzera': 'Europa',
  'Austria': 'Europa',
  'Portogallo': 'Europa',
  'Grecia': 'Europa',
  'Polonia': 'Europa',
  'Repubblica Ceca': 'Europa',
  'Ungheria': 'Europa',
  'Romania': 'Europa',
  'Croazia': 'Europa',
  'Slovenia': 'Europa',
  'Estonia': 'Europa',
  'Lettonia': 'Europa',
  'Lituania': 'Europa',
  'Finlandia': 'Europa',
  'Svezia': 'Europa',
  'Norvegia': 'Europa',
  'Danimarca': 'Europa',
  
  // Asia Pacifico
  'Giappone': 'Asia Pacifico',
  'Cina': 'Asia Pacifico',
  'Corea del Sud': 'Asia Pacifico',
  'India': 'Asia Pacifico',
  'Tailandia': 'Asia Pacifico',
  'Vietnam': 'Asia Pacifico',
  'Malaysia': 'Asia Pacifico',
  'Singapore': 'Asia Pacifico',
  'Indonesia': 'Asia Pacifico',
  'Filippine': 'Asia Pacifico',
  'Australia': 'Asia Pacifico',
  'Nuova Zelanda': 'Asia Pacifico',
  'Taiwan': 'Asia Pacifico',
  'Hong Kong': 'Asia Pacifico',
  
  // Nord America
  'Stati Uniti': 'Nord America',
  'Canada': 'Nord America',
  'Messico': 'Nord America',
  
  // Sud America
  'Brasile': 'Sud America',
  'Argentina': 'Sud America',
  'Cile': 'Sud America',
  'Colombia': 'Sud America',
  'Perù': 'Sud America',
  'Venezuela': 'Sud America',
  'Ecuador': 'Sud America',
  'Uruguay': 'Sud America',
  'Bolivia': 'Sud America',
  
  // Africa
  'Sud Africa': 'Africa',
  'Nigeria': 'Africa',
  'Kenya': 'Africa',
  'Marocco': 'Africa',
  'Egitto': 'Africa',
  'Ghana': 'Africa',
  'Senegal': 'Africa',
  'Tunisia': 'Africa',
  
  // Medio Oriente
  'Emirati Arabi Uniti': 'Medio Oriente',
  'Israele': 'Medio Oriente',
  'Libano': 'Medio Oriente',
  'Turchia': 'Medio Oriente',
  'Iran': 'Medio Oriente'
};

// Map countries to appropriate gallery name patterns region
const countryToPatternRegionMap: Record<string, string> = {
  // Europa
  'Italia': 'Italia',
  'Francia': 'Francia',
  'Germania': 'Germania',
  'Regno Unito': 'Regno Unito',
  'Spagna': 'Spagna',
  'Paesi Bassi': 'Paesi Bassi',
  'Belgio': 'Paesi Bassi',
  'Svizzera': 'Germania',
  'Austria': 'Germania',
  'Portogallo': 'Spagna',
  'Grecia': 'Europa dell\'Est',
  'Polonia': 'Europa dell\'Est',
  'Repubblica Ceca': 'Europa dell\'Est',
  'Ungheria': 'Europa dell\'Est',
  'Romania': 'Europa dell\'Est',
  'Croazia': 'Europa dell\'Est',
  'Slovenia': 'Europa dell\'Est',
  'Estonia': 'Europa dell\'Est',
  'Lettonia': 'Europa dell\'Est',
  'Lituania': 'Europa dell\'Est',
  'Finlandia': 'Scandinavia',
  'Svezia': 'Scandinavia',
  'Norvegia': 'Scandinavia',
  'Danimarca': 'Scandinavia',
  
  // Asia Pacifico
  'Giappone': 'Giappone',
  'Cina': 'Cina',
  'Corea del Sud': 'Corea del Sud',
  'India': 'Sud Est Asiatico',
  'Tailandia': 'Sud Est Asiatico',
  'Vietnam': 'Sud Est Asiatico',
  'Malaysia': 'Sud Est Asiatico',
  'Singapore': 'Sud Est Asiatico',
  'Indonesia': 'Sud Est Asiatico',
  'Filippine': 'Sud Est Asiatico',
  'Australia': 'Australia e Oceania',
  'Nuova Zelanda': 'Australia e Oceania',
  'Taiwan': 'Cina',
  'Hong Kong': 'Cina',
  
  // Nord America
  'Stati Uniti': 'Stati Uniti',
  'Canada': 'Canada',
  'Messico': 'America Latina',
  
  // Sud America
  'Brasile': 'America Latina',
  'Argentina': 'America Latina',
  'Cile': 'America Latina',
  'Colombia': 'America Latina',
  'Perù': 'America Latina',
  'Venezuela': 'America Latina',
  'Ecuador': 'America Latina',
  'Uruguay': 'America Latina',
  'Bolivia': 'America Latina',
  
  // Africa
  'Sud Africa': 'Africa',
  'Nigeria': 'Africa',
  'Kenya': 'Africa',
  'Marocco': 'Africa',
  'Egitto': 'Africa',
  'Ghana': 'Africa',
  'Senegal': 'Africa',
  'Tunisia': 'Africa',
  
  // Medio Oriente
  'Emirati Arabi Uniti': 'Medio Oriente',
  'Israele': 'Medio Oriente',
  'Libano': 'Medio Oriente',
  'Turchia': 'Medio Oriente',
  'Iran': 'Medio Oriente'
};

// City coordinates (approximate) to generate realistic map locations
const cityCoordinates: Record<string, { lat: number, lng: number }> = {
  // Just a sample of major cities - will add random offsets for variety
  'Roma': { lat: 41.9028, lng: 12.4964 },
  'Milano': { lat: 45.4642, lng: 9.1900 },
  'Venezia': { lat: 45.4336, lng: 12.3267 },
  'Tokyo': { lat: 35.6762, lng: 139.6503 },
  'Berlino': { lat: 52.5200, lng: 13.4050 },
  'Parigi': { lat: 48.8566, lng: 2.3522 },
  'Londra': { lat: 51.5074, lng: -0.1278 },
  'New York': { lat: 40.7128, lng: -74.0060 },
  'Los Angeles': { lat: 34.0522, lng: -118.2437 },
  'Madrid': { lat: 40.4168, lng: -3.7038 },
  'Barcellona': { lat: 41.3851, lng: 2.1734 },
  'Amsterdam': { lat: 52.3676, lng: 4.9041 },
  'Vienna': { lat: 48.2082, lng: 16.3738 },
  'Praga': { lat: 50.0755, lng: 14.4378 },
  'Sydney': { lat: -33.8688, lng: 151.2093 },
  'Seoul': { lat: 37.5665, lng: 126.9780 },
  'Shanghai': { lat: 31.2304, lng: 121.4737 },
  'Pechino': { lat: 39.9042, lng: 116.4074 },
  'Dubai': { lat: 25.2048, lng: 55.2708 },
  'Il Cairo': { lat: 30.0444, lng: 31.2357 },
  'Città del Messico': { lat: 19.4326, lng: -99.1332 },
  'São Paulo': { lat: -23.5505, lng: -46.6333 },
  'Buenos Aires': { lat: -34.6037, lng: -58.3816 },
  'Bangkok': { lat: 13.7563, lng: 100.5018 },
  'Mumbai': { lat: 19.0760, lng: 72.8777 },
  'Singapore': { lat: 1.3521, lng: 103.8198 },
  'Toronto': { lat: 43.6532, lng: -79.3832 },
  'Johannesburg': { lat: -26.2041, lng: 28.0473 },
  'Nairobi': { lat: -1.2921, lng: 36.8219 },
  'Istanbul': { lat: 41.0082, lng: 28.9784 }
};

// Get approximate coordinates for a city, with some random variation
function getCityCoordinates(city: string, country: string): { lat: number, lng: number } {
  // If we have exact coordinates, use them with a small random offset
  if (cityCoordinates[city]) {
    const base = cityCoordinates[city];
    // Add a small random offset (up to ~1km)
    return {
      lat: base.lat + (Math.random() - 0.5) * 0.01,
      lng: base.lng + (Math.random() - 0.5) * 0.01
    };
  }
  
  // Otherwise, use approximate country coordinates with larger random offset
  switch (countryToContinentMap[country]) {
    case 'Europa':
      return { lat: 48 + (Math.random() - 0.5) * 10, lng: 10 + (Math.random() - 0.5) * 20 };
    case 'Asia Pacifico':
      return { lat: 30 + (Math.random() - 0.5) * 20, lng: 120 + (Math.random() - 0.5) * 30 };
    case 'Nord America':
      return { lat: 40 + (Math.random() - 0.5) * 15, lng: -100 + (Math.random() - 0.5) * 30 };
    case 'Sud America':
      return { lat: -20 + (Math.random() - 0.5) * 20, lng: -60 + (Math.random() - 0.5) * 20 };
    case 'Africa':
      return { lat: 5 + (Math.random() - 0.5) * 30, lng: 20 + (Math.random() - 0.5) * 30 };
    case 'Medio Oriente':
      return { lat: 30 + (Math.random() - 0.5) * 10, lng: 40 + (Math.random() - 0.5) * 20 };
    default:
      return { lat: 0, lng: 0 };
  }
}

// Random utility functions
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomYear(min: number = 2000, max: number = 2023): number {
  return getRandomInt(min, max);
}

function generateEmail(galleryName: string, country: string): string {
  // Simplify gallery name for email
  const simplifiedName = galleryName
    .toLowerCase()
    .replace(/[^\w\s]/gi, '') // Remove special characters
    .replace(/\s+/g, ''); // Remove spaces
  
  // Get domain extensions based on country
  let domainExt = '.com';
  const countryMap: Record<string, string> = {
    'Italia': '.it',
    'Germania': '.de',
    'Francia': '.fr',
    'Regno Unito': '.uk',
    'Spagna': '.es',
    'Paesi Bassi': '.nl',
    'Giappone': '.jp',
    'Cina': '.cn',
    'Australia': '.au',
    'Brasile': '.br',
    'Canada': '.ca',
    'Messico': '.mx'
  };
  
  if (countryMap[country]) {
    domainExt = countryMap[country];
  } else if (countryToContinentMap[country] === 'Europa') {
    domainExt = '.eu';
  }
  
  // Generate email
  const emailTypes = ['info', 'contact', 'hello', 'gallery'];
  const emailPrefix = getRandomElement(emailTypes);
  
  return `${emailPrefix}@${simplifiedName}${domainExt}`;
}

function generateWebsite(galleryName: string, country: string): string {
  // Simplify gallery name for website
  const simplifiedName = galleryName
    .toLowerCase()
    .replace(/[^\w\s]/gi, '') // Remove special characters
    .replace(/\s+/g, ''); // Remove spaces
  
  // Get domain extensions based on country
  let domainExt = '.com';
  const countryMap: Record<string, string> = {
    'Italia': '.it',
    'Germania': '.de',
    'Francia': '.fr',
    'Regno Unito': '.uk',
    'Spagna': '.es',
    'Paesi Bassi': '.nl',
    'Giappone': '.jp',
    'Cina': '.cn',
    'Australia': '.au',
    'Brasile': '.br',
    'Canada': '.ca',
    'Messico': '.mx'
  };
  
  if (countryMap[country]) {
    domainExt = countryMap[country];
  } else if (countryToContinentMap[country] === 'Europa') {
    domainExt = '.eu';
  }
  
  return `https://www.${simplifiedName}${domainExt}`;
}

function generateAddress(city: string): string {
  const streetTypes: Record<string, string[]> = {
    'Italia': ['Via', 'Corso', 'Piazza', 'Viale'],
    'Francia': ['Rue', 'Avenue', 'Boulevard', 'Place'],
    'Germania': ['Straße', 'Allee', 'Platz', 'Weg'],
    'Regno Unito': ['Street', 'Road', 'Avenue', 'Lane'],
    'Spagna': ['Calle', 'Avenida', 'Plaza', 'Paseo'],
    'Stati Uniti': ['Street', 'Avenue', 'Boulevard', 'Road'],
    'default': ['Street', 'Avenue', 'Road', 'Plaza']
  };
  
  const streetNames = [
    'Roma', 'Parigi', 'Londra', 'New York', 'Tokyo', 'Berlino', 'Madrid', 'Amsterdam',
    'Vienna', 'Praga', 'Sydney', 'Seoul', 'Shanghai', 'Pechino', 'Dubai', 'Il Cairo',
    'Arte', 'Galleria', 'Studio', 'Museo', 'Cultura', 'Creativa', 'Artisti', 'Moderna',
    'Contemporanea', 'Centrale', 'Nuova', 'Grande', 'Piccola', 'Bella', 'Antica', 'Principale'
  ];
  
  const streetType = getRandomElement(streetTypes['default']);
  const streetName = getRandomElement(streetNames);
  const number = getRandomInt(1, 200);
  
  return `${streetType} ${streetName}, ${number}`;
}

function generateGalleryName(city: string, country: string): string {
  // Get appropriate name pattern region
  const patternRegion = countryToPatternRegionMap[country] || 'Stati Uniti';
  
  // Get a random pattern for this region
  const pattern = getRandomElement(galleryNamePatterns[patternRegion]);
  
  // Replace the {city} placeholder with the actual city name
  return pattern.replace('{city}', city);
}

function generateDescription(specialization: string, country: string): string {
  const regionAdjective = regionAdjectives[country] || 'internazionali';
  const template = getRandomElement(galleryDescriptions);
  
  return template
    .replace('{specialization}', specialization)
    .replace('{region}', regionAdjective);
}

// Main gallery generation function
export function generateGalleries(count: number): Gallery[] {
  const galleries: Gallery[] = [];
  const galleryTypes = [
    'Contemporary Gallery', 
    'Alternative Space', 
    'Art Center', 
    'Project Space', 
    'Artist-run Institution', 
    'Gallery',
    'Museum',
    'Creative Hub',
    'Cultural Center',
    'Exhibition Space'
  ];
  
  // Distribution settings
  const distribution = {
    'Asia Pacifico': 0.40,  // 40%
    'Europa': 0.30,         // 30%
    'Nord America': 0.20,   // 20%
    'Sud America': 0.05,    // 5%
    'Africa': 0.03,         // 3%
    'Medio Oriente': 0.02   // 2%
  };
  
  // Calculate how many galleries to create for each continent
  const continentCounts: Record<string, number> = {};
  Object.entries(distribution).forEach(([continent, percentage]) => {
    continentCounts[continent] = Math.floor(count * percentage);
  });
  
  // Make sure we get exactly the count requested
  let total = Object.values(continentCounts).reduce((sum, c) => sum + c, 0);
  if (total < count) {
    // Distribute the remaining galleries to random continents
    for (let i = 0; i < count - total; i++) {
      const randomContinent = getRandomElement(Object.keys(continentCounts));
      continentCounts[randomContinent]++;
    }
  }
  
  // Get countries by continent
  const countriesByContinent: Record<string, string[]> = {};
  Object.entries(countryToContinentMap).forEach(([country, continent]) => {
    if (!countriesByContinent[continent]) {
      countriesByContinent[continent] = [];
    }
    countriesByContinent[continent].push(country);
  });
  
  // Create galleries for each continent
  Object.entries(continentCounts).forEach(([continent, continentCount]) => {
    // Get all countries for this continent
    const continentCountries = countriesByContinent[continent];
    
    // Distribute galleries across countries in this continent
    for (let i = 0; i < continentCount; i++) {
      // Choose a random country from this continent
      const country = getRandomElement(continentCountries);
      
      // Choose a random city from this country
      const citiesInCountry = citiesByCountry[country] || ['Unknown City'];
      const city = getRandomElement(citiesInCountry);
      
      // Generate a unique gallery name
      const name = generateGalleryName(city, country);
      
      // Generate random specializations (1-2)
      const specializationCount = Math.random() > 0.5 ? 2 : 1;
      const gallerySpecializations: string[] = [];
      for (let j = 0; j < specializationCount; j++) {
        const spec = getRandomElement(specializations);
        if (!gallerySpecializations.includes(spec)) {
          gallerySpecializations.push(spec);
        }
      }
      const specialization = gallerySpecializations.join(', ');
      
      // Generate a description
      const description = generateDescription(specialization, country);
      
      // Generate email and website
      const email = generateEmail(name, country);
      const website = Math.random() > 0.1 ? generateWebsite(name, country) : undefined; // 10% without website
      
      // Generate random coordinates near the city
      const coordinates = getCityCoordinates(city, country);
      
      // Create gallery object
      const gallery: Gallery = {
        id: (galleries.length + 1).toString(),
        name,
        email,
        website,
        foundingYear: getRandomYear(),
        continent,
        country,
        city,
        address: generateAddress(city),
        latitude: coordinates.lat,
        longitude: coordinates.lng,
        type: getRandomElement(galleryTypes),
        specialization,
        focusOnEmergingArtists: Math.random() > 0.2, // 80% focus on emerging artists
        description
      };
      
      galleries.push(gallery);
    }
  });
  
  return galleries;
}