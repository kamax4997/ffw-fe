import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from 'app/store'
import { setTabs, clearTabs, setActiveTab } from 'app/store/slices/dashboard'
import { ITab } from 'app/components/tabs'

const useTabs = () => {
  const dispatch = useDispatch()

  const { tabs } = useSelector((state: IRootState) => state.dashboard)

  return {
    tabs,

    setTabsAction: (params: ITab[]) => dispatch(setTabs(params)),

    clearTabsAction: () => dispatch(clearTabs()),

    setActiveTab: (activeTab: number) => dispatch(setActiveTab(activeTab)),
  }
}

export default useTabs
