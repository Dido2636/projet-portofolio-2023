import github from '../image/github.png'
import icone from '../image/icone.png'
import box from '../image/box.png'

function Header() {
    return (
        <>
       
        <div className='section-header'>
            <div>
            <h5 className="text-header"> François Truchon</h5>
            </div>
            <div>
            <img src={github} alt="" />
            <img src={icone} alt="" />
            <img src={box} alt="" />
            </div>
        </div>





        </>
        


    )
}

export default Header;