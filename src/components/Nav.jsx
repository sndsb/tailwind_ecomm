import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom';
import { paths } from '../routing/path';
const Nav = () => {
    return (
        <header className="py-8 absolute z-10 w-full">
            <nav className='flex justify-between items-center max-container'>
                <Link to={paths.home.home}>
                    <img src={headerLogo} alt='LOGO' width={130} height={29} />
                </Link>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks?.map((item) => (
                        <li key={item.label}>
                            <Link to={item?.href} className='font-montserrat leading-normal text-lg text-slate-grey'>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                     <li key='login'>
                            <Link to={paths.auth.login} className='font-montserrat leading-normal text-lg text-slate-grey'>
                                Login 
                            </Link>
                        </li>
                </ul>

                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt='Hamburger' width={25} height={25} />
                </div>
            </nav>

        </header>
    )
}

export default Nav