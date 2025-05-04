// components/Sidebar.js or Sidebar.tsx (if using TypeScript)
import React from 'react';
import {
  User,
  AlertTriangle,
  FileText,
  Building2,
  Users,
  Globe,
  Stethoscope,
  Search,
} from 'lucide-react';

const sections = [
  { key: 'personalInfo', label: 'Patient Demographics', icon: User },
  { key: 'chiefComplaint', label: 'Presenting Complaint', icon: AlertTriangle },
  { key: 'historyOfPresentIllness', label: 'History of Present Illness', icon: FileText },
  { key: 'pastMedicalHistory', label: 'Past Medical History', icon: Building2 },
  { key: 'familyHistory', label: 'Family History', icon: Users },
  { key: 'socialHistory', label: 'Social History', icon: Globe },
  { key: 'reviewOfSystems', label: 'Review of Systems', icon: Stethoscope },
  { key: 'examinationFindings', label: 'Examination Findings', icon: Search },
];

const Sidebar = ({ selectedSection, onSelect }) => {
  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <div className="p-4 text-center font-bold text-xl text-blue-600">
        History Trainer
      </div>
      <nav className="flex flex-col space-y-1 p-2">
        {sections.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`flex items-center space-x-3 px-4 py-2 rounded-md text-left hover:bg-blue-100 ${
              selectedSection === key ? 'bg-blue-200 font-semibold' : 'text-gray-700'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;