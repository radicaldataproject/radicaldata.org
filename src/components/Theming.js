import { createTheming } from '@callstack/react-theme-provider'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.rdp_pink,
      primary_light: colors.rdp_light_pink,
      text: colors.black,
      bodyBg: colors.white,
      headerBg: colors.white,
      sidebarBg: colors.lightgrey,
      link: colors.primary,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
