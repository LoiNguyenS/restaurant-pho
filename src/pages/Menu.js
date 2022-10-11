import React from 'react'
//import notes from '../assets/data'
//import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import Header from '../components/Header'
const Menu = () => {

    return (
        <div className="menu">
            < Header />
            <div className="menu-div">
                <li>
                    <h2> #1 Pho Combo</h2>
                    <div>
                        <img src={require('/home/lpn/dev/restaurant/my-app/src/images/pho1.jpg')} alt="pho1" width='400' height ='400'/>
                    </div>
                </li>
                <li>
                    <h2> #2 Pho Tai</h2>
                    <div>
                        <img src={require('/home/lpn/dev/restaurant/my-app/src/images/pho2.jpg')} alt="pho2" width='400' height ='400'/>
                    </div>
                </li>
            </div>
        </div >
    )
}

export default Menu