import React, { useState } from 'react'
import { ModalKnowMore } from './modalKnowMore';

export const Modal = ({ item ,close}) => {
    const [knowMore,setKnowMore] = useState(false);
  return (
    <div className='overlay z-[5]'>
      <div className='overlay-inner'>
        <button className='close' onClick={()=>close()}>
          <span class='material-symbols-outlined'>close</span>
        </button>
        <div className='inner-box'>
          <img src={item.volumeInfo.imageLinks.smallThumbnail} alt='' />
          <div className='info'>
            <h1 className='font-[poppins] md:text-3xl  text-3xl md:mb-5  mb-3 '>{item.volumeInfo.title}</h1>
            <span className='info-left'>Authors:</span><span className='info-right'>{item.volumeInfo.authors}</span>
            <br/>
            <span className='info-left'>Publisher:</span><span className='info-right'>{item.volumeInfo.publisher}</span>
            <br/>
            <span className='info-left'>Published Date:</span><span className='info-right'>{item.volumeInfo.publishedDate}</span>
            <br/>
            <span className='info-left'>Page Count:</span><span className='info-right'>{item.volumeInfo.pageCount}</span>
            <br/>
            <span className='info-left'>Language:</span><span className='info-right'>{item.volumeInfo.language}</span>
            <br/>
          
            {item?.volumeInfo.canonicalVolumeLink ? (
        <span className='info-left'>
          Purchase Link:
          <a href={item?.volumeInfo.canonicalVolumeLink} target='_blank'>
            <span  className='material-symbols-outlined info-right ml-1 pt-2'>link</span>
          </a>
        </span>
      ) : null}
              {/* <button onClick={()=>setKnowMore(true)}>More</button> */}
       
          </div>
        </div>
          {knowMore && <ModalKnowMore value={item}/>}
        <h4 className='description'>{item.volumeInfo.description}</h4>
      </div>
    </div>
  )
}
