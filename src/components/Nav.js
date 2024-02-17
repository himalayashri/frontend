import osLogo from '../images/osumare.svg';
// import 'font-awesome/css/font-awesome.min.css';

function Nav () {
    return(
        <div className='nav'>
        <img src={osLogo} alt="osumare-logo" />
        <button>Contact Us</button>
        </div>
    )
}

export default Nav;