import {useNavigate} from 'react-router-dom';



export function NavBar (){
    const navigate = useNavigate();



    return (
        <header className="headerContainer">
            <div className="headerContent">
                <div className="subMedia">
                    <div className="navWrapper">
                        <a className="logo" href="/">
                            <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='logo'></img>
                        </a>
            
                    </div>
                    <div className="flex">
                        <ul className="primary">
                            <li className="translate">
                                <div className="transStyle">EN</div>
                            </li>
                            <li className="searchIcon">
                               <div className="searchIconStyle"></div>
                            </li>
                            <li>
                               <button className="watchListTab" onClick={()=>{
                                navigate('watchList')
                               }}>Watchlist</button>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>
        </header>
    )
}