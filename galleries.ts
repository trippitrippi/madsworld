export interface Gallery {
  id: string;
  name: string;
  email: string;
  website?: string;
  foundingYear?: number;
  continent: string;
  country: string;
  city: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  type: string;
  specialization?: string;
  focusOnEmergingArtists: boolean;
  description: string;
}

// Import the gallery generator
import { generateGalleries as generateGalleriesFunction } from './generateGalleries';

// Generate 3000+ galleries
export const galleries: Gallery[] = generateGalleriesFunction(3200);

// For reference, here are the original sample galleries (commented out):
/*
export const original_galleries: Gallery[] = [
  // Italia
  {
    id: '1',
    name: 'Galleria Arte Moderna',
    email: 'info@artemoderna.com',
    website: 'https://www.artemoderna.com',
    foundingYear: 2010,
    continent: 'Europa',
    country: 'Italia',
    city: 'Roma',
    address: 'Via del Corso, 123',
    latitude: 41.9028,
    longitude: 12.4964,
    type: 'Gallery',
    specialization: 'Arte Contemporanea',
    focusOnEmergingArtists: true,
    description: 'Galleria specializzata in arte contemporanea con focus su artisti emergenti italiani e internazionali.'
  },
  {
    id: '2',
    name: 'Milano Arte Nuova',
    email: 'info@milanoartenuova.it',
    website: 'https://www.milanoartenuova.it',
    foundingYear: 2017,
    continent: 'Europa',
    country: 'Italia',
    city: 'Milano',
    address: 'Via Tortona, 54',
    latitude: 45.4642,
    longitude: 9.1900,
    type: 'Contemporary Gallery',
    specialization: 'Arte Italiana, Pittura',
    focusOnEmergingArtists: true,
    description: 'Galleria d\'arte contemporanea nel cuore di Milano con focus su giovani artisti italiani emergenti e nuove tendenze pittoriche.'
  },
  {
    id: '3',
    name: 'Spazio Venezia',
    email: 'contatto@spaziovenezia.it',
    website: 'https://www.spaziovenezia.it',
    foundingYear: 2014,
    continent: 'Europa',
    country: 'Italia',
    city: 'Venezia',
    address: 'Dorsoduro 2196',
    latitude: 45.4336,
    longitude: 12.3267,
    type: 'Alternative Space',
    specialization: 'Scultura, Installazioni',
    focusOnEmergingArtists: true,
    description: 'Spazio alternativo dedicato a scultura e installazioni contemporanee, con progetti site-specific che dialogano con l\'architettura veneziana.'
  },
  
  // Giappone
  {
    id: '4',
    name: 'Tokyo Art Space',
    email: 'contact@tokyoartspace.jp',
    website: 'https://www.tokyoartspace.jp',
    foundingYear: 2015,
    continent: 'Asia Pacifico',
    country: 'Giappone',
    city: 'Tokyo',
    address: 'Shibuya 5-2-1',
    latitude: 35.6762,
    longitude: 139.6503,
    type: 'Alternative Space',
    specialization: 'Media Art',
    focusOnEmergingArtists: true,
    description: 'Spazio alternativo dedicato alla media art e arte digitale con artisti emergenti dal Giappone e Asia.'
  },
  {
    id: '5',
    name: 'Osaka Contemporary',
    email: 'info@osakacontemporary.jp',
    website: 'https://www.osakacontemporary.jp',
    foundingYear: 2016,
    continent: 'Asia Pacifico',
    country: 'Giappone',
    city: 'Osaka',
    address: 'Chuo-ku 3-15',
    latitude: 34.6937,
    longitude: 135.5023,
    type: 'Gallery',
    specialization: 'Arte Concettuale',
    focusOnEmergingArtists: true,
    description: 'Galleria dedicata all\'arte concettuale giapponese contemporanea con un focus su idee innovative e pratiche sperimentali.'
  },
  {
    id: '6',
    name: 'Kyoto Traditional Modern',
    email: 'hello@kyototm.jp',
    website: 'https://www.kyototm.jp',
    foundingYear: 2009,
    continent: 'Asia Pacifico',
    country: 'Giappone',
    city: 'Kyoto',
    address: 'Higashiyama-ku 54',
    latitude: 35.0116,
    longitude: 135.7681,
    type: 'Art Center',
    specialization: 'Tradizione e Contemporaneità',
    focusOnEmergingArtists: true,
    description: 'Centro d\'arte che esplora il dialogo tra tecniche tradizionali giapponesi e visioni contemporanee, supportando artisti emergenti.'
  },
  
  // Germania
  {
    id: '7',
    name: 'Berlin Contemporary',
    email: 'info@berlincontemporary.de',
    website: 'https://www.berlincontemporary.de',
    foundingYear: 2008,
    continent: 'Europa',
    country: 'Germania',
    city: 'Berlino',
    address: 'Auguststraße 68',
    latitude: 52.5200,
    longitude: 13.4050,
    type: 'Gallery',
    specialization: 'Arte Contemporanea, Fotografia',
    focusOnEmergingArtists: true,
    description: 'Galleria nel cuore di Berlino con focus su fotografia contemporanea e nuovi media di artisti emergenti.'
  },
  {
    id: '8',
    name: 'Hamburg Art Initiative',
    email: 'contact@hamburgartinitiative.de',
    website: 'https://www.hamburgartinitiative.de',
    foundingYear: 2011,
    continent: 'Europa',
    country: 'Germania',
    city: 'Amburgo',
    address: 'Reeperbahn 153',
    latitude: 53.5511,
    longitude: 9.9937,
    type: 'Artist-run Institution',
    specialization: 'Arte Urbana, Arti Performative',
    focusOnEmergingArtists: true,
    description: 'Iniziativa artistica gestita da artisti con focus su arte urbana e performance nel contesto dello sviluppo urbano di Amburgo.'
  },
  {
    id: '9',
    name: 'Munich Design Gallery',
    email: 'info@munichdesign.de',
    website: 'https://www.munichdesign.de',
    foundingYear: 2013,
    continent: 'Europa',
    country: 'Germania',
    city: 'Monaco',
    address: 'Maximilianstraße 33',
    latitude: 48.1351,
    longitude: 11.5820,
    type: 'Contemporary Gallery',
    specialization: 'Design, Arte Applicata',
    focusOnEmergingArtists: true,
    description: 'Galleria che esplora il confine tra arte e design, presentando opere di designer emergenti e artisti che lavorano con tecniche artigianali.'
  },
  
  // Stati Uniti
  {
    id: '10',
    name: 'New York Project Space',
    email: 'hello@nyprojectspace.com',
    website: 'https://www.nyprojectspace.com',
    foundingYear: 2018,
    continent: 'Nord America',
    country: 'Stati Uniti',
    city: 'New York',
    address: '401 Broadway',
    latitude: 40.7128,
    longitude: -74.0060,
    type: 'Project Space',
    specialization: 'Installazioni, Performance',
    focusOnEmergingArtists: true,
    description: 'Project space dedicato a installazioni temporanee e performance di artisti emergenti americani e internazionali.'
  },
  {
    id: '11',
    name: 'LA Contemporary Arts',
    email: 'info@lacontemporaryarts.com',
    website: 'https://www.lacontemporaryarts.com',
    foundingYear: 2015,
    continent: 'Nord America',
    country: 'Stati Uniti',
    city: 'Los Angeles',
    address: 'Melrose Avenue 2145',
    latitude: 34.0522,
    longitude: -118.2437,
    type: 'Gallery',
    specialization: 'Arte Contemporanea, Cinema',
    focusOnEmergingArtists: true,
    description: 'Galleria specializzata in arte contemporanea con particolare attenzione alle connessioni con l\'industria cinematografica di Los Angeles.'
  },
  
  // Corea del Sud
  {
    id: '12',
    name: 'Seoul Art Center',
    email: 'info@seoulartcenter.kr',
    website: 'https://www.seoulartcenter.kr',
    foundingYear: 2012,
    continent: 'Asia Pacifico',
    country: 'Corea del Sud',
    city: 'Seoul',
    address: 'Gangnam-gu 123',
    latitude: 37.5665,
    longitude: 126.9780,
    type: 'Art Center',
    specialization: 'Arte Contemporanea, Nuovi Media',
    focusOnEmergingArtists: true,
    description: 'Centro d\'arte contemporanea con focus su nuovi media e arte digitale da artisti coreani emergenti.'
  },
  {
    id: '13',
    name: 'Busan Maritime Arts',
    email: 'contact@busanmaritime.kr',
    website: 'https://www.busanmaritime.kr',
    foundingYear: 2014,
    continent: 'Asia Pacifico',
    country: 'Corea del Sud',
    city: 'Busan',
    address: 'Haeundae-gu 45',
    latitude: 35.1796,
    longitude: 129.0756,
    type: 'Alternative Space',
    specialization: 'Arte Ambientale, Sostenibilità',
    focusOnEmergingArtists: true,
    description: 'Spazio alternativo che esplora temi ambientali e marittimi, riflettendo sulla storia portuale di Busan e sulle sfide ecologiche contemporanee.'
  },
  
  // Francia
  {
    id: '14',
    name: 'Galerie Nouvelle Paris',
    email: 'info@galerienouvelle.fr',
    website: 'https://www.galerienouvelle.fr',
    foundingYear: 2010,
    continent: 'Europa',
    country: 'Francia',
    city: 'Parigi',
    address: 'Rue Saint-Honoré 210',
    latitude: 48.8566,
    longitude: 2.3522,
    type: 'Gallery',
    specialization: 'Arte Contemporanea Francese',
    focusOnEmergingArtists: true,
    description: 'Galleria parigina dedicata alla promozione di artisti francesi emergenti nel contesto dell\'arte contemporanea internazionale.'
  },
  {
    id: '15',
    name: 'Lyon Art Confluence',
    email: 'contact@lyonartconfluence.fr',
    website: 'https://www.lyonartconfluence.fr',
    foundingYear: 2016,
    continent: 'Europa',
    country: 'Francia',
    city: 'Lione',
    address: 'Quai Perrache, 86',
    latitude: 45.7640,
    longitude: 4.8357,
    type: 'Project Space',
    specialization: 'Arte Pubblica, Interventi Urbani',
    focusOnEmergingArtists: true,
    description: 'Spazio progettuale che lavora sull\'integrazione dell\'arte contemporanea negli spazi pubblici, con particolare attenzione alla riqualificazione urbana.'
  },
  
  // Regno Unito
  {
    id: '16',
    name: 'London Emerging Artists',
    email: 'hello@londonemergingartists.uk',
    website: 'https://www.londonemergingartists.uk',
    foundingYear: 2015,
    continent: 'Europa',
    country: 'Regno Unito',
    city: 'Londra',
    address: 'Brick Lane 124',
    latitude: 51.5074,
    longitude: -0.1278,
    type: 'Contemporary Gallery',
    specialization: 'Multi-disciplinare',
    focusOnEmergingArtists: true,
    description: 'Galleria londinese dedicata esclusivamente agli artisti emergenti, con un approccio multi-disciplinare che abbraccia pittura, scultura, fotografia e nuovi media.'
  },
  {
    id: '17',
    name: 'Manchester Industrial Arts',
    email: 'info@manchesterindustrialarts.uk',
    website: 'https://www.manchesterindustrialarts.uk',
    foundingYear: 2012,
    continent: 'Europa',
    country: 'Regno Unito',
    city: 'Manchester',
    address: 'Deansgate 301',
    latitude: 53.4808,
    longitude: -2.2426,
    type: 'Alternative Space',
    specialization: 'Post-industriale, Multimedia',
    focusOnEmergingArtists: true,
    description: 'Spazio alternativo in un ex edificio industriale che esplora l\'eredità industriale di Manchester attraverso l\'arte contemporanea e le pratiche multimediali.'
  },
  
  // Spagna
  {
    id: '18',
    name: 'Madrid Vanguardia',
    email: 'contacto@madridvanguardia.es',
    website: 'https://www.madridvanguardia.es',
    foundingYear: 2011,
    continent: 'Europa',
    country: 'Spagna',
    city: 'Madrid',
    address: 'Calle de Alcalá 42',
    latitude: 40.4168,
    longitude: -3.7038,
    type: 'Gallery',
    specialization: 'Arte Contemporanea Spagnola',
    focusOnEmergingArtists: true,
    description: 'Galleria madrilena che promuove le voci più innovative dell\'arte contemporanea spagnola, con un programma di residenze per artisti emergenti.'
  },
  {
    id: '19',
    name: 'Barcelona Arts Project',
    email: 'info@barcelonaartsproject.es',
    website: 'https://www.barcelonaartsproject.es',
    foundingYear: 2013,
    continent: 'Europa',
    country: 'Spagna',
    city: 'Barcellona',
    address: 'Carrer de Provença 318',
    latitude: 41.3851,
    longitude: 2.1734,
    type: 'Project Space',
    specialization: 'Arte Interattiva, Tecnologia',
    focusOnEmergingArtists: true,
    description: 'Project space focalizzato sull\'intersezione tra arte, design e tecnologia, con un programma di esposizioni ed eventi che promuovono approcci interattivi e partecipativi.'
  },
  
  // Cina
  {
    id: '20',
    name: 'Shanghai Contemporary Art',
    email: 'contact@shanghaicontemporary.cn',
    website: 'https://www.shanghaicontemporary.cn',
    foundingYear: 2014,
    continent: 'Asia Pacifico',
    country: 'Cina',
    city: 'Shanghai',
    address: 'West Bund 2555',
    latitude: 31.2304,
    longitude: 121.4737,
    type: 'Contemporary Gallery',
    specialization: 'Arte Contemporanea Cinese',
    focusOnEmergingArtists: true,
    description: 'Galleria che presenta il lavoro di artisti cinesi emergenti nel contesto globale, con un programma espositivo che esplora le trasformazioni sociali e culturali della Cina contemporanea.'
  },
  {
    id: '21',
    name: 'Beijing Art District',
    email: 'info@beijingartdistrict.cn',
    website: 'https://www.beijingartdistrict.cn',
    foundingYear: 2009,
    continent: 'Asia Pacifico',
    country: 'Cina',
    city: 'Pechino',
    address: '798 Art Zone, 4 Jiuxianqiao Road',
    latitude: 39.9042,
    longitude: 116.4074,
    type: 'Art Center',
    specialization: 'Arte Contemporanea, Fotografia',
    focusOnEmergingArtists: true,
    description: 'Centro d\'arte nel famoso distretto 798 di Pechino, dedicato alla promozione di artisti emergenti attraverso mostre, residenze e programmi educativi.'
  },
  
  // Australia
  {
    id: '22',
    name: 'Sydney New Wave',
    email: 'hello@sydneynewwave.com.au',
    website: 'https://www.sydneynewwave.com.au',
    foundingYear: 2016,
    continent: 'Asia Pacifico',
    country: 'Australia',
    city: 'Sydney',
    address: 'Darlinghurst Road 45',
    latitude: -33.8688,
    longitude: 151.2093,
    type: 'Gallery',
    specialization: 'Arte Contemporanea Australiana',
    focusOnEmergingArtists: true,
    description: 'Galleria dedicata alle nuove ondate dell\'arte contemporanea australiana, con particolare attenzione agli artisti aborigeni emergenti e alle pratiche post-coloniali.'
  },
  {
    id: '23',
    name: 'Melbourne Arts Collective',
    email: 'info@melbourneartscollective.com.au',
    website: 'https://www.melbourneartscollective.com.au',
    foundingYear: 2015,
    continent: 'Asia Pacifico',
    country: 'Australia',
    city: 'Melbourne',
    address: 'Brunswick Street 302',
    latitude: -37.8136,
    longitude: 144.9631,
    type: 'Artist-run Institution',
    specialization: 'Pratica Collaborativa, Comunità',
    focusOnEmergingArtists: true,
    description: 'Istituzione gestita da artisti che promuove pratiche collaborative e comunitarie, ospitando residenze, laboratori e progetti espositivi basati sulla partecipazione.'
  },
  
  // Brasile
  {
    id: '24',
    name: 'São Paulo Arte Nova',
    email: 'contato@saopauloartenova.com.br',
    website: 'https://www.saopauloartenova.com.br',
    foundingYear: 2012,
    continent: 'Sud America',
    country: 'Brasile',
    city: 'São Paulo',
    address: 'Rua Oscar Freire 523',
    latitude: -23.5505,
    longitude: -46.6333,
    type: 'Contemporary Gallery',
    specialization: 'Arte Contemporanea Brasiliana',
    focusOnEmergingArtists: true,
    description: 'Galleria dedicata all\'arte contemporanea brasiliana, con un focus sulle nuove generazioni di artisti che esplorano questioni sociali, politiche e ambientali.'
  },
  {
    id: '25',
    name: 'Rio Experimental',
    email: 'info@rioexperimental.com.br',
    website: 'https://www.rioexperimental.com.br',
    foundingYear: 2017,
    continent: 'Sud America',
    country: 'Brasile',
    city: 'Rio de Janeiro',
    address: 'Ipanema 123',
    latitude: -22.9068,
    longitude: -43.1729,
    type: 'Alternative Space',
    specialization: 'Arte Sperimentale, Performance',
    focusOnEmergingArtists: true,
    description: 'Spazio alternativo dedicato a pratiche artistiche sperimentali e performative, che dialoga con il contesto urbano e culturale di Rio de Janeiro.'
  },
  
  // Canada
  {
    id: '26',
    name: 'Toronto Art Hub',
    email: 'contact@torontoarthub.ca',
    website: 'https://www.torontoarthub.ca',
    foundingYear: 2013,
    continent: 'Nord America',
    country: 'Canada',
    city: 'Toronto',
    address: 'Queen Street West 401',
    latitude: 43.6532,
    longitude: -79.3832,
    type: 'Art Center',
    specialization: 'Multi-disciplinare',
    focusOnEmergingArtists: true,
    description: 'Centro d\'arte che supporta artisti emergenti canadesi attraverso un approccio multidisciplinare, con un forte impegno nella comunità e nei programmi educativi.'
  },
  {
    id: '27',
    name: 'Vancouver Visual Arts',
    email: 'info@vancouvervisualarts.ca',
    website: 'https://www.vancouvervisualarts.ca',
    foundingYear: 2015,
    continent: 'Nord America',
    country: 'Canada',
    city: 'Vancouver',
    address: 'Granville Island 1234',
    latitude: 49.2827,
    longitude: -123.1207,
    type: 'Gallery',
    specialization: 'Arti Visive Contemporanee',
    focusOnEmergingArtists: true,
    description: 'Galleria specializzata nelle arti visive contemporanee, con un focus particolare sulla fotografia e sulle arti grafiche di artisti canadesi emergenti.'
  },
  
  // Messico
  {
    id: '28',
    name: 'México Ciudad Arte',
    email: 'contacto@mexicociudadarte.mx',
    website: 'https://www.mexicociudadarte.mx',
    foundingYear: 2011,
    continent: 'Nord America',
    country: 'Messico',
    city: 'Città del Messico',
    address: 'Calle Roma 67, Condesa',
    latitude: 19.4326,
    longitude: -99.1332,
    type: 'Contemporary Gallery',
    specialization: 'Arte Contemporanea Messicana',
    focusOnEmergingArtists: true,
    description: 'Galleria che presenta il lavoro di artisti messicani emergenti, esplorando il ricco patrimonio culturale del Messico attraverso linguaggi contemporanei.'
  },
  {
    id: '29',
    name: 'Guadalajara Independent',
    email: 'hola@guadalajaraindependent.mx',
    website: 'https://www.guadalajaraindependent.mx',
    foundingYear: 2018,
    continent: 'Nord America',
    country: 'Messico',
    city: 'Guadalajara',
    address: 'Av. Juárez 345',
    latitude: 20.6767,
    longitude: -103.3475,
    type: 'Project Space',
    specialization: 'Arte Indipendente, Pratiche Critiche',
    focusOnEmergingArtists: true,
    description: 'Spazio progettuale indipendente che supporta pratiche artistiche critiche e sperimentali, con un programma di residenze e collaborazioni internazionali.'
  },
  
  // Un'altra galleria italiana per arrivare a 30
  {
    id: '30',
    name: 'Napoli Arte Contemporanea',
    email: 'info@napoliartecontemporanea.it',
    website: 'https://www.napoliartecontemporanea.it',
    foundingYear: 2014,
    continent: 'Europa',
    country: 'Italia',
    city: 'Napoli',
    address: 'Via Chiaia 142',
    latitude: 40.8358,
    longitude: 14.2488,
    type: 'Gallery',
    specialization: 'Arte Contemporanea, Video Arte',
    focusOnEmergingArtists: true,
    description: 'Galleria napoletana dedicata all\'arte contemporanea e alla video arte, che promuove artisti emergenti del sud Italia e del Mediterraneo.'
  }
];
*/

