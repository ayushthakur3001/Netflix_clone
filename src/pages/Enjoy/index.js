import './style.scss'
import boxTv from '../../assets/enjoy.png'
import scene from '../../assets/scene.png'
export const Enjoy = () => {
    return (
        <div className='enjoy'>
            <div className='left'>
                <div>
                <p className='heading'>Enjoy on your TV.</p>
                <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                </div>
            </div>
            <div className='right'>
                <img className='boxTv' src={boxTv} alt="tv" />
                <img className="scene" src={scene} alt='scene' />
                
            </div>
        </div>
    )
}
