import React from 'react'

const CardH = ( { title, description } ) => { 
  return (
    <div className="card mb-3 widthCard">
        <div className="row g-0">
        <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* <p className="card-text"><small className="text-muted">{precio}</small></p> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default CardH