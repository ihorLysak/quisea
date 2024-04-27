import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/mainPage/MainPage';

import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}

export default App;
library.add(fab, fas, far);
