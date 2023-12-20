import React from 'react'

export const ModalKnowMore = ({ value }) => {
  console.log(value)

  return (
    <>
      <span>Page Count:{value?.volumeInfo.pageCount}</span>
      <br />
      <span>Language:{value?.volumeInfo.language}</span>
      <br />
      {value?.volumeInfo.canonicalVolumeLink ? (
        <span>
          Purchase Link:
          <a href={value?.volumeInfo.canonicalVolumeLink} target='_blank'>
            <span class='material-symbols-outlined'>link</span>
          </a>
        </span>
      ) : null}
    </>
  )
}
