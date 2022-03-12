import React, { useState } from 'react'
import Loading from 'app/@core/loading'

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__content'>
          {isLoading ? <Loading /> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
