export const citiesByCountry: Record<string, string[]> = {
  // Europa
  'Italia': ['Roma', 'Milano', 'Venezia', 'Firenze', 'Napoli', 'Torino', 'Bologna', 'Palermo', 'Genova', 'Bari'],
  'Germania': ['Berlino', 'Monaco', 'Amburgo', 'Colonia', 'Francoforte', 'Stoccarda', 'Düsseldorf', 'Lipsia', 'Hannover', 'Dresda'],
  'Francia': ['Parigi', 'Marsiglia', 'Lione', 'Tolosa', 'Nizza', 'Nantes', 'Bordeaux', 'Strasburgo', 'Lille', 'Montpellier'],
  'Regno Unito': ['Londra', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool', 'Bristol', 'Edinburgh', 'Leeds', 'Sheffield', 'Newcastle'],
  'Spagna': ['Madrid', 'Barcellona', 'Valencia', 'Siviglia', 'Bilbao', 'Malaga', 'Saragozza', 'Palma', 'Las Palmas', 'Murcia'],
  'Paesi Bassi': ['Amsterdam', 'Rotterdam', 'L\'Aia', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere', 'Breda', 'Nimega'],
  'Belgio': ['Bruxelles', 'Anversa', 'Gand', 'Charleroi', 'Liegi', 'Bruges', 'Namur', 'Lovanio', 'Mons', 'Aalst'],
  'Svizzera': ['Zurigo', 'Ginevra', 'Basilea', 'Berna', 'Losanna', 'Winterthur', 'Lucerna', 'San Gallo', 'Lugano', 'Biel'],
  'Austria': ['Vienna', 'Graz', 'Linz', 'Salisburgo', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels', 'Sankt Pölten', 'Dornbirn'],
  'Portogallo': ['Lisbona', 'Porto', 'Amadora', 'Braga', 'Coimbra', 'Setúbal', 'Funchal', 'Évora', 'Faro', 'Aveiro'],
  'Grecia': ['Atene', 'Salonicco', 'Patrasso', 'Larissa', 'Volos', 'Heraklion', 'Serres', 'Kavala', 'Chania', 'Veroia'],
  'Polonia': ['Varsavia', 'Cracovia', 'Łódź', 'Breslavia', 'Poznań', 'Danzica', 'Stettino', 'Bydgoszcz', 'Lublino', 'Katowice'],
  'Repubblica Ceca': ['Praga', 'Brno', 'Ostrava', 'Plzeň', 'Liberec', 'Olomouc', 'České Budějovice', 'Hradec Králové', 'Ústí nad Labem', 'Pardubice'],
  'Ungheria': ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr', 'Nyíregyháza', 'Kecskemét', 'Székesfehérvár', 'Szombathely'],
  'Romania': ['Bucarest', 'Iași', 'Cluj-Napoca', 'Timișoara', 'Constanța', 'Craiova', 'Galați', 'Brașov', 'Ploiești', 'Oradea'],
  'Croazia': ['Zagabria', 'Spalato', 'Fiume', 'Osijek', 'Zara', 'Sebenico', 'Slavonski Brod', 'Pola', 'Karlovac', 'Varaždin'],
  'Slovenia': ['Lubiana', 'Maribor', 'Celje', 'Kranj', 'Koper', 'Novo Mesto', 'Ptuj', 'Trbovlje', 'Nova Gorica', 'Murska Sobota'],
  'Estonia': ['Tallinn', 'Tartu', 'Narva', 'Pärnu', 'Kohtla-Järve', 'Viljandi', 'Rakvere', 'Maardu', 'Sillamäe', 'Kuressaare'],
  'Lettonia': ['Riga', 'Daugavpils', 'Liepāja', 'Jelgava', 'Jūrmala', 'Ventspils', 'Rēzekne', 'Valmiera', 'Jēkabpils', 'Ogre'],
  'Lituania': ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Alytus', 'Marijampolė', 'Mažeikiai', 'Jonava', 'Utena'],
  'Finlandia': ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti', 'Kuopio', 'Pori'],
  'Svezia': ['Stoccolma', 'Göteborg', 'Malmö', 'Uppsala', 'Linköping', 'Västerås', 'Örebro', 'Norrköping', 'Helsingborg', 'Jönköping'],
  'Norvegia': ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen', 'Fredrikstad', 'Porsgrunn', 'Kristiansand', 'Tromsø', 'Sandefjord'],
  'Danimarca': ['Copenaghen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding', 'Horsens', 'Vejle', 'Roskilde'],

  // Asia Pacifico
  'Giappone': ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kawasaki', 'Hiroshima'],
  'Cina': ['Shanghai', 'Pechino', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Tianjin', 'Wuhan', 'Xi\'an', 'Hangzhou', 'Nanjing'],
  'Corea del Sud': ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan', 'Seongnam', 'Changwon'],
  'India': ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow'],
  'Tailandia': ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Koh Samui', 'Hat Yai', 'Hua Hin', 'Ayutthaya', 'Khon Kaen', 'Nakhon Ratchasima'],
  'Vietnam': ['Ho Chi Minh', 'Hanoi', 'Da Nang', 'Hai Phong', 'Can Tho', 'Bien Hoa', 'Hue', 'Nha Trang', 'Vung Tau', 'Qui Nhon'],
  'Malaysia': ['Kuala Lumpur', 'Penang', 'Johor Bahru', 'Ipoh', 'Melaka', 'Kota Kinabalu', 'Kuching', 'Shah Alam', 'Petaling Jaya', 'Iskandar Puteri'],
  'Singapore': ['Singapore'],
  'Indonesia': ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar', 'Palembang', 'Tangerang', 'Depok', 'Yogyakarta'],
  'Filippine': ['Manila', 'Quezon City', 'Davao', 'Cebu', 'Zamboanga', 'Taguig', 'Antipolo', 'Pasig', 'Cagayan de Oro', 'Parañaque'],
  'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Hobart'],
  'Nuova Zelanda': ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Napier-Hastings', 'Dunedin', 'Palmerston North', 'Nelson', 'Rotorua'],
  'Taiwan': ['Taipei', 'Kaohsiung', 'Taichung', 'Tainan', 'Hsinchu', 'Keelung', 'Chiayi', 'Changhua', 'Pingtung', 'Yilan'],
  'Hong Kong': ['Hong Kong'],

  // Nord America
  'Stati Uniti': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
                'Seattle', 'Boston', 'Miami', 'Austin', 'Washington DC', 'Portland', 'Minneapolis', 'Atlanta', 'Denver', 'San Francisco'],
  'Canada': ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener'],
  'Messico': ['Città del Messico', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Juárez', 'León', 'Zapopan', 'Guanajuato', 'Cancún'],

  // Sud America
  'Brasile': ['São Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre'],
  'Argentina': ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'San Miguel de Tucumán', 'Mar del Plata', 'Salta', 'Santa Fe', 'San Juan'],
  'Cile': ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta', 'Temuco', 'Rancagua', 'Talca', 'Arica', 'Chillán'],
  'Colombia': ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta', 'Bucaramanga', 'Pereira', 'Santa Marta', 'Manizales'],
  'Perù': ['Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Piura', 'Iquitos', 'Cusco', 'Huancayo', 'Tacna', 'Ica'],
  'Venezuela': ['Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto', 'Maracay', 'Ciudad Guayana', 'Barcelona', 'Maturín', 'Barinas', 'Mérida'],
  'Ecuador': ['Quito', 'Guayaquil', 'Cuenca', 'Santo Domingo', 'Machala', 'Durán', 'Portoviejo', 'Manta', 'Loja', 'Ambato'],
  'Uruguay': ['Montevideo', 'Salto', 'Ciudad de la Costa', 'Paysandú', 'Las Piedras', 'Rivera', 'Maldonado', 'Tacuarembó', 'Melo', 'Mercedes'],
  'Bolivia': ['La Paz', 'Santa Cruz de la Sierra', 'Cochabamba', 'El Alto', 'Oruro', 'Sucre', 'Tarija', 'Potosí', 'Sacaba', 'Montero'],

  // Africa
  'Sud Africa': ['Johannesburg', 'Città del Capo', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'East London', 'Nelspruit', 'Kimberley', 'Polokwane'],
  'Nigeria': ['Lagos', 'Kano', 'Ibadan', 'Kaduna', 'Port Harcourt', 'Benin City', 'Maiduguri', 'Zaria', 'Aba', 'Jos'],
  'Kenya': ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Kikuyu', 'Ruiru', 'Thika', 'Malindi', 'Kitale'],
  'Marocco': ['Casablanca', 'Rabat', 'Fès', 'Marrakech', 'Tangeri', 'Meknès', 'Oujda', 'Kenitra', 'Agadir', 'Tétouan'],
  'Egitto': ['Il Cairo', 'Alessandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'Mansura', 'Tanta', 'Asyut'],
  'Ghana': ['Accra', 'Kumasi', 'Tamale', 'Sekondi-Takoradi', 'Cape Coast', 'Tema', 'Teshie', 'Obuasi', 'Koforidua', 'Sunyani'],
  'Senegal': ['Dakar', 'Touba', 'Thiès', 'Rufisque', 'Kaolack', 'M\'Bour', 'Ziguinchor', 'Saint-Louis', 'Diourbel', 'Kolda'],
  'Tunisia': ['Tunisi', 'Sfax', 'Sousse', 'Kairouan', 'Biserta', 'Gabès', 'La Goulette', 'Gafsa', 'Monastir', 'Nabeul'],

  // Medio Oriente
  'Emirati Arabi Uniti': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman', 'Ras al-Khaimah', 'Fujairah', 'Umm al-Quwain', 'Khor Fakkan', 'Dibba Al-Fujairah'],
  'Israele': ['Tel Aviv', 'Gerusalemme', 'Haifa', 'Rishon LeZion', 'Petah Tikva', 'Ashdod', 'Netanya', 'Be\'er Sheva', 'Holon', 'Bnei Brak'],
  'Libano': ['Beirut', 'Tripoli', 'Sidone', 'Tiro', 'Jounieh', 'Zahle', 'Baalbek', 'Nabatieh', 'Batroun', 'Byblos'],
  'Turchia': ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana', 'Gaziantep', 'Konya', 'Antalya', 'Kayseri', 'Mersin'],
  'Iran': ['Teheran', 'Mashhad', 'Isfahan', 'Karaj', 'Tabriz', 'Shiraz', 'Qom', 'Ahvaz', 'Kermanshah', 'Urmia']
};