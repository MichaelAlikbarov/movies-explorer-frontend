import Footer from '../Footer/Footer';
import './LayoutMain.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export default function LayoutMain() {
    return (
        <>
            <Header />
            <main className='main'>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}

