import {useState} from 'react';
import DashboardSidebar from '../components/common/DashboardSidebar/DashboardSidebar'
import DashboardTopbar from '../components/common/DashboardTopbar/DashboardTopbar'
import {Container, MainContainer} from './DashboardLayout.styles'

const DashboardLayout = ({ children }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    return (
      <Container sidebarCollapsed={sidebarCollapsed}>
        <DashboardSidebar sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed}/>
        <MainContainer sidebarCollapsed={sidebarCollapsed}>
          <DashboardTopbar />
          {children}
        </MainContainer>
      </Container>
    );
  };
  export default DashboardLayout;