import React, { useState } from 'react'
import Loading from 'app/@core/loading'
import Tabs from 'app/components/tabs'
import TabContent, { ITabContentItem } from 'app/components/tabContent'

export interface IFontCardProps {
  content: ITabContentItem
  isFirst?: boolean
  isSelected?: boolean
}

const FontCard: React.FC<IFontCardProps> = (props: IFontCardProps) => {
  const { content, isFirst = false, isSelected = false } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const colorBoxClassName = isFirst ? 'fontcard__colorbox-first' : ''
  const colorAbbrClassName = isFirst ? 'colorbox__abbr-first' : ''
  const containerClassName = isFirst ? 'fontcard__container-first' : ''
  const descriptionClassName = isFirst ? 'fontcard__description-first' : ''
  const selectedClassName = isSelected ? 'fontcard-selected' : ''

  return (
    <div className={`fontcard ${selectedClassName}`}>
      <div className={`fontcard__container ${containerClassName}`}>
        <div className={`fontcard__colorbox ${colorBoxClassName}`}>
          <div
            className="colorbox__main"
            style={{
              backgroundColor: content.color,
            }}
          >
            <div className={`colorbox__abbr ${colorAbbrClassName}`}>
              {content.abbr}
            </div>
          </div>
          <span className="colorbox__tooltip">
            {content['color-blind-label']}
          </span>
        </div>
        <div className={`fontcard__description ${descriptionClassName}`}>
          {content.label}
        </div>
      </div>
    </div>
  )
}

export default FontCard
