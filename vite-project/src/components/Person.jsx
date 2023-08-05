import React from 'react'

const Person = (props) => {
    const { firstName, lastName, image, email} = props; 
  return (
    <div className='card'>
      <img src={image} />
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{email}</p>
    </div>
  );
}

export default Person