import React from 'react'

export const GroupButtons = () => {
  return (
    <div>
      <Col xs lg='3'>
            <div className='mb-2'>
              <Button variant='primary' size='lg'>
                ONC NEWSLETTERS
              </Button>
            </div>
            <div className='mb-2'>
              <Button variant='primary' size='lg'>
                ONC WEBISODES
              </Button>
            </div>
            <div className='mb-2'>
              <Button variant='primary' size='lg'>
                ONC PODCASTS
              </Button>
   
            </div>
          </Col>
    </div>
  )
}
