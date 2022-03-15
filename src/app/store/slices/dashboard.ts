import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from 'app/store'
import { ITab } from 'app/components/tabs'

export interface IInitialState {
  tabs: ITab[]
  activeTab: number
}

const initialState: IInitialState = {
  tabs: [],
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
