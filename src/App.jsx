// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useScrollRestoration } from './components/useScrollRestoration';

import NotFound from './components/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import VideoCourses from './pages/VideoCourses/VideoCourses';

import Js from './pages/Curses/Js/Js';
import Re from './pages/Curses/React_lesson/React_lesson';
import Python from './pages/Curses/Python/Python';
import Django from './pages/Curses/dj/Django';

import Ht1 from './pages/Curses/Ht1/Ht1';
import H2 from './pages/Curses/H2/H2';
import C3 from './pages/Curses/C3/C3';
import AJ5 from './pages/Curses/AJ5/AJ5';
import JQ6 from './pages/Curses/JQ6/JQ6';
import PHP7 from './pages/Curses/PHP7/PHP7';
import PHP8 from './pages/Curses/PHP8/PHP8';
import Un9 from './pages/Curses/Un9/Un9';

import Ad11 from './pages/Curses/ad11/ad11';
import Ua12 from './pages/Curses/ua12/ua12';
import Ja13 from './pages/Curses/Ja13/Ja13';
import Un14 from './pages/Curses/Un14/Un14';
import Cpp15 from './pages/Curses/Cpp15/Cpp15';
import Csh16 from './pages/Curses/csh16/Csh16';
import Un17 from './pages/Curses/Un17/Un17';
import Py18 from './pages/Curses/py18/Py18';
import Bo19 from './pages/Curses/bo19/bo19';
import Un20 from './pages/Curses/un20/un20';

import Un21 from './pages/Curses/un21/un21';
import Un22 from './pages/Curses/un22/un22';
import Cpp23 from './pages/Curses/cpp23/cpp23';
import Un24 from './pages/Curses/un24/un24';
import Bl25 from './pages/Curses/bl25/bl25';
import Va26 from './pages/Curses/va26/va26';
import Py27 from './pages/Curses/py27/py27';
import Ja28 from './pages/Curses/ja28/Ja28';
import C29 from './pages/Curses/c29/C29';
import Js30 from './pages/Curses/js30/Js30';

import Dj31 from './pages/Curses/dj31/dj31';
import St32 from './pages/Curses/st32/st32';
import Vu33 from './pages/Curses/vu33/vu33';
import Ja34 from './pages/Curses/ja34/Ja34';
import Ru36 from './pages/Curses/ru36/ru36';
import Php37 from './pages/Curses/php37/PHP37';
import Ru38 from './pages/Curses/ru38/ru38';
import Js39 from './pages/Curses/js39/js39';
import Ph40 from './pages/Curses/ph40/ph40';

import Co41 from './pages/Curses/co41/co41';
import Sw42 from './pages/Curses/sw42/Sw42';
import Cm43 from './pages/Curses/cm43/CM43';
import Un44 from './pages/Curses/un44/un44';
import Csh45 from './pages/Curses/csh45/csh45';
import Cpp46 from './pages/Curses/cpp46/cpp46';
import Mo47 from './pages/Curses/mo47/mo47';
import Ja48 from './pages/Curses/ja48/ja48';
import Pd49 from './pages/Curses/pd49/Pd49';
import Vw50 from './pages/Curses/vw50/vw50';

import Js51 from './pages/Curses/js51/js51';
import An52 from './pages/Curses/an52/an52';
import Bu53 from './pages/Curses/Bu53/Bu53';
import An54 from './pages/Curses/an54/an54';
import Git55 from './pages/Curses/git55/Git55';
import Csh56 from './pages/Curses/csh56/Csh56';
import An57 from './pages/Curses/an57/an57';
import Un58 from './pages/Curses/un58/un58';
import Asp59 from './pages/Curses/asp59/asp59';
import Sql60 from './pages/Curses/sql60/sql60';

import Gu61 from './pages/Curses/gu61/gu61';
import Sa62 from './pages/Curses/sa62/sa62';
import Go63 from './pages/Curses/go63/go63';
import Csh64 from './pages/Curses/csh64/csh64';
import Un65 from './pages/Curses/un65/un65';
import Fl66 from './pages/Curses/fl66/fl66';
import C67 from './pages/Curses/c67/c67';
import Ja68 from './pages/Curses/ja68/ja68';
import La69 from './pages/Curses/la69/la69';
import Me70 from './pages/Curses/me70/me70';

