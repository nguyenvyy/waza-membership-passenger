import React from 'react'
export const NotData = () => (<div>data is empty..</div>)

export const Empty = ({ isEmpty = false, alternative = <NotData />, children }) => (
    <>
        {isEmpty ? alternative : children}
    </>
)