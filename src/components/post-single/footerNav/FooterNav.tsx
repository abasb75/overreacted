import { Link } from 'react-router-dom';
import './FooterNav.css';

function FooterNav(){
    return (<nav>
        <ul>
            <li className='left'><Link to={'/'}>← Name It, and They Will Come</Link></li>
            <li className='right'><Link to={'/'}>Algebraic Effects for the Rest of Us →</Link></li>
        </ul>
    </nav>)
}

export default FooterNav;