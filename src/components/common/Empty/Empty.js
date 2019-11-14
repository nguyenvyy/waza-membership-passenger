import React from 'react'
export const NotData = () => (<div>data is empty..</div>)

export const Empty = ({ isEmpty = false, alternative = <div>not found....</div>, children }) => (
    <>
        {isEmpty ? alternative : children}
    </>
)