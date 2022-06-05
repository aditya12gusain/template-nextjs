import {Container, SidebarToggleButton, ProfileImage, ProfileLink, 
    SidebarMenuContainer, MenuItem, MenuItemDropdown, DropdownContainer} from './DashboardSidebar.styles';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import Link from 'next/link';
import { useRouter } from "next/router";
import {CgProfile} from 'react-icons/cg'
import {TbFiles, TbBooks} from 'react-icons/tb'
import {RiSettings3Line, RiListCheck2} from 'react-icons/ri'
import {BsFileEarmarkPost,BsExclamationCircle} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

const DashboardSidebar = ({sidebarCollapsed, setSidebarCollapsed}) => {

    const toggleSidebar = () => {
        if(sidebarCollapsed){
            setSidebarCollapsed(false)
        } else {
            setSidebarCollapsed(true)
        }
    }

    const { pathname } = useRouter();

    return(
        <Container sidebarCollapsed={sidebarCollapsed}>
            <Link href='/testing/allComponents'>
                <ProfileLink>
                    <ProfileImage src='https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png' alt=''/>
                    {sidebarCollapsed ? null : <span className='fs14'>Aditya Gusain</span>}
                </ProfileLink>
            </Link>
            <SidebarToggleButton onClick={toggleSidebar} className='p8' sidebarCollapsed={sidebarCollapsed}>
                {sidebarCollapsed ? <BsArrowRight className='iconSize20'/> : <BsArrowLeft className='iconSize20'/>}
            </SidebarToggleButton>
            <SidebarMenuContainer>
                <Link href='/dashboard/profile' >
                    <MenuItem pathName={pathname} linkName="/dashboard/profile" sidebarCollapsed={sidebarCollapsed}>
                        <CgProfile className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Profile</span>}
                    </MenuItem>
                </Link>
                <Link href='/dashboard/deatils' >
                    <MenuItem pathName={pathname} linkName="/dashboard/projects" sidebarCollapsed={sidebarCollapsed}>
                        <TbFiles className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Projects</span>}
                    </MenuItem>
                </Link>
                <Link href='/dashboard/events' >
                    <MenuItem pathName={pathname} linkName="/dashboard/events" sidebarCollapsed={sidebarCollapsed}>
                        <BsFileEarmarkPost className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Events</span>}
                    </MenuItem>
                </Link>
                <Link href='/dashboard/notices' >
                    <MenuItem pathName={pathname} linkName="/dashboard/notices" sidebarCollapsed={sidebarCollapsed}>
                        <RiListCheck2 className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Notices</span>}
                    </MenuItem>
                </Link>
                <Link href='/dashboard/resources' >
                    <MenuItem pathName={pathname} linkName="/dashboard/resources" sidebarCollapsed={sidebarCollapsed}>
                        <TbBooks className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Resources</span>}
                    </MenuItem>
                </Link>
                <Link href='/dashboard/opportunity' >
                    <MenuItem pathName={pathname} linkName="/dashboard/opportunity" sidebarCollapsed={sidebarCollapsed}>
                        <TbBooks className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Opportunity</span>}
                    </MenuItem>
                </Link>
                <Link href='/dashboard/query' >
                    <MenuItem pathName={pathname} linkName="/dashboard/query" sidebarCollapsed={sidebarCollapsed}>
                        <BsExclamationCircle className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Query?</span>}
                    </MenuItem>
                </Link>
                <Link href='/dashboard/settings' >
                    <MenuItem pathName={pathname} linkName="/dashboard/settings" sidebarCollapsed={sidebarCollapsed}>
                        <RiSettings3Line className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Settings</span>}
                    </MenuItem>
                </Link>
                <MenuItemDropdown pathName={pathname} linkName="/dashboard/settings" sidebarCollapsed={sidebarCollapsed}>
                        <GiHamburgerMenu className='iconSize20'/>
                        {sidebarCollapsed ? null : <span className='fs14'>Dropdown</span>}
                        <DropdownContainer>
                            <Link href='/dashboard/settings' >
                                <MenuItem pathName={pathname} linkName="/dashboard/settings" sidebarCollapsed={sidebarCollapsed}>
                                    <span className='fs14'>Settings</span>
                                </MenuItem>
                            </Link>
                            <Link href='/dashboard/settings' >
                                <MenuItem pathName={pathname} linkName="/dashboard/settings" sidebarCollapsed={sidebarCollapsed}>
                                    <span className='fs14'>Settings</span>
                                </MenuItem>
                            </Link>
                        </DropdownContainer>
                </MenuItemDropdown>
            </SidebarMenuContainer>
        </Container>
    )
}

export default DashboardSidebar