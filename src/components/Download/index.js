import './style.scss'
import phoneView from '../../assets/download1.png';
import strange from '../../assets/download2.png';
export const Download = () => {
    return ( 
        <div className='download'>
            <div className='left'>
                <img className='boxTv' src={phoneView} alt="tv" />
                <img className="scene" src={strange} alt='scene' />
            </div>
            <div className='right'>
                <div>
                <p className='heading'>Download your shows to watch offline.</p>
                <h3>Save your favourites easily and always have something to watch.</h3>
                </div>
                
            </div>
        </div>
    )
}



