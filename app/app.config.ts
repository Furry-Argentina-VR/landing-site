export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      neutral: 'zinc'
    },
    button: {
      slots: {
        base: 'font-bold'
      }
    },
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-8 sm:px-12 lg:px-16'
    }
  }
})
