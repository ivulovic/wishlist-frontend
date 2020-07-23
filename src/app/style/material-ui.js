import { withStyles } from '@material-ui/core';

export const MaterialUIOverride = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiButton-root': {
      // fontSize: '1rem',
    },
    '.MuiInputBase-input': {
      color: 'var(--text)',
    },
    '.MuiFormLabel-root': {
      borderBottomColor: 'var(--text)!important',
      color: 'var(--text=secondary)!imporant',
    },
    '.MuiTypography-colorTextPrimary': {
      color: 'var(--text)!important',
    },
    '.MuiTypography-colorTextSecondary': {
      color: 'var(--text-secondary)!important',
    },
    '.MuiMenu-list': {
      backgroundColor: 'var(--background)',
    },
    '.MuiFormLabel-root.Mui-focused': {
      color: 'var(--primary)!important',
    },
    '.MuiInput-underline:before': {
      borderBottomColor: 'var(--border)!important',
    },
    '.MuiButton-label': {
      color: 'var(--text)',
    },
    '.MuiIconButton-root': {
      color: 'var(--text)',
    },
    '.Mui-focusVisible > .MuiButton-label': {
      color: 'var(--primary)',
      opacity: '1',
    },
    '.MuiInputAdornment-root': {
      color: 'var(--text)',
    },
    '.MuiInput-underline:after': {
      borderBottomColor: 'var(--primary)!important',
    },
    '.MuiGrid-root': {
      maxWidth: '100%',
      margin: '0px',
    },
    '.MuiPaper-root': {
      backgroundColor: 'var(--border-light)',
      color: 'var(--text)',
      // padding: '25px 10px',
    },
    '.MuiListItemIcon-root': {
      minWidth: '30px',
    },
    '.MuiDrawer-paper': {
      backgroundColor: 'var(--background)',
      borderRight: '1px solid var(--border)',
      // padding: '25px 10px',
    },
  },
})(() => null);
