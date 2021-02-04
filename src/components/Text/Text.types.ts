import { ThemeTypographySizes } from '@/models/theme.model'

export interface TextProps {
  bold?: boolean
  size?: keyof ThemeTypographySizes
}
