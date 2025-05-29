import { useState } from 'react';
import { getStatistics } from '@/data/galleries';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FFF', '#FF6384', '#4BC0C0'];

export function StatistichePage() {
  const [activeTab, setActiveTab] = useState('continenti');
  const stats = getStatistics();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Statistiche Database
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500 mb-1">Gallerie Totali</h2>
          <p className="text-2xl font-bold text-amber-700">{stats.totalGalleries}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500 mb-1">Paesi</h2>
          <p className="text-2xl font-bold text-amber-700">{stats.totalCountries}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500 mb-1">Città</h2>
          <p className="text-2xl font-bold text-amber-700">{stats.totalCities}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500 mb-1">Gallerie Verificate</h2>
          <p className="text-2xl font-bold text-amber-700">
            {stats.verifiedGalleries} 
            <span className="text-sm font-normal text-gray-500 ml-1">
              (100%)
            </span>
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('continenti')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'continenti'
                  ? 'text-amber-700 border-b-2 border-amber-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Continenti
            </button>
            
            <button
              onClick={() => setActiveTab('paesi')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'paesi'
                  ? 'text-amber-700 border-b-2 border-amber-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Paesi
            </button>
            
            <button
              onClick={() => setActiveTab('citta')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'citta'
                  ? 'text-amber-700 border-b-2 border-amber-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Città
            </button>
            
            <button
              onClick={() => setActiveTab('tipologie')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'tipologie'
                  ? 'text-amber-700 border-b-2 border-amber-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Tipologie
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {activeTab === 'continenti' && (
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stats.continentDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {stats.continentDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, 'Gallerie']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Distribuzione per Continente</h3>
                <div className="space-y-2">
                  {stats.continentDistribution.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-gray-700">{item.name}</span>
                          <span className="text-gray-700 font-medium">{item.value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div 
                            className="h-1.5 rounded-full" 
                            style={{ 
                              width: `${item.percentage}%`,
                              backgroundColor: COLORS[index % COLORS.length]
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'paesi' && (
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={stats.topCountries}
                  margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                >
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip formatter={(value) => [value, 'Gallerie']} />
                  <Bar dataKey="value" fill="#8884d8">
                    {stats.topCountries.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          
          {activeTab === 'citta' && (
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={stats.topCities}
                  margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                >
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip formatter={(value) => [value, 'Gallerie']} />
                  <Bar dataKey="value" fill="#8884d8">
                    {stats.topCities.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          
          {activeTab === 'tipologie' && (
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stats.galleryTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value, percent }) => `${name.substring(0, 10)}...: ${(percent * 100).toFixed(1)}%`}
                    >
                      {stats.galleryTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, 'Gallerie']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Distribuzione per Tipologia</h3>
                <div className="space-y-2">
                  {stats.galleryTypes.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-gray-700">{item.name}</span>
                          <span className="text-gray-700 font-medium">{item.value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div 
                            className="h-1.5 rounded-full" 
                            style={{ 
                              width: `${item.percentage}%`,
                              backgroundColor: COLORS[index % COLORS.length]
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}