import { Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}

export default App;
