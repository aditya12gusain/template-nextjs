import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {light, dark} from '../styles/ThemeStyles'
import GlobalStyles from '../styles/GlobalStyles'
import {BiSun, BiMoon} from 'react-icons/bi'
import "../styles/GlobalStyles.css"

import DashboardLayout from "../Layouts/Dashboard.layout";
import HomeLayout from "../Layouts/Home.layout";
const layouts = {
    DashboardLayout: DashboardLayout,
    HomeLayout: HomeLayout,
};

const App = ({ Component, pageProps }) => {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <button className='themeButton  p8' onClick={() => theme === "light" ? setTheme('dark') : setTheme('light')}>
        {theme === "light" ? <BiMoon className='iconSize16'/> : <BiSun className='iconSize16'/>}
      </button>
    </ThemeProvider>
  );
};

export default App;