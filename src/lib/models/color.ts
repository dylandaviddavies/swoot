export const THEME_COLORS = [
  'primary',
  'secondary',
  'accent',
  'success',
  'error',
  'warning',
  'info',
  'dark',
  'light',
] as const;
export type ThemeColor = typeof THEME_COLORS[number];
