import { useTheme } from "styled-components";
import {ColorPallets, Item, ItemsContainer} from '../../styles/testing/allComponents.styles'

const AllComponents = () => {
    const theme = useTheme();

    return(
        <div className='container90' style={{padding: "40px 0"}} >
            <div className='p16' style={{backgroundColor: theme.forGround}}>
                <h1 className='ffBitter fs48 lsWide'>ALL CAPS HEADING</h1>
                <p className='lhMedium lsWide fs14'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ad optio, vero, quia aliquid explicabo labore magni quidem saepe, soluta modi eos? Illum voluptas architecto aut voluptatem. Voluptas, quibusdam odit!</p>
            </div>

            <ColorPallets>
                <h1 className='ffBitter'>Primary Color Scheme</h1>
                <ItemsContainer>
                    <Item style={{backgroundColor: theme.background}}/>
                    <Item style={{backgroundColor: theme.subBackground}}/>
                    <Item style={{backgroundColor: theme.color}}/>
                    <Item style={{backgroundColor: theme.subColor}}/>
                    <Item style={{backgroundColor: theme.forGround}}/>
                </ItemsContainer>
            </ColorPallets>

            <ColorPallets>
                <h1 className='ffBitter'>Primary Color Scheme</h1>
                <ItemsContainer>
                    <Item style={{backgroundColor: theme.primaryColor900}}/>
                    <Item style={{backgroundColor: theme.primaryColor800}}/>
                    <Item style={{backgroundColor: theme.primaryColor700}}/>
                    <Item style={{backgroundColor: theme.primaryColor600}}/>
                    <Item style={{backgroundColor: theme.primaryColor500}}/>
                    <Item style={{backgroundColor: theme.primaryColor400}}/>
                    <Item style={{backgroundColor: theme.primaryColor300}}/>
                    <Item style={{backgroundColor: theme.primaryColor200}}/>
                    <Item style={{backgroundColor: theme.primaryColor100}}/>
                    <Item style={{backgroundColor: theme.primaryColor000}}/>
                </ItemsContainer>
            </ColorPallets>

            <ColorPallets>
                <h1 className='ffBitter'>Dark Color Scheme</h1>
                <ItemsContainer>
                    <Item style={{backgroundColor: theme.darkColor900}}/>
                    <Item style={{backgroundColor: theme.darkColor800}}/>
                    <Item style={{backgroundColor: theme.darkColor700}}/>
                    <Item style={{backgroundColor: theme.darkColor600}}/>
                    <Item style={{backgroundColor: theme.darkColor500}}/>
                    <Item style={{backgroundColor: theme.darkColor400}}/>
                    <Item style={{backgroundColor: theme.darkColor300}}/>
                    <Item style={{backgroundColor: theme.darkColor200}}/>
                </ItemsContainer>
            </ColorPallets>

            <ColorPallets>
                <h1 className='ffBitter'>Neutral Color Scheme</h1>
                <ItemsContainer>
                    <Item style={{backgroundColor: theme.neutralColor900}}/>
                    <Item style={{backgroundColor: theme.neutralColor800}}/>
                    <Item style={{backgroundColor: theme.neutralColor700}}/>
                    <Item style={{backgroundColor: theme.neutralColor600}}/>
                    <Item style={{backgroundColor: theme.neutralColor500}}/>
                    <Item style={{backgroundColor: theme.neutralColor400}}/>
                    <Item style={{backgroundColor: theme.neutralColor300}}/>
                    <Item style={{backgroundColor: theme.neutralColor200}}/>
                    <Item style={{backgroundColor: theme.neutralColor100}}/>
                </ItemsContainer>
            </ColorPallets>

            <ColorPallets>
                <h1 className='ffBitter'>Green Color Scheme</h1>
                <ItemsContainer>
                    <Item style={{backgroundColor: theme.greenColor900}}/>
                    <Item style={{backgroundColor: theme.greenColor800}}/>
                    <Item style={{backgroundColor: theme.greenColor700}}/>
                    <Item style={{backgroundColor: theme.greenColor600}}/>
                    <Item style={{backgroundColor: theme.greenColor500}}/>
                    <Item style={{backgroundColor: theme.greenColor400}}/>
                    <Item style={{backgroundColor: theme.greenColor300}}/>
                    <Item style={{backgroundColor: theme.greenColor200}}/>
                </ItemsContainer>
            </ColorPallets>

            <ColorPallets>
                <h1 className='ffBitter'>Yellow Color Scheme</h1>
                <ItemsContainer>
                    <Item style={{backgroundColor: theme.yellowColor900}}/>
                    <Item style={{backgroundColor: theme.yellowColor800}}/>
                    <Item style={{backgroundColor: theme.yellowColor700}}/>
                    <Item style={{backgroundColor: theme.yellowColor600}}/>
                    <Item style={{backgroundColor: theme.yellowColor500}}/>
                    <Item style={{backgroundColor: theme.yellowColor400}}/>
                    <Item style={{backgroundColor: theme.yellowColor300}}/>
                    <Item style={{backgroundColor: theme.yellowColor200}}/>
                </ItemsContainer>
            </ColorPallets>

            <ColorPallets>
                <h1 className='ffBitter'>Red Color Scheme</h1>
                <ItemsContainer>
                    <Item style={{backgroundColor: theme.redColor900}}/>
                    <Item style={{backgroundColor: theme.redColor800}}/>
                    <Item style={{backgroundColor: theme.redColor700}}/>
                    <Item style={{backgroundColor: theme.redColor600}}/>
                    <Item style={{backgroundColor: theme.redColor500}}/>
                    <Item style={{backgroundColor: theme.redColor400}}/>
                    <Item style={{backgroundColor: theme.redColor300}}/>
                    <Item style={{backgroundColor: theme.redColor200}}/>
                </ItemsContainer>
            </ColorPallets>

            <ColorPallets >
                <h1 className='ffBitter'>Shadows</h1>
                <ItemsContainer style={{gap: "3rem"}}>
                    <Item className='bsSmall' style={{backgroundColor: theme.background, borderRadius: "5px"}}/>
                    <Item className='bsMedium' style={{backgroundColor: theme.background, borderRadius: "5px"}}/>
                    <Item className='bsLarge' style={{backgroundColor: theme.background, borderRadius: "5px"}}/>
                    <Item className='bsXLarge' style={{backgroundColor: theme.background, borderRadius: "5px"}}/>
                    <Item className='bsXXLarge' style={{backgroundColor: theme.background, borderRadius: "5px"}}/>
                </ItemsContainer>
            </ColorPallets>
        </div>
    );
}
AllComponents.layout = "HomeLayout";
export default AllComponents;
