import React from "react";
import { LayoutContainer, Content, MainWrapper } from "./styles";
import { Sidebar } from "../Sidebar";
import { useState } from "react";
import { Headbar } from "../HeadBar";

interface LayoutProps {
  children: React.ReactNode;
  isSidebarOpen?: boolean;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <LayoutContainer>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <MainWrapper>
          <Headbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          <Content>{children}</Content>
        </MainWrapper>
      </LayoutContainer>
    </>
  );
};

export default Layout;
