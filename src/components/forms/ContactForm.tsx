'use client'

import { useState } from 'react'
import { Toast, ToastToggle, Button, Label, TextInput, Textarea, Flowbite } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useContactForm from '@/hooks/useContactForm'
import sendEmail from '@/services/sendEmail'
import ButtonTheme from '@/components/themes/flowbite-react/ButtonTheme'
import { cn } from '@/lib/utils'

export default function ContactForm() {
  const { values, handleChange, resetForm } = useContactForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      const req = await sendEmail({
        name: values.name,
        email: values.email,
        message: values.message,
      })
      if (req.status === 200) {
        setResponseMessage({
          isSuccessful: true,
          message: 'Thank you for your message.',
        })
        resetForm()
      } else {
        setResponseMessage({
          isSuccessful: false,
          message: 'Oops something went wrong sending this message.',
        })
      }
    } catch (e) {
      console.log(e)
      setResponseMessage({
        isSuccessful: false,
        message: 'Oops something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex w-full max-w-[31.25rem] flex-col items-center justify-center space-y-6">
      <form onSubmit={handleSubmit} className="w-full rounded bg-white p-8 uppercase shadow-md">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" className="font-montserrat font-bold" />
          </div>
          <TextInput
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            id="name"
            required
            className="font-open-sans"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" className="font-montserrat font-bold" />
          </div>
          <TextInput
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            required
            className="font-open-sans"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="message" value="Message" className="font-montserrat font-bold" />
          </div>
          <Textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            id="message"
            placeholder="Leave a message..."
            required
            rows={4}
            className="font-open-sans"
          />
        </div>
        <Flowbite theme={{ theme: ButtonTheme }}>
          <Button
            type="submit"
            fullSized
            color="primary"
            isProcessing={isSubmitting ? true : false}
          >
            {!isSubmitting ? 'Submit' : 'Submitting'}
          </Button>
        </Flowbite>
      </form>
      {responseMessage.message && (
        <Toast className="fixed bottom-4 left-1/2 z-10 m-0 w-4/5 max-w-none -translate-x-1/2 p-4 md:w-auto">
          <FontAwesomeIcon
            icon={responseMessage.isSuccessful ? faCircleCheck : faCircleXmark}
            className={cn('text-2xl text-red-600', {
              'text-green-400': responseMessage.isSuccessful,
            })}
          />
          <div className="mx-3 font-open-sans text-sm">{responseMessage.message}</div>
          <ToastToggle className="flex items-center justify-center" />
        </Toast>
      )}
    </div>
  )
}
