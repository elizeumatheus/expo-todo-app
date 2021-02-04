import { useState } from 'react'

import { light, dark } from '@/styles/theme'

const useTheme = () => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () =>
    setTheme(previousTheme => (previousTheme === light ? dark : light))

  return { theme, toggleTheme }
}

export default useTheme
