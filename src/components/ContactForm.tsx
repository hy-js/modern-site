import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"

type FormData = {
  name: string
  email: string
  message: string
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required")
})

const ContactForm = () => {

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })


  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: FormData) => {
    try {

      setIsSent(true);
      await fetch(
        "https://getform.io/f/0f8bfd77-b619-4c1c-92a1-7f5e1e5c3297",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      )

      reset({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission failed:', error);
      setIsSent(false);
      setErrorMessage('Failed to send. Please try again later.');
    } finally {
      setIsSent(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && <p>{errorMessage}</p>}
      <div className='w-full flex flex-col my-4'>
        <label htmlFor='name'>Name:</label>
        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className='w-full flex flex-col my-4'>
        <label htmlFor='email'>Email:</label>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className='w-full flex flex-col my-4'>
        <label htmlFor='message'>Message:</label>
        <Controller
          name='message'
          control={control}
          defaultValue=''
          render={({ field }) => <textarea {...field} />}
        />
        {errors.message && <span>{errors.message.message}</span>}
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='px-4 py-2 w-40 bg-[#C7B0B1] disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 hov'>
        {isSent ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}

export default ContactForm
