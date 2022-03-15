import React, { useEffect } from 'react'
import axiosInstance from 'app/services/axiosService'
import { setTabs } from 'app/store/slices/dashboard'
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
  // const { tabs } = useSelector((state: IRootState) => state.dashboard)
  const { tabs } = useTabs()

  useEffect(() => {
    async function getTabs() {
      try {
        const result = await axiosInstance.get('tabs')
        dispatch(setTabs(result.data))
      } catch (error) {
        console.log(error)
      }
    }

    if (tabs.length === 0) getTabs()
  }, [])

  return (
    <div className="tabs">
      <div className="tabs__container">
        {tabs.map((tab: ITab) => {
          return (
            <Tab
              key={tab.id}
              label={tab.label}
              content_endpoint={tab.content_endpoint}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Tabs
