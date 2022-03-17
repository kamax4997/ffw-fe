import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from 'app/store'
import {
  setTabs,
  clearTabs,
  setActiveTab,
  setTabContents,
  clearTabContents,
} from 'app/store/slices/dashboard'
import { ITab } from 'app/components/tabs'
import { ITabContent } from 'app/components/tabContent'

const useTabs = () => {
  const dispatch = useDispatch()

  const { tabs, activeTab, tabContents } = useSelector(
    (state: IRootState) => state.dashboard
  )

  return {
    tabs,
    activeTab,
    tabContents,

    setTabsAction: (params: ITab[]) => dispatch(setTabs(params)),
    clearTabsAction: () => dispatch(clearTabs()),
    setActiveTab: (activeTab: number) => dispatch(setActiveTab(activeTab)),
    setTabContents: (params: ITabContent[], tabId: number) =>
      dispatch(setTabContents(params, tabId)),
    clearTabContents: () => dispatch(clearTabContents()),
  }
}

export default useTabs
