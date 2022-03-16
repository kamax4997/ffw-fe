import React, { useState } from 'react'
import Loading from 'app/@core/loading'
import Tabs from 'app/components/tabs'
import TabContent from 'app/components/tabContent'

const ColorBox: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className="colorbox">
      <div className="colorbox__container"></div>
    </div>
  )
}

export default ColorBox
