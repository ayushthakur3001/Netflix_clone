
import kids from '../../assets/kids.png';

export const Kids = () => {
    return ( 
        <div className='download'>
            <div className='left'>
                <img className='boxTv' src={kids} alt="tv" />
                
            </div>
            <div className='right'>
                <div>
                <p className='heading'>Create profiles for children.</p>
                <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                </div>
            </div>
        </div>
    )
}