const pixelToRem = (pixel: number, BASE: number = 16) => `${pixel / BASE}rem`

export const themeColor = {
  $pigmentGreen: '#00AD4F',
  $tangerineYellow: '#FFCC00',
  $darkOrange: '#FF9500',
  $outrageousRed: '#FA603F',
  $scienceBlue: '#0357d8',
  $dodgerBlue: '#007AFF',
  $sailBlue: '#99C9FF',
  $pureWhite: '#FFFFFF',
  $alabaster: '#F8F8F8',
  $whiteSmoke: '#EAEAEA',
  $silver: '#C3C3C3',
  $shadyLady: '#979797',
  $nightRider: '#303030',
  $pureBlack: '#000000',
} as const

export const themeFontSize = {
  $h1: `${pixelToRem(29)}`,
  $h2: `${pixelToRem(25)}`,
  $h3: `${pixelToRem(22)}`,
  $h4: `${pixelToRem(20)}`,
  $h5: `${pixelToRem(18)}`,

  $xs: `${pixelToRem(8)}`,
  $s: `${pixelToRem(10)}`,
  $m: `${pixelToRem(12)}`,
  $l: `${pixelToRem(14)}`,
  $xl: `${pixelToRem(16)}`,
} as const

export const themeFontWeight = {
  $light: 300,
  $regular: 400,
  $bold: 600,
} as const
