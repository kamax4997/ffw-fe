import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from 'app/store'
import { ITab } from 'app/components/tabs'

export interface IInitialState {
  tabs: ITab[]
}

const initialState: IInitialState = {
  tabs: [],
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
