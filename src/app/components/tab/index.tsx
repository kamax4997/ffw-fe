import React, { useEffect } from 'react'
import useTabs from 'app/hooks/useTabs'
import { ITab } from '../tabs'

export interface ITabProps {
  tab: ITab
  index: number
}

const Tab: React.FC<ITabProps> = (props: ITabProps) => {
  const { tab, index } = props

  const { activeTab, setActiveTab } = useTabs()

  const isActive = index === activeTab

  const handleClick = () => {
    setActiveTab(index)
  }

  return (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <div className="tab__container">{tab.label.toUpperCase()}</div>
    </div>
  )
}

export default Tab
