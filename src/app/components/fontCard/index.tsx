import React, { useState } from 'react'
import Loading from 'app/@core/loading'
import Tabs from 'app/components/tabs'
import TabContent, { ITabContentItem } from 'app/components/tabContent'

export interface IFontCardProps {
  content: ITabContentItem
  isFirst: boolean
}

const FontCard: React.FC<IFontCardProps> = (props: IFontCardProps) => {
  const { content, isFirst } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const colorBoxClassName = isFirst
    ? 'fontcard__colorbox-first'
    : 'fontcard__colorbox-normal'
  const colorAbbrClassName = isFirst
    ? 'colorbox__abbr-first'
    : 'colorbox__abbr-normal'

  return (
    <div className="fontcard">
      <div className="fontcard__container">
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
        </div>
        <div className="fontcard__description">{content.label}</div>
      </div>
    </div>
  )
}

export default FontCard
