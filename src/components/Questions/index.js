import { faqs } from '../../data/faq'
import FaqItem from '../FaqItem'; 
import { useState } from 'react';

export const Questions = () => {
    const [clickId, setClickId] = useState(null)
    return (
        <>
            {
                faqs.map((item)=>(
                    <FaqItem key={item.id} item={item} 
                    clickId={clickId}
                    setClickId={setClickId} />
                ))
            }
        </>
    )
}

