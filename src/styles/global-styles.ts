import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`

  

  // .main-content{

  // }

  // .website-layout-full{
  //   display:grid;
  //   grid-template-columns: 100%
  // }
  // .website-layout-split{
  //   display:grid;
  //   grid-template-columns: 20% 80%; 
  // }


  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
    padding-top: 0px;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .logo-icon{
    width: 50px;
    height: 50px;
  }
  .navbar-logo-link{
    text-decoration: none;
  }
  
/**Forms*/

/**Forms*/

 
.unset-width {
  max-width: unset;
  width: unset;
}
.flex-column {
  display: flex;
  flex-wrap: wrap;
  color: var(--text);
  align-items: center;
  width: 100% !important;
  flex-direction: column;
  justify-content: space-between;
}

.flex-row {
  display: flex;
  flex-wrap: wrap;
  color: var(--text);
  align-items: center;
  flex-direction: row;
  width: 100% !important;
  justify-content: space-between;
}
.flex-start {
  justify-content: flex-start;
}
.full-height {
  min-height: 100vh;
}

// navnav {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
//   position: fixed;

//   width: 20%;
//   .nav-routes{
   
//     display: grid;
//     grid-row-gap: 25px;
//     margin-top: 25px;

//   }
//   a {
//     color: ${p => p.theme.textSecondary};
//     cursor: pointer;
//     text-decoration: none;
//     display: flex; 
    
//     align-items:center;
//     font-size: 0.875rem;
//     padding: 0px;
//     font-weight: 500;
//     align-items: center;

//     svg{
//       margin-right: 10px;
//     }
//     &:hover {
//       opacity: 0.8;
//     }

//     &:active {
//       opacity: 0.4;
//     }
//     &.active {
//       color: ${p => p.theme.text};
//     }
//     .icon {
//       margin-right: 0.25rem;
//     }
//   }
// }
`;
