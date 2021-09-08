import watch from '../../assets/watch.png'
import './style.scss'
export const Watch = () => {
    return (
        <div className='enjoy'>
            <div className='left'>
                <div>
                <p className='heading'>Watch everywhere.</p>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
            </div>
            <div className='right'>
                <img className='boxTv' src={watch} alt="tv" />
                <img className='watchV' src='/Videos/WatchV.gif' />
            </div>
        </div>
    )
}
