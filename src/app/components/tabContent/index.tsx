import React, { useEffect, useState, useMemo } from 'react'
import useTabs from 'app/hooks/useTabs'
import { ITab } from '../tabs'
import axiosInstance from 'app/services/axiosService'

export interface ITabContentItem {
  abbr: string
  color: string
  'color-blind-label': string
  id: number
  label: string
}

export interface ITabContent {
  content: ITabContentItem[] | string
  type: string
}

export interface ITabContentProps {}

const TabContent: React.FC<ITabContentProps> = (props: ITabContentProps) => {
  // const { tab, index } = props

  const { activeTab, tabs, tabContents, setTabContents } = useTabs()
  // const [currentTab, setCurrentTab] = useState<ITab>()
  const [tabData, setTabData] = useState()

  //   const isActive = index === activeTab

  //   const handleClick = () => {
  //     setActiveTab(index)
  //   }
  const filteredTab = useMemo(() => {
    return tabs.find((tab: ITab) => {
      return tab.id === activeTab
    })
  }, [activeTab, tabs])

  // useEffect(() => {
  //   setCurrentTab(filteredTab)
  // }, [activeTab, tabs, filteredTab])

  useEffect(() => {
    async function getTabContent() {
      try {
        if (filteredTab) {
          const result = await axiosInstance.get(filteredTab.content_endpoint)
          setTabContents(result.data, activeTab)
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (!tabContents[activeTab]) getTabContent()
  }, [filteredTab])

  return (
    <div className="tabContent">
      <div className="tabContent__container"></div>
    </div>
  )
}

export default TabContent
