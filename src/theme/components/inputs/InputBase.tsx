import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.info.main,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: `${theme.palette.info.lighter} !important`,
      fontSize: theme.typography.subtitle2.fontSize,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1.35, 2),
      letterSpacing: 0.5,

      '&:focus-within': {
        borderColor: theme.palette.primary.main,
      },

      '&:before, &:after': {
        display: 'none',
      },
    }),
    colorSecondary: ({ theme }) => ({
      backgroundColor: `${theme.palette.info.main} !important`,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 1.25),
      paddingLeft: `${theme.spacing(1.75)} !important`,
      fontSize: theme.typography.caption.fontSize,
    }),
    input: ({ theme }) => ({
      '&::placeholder': {
        color: theme.palette.neutral.dark,
        opacity: 1,
      },
    }),
  },
};

export default InputBase;