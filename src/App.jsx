import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/ContactUs";
import About from "./pages/About";
import LatestIssue from "./pages/Volume";
import ScopeOfJournal from "./pages/Home";
import OpenAccessPolicy from "./pages/policy";
import OnlinePublication from "./pages/publishedPage";
import LatestIssuee from "./pages/latestIssue";
import ManagingBoard from "./pages/managingBoard";
import Instructions from "./pages/instructionToAuthor";
import AdvisoryBoard from "./pages/advisoryBoard";
import JournalArchieves from "./pages/jouranlArchives";
import PublicationEthics from "./pages/publicationEthics";
import SupplementarySeries from "./pages/supplementarySeries";
import SupplementaryArchieve from "./pages/supplementaryArchieves";
import AbstractingIndexingAgencies from "./pages/Abstracting";
import EditorialBoard from "./pages/editorialBoard";
import JapsLoginPage from "./pages/japs-login";
import Abstract from "./pages/abstract";
import Header from "./layout/Header";
import UpdateProfile from "./pages/UserProfile";
import InstitutionDetails from "./pages/UpdateProfile2"
import DisciplineInterest from "./pages/UserProfile3";
import Dashboard from "./pages/ProfileFinish";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScopeOfJournal />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/volumes" element={<LatestIssue />} />
        <Route path="/open-access" element={<OpenAccessPolicy />} />
        <Route path="/published" element={<OnlinePublication />} />
        <Route path="/latest" element={<LatestIssuee />} />
        <Route path="/managing" element={<ManagingBoard />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/advisory" element={<AdvisoryBoard />} />
        <Route path="/archives" element={<JournalArchieves />} />
        <Route path="/ethics" element={<PublicationEthics />} />
        <Route path="/supplementary-series" element={<SupplementarySeries />} />
        <Route path="/supplementary-archive" element={<SupplementaryArchieve />}/>
        <Route path="/indexing" element={<AbstractingIndexingAgencies />} />
        <Route path="/editorial" element={<EditorialBoard />} />
        <Route path="/japs-login" element={<JapsLoginPage />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/header" element={<Header/>}/>
        <Route path="/user-profile" element={<UpdateProfile/>}/>
           <Route path="/user-profile2" element={<InstitutionDetails/>}/>
            <Route path="/user-profile3" element={<DisciplineInterest/>}/>
            <Route path="/profile-finish" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
