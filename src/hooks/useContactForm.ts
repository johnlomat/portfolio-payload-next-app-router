import { useState } from 'react'

const useContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: any) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      }
    })
  }

  const resetForm = () => {
    setValues({
      name: '',
      email: '',
      message: '',
    })
  }

  return { values, handleChange, resetForm }
}

export default useContactForm
