import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {Button} from '../../styles/testing/allComponents.styles'
import {theme, invertTheme} from '../../styles/ThemeStyles'


const AllComponents = () => {
    const  [themeType, setThemeType] = useState(true);

    return(
        <ThemeProvider theme={themeType ? theme : invertTheme}>
                <Button className='p1' onClick={() => themeType ? setThemeType(false) : setThemeType(true)}>Default Theme</Button>
                <button className='p1'>Something</button>
        </ThemeProvider>
    );
}
AllComponents.layout = "HomeLayout";
export default AllComponents;
