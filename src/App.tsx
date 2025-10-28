import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import StudentDashboard from './components/StudentDashboard';
import LearningPathTracker from './components/LearningPathTracker';
import ZindiChallenges from './components/ZindiChallenges';
import TerritoryMap from './components/TerritoryMap';
import KingsPriestsDashboard from './components/KingsPriestsDashboard';
import SeasonsHub from './components/SeasonsHub';
import ProjectIncubator from './components/ProjectIncubator';
import WealthSimulator from './components/WealthSimulator';
import PitchDeckBuilder from './components/PitchDeckBuilder';
import FundraisingDashboard from './components/FundraisingDashboard';
import StudioIncubation from './components/StudioIncubation';
import IdeaProblemMatcher from './components/IdeaProblemMatcher';
import TeamMatcher from './components/TeamMatcher';
import CaseStudyBuilder from './components/CaseStudyBuilder';
import CorporatePartners from './components/CorporatePartners';
import PilotResults from './components/PilotResults';
import EventCalendar from './components/EventCalendar';
import ImpactReporting from './components/ImpactReporting';
import AdvisoryBoard from './components/AdvisoryBoard';
import Testimonials from './components/Testimonials';
import RevenueModel from './components/RevenueModel';
import LegalStructure from './components/LegalStructure';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import VoiceAssistant from './components/VoiceAssistant';
import FloatingVoiceWidget from './components/FloatingVoiceWidget';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  const renderView = () => {
    switch(currentView) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentView} />;
      case 'dashboard':
        return <StudentDashboard />;
      case 'learning':
        return <LearningPathTracker />;
      case 'challenges':
        return <ZindiChallenges />;
      case 'territory':
        return <TerritoryMap />;
      case 'balance':
        return <KingsPriestsDashboard />;
      case 'seasons':
        return <SeasonsHub />;
      case 'incubator':
        return <ProjectIncubator />;
      case 'wealth':
        return <WealthSimulator onNavigate={setCurrentView} />;
      case 'pitch':
        return <PitchDeckBuilder />;
      case 'fundraising':
        return <FundraisingDashboard />;
      case 'studios':
        return <StudioIncubation />;
      case 'problems':
        return <IdeaProblemMatcher />;
      case 'team':
        return <TeamMatcher />;
      case 'cases':
        return <CaseStudyBuilder />;
      case 'partners':
        return <CorporatePartners />;
      case 'pilot':
        return <PilotResults />;
      case 'events':
        return <EventCalendar />;
      case 'impact':
        return <ImpactReporting />;
      case 'advisory':
        return <AdvisoryBoard />;
      case 'testimonials':
        return <Testimonials />;
      case 'revenue':
        return <RevenueModel onNavigate={setCurrentView} />;
      case 'legal':
        return <LegalStructure />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'voice':
        return <VoiceAssistant />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {currentView !== 'landing' && (
        <Navigation currentView={currentView} onNavigate={setCurrentView} />
      )}
      {renderView()}
      {/* Floating Voice Widget - accessible from all pages */}
      {currentView !== 'landing' && (
        <FloatingVoiceWidget currentView={currentView} onNavigate={setCurrentView} />
      )}
    </div>
  );
}

export default App;
