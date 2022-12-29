import { Link, Routes ,Route} from 'react-router-dom';
import Toggle from '../toggle/Toggle';
import './Header.css';

function Header() {
    return (<div className="header">
        <Routes>
            <Route path={'/'} element={<h1 className='left'><Link to={'/'}>Overreacted</Link></h1>} />
            <Route path={'/:post'} element={<h3 className='left'><Link to={'/'}>Overreacted</Link></h3>} />
        </Routes>
        
        <div className='right'>
            <Toggle 
            onChange={ ()=>{} }
            isDarkMode={false}
            />
        </div>

    </div>);
}

export default Header;