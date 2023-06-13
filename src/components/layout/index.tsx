import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Content from './Content';

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default Layout;
