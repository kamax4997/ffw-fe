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

const TabContent: React.FC = () => {
  const { activeTab, tabs, tabContents, setTabContents } = useTabs()
  const windowSize = useWindowSize()
  const [selectedCard, setSelectedCard] = useState<number>(0)

  const filteredTab = useMemo(() => {
    return tabs.find((tab: ITab) => {
      return tab.id === activeTab
    })
  }, [activeTab, tabs])

  const isLoaded = useMemo(() => {
    return Boolean(tabContents[activeTab])
  }, [tabContents, activeTab])

  const handleClick = (cardId: number) => {
    setSelectedCard(cardId)
  }

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

  const tabContentItems: ITabContentItem[] = useMemo(
    () => tabContents[activeTab]?.content as ITabContentItem[],
    [tabContents, activeTab]
  )

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
              tabContentItems.map(
                (tabContent: ITabContentItem, index: number) => {
                  return (
                    <div
                      key={tabContent.id}
                      className="tabContent_item"
                      onClick={() => handleClick(tabContent.id)}
                      onKeyDown={() => handleClick(tabContent.id)}
                      role="button"
                      tabIndex={-1 * index}
                    >
                      <FontCard
                        content={tabContent}
                        isSelected={selectedCard === tabContent.id}
                      />
                    </div>
                  )
                }
              )
            ) : (
              <>
                <div className="tabContent__layouts">
                  <div
                    className="tabContent_item"
                    onClick={() => handleClick(tabContentItems[0].id)}
                    onKeyDown={() => handleClick(tabContentItems[0].id)}
                    role="button"
                    tabIndex={0}
                  >
                    <FontCard
                      content={tabContentItems[0]}
                      isSelected={selectedCard === tabContentItems[0].id}
                      isFirst
                    />
                  </div>
                </div>
                <div className="tabContent__layouts">
                  {tabContentItems
                    .slice(1)
                    ?.map((tabContent: ITabContentItem, index: number) => {
                      return (
                        <div
                          key={tabContent.id}
                          className="tabContent_item"
                          onClick={() => handleClick(tabContent.id)}
                          onKeyDown={() => handleClick(tabContent.id)}
                          role="button"
                          tabIndex={-1 * index}
                        >
                          <FontCard
                            content={tabContent}
                            isSelected={selectedCard === tabContent.id}
                          />
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
