import { useState } from 'react';
import { countries } from '@/data/galleries';

export function ProponiGalleriaPage() {
  const [formData, setFormData] = useState({
    country: '',
    name: '',
    website: '',
    email: ''
  });
  
  const [errors, setErrors] = useState({
    country: '',
    name: '',
    email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {
      country: !formData.country ? 'Seleziona un paese' : '',
      name: !formData.name ? 'Inserisci il nome della galleria' : '',
      email: !formData.email ? 'Inserisci un\'email valida' : 
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) ? 'Email non valida' : ''
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        country: '',
        name: '',
        website: '',
        email: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <img 
            src="/images/form-icon.jpg" 
            alt="Proponi Galleria" 
            className="h-12 w-12 mr-4" 
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Proponi una Galleria
            </h1>
            <p className="text-gray-600">
              Aiutaci ad ampliare il nostro database di gallerie d'arte emergenti
            </p>
          </div>
        </div>
        
        {isSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Grazie per la tua proposta! La galleria sarà esaminata dal nostro team prima di essere pubblicata.
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Paese *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Seleziona un paese</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome della Galleria *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nome della galleria"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Sito Internet
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="https://www.example.com"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="email@example.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Proposta'}
                </button>
              </div>
            </div>
          </form>
        </div>
        
        <div className="mt-6 text-sm text-gray-600">
          <p>
            * Campi obbligatori. La tua proposta sarà esaminata dal nostro team prima di essere pubblicata.
          </p>
        </div>
      </div>
    </div>
  );
}