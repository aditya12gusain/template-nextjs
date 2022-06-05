import {Container, SidebarToggleButton} from './DashboardSidebar.styles';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const DashboardSidebar = ({sidebarCollapsed, setSidebarCollapsed}) => {

    const toggleSidebar = () => {
        if(sidebarCollapsed){
            setSidebarCollapsed(false)
        } else {
            setSidebarCollapsed(true)
        }
    }

    return(
        <Container className='p12' sidebarCollapsed={sidebarCollapsed}>
            Sid
            <SidebarToggleButton onClick={toggleSidebar} className='p8' sidebarCollapsed={sidebarCollapsed}>
                {sidebarCollapsed ? <BsArrowRight className='iconSize20'/> : <BsArrowLeft className='iconSize20'/>}
            </SidebarToggleButton>
        </Container>
    )
}

export default DashboardSidebar