export const continents = ['Africa', 'Asia Pacifico', 'Europa', 'Medio Oriente', 'Nord America', 'Sud America'];

export const galleryTypes = [
  'Alternative Space', 
  'Art Center', 
  'Artist-run Institution', 
  'Contemporary Gallery', 
  'Project Space', 
  'Gallery',
  'Museum',
  'Creative Hub',
  'Cultural Center',
  'Exhibition Space'
];

export const countries = [
  // Europa
  'Italia',
  'Germania',
  'Francia',
  'Regno Unito',
  'Spagna',
  'Paesi Bassi',
  'Belgio',
  'Svizzera',
  'Austria',
  'Portogallo',
  'Grecia',
  'Polonia',
  'Repubblica Ceca',
  'Ungheria',
  'Romania',
  'Croazia',
  'Slovenia',
  'Estonia',
  'Lettonia',
  'Lituania',
  'Finlandia',
  'Svezia',
  'Norvegia',
  'Danimarca',
  
  // Asia Pacifico
  'Giappone',
  'Cina',
  'Corea del Sud',
  'India',
  'Tailandia',
  'Vietnam',
  'Malaysia',
  'Singapore',
  'Indonesia',
  'Filippine',
  'Australia',
  'Nuova Zelanda',
  'Taiwan',
  'Hong Kong',
  
  // Nord America
  'Stati Uniti',
  'Canada',
  'Messico',
  
  // Sud America
  'Brasile',
  'Argentina',
  'Cile',
  'Colombia',
  'Perù',
  'Venezuela',
  'Ecuador',
  'Uruguay',
  'Bolivia',
  
  // Africa
  'Sud Africa',
  'Nigeria',
  'Kenya',
  'Marocco',
  'Egitto',
  'Ghana',
  'Senegal',
  'Tunisia',
  
  // Medio Oriente
  'Emirati Arabi Uniti',
  'Israele',
  'Libano',
  'Turchia',
  'Iran'
];

