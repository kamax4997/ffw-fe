import React from 'react'
import type { FC } from 'react'
import Header from 'app/components/header'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: FC<ILayoutProps> = (props: ILayoutProps) => {
  const { children } = props

  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
