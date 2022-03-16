import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from 'app/store'
import { ITab } from 'app/components/tabs'
import { ITabContent } from 'app/components/tabContent'

export interface IInitialState {
  tabs: ITab[]
  tabContents: { [key: string]: ITabContent }
  activeTab: number
}

const initialState: IInitialState = {
  tabs: [],
  tabContents: {},
  activeTab: 0,
}

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setTabs(state, action) {
      state.tabs = action.payload.tabs
    },
    clearTabs(state) {
      state.tabs = []
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload.activeTab
    },
    setTabContents(state, action) {
      state.tabContents[action.payload.tabId] = action.payload.tabContents
    },
    clearTabContents(state) {
      state.tabContents = {}
    },
  },
})

// Reducer
export default slice.reducer

export function setTabs(tabs: ITab[]) {
  return async (dispatch: AppDispatch) => {
    dispatch(
      slice.actions.setTabs({
        tabs,
      })
    )

    return true
  }
}

export function clearTabs() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.clearTabs())

    return true
  }
}

export function setActiveTab(activeTab: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(
      slice.actions.setActiveTab({
        activeTab,
      })
    )

    return true
  }
}

export function setTabContents(tabContents: ITabContent[], tabId: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(
      slice.actions.setTabContents({
        tabContents,
        tabId,
      })
    )

    return true
  }
}

export function clearTabContents() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.clearTabContents())

    return true
  }
}
