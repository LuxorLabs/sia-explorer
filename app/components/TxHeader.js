import React from 'react'
import styled from 'styled-components'

const TxHeader = ({ title, children }) => (
  <div className='tx-section'>
    <CardHeader>{title}</CardHeader>
    <div className='columns'>
      <div className='column col-12'>
        <div className='card  text-center'>
          <div className='card-header'>
            <div className='card-subtitle text-gray'>
              Last seen today
            </div>
            <div className='card-title h5'>
              31fd0949097db70973201d79d783872c458c211cc35fb9b740872b90310a7b1c
            </div>
            <div className='columns mt-2'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const CardHeader = styled.h5`
margin-bottom: 0.8rem;
`

export default TxHeader
