import React, { useState } from 'react'
import Loading from 'app/@core/loading'
import Tabs from 'app/components/tabs'

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__header">
          <h4>Please select one font</h4>
          <Tabs />
        </div>
        <div className="dashboard__content">
          {isLoading ? <Loading /> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