import Me71 from './pages/Curses/me71/me71';
import Do72 from './pages/Curses/do72/do72';
import Fy73 from './pages/Curses/fy73/fy73';
import Li74 from './pages/Curses/li74/li74';
import Py75 from './pages/Curses/py75/py75';
import An76 from './pages/Curses/an76/an76';
import Fl77 from './pages/Curses/fl77/fl77';
import Re78 from './pages/Curses/re78/re78';
import Go79 from './pages/Curses/go79/go79';
import Py80 from './pages/Curses/py80/py80';

import Ko81 from './pages/Curses/ko81/ko81';
import Csh82 from './pages/Curses/csh82/csh82';
import Wo83 from './pages/Curses/wo83/wo83';
import Te84 from './pages/Curses/te84/te84';
import Csh85 from './pages/Curses/csh85/csh85';
import Cpp86 from './pages/Curses/cpp86/cpp86';
import Os87 from './pages/Curses/os87/os87';
import Un88 from './pages/Curses/un88/un88';
import Re89 from './pages/Curses/re89/re89';
import So90 from './pages/Curses/so90/so90';

import Ja91 from './pages/Curses/ja91/ja91';
import Cpp92 from './pages/Curses/cpp92/cpp92';
import Csh93 from './pages/Curses/csh93/csh93';
import Un94 from './pages/Curses/un94/un94';
import Py95 from './pages/Curses/py95/py95';
import Js96 from './pages/Curses/js96/js96';
import Ja97 from './pages/Curses/ja97/ja97';
import Py98 from './pages/Curses/py98/py98';
import Re99 from './pages/Curses/re99/re99';
import Csh100 from './pages/Curses/csh100/csh100';

import Ru101 from './pages/Curses/ru101/ru101';
import Da102 from './pages/Curses/da102/da102';
import Js103 from './pages/Curses/js103/js103';
import Qa104 from './pages/Curses/qa104/qa104';
import Js105 from './pages/Curses/js105/js105';
import Da106 from './pages/Curses/da106/da106';
import Py107 from './pages/Curses/py107/py107';


import './App.css'; // Путь правильный ('./', а не '../src/')

