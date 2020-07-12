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

.centered-content-wrapper {
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  align-self: center;
  justify-content: center;
  min-height: 75vh;
}
.centered-form-wrapper {
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.form-body,
.form-header {
  color: ${p => p.theme.text};
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form-body.wide-body{
  width: 100%;
}
.form-header {
  h2 {
    margin-bottom: 0px;
    // font-weight: 500;
    margin-bottom: 10px;
  }
  h5{
    margin-bottom: 25px;
  }
  h5,
  h2 {
    text-transform: uppercase;
  }
}
.shrink-children {
  & > div {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
}
.form-body {
  label {
    font-size: 13px;
  }
  textarea,
  input {
    border: none;
    outline: none;
    margin-bottom: 25px;
    padding: 0px 0px 5px 0px;
    background-color: transparent;
    padding: 10px;
    margin: 5px 0px 15px 0px;
    outline: none;
    border: 1px solid ${p => p.theme.border};
    width: 100%;
    outline-color: initial;
    color: var(--text);
    cursor: pointer;
  }
  textarea {
    min-height: 113px;
  }
}
.ql-snow a {
  color:${p => p.theme.primary} !important;
}
.ql-snow h2,
.ql-snow h1 {
  text-transform: none;
}
.form-footer {
  width: 100%;
  margin-top: 25px;
  button {
    border: none;
    outline: none;
    display: inline-block;
    text-transform: uppercase;
    background-color:${p => p.theme.background};
    border: 1px solid ${p => p.theme.border};
    cursor: pointer;
    h4 {
      color:  ${p => p.theme.textSecondary};
      padding: 10px;
      &:hover{
        color:  ${p => p.theme.text};
      }
    }
  }
  h4 {
    color: ${p => p.theme.textSecondary};
    // font-weight: 500;
    text-transform: uppercase;
    margin: 0;
  }
}

.inputs-row {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 5fr 5fr;
}


  
.row-2{
  display: grid!important;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
}
.row-3{
  display: grid!important;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 25px;
}

.single-row-form{
  &.form-body{
    padding: 0px;
  }
  display: grid;
  grid-template-columns: 11fr 1fr;
  grid-column-gap: 25px;
  margin-bottom: 25px;
  width:100%;
  .form-footer{
    width: unset;
  }
  input, .form-footer{
    margin: 0;
  }
  input, button h4{
    padding: 10px;
    font-weight: normal;
  }
  button{
    white-space:nowrap;
    width:100%;
    border: 1px solid ${p => p.theme.border};
  }
}

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
