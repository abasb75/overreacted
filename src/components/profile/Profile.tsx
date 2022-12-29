import './Profile.css';
import avatar from '../../assets/images/profile.jpg';

function Profile(){
    return (<div className={'profile'}>
        <div className='content'>
            <div className='imageHolder'><img src={avatar} alt={'Abbas Bagheri'} /></div>
            <p >Personal blog by <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a> I&nbsp;explain with words and code.</p>
        </div>
    </div>)

}
export default Profile;