import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Card2 } from './components/Card2';
import { CardDetails } from './components/CardDetails';
import { CardProvider } from './components/CardContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { Scrollbar } from './components/Scrollbar';
import HomePage from './pages/HomePage/HomePage';
import LoginSignupForm from './components/LoginSignupForm';
import Map from './components/Map';
import { ScrollCard } from './components/ScrollCard';

function App() {
  return (
    <Router>
      <CardProvider>
        <Header />
        <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
         
          {/* Define your routes here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoginSignupForm" element={<LoginSignupForm />} />
            <Route path="/card" element={<Card2 />} />
            <Route path="/details/:id" element={<CardDetails />} />
          </Routes>
        </main>
        {/* <ScrollCard/> */}
        <Map/>
        <Footer />
      </CardProvider>
    </Router>
  );
}

export default App;