export const cities = [
  'Roma',
  'Milano',
  'Venezia',
  'Napoli',
  'Tokyo',
  'Osaka',
  'Kyoto',
  'Berlino',
  'Amburgo',
  'Monaco',
  'New York',
  'Los Angeles',
  'Seoul',
  'Busan',
  'Parigi',
  'Lione',
  'Londra',
  'Manchester',
  'Madrid',
  'Barcellona',
  'Shanghai',
  'Pechino',
  'Sydney',
  'Melbourne',
  'São Paulo',
  'Rio de Janeiro',
  'Toronto',
  'Vancouver',
  'Città del Messico',
  'Guadalajara'
];

export const getStatistics = () => {
  // Calculate actual statistics based on the galleries array
  const countryCount: Record<string, number> = {};
  const cityCount: Record<string, number> = {};
  const continentCount: Record<string, number> = {};
  const typeCount: Record<string, number> = {};
  
  galleries.forEach(gallery => {
    // Count countries
    countryCount[gallery.country] = (countryCount[gallery.country] || 0) + 1;
    
    // Count cities
    cityCount[gallery.city] = (cityCount[gallery.city] || 0) + 1;
    
    // Count continents
    continentCount[gallery.continent] = (continentCount[gallery.continent] || 0) + 1;
    
    // Count gallery types
    typeCount[gallery.type] = (typeCount[gallery.type] || 0) + 1;
  });
  
  // Convert counts to sorted arrays
  const topCountries = Object.entries(countryCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10); // Show top 10 instead of 5
    
  const topCities = Object.entries(cityCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10); // Show top 10 instead of 5
    
  const continentDistribution = Object.entries(continentCount)
    .map(([name, value]) => ({ 
      name, 
      value, 
      percentage: parseFloat(((value / galleries.length) * 100).toFixed(1)) 
    }))
    .sort((a, b) => b.value - a.value);
    
  const galleryTypes = Object.entries(typeCount)
    .map(([name, value]) => ({ 
      name, 
      value, 
      percentage: parseFloat(((value / galleries.length) * 100).toFixed(1)) 
    }))
    .sort((a, b) => b.value - a.value);
  
  return {
    totalGalleries: galleries.length,
    totalCountries: Object.keys(countryCount).length,
    totalCities: Object.keys(cityCount).length,
    verifiedGalleries: galleries.length,
    continentDistribution,
    topCountries,
    topCities,
    galleryTypes
  };
};