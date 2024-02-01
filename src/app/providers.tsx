// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/navigation'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { AppProgressBar } from 'next-nprogress-bar'

export function Providers ({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <Provider store={store}>
      <AppProgressBar
        height='4px'
        color='#2299DD'
        options={{ showSpinner: false }}
        shallowRouting
      />
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider attribute='class' defaultTheme='dark'>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  )
}
