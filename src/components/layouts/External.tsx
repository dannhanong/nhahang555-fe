import React from 'react'

const External = () => {
  return (
    <div>
        <button className="btn btn-info me-2" style={{ borderRadius: '5px', color: 'white' }}>Copy</button>
        <button className="btn btn-success me-2" style={{ borderRadius: '5px' }}>CSV</button>
        <button className="btn btn-danger me-2" style={{ borderRadius: '5px' }}>PDF</button>
    </div>
  )
}

export default External
