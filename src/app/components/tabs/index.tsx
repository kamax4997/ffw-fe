import React, { useEffect } from 'react'
import axiosInstance from 'app/services/axiosService'

export interface ITab {
  id: number
  label: string
  content_endpoint: string
}

const Tabs: React.FC = () => {
  useEffect(() => {
    async function getTabs() {
      try {
        const result = await axiosInstance.get('tabs')
      } catch (error) {
        console.log(error)
      }
    }

    getTabs()
  }, [])

  return (
    <div className="tabs">
      <div className="tabs__container">Tabs</div>
    </div>
  )
}

export default Tabs
