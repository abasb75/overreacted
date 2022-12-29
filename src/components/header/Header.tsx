import { Link, Routes ,Route} from 'react-router-dom';
import Toggle from '../toggle/Toggle';
import './Header.css';

function Header() {
    return (<div className="header">
        <Routes>
            <Route path={'/'} element={<h1 className='left'><Link to={'/'}>Overreacted</Link></h1>} />
            <Route path={'/:post'} element={<h3 className='left'><Link to={'/'}>Overreacted</Link></h3>} />
        </Routes>
        
        {window.store && <div className='right'>
            <Toggle 
            onChange={window.store ? window.store.setDarkMode : ()=>{} }
            isDarkMode={false}
            />
        </div>}

    </div>);
}

export default Header;