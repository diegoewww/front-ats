/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
import config from '../../tailwind.config'
/**
 *
 * Find out if a tailwind screen value matches the current window
 *
 * @param {string} screen
 *
 * @return {Object|Boolean}
 */
export const screenIs = (screen = '') => {
  // "Theme" is an alias to where you keep your tailwind.config.js - most likely your project root
  const screens = config.theme?.extend?.screens ?? config.theme?.screens ?? {}

  // create a keyed object of screens that match
  const matches = Object.entries(screens).reduce((results: any, [name, size]) => {
    const mediaQuery = typeof size === 'string' ? `(min-width: ${size})` : `(max-width: ${size.max})`

    results[name] = window.matchMedia(mediaQuery).matches

    return results
  }, {})

  // show all matches when there is no screen choice
  if (screen === '') {
    return matches
  }

  // invalid screen choice
  if (!(screens[screen as keyof typeof screens])) {
    console.error(`No match for "${screen}"`)

    return false
  }

  return matches[screen]
}
