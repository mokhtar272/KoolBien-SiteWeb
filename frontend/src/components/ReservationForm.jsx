import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronLeft, ChevronRight, Calendar, Clock, Users, MapPin, Check } from 'lucide-react';

export default function ReservationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    numberOfPeople: '',
    date: new Date(),
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handlePeopleSelect = (count) => {
    setFormData({ ...formData, numberOfPeople: count });
    setShowPeopleDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const timeOptions = [
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", 
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", 
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", 
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"
  ];

  const nextStep = () => {
    if (formData.numberOfPeople && formData.date && formData.time) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
            <div className="p-2 py-6 sm:p-6 bg-white rounded-lg shadow-sm font-bold mx-2">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">Reservation a Kool Bien</h1>
            
            <div className="mb-6">
              <div className="flex border-b sm:justify-normal justify-center">
              <div className="text-[#C75000] md:text-lg text-sm font-bold border-b-2 border-[#C75000] pb-2 mr-4">
              1.Trouver une table
                </div>
                <div className="text-gray-500 md:text-lg text-sm pb-2 flex items-center">
                  2.Vos coordonnées
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-0 mb-6 border-gray-300 border-2 rounded-lg">
              <div className="relative">
                <button 
                  className="w-full px-4 py-2 bg-white border border-gray-300  rounded-l-md text-left flex justify-between items-center"
                  onClick={() => setShowPeopleDropdown(!showPeopleDropdown)}
                >
                  <span className="text-gray-700">{formData.numberOfPeople || 'Nombre'}</span>
                  <span className="text-gray-400">▼</span>
                </button>
                {showPeopleDropdown && (
                  <div className="absolute z-10 w-full bg-white border rounded mt-1 shadow-lg">
                    {[1, 2, 3, 4, 5].map(num => (
                      <div 
                        key={num} 
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                        onClick={() => handlePeopleSelect(num)}
                      >
                        {num} {num === 1 ? 'Personne' : 'Personnes'}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='relative'>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="w-full  px-4 py-2 bg-white text-left text-gray-700 outline-none border-l sm:border border-gray-300 "
                  placeholderText="Date"
                />
              </div>
              <div>
                <select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-left text-gray-700 outline-none rounded-r-md border border-gray-300"
                >
                  <option value="">Heure</option>
                  {timeOptions.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                Dans le cas où l'heure choisie serait déjà prise, nous te suggérerons des créneaux encore disponibles.
              </p>
            </div>
            <div className="flex justify-center sm:justify-start">
                 <button 
              onClick={nextStep}
              disabled={!formData.numberOfPeople || !formData.date || !formData.time}
              className=" w-32 px-4 py-2 bg-[#C75000] text-white rounded hover:bg-[#C75000] disabled:bg-orange-300 disabled:cursor-not-allowed cursor-pointer "
            >
              Rechercher
            </button>
            </div>
           
          </div>
        );
      case 2:
        return (
          <div className="p-2 py-6 sm:p-6 bg-white rounded-lg shadow-sm font-bold">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">Reservation a Kool Bien</h1>
            
            <div className="mb-6">
              <div className="flex border-b sm:justify-normal justify-center">
                <div className="text-gray-500 md:text-lg text-sm pb-2 mr-4 flex items-center">
                  <Check size={16} className="mr-1 text-[#C75000]" />
                  Trouver une table
                </div>
                <div className="text-[#C75000] md:text-lg text-sm font-bold border-b-2 border-[#C75000] pb-2">
                  2.Vos coordonnées
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center  gap-4">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Nom"
                      className="w-full px-4 py-3 border rounded-lg border-gray-400 text-black font-normal outline-none"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Prenom"
                      className="w-full px-4 py-3 border rounded-lg border-gray-400 text-black font-normal outline-none"
                      required
                    />
                  </div>
                  <div className="mb-4 flex">
                    <div className="w-12 bg-gray-200 border flex items-center justify-center rounded-l">
                      <span className="text-sm">🇫🇷</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Numero de Telephone"
                      className="w-full px-4 py-3 rounded-r-lg border-r border-t border-b border-gray-400 text-black font-normal outline-none"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Adresse Email"
                      className="w-full px-4 py-3 border rounded-lg border-gray-400 text-black font-normal outline-none"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full px-4 py-2 bg-[#C75000] text-white rounded hover:bg-orange-700"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
              <div className="pl-6 border-l">
                <h3 className="font-medium text-lg text-gray-800 mb-4">Restaurant Kool Bien</h3>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {formData.date.toLocaleDateString('fr-FR', { 
                      day: '2-digit', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span>{formData.time}</span>
                </div>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <Users size={16} className="mr-2" />
                  <span>{formData.numberOfPeople} {formData.numberOfPeople === 1 ? 'Personne' : 'Personnes'}</span>
                </div>
                <div className="flex items-start mb-4 text-sm text-gray-600">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <span>3 Rue du 8 Mai 1945, 29200 Brest, France</span>
                </div>
                <p className="text-xs text-gray-500">
                  Une confirmation vous sera envoyée par e-mail ou par téléphone.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSuccess = () => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm text-center font-bold mx-2">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Reservation a Kool Bien</h1>
        
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-[#C75000] flex items-center justify-center">
            <Check size={40} className="text-white" />
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-4 text-gray-700">Confirmation effectuée</h2>
        
        <p className="text-gray-600 mb-8">
          Vous recevrez prochainement un e-mail ou un appel de notre part
        </p>
        
        <button 
          onClick={() => {
            setShowSuccess(false);
            setStep(1);
            setFormData({
              numberOfPeople: '',
              date: new Date(),
              time: '',
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
            });
          }}
          className="px-4 py-2 bg-[#C75000] text-white rounded hover:bg-orange-700"
        >
          Réserver de nouveau
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {showSuccess ? renderSuccess() : renderStep()}
    </div>
  );
}