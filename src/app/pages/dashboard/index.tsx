import React from 'react'
import Tabs from 'app/components/tabs'
import TabContent from 'app/components/tabContent'

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__header">
          <p>Please select one font</p>
          <Tabs />
        </div>
        <div className="dashboard__content">
          <TabContent />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
