import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Home from '../components/Home'


export const DashboardRoutes = ({ isAuthenticated }) => {
    return (
        <>
        <div>
                <Routes >
                    <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
} 
