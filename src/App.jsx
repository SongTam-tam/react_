import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './common/Layout';
import GlobalStyle from './styled/GlobalStyld';
import { Event, FAQ, Main, Nuuri, Shop, SPA, Store } from './page';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="nuuri" element={<Nuuri />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="event" element={<Event />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="spa" element={<SPA />} />
                        <Route path="store" element={<Store />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
