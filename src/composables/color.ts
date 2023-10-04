import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

export function getTextColor(color: string) {
  const fullConfig = resolveConfig(tailwindConfig)
  const colors = fullConfig.theme?.colors

  if (!colors)
    throw new Error('No colors found in tailwind config')

  if (color.match(/^#[0-9A-F]{6}[0-9a-f]{0,2}$/i))
    return color

  const tailwindColor = colors[color]
  let colorShade = ''
  let colorString

  if (color.split('-').length === 2)
    colorShade = color.split('-')[1]

  if (typeof tailwindColor === 'string')
    colorString = tailwindColor
  else
    colorString = colorShade ? tailwindColor.colorShade : tailwindColor.DEFAULT || tailwindColor[500]

  return colorString
}

function hexToRgb(hex: any) {
  const hexString = hex.replace(/^#/, '')
  const bigint = Number.parseInt(hexString, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}

export function getColorLighter(color: string, amount: number) {
  const colorString = getTextColor(color)

  const lightenColor = (color: number[], amount: number): string => {
    const [r, g, b] = color.map(c => Math.min(c + amount, 255))
    return `#${[r, g, b].map(c => c.toString(16).padStart(2, '0')).join('')}`
  }

  return lightenColor(hexToRgb(colorString), amount)
}
