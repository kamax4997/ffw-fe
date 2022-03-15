import React from 'react';
import type { FC } from 'react';
import Header from 'app/components/header';
import Footer from 'app/components/footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