function ScrollManager() {
    useScrollRestoration();
    return null;
  }
  

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // 1.5 секунды загрузки

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='app'>
            <Router>
            <ScrollManager />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/video-courses" element={<VideoCourses />} />

                    <Route path="/js" element={<Js />} />
                    <Route path="/react_lesson" element={<Re />} />
                    <Route path="/python" element={<Python />} />
                    <Route path="/django" element={<Django />} />

                    <Route path="/ht1" element={<Ht1 />} />
                    <Route path="/h2" element={<H2 />} />
                    <Route path="/C3" element={<C3 />} /> 
                    <Route path="/AJ5" element={<AJ5 />} /> 
                    <Route path="/JQ6" element={<JQ6 />} /> 
                    <Route path="/PHP7" element={<PHP7 />} /> 
                    <Route path="/PHP8" element={<PHP8 />} /> 
                    <Route path="/Un9" element={<Un9 />} /> 
                    <Route path="/ad11" element={<Ad11 />} /> 
                    <Route path="/ua12" element={<Ua12 />} /> 
                    <Route path="/ja13" element={<Ja13 />} /> 
                    <Route path="/Un14" element={<Un14 />} /> 
                    <Route path="/Cpp15" element={<Cpp15 />} /> 
                    <Route path="/Csh16" element={<Csh16 />} /> 
                    <Route path="/Un17" element={<Un17 />} /> 
                    <Route path="/Py18" element={<Py18 />} /> 
                    <Route path="/bo19" element={<Bo19 />} /> 

                    <Route path="/un20" element={<Un20 />} /> 
                    <Route path="/un21" element={<Un21 />} /> 
                    <Route path="/un22" element={<Un22 />} /> 
                    <Route path="/cpp23" element={<Cpp23 />} /> 
                    <Route path="/un24" element={<Un24 />} /> 
                    <Route path="/bl25" element={<Bl25 />} /> 
                    <Route path="/va26" element={<Va26 />} /> 
                    <Route path="/py27" element={<Py27 />} /> 
                    <Route path="/ja28" element={<Ja28 />} /> 
                    <Route path="/c29" element={<C29 />} /> 
                    <Route path="/js30" element={<Js30 />} /> 

                    <Route path="/dj31" element={<Dj31 />} /> 
                    <Route path="/st32" element={<St32 />} /> 
                    <Route path="/vu33" element={<Vu33 />} /> 
                    <Route path="/ja34" element={<Ja34 />} /> 
                    <Route path="/ru36" element={<Ru36 />} /> 
                    <Route path="/php37" element={<Php37 />} />
                    <Route path="/ru38" element={<Ru38 />} /> 
                    <Route path="/js39" element={<Js39 />} /> 
                    <Route path="/ph40" element={<Ph40 />} /> 

                    <Route path="/co41" element={<Co41 />} /> 
                    <Route path="/sw42" element={<Sw42 />} /> 
                    <Route path="/cm43" element={<Cm43 />} /> 
                    <Route path="/un44" element={<Un44 />} /> 
                    <Route path="/csh45" element={<Csh45 />} /> 
                    <Route path="/cpp46" element={<Cpp46 />} /> 
                    <Route path="/mo47" element={<Mo47 />} /> 
                    <Route path="/ja48" element={<Ja48 />} /> 
                    <Route path="/pd49" element={<Pd49 />} /> 
                    <Route path="/vw50" element={<Vw50 />} /> 

                    <Route path="/js51" element={<Js51 />} /> 
                    <Route path="/An52" element={<An52 />} /> 
                    <Route path="/Bu53" element={<Bu53 />} /> 
                    <Route path="/An54" element={<An54 />} /> 
                    <Route path="/Git55" element={<Git55 />} /> 
                    <Route path="/Csh56" element={<Csh56 />} /> 
                    <Route path="/An57" element={<An57 />} /> 
                    <Route path="/Un58" element={<Un58 />} /> 
                    <Route path="/Asp59" element={<Asp59 />} /> 
                    <Route path="/Sql60" element={<Sql60 />} /> 

                    <Route path="/Gu61" element={< Gu61 />} /> 
                    <Route path="/Sa62" element={< Sa62 />} /> 
                    <Route path="/Go63" element={< Go63 />} /> 
                    <Route path="/Csh64" element={< Csh64 />} /> 
                    <Route path="/Un65" element={< Un65 />} /> 
                    <Route path="/Fl66" element={< Fl66 />} /> 
                    <Route path="/C67" element={< C67 />} /> 
                    <Route path="/Ja68" element={< Ja68 />} /> 
                    <Route path="/La69" element={< La69 />} /> 
                    <Route path="/Me70" element={< Me70 />} /> 

                    <Route path="/Me71" element={< Me71 />} /> 
                    <Route path="/Do72" element={< Do72 />} /> 
                    <Route path="/Fy73" element={< Fy73 />} /> 
                    <Route path="/Li74" element={< Li74 />} /> 
                    <Route path="/Py75" element={< Py75 />} /> 
                    <Route path="/An76" element={< An76 />} /> 
                    <Route path="/Fl77" element={< Fl77 />} /> 
                    <Route path="/Re78" element={< Re78 />} /> 
                    <Route path="/Go79" element={< Go79 />} /> 
                    <Route path="/Py80" element={< Py80 />} /> 

                    <Route path="/Ko81" element={< Ko81 />} /> 
                    <Route path="/Csh82" element={< Csh82 />} /> 
                    <Route path="/Wo83" element={< Wo83 />} /> 
                    <Route path="/Te84" element={< Te84 />} /> 
                    <Route path="/Csh85" element={< Csh85 />} /> 
                    <Route path="/Cpp86" element={< Cpp86 />} /> 
                    <Route path="/Os87" element={< Os87 />} /> 
                    <Route path="/Un88" element={< Un88 />} /> 
                    <Route path="/Re89" element={< Re89 />} /> 
                    <Route path="/So90" element={< So90 />} /> 

                    <Route path="/Ja91" element={< Ja91 />} /> 
                    <Route path="/Cpp92" element={< Cpp92 />} /> 
                    <Route path="/Csh93" element={< Csh93 />} /> 
                    <Route path="/Un94" element={< Un94 />} /> 
                    <Route path="/Py95" element={< Py95 />} /> 
                    <Route path="/Js96" element={< Js96 />} /> 
                    <Route path="/Ja97" element={< Ja97 />} /> 
                    <Route path="/Py98" element={< Py98 />} /> 
                    <Route path="/Re99" element={< Re99 />} /> 
                    <Route path="/Csh100" element={< Csh100 />} /> 

                    <Route path="/Ru101" element={< Ru101 />} /> 
                    <Route path="/Da102" element={< Da102 />} /> 
                    <Route path="/Js103" element={< Js103 />} /> 
                    <Route path="/Qa104" element={< Qa104 />} /> 
                    <Route path="/Js105" element={< Js105 />} /> 
                    <Route path="/Da106" element={< Da106 />} /> 
                    <Route path="/Py107" element={< Py107 />} /> 
                    

                    {/* Страница 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;






