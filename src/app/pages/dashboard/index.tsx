import React, { useState } from 'react'
import Loading from 'app/@core/loading'
import Tabs from 'app/components/tabs'
import TabContent from 'app/components/tabContent'

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__header">
          <p>Please select one font</p>
          <Tabs />
        </div>
        <div className="dashboard__content">
          {isLoading ? <Loading /> : <TabContent />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
