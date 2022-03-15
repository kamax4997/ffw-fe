import React, { useEffect } from 'react'
import axiosInstance from 'app/services/axiosService'
import { setTabs } from 'app/store/slices/dashboard'

export interface ITabProps {
  label: string
  content_endpoint: string
}

const Tab: React.FC<ITabProps> = (props: ITabProps) => {
  const { label, content_endpoint } = props

  return (
    <div className="tab">
      <div className="tab__container">{label}</div>
    </div>
  )
}

export default Tab
