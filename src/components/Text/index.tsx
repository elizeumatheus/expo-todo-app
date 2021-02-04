import styled from 'styled-components/native'

import { TextProps } from './Text.types'

const Text = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme, size }) =>
    size ? theme.typography.sizes[size] : theme.typography.sizes.normal};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
`

export default Text
