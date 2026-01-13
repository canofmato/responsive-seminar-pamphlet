import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import Home from '../pages/Home/Home';
import Overview from '../pages/Overview/Overview';
import Time from '../pages/Overview/Time';
import Dacos from '../pages/Overview/Dacos';
import GenAI1 from '../pages/Overview/GenAI1';
import GenAI2 from '../pages/Overview/GenAI2';
import NLP from '../pages/Overview/NLP';
import CV from '../pages/Overview/CV';
import RecSys from '../pages/Overview/RecSys';
import CMT from '../pages/Overview/CMT';

function AppRouter() {
  return (
    <BrowserRouter>
    <div className="bg-black flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/overview/time" element={<Time />} />
        <Route path="/overview/dacos" element={<Dacos />} />
        <Route path="/overview/genai1" element={<GenAI1 />} />
        <Route path="/overview/genai2" element={<GenAI2 />} />
        <Route path="/overview/nlp" element={<NLP />} />
        <Route path="/overview/cv" element={<CV />} />
        <Route path="/overview/recsys" element={<RecSys />} />
        <Route path="/overview/cmt" element={<CMT />} />
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default AppRouter;
