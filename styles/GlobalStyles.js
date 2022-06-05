import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    /* transition: all 100ms ease-in; */
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box ;
    /* font-family: 'Bitter', serif;
    font-family: 'Poppins', sans-serif; */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }

  .themeButton{
    border-radius: 50%;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    border: solid black 1px;
    
    :hover{
      background: ${props => props.theme.color};
      color: ${props => props.theme.background};
    }
  }

  /* reusable styles */

  /* font family */
  .ffBitter{
    font-family: 'Bitter', serif;
  }
  .ffPoppins{
    font-family: 'Poppins', sans-serif;
  }

  /* font size */
  .fs12{
    font-size: 12px;
  }
  .fs14{
    font-size: 14px;
  }
  .fs16{
    font-size: 16px;
  }
  .fs18{
    font-size: 18px;
  }
  .fs20{
    font-size: 20px;
  }
  .fs24{
    font-size: 24px;
  }
  .fs30{
    font-size: 30px;
  }
  .fs36{
    font-size: 36px;
  }
  .fs48{
    font-size: 48px;
  }
  .fs60{
    font-size: 60px;
  }

  /* font-weight */
  .fw200{
    font-weight: 200;
  }
  .fw400{
    font-weight: 400;
  }
  .fw600{
    font-weight: 600;
  }
  .fw800{
    font-weight: 800;
  }

  /* icon size */
  .iconSize12{
    font-size: 12px;
  }
  .iconSize16{
    font-size: 16px;
  }
  .iconSize20{
    font-size: 20px;
  }
  .iconSize24{
    font-size: 24px;
  }

  /* margin */
  .m4{
    margin: 4px;
  }
  .m8{
    margin: 8px;
  }
  .m12{
    margin: 12px;
  }
  .m16{
    margin: 16px;
  }
  .m24{
    margin: 24px;
  }
  .m32{
    margin: 32px;
  }
  .m48{
    margin: 48px;
  }
  .m64{
    margin: 64px;
  }
  .m96{
    margin: 96px;
  }
  .m128{
    margin: 128px;
  }
  .m192{
    margin: 192px;
  }
  .m256{
    margin: 256px;
  }
  .m384{
    margin: 384px;
  }

  /* padding */
  .p4{
    padding: 4px;
  }
  .p8{
    padding: 8px;
  }
  .p12{
    padding: 12px;
  }
  .p16{
    padding: 16px;
  }
  .p24{
    padding: 24px;
  }
  .p32{
    padding: 32px;
  }
  .p48{
    padding: 48px;
  }
  .p64{
    padding: 64px;
  }
  .p96{
    padding: 96px;
  }
  .p128{
    padding: 128px;
  }
  .p192{
    padding: 192px;
  }
  .p256{
    padding: 256px;
  }
  .p384{
    padding: 384px;
  }

  /* container */

  .container90{
    width: 90%;
    margin: auto;
  }
  .container85{
    width: 85%;
    margin: auto;
  }
  .container80{
    width: 80%;
    margin: auto;
  }

  /* Line Height */

  .lhSmall{
    line-height: 1.5;
  }
  .lhMedium{
    line-height: 1.75;
  }
  .lhLarge{
    line-height: 2;
  }

  /* Letter Spacing */

  .lsTight{
    letter-spacing: -0.05em;
  }
  .lsNormal{
    letter-spacing: 0;
  }
  .lsWide{
    letter-spacing: 0.05em;
  }

  .bsSmall{
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%,0.24);
  }
  .bsMedium{
    box-shadow: 0 3px 6px hsla(0, 0%, 0%, .15), 0 2px 4px hsla(0, 0%, 0%, .12);
  }
  .bsLarge{
    box-shadow: 0 10px 20px hsla(0, 0%, 0%, .15), 0 3px 6px hsla(0, 0%, 0%, .10);
  }
  .bsXLarge{
    box-shadow: 0 15px 25px hsla(0, 0%, 0%, .15), 0 5px 10px hsla(0, 0%, 0%, .5);
  }
  .bsXXLarge{
    box-shadow: 0 20px 40px hsla(0, 0%, 0%, .2);
  }
`;
 
export default GlobalStyle;