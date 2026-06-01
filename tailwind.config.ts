export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      patter: /^(col-span-(1[0-2]|[1-9])|sm:col-span-(1[0-2]|[1-9])|md:col-span-(1[0-2]|[1-9])|lg:col-span-(1[0-2]|[1-9])|xl:col-span-(1[0-2]|[1-9]))$/
      // regex patterns
      // prefix group includes an empty string
      // number group is simplifed
      // anchor for full string match, even for base classes without bp prefix
      // tailwind purges dynamic classes when not safelisted
    },
  ],
}
