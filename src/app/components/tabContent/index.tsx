import React, { useEffect, useState, useMemo } from 'react'
import useTabs from 'app/hooks/useTabs'
import { ITab } from '../tabs'
import axiosInstance from 'app/services/axiosService'
import FontCard from '../fontCard'

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
  const { activeTab, tabs, tabContents, setTabContents } = useTabs()

  const filteredTab = useMemo(() => {
    return tabs.find((tab: ITab) => {
      return tab.id === activeTab
    })
  }, [activeTab, tabs])

  const isLoaded = useMemo(() => {
    return Boolean(tabContents[activeTab])
  }, [tabContents, activeTab])

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

    if (!isLoaded) getTabContent()
  }, [filteredTab])

  return (
    <div className="tabContent">
      <div className="tabContent__container">
        {isLoaded &&
          (tabContents[activeTab].type === 'Font selection' ? (
            (tabContents[activeTab].content as ITabContentItem[]).map(
              (tabContent: ITabContentItem, index: number) => {
                return (
                  <div key={tabContent.id} className="tabContent__items">
                    <FontCard content={tabContent} isFirst={index === 0} />
                  </div>
                )
              }
            )
          ) : (
            <div className="tabContent__text">
              {tabContents[activeTab].content}
            </div>
          ))}
      </div>
    </div>
  )
}

export default TabContent
