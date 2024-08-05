import type { CustomFlowbiteTheme } from 'flowbite-react'

const ButtonTheme: CustomFlowbiteTheme = {
  button: {
    base: 'group p-0.5 relative flex items-stretch justify-center',
    color: {
      primary:
        'border border-black bg-neutral-700 font-montserrat font-bold uppercase text-white transition ease-in-out enabled:hover:bg-cyan-700',
    },
    inner: {
      base: 'flex items-stretch transition-all duration-200 relative',
    },
  },
}

export default ButtonTheme
