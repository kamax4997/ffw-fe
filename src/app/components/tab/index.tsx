import React, { useMemo } from 'react'
import useTabs from 'app/hooks/useTabs'
import { ITab } from '../tabs'

export interface ITabProps {
  tab: ITab
}

const Tab: React.FC<ITabProps> = (props: ITabProps) => {
  const { tab } = props

  const { activeTab, setActiveTab } = useTabs()

  const isActive = useMemo(() => {
    return tab.id === activeTab
  }, [activeTab, tab])

  const handleClick = () => {
    setActiveTab(tab.id)
  }

  return (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <div className="tab__container">{tab.label.toUpperCase()}</div>
    </div>
  )
}

export default Tab
