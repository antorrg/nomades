import React from 'react'

const User = ({user}) => {
  return (
    <div className='col'>
      <div className='card shadow-sm' style={{width: '300px', height: '100%', margin: '1rem'}}>
        <img className='card-img-top' src={user.picture} alt='Card image'/>
        <div className='card.body'>
            <p className='card-text'> Email:
                <p className='card-text text-muted text-sm'>{user.email}</p>
            </p>
            <p className='card-text'> Apodo
                <p className='card-text text-muted text-sm'>{user.nickname}</p>
            </p>
            <p className='card-text'> Rol:
                <p className='card-text text-muted text-sm'>{user.role}</p>
            </p>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='btn-group'>
                  <a className='btn btn-sm mb-3 btn-outline-primary'>Detalles:</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default User