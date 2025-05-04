import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User, AlertTriangle, FileText, Building2,
  Users, Globe, Stethoscope, Search
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./HomePage.css"

import demographicsImage from './demographics.jpeg';
import complaintImage from './complaint.jpeg';
import historyImage from './history.jpeg';
import medicalImage from './medical.jpeg';
import familyImage from './family.jpeg';
import socialImage from './social.jpeg';
import systemsImage from './systems.jpeg';
import examImage from './exam.jpeg';

const sections = [
  { key: 'personalInfo', label: 'Patient Demographics', icon: <User size={28} />, image: demographicsImage },
  { key: 'chiefComplaint', label: 'Presenting Complaint', icon: <AlertTriangle size={28} />, image: complaintImage },
  { key: 'historyOfPresentIllness', label: 'History of Present Illness', icon: <FileText size={28} />, image: historyImage },
  { key: 'pastMedicalHistory', label: 'Past Medical History', icon: <Building2 size={28} />, image: medicalImage },
  { key: 'familyHistory', label: 'Family History', icon: <Users size={28} />, image: familyImage },
  { key: 'socialHistory', label: 'Social History', icon: <Globe size={28} />, image: socialImage },
  { key: 'reviewOfSystems', label: 'Review of Systems', icon: <Stethoscope size={28} />, image: systemsImage },
  { key: 'examinationFindings', label: 'Examination Findings', icon: <Search size={28} />, image: examImage },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Navbar />
      <h1 className="app-header">Welcome to MedForm</h1>
      <p className="app-description">
        Fill out each section below to complete the clinical assessment.
      </p>

      <div className="card-grid">
        {sections.map((section) => (
          <div
            key={section.key}
            className="section-card"
            onClick={() => navigate(`/section/${section.key}`)}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${section.image})` }}
            />
            {section.icon}
            <span>{section.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}