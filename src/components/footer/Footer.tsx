import './Footer.css';

function Footer(){
    return (<footer >
        <div className='right'>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">rss</a>
        </div>
        <a href="https://mobile.twitter.com/dan_abramov" target="_blank" rel="noopener noreferrer">twitter</a> • <a href="https://github.com/gaearon" target="_blank" rel="noopener noreferrer">github</a> • <a href="https://stackoverflow.com/users/458193/dan-abramov" target="_blank" rel="noopener noreferrer">stack overflow</a>    
    </footer>);
}

export default Footer;