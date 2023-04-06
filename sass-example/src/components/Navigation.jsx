import './Navigation.scss';

function Navigation() {
    return (
        <nav className='navigation'>
            <a href="#" className='navigation__link active'>Home</a>
            <a href="#" className='navigation__link'>How it works</a>
            <a href="#" className='navigation__link'>Features</a>
            <a href="#" className='navigation__link'>Contact</a>
        </nav>
    )
}

export default Navigation;