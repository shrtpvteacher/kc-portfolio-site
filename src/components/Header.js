// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Kelly Coldren" />

            <div className='header__content'>
                <h1>Hi, I'm Kelly Anne and I'm a </h1>
                <p>Solidity Smart Contract Developer</p>
                <a href="mailto:shrtpvteacher@protonmail.com" className='button'>Send email</a>   
            </div>
        </section>
    );
}

export default Header;