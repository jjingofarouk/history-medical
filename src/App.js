import React, { useState } from 'react';
import { 
  User, 
  AlertTriangle, 
  FileText, 
  Building2, 
  Users, 
  Globe, 
  Stethoscope, 
  Search,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Save
} from 'lucide-react';
import PersonalInfo from './components/PersonalInfo';
import ChiefComplaint from './components/ChiefComplaint';
import HistoryOfPresentIllness from './components/HistoryOfPresentIllness';
import PastMedicalHistory from './components/PastMedicalHistory';
import FamilyHistory from './components/FamilyHistory';
import SocialHistory from './components/SocialHistory';
import ReviewOfSystems from './components/ReviewOfSystems';
import ExaminationFindings from './components/ExaminationFindings';

const App = () => {
  const [patientData, setPatientData] = useState({
    personalInfo: {},
    chiefComplaint: '',
    historyOfPresentIllness: '',
    pastMedicalHistory: {},
    familyHistory: '',
    socialHistory: {},
  });

  const [selectedSection, setSelectedSection] = useState('personalInfo');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState('basic');

  const handleInputChange = (section, field, value) => {
    setPatientData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'personalInfo':
        return <PersonalInfo personalInfo={patientData.personalInfo} handleInputChange={handleInputChange} />;
      case 'chiefComplaint':
        return <ChiefComplaint chiefComplaint={patientData.chiefComplaint} handleInputChange={handleInputChange} />;
      case 'historyOfPresentIllness':
        return <HistoryOfPresentIllness historyOfPresentIllness={patientData.historyOfPresentIllness} handleInputChange={handleInputChange} />;
      case 'pastMedicalHistory':
        return <PastMedicalHistory pastMedicalHistory={patientData.pastMedicalHistory} handleInputChange={handleInputChange} />;
      case 'familyHistory':
        return <FamilyHistory familyHistory={patientData.familyHistory} handleInputChange={handleInputChange} />;
      case 'socialHistory':
        return <SocialHistory socialHistory={patientData.socialHistory} handleInputChange={handleInputChange} />;
      case 'reviewOfSystems':
        return <ReviewOfSystems patientData={patientData} handleInputChange={handleInputChange} />;
      case 'examinationFindings':
        return <ExaminationFindings />;
      default:
        return <p className="text-gray-500 p-4">Please select a section to fill out.</p>;
    }
  };

  // Organize sections into categories
  const navigationCategories = [
    {
      id: 'basic',
      name: 'Basic Information',
      sections: [
        { id: 'personalInfo', label: 'Patient Demographics', icon: User },
        { id: 'chiefComplaint', label: 'Chief Complaint', icon: AlertTriangle },
      ]
    },
    {
      id: 'history',
      name: 'Patient History',
      sections: [
        { id: 'historyOfPresentIllness', label: 'Present Illness', icon: FileText },
        { id: 'pastMedicalHistory', label: 'Past Medical History', icon: Building2 },
        { id: 'familyHistory', label: 'Family History', icon: Users },
        { id: 'socialHistory', label: 'Social History', icon: Globe },
      ]
    },
    {
      id: 'examination',
      name: 'Examination',
      sections: [
        { id: 'reviewOfSystems', label: 'Review of Systems', icon: Stethoscope },
        { id: 'examinationFindings', label: 'Examination Findings', icon: Search },
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-0 left-0 z-20 p-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-200 ease-in-out fixed md:static md:translate-x-0 z-10 w-64 h-full bg-white shadow-md overflow-y-auto`}>
        <div className="p-5 border-b">
          <h2 className="text-xl font-bold text-gray-800">Patient Record</h2>
          <p className="text-sm text-gray-500">Medical History Form</p>
        </div>

        <nav className="p-2">
          {navigationCategories.map((category) => (
            <div key={category.id} className="mb-2">
              <button 
                className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => toggleCategory(category.id)}
              >
                <span className="font-medium">{category.name}</span>
                {expandedCategory === category.id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
              
              {expandedCategory === category.id && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        className={`flex items-center w-full p-2 text-left rounded-md ${selectedSection === section.id ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                        onClick={() => {
                          setSelectedSection(section.id);
                          if (window.innerWidth < 768) {
                            setSidebarOpen(false);
                          }
                        }}
                      >
                        <Icon size={16} className="mr-2" />
                        <span className="text-sm">{section.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t mt-auto">
          <button
            onClick={() => console.log(patientData)}
            className="flex items-center justify-center w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Save size={16} className="mr-2" />
            Save Record
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              {navigationCategories.flatMap(cat => cat.sections).find(section => section.id === selectedSection)?.label || 'Patient Record'}
            </h1>
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              <Menu size={20} />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="bg-white rounded-lg shadow p-6">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
