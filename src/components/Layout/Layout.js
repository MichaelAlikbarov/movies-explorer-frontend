import Footer from '../Footer/Footer';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Layout() {
    return (
        <>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;