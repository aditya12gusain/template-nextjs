import {ThemeProvider} from 'styled-components'
import {theme, invertTheme} from '../styles/ThemeStyles'
import GlobalStyles from '../styles/GlobalStyles'

import DashboardLayout from "../Layouts/Dashboard.layout";
import HomeLayout from "../Layouts/Home.layout";
const layouts = {
    DashboardLayout: DashboardLayout,
    HomeLayout: HomeLayout,
};

const App = ({ Component, pageProps }) => {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;