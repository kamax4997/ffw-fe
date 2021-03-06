import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import axiosInstance from 'app/services/axiosService'
import { setActiveTab, setTabs } from 'app/store/slices/dashboard'
import { useDispatch } from 'react-redux'
import Tab from '../tab'
import useTabs from 'app/hooks/useTabs'

export interface ITab {
  id: number
  label: string
  content_endpoint: string
}

const Tabs: React.FC = () => {
  const dispatch = useDispatch()
  const { tabs } = useTabs()

  useEffect(() => {
    async function getTabs() {
      try {
        const result = await axiosInstance.get('tabs')
        dispatch(setTabs(result?.data))
        dispatch(setActiveTab(result?.data[0]?.id))
      } catch (error) {
        console.log(error)
      }
    }

    if (tabs.length === 0) getTabs()
  }, [])

  return (
    <div className="tabs">
      <div className="tabs__container">
        {tabs.length > 0 ? (
          tabs.map((tab: ITab) => {
            return <Tab key={tab.id} tab={tab} />
          })
        ) : (
          <>
            <Skeleton className="tab" width={80} height={20} />
            <Skeleton className="tab" width={80} height={20} />
          </>
        )}
      </div>
    </div>
  )
}

export default Tabs
