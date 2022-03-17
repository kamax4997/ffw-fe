import React, { useEffect, useState, useMemo } from 'react'
import useTabs from 'app/hooks/useTabs'
import { ITab } from '../tabs'
import axiosInstance from 'app/services/axiosService'
import FontCard from '../fontCard'
import useWindowSize from 'app/hooks/useWindowSize'

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
  const windowSize = useWindowSize()

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
      <div
        className={`tabContent__container ${
          windowSize.width > 900 ? 'active' : ''
        }`}
      >
        {isLoaded &&
          (tabContents[activeTab].type === 'Font selection' ? (
            windowSize.width < 900 ? (
              (tabContents[activeTab].content as ITabContentItem[]).map(
                (tabContent: ITabContentItem, index: number) => {
                  return (
                    <div key={tabContent.id} className="tabContent__items">
                      <FontCard content={tabContent} isFirst={false} />
                    </div>
                  )
                }
              )
            ) : (
              <>
                <div className="tabContent__layouts">
                  <div className="tabContent__items">
                    <FontCard
                      content={
                        (tabContents[activeTab].content as ITabContentItem[])[0]
                      }
                      isFirst={true}
                    />
                  </div>
                </div>
                <div className="tabContent__layouts">
                  {(tabContents[activeTab].content as ITabContentItem[])
                    .slice(1)
                    ?.map((tabContent: ITabContentItem, index: number) => {
                      return (
                        <div key={tabContent.id} className="tabContent__items">
                          <FontCard content={tabContent} isFirst={false} />
                        </div>
                      )
                    })}
                </div>
              </>
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
