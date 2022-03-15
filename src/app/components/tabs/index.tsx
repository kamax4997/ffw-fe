import React, { useEffect } from 'react'
import axiosInstance from 'app/services/axiosService'

const Tabs: React.FC = () => {
  useEffect(() => {
    async function getTags() {
      try {
        const result = await axiosInstance.get('tabs')
        console.log(result, ' result')
      } catch (error) {
        console.log(error)
      }
    }

    getTags()
  }, [])

  return (
    <div className="tabs">
      <div className="tabs__container">Tabs</div>
    </div>
  )
}

export default Tabs
