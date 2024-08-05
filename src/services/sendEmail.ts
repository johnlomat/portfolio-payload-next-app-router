import axios from 'axios'

interface Props {
  name: string
  email: string
  message: string
}

const sendEmail = async ({ name, email, message }: Props) => {
  return axios({
    method: 'POST',
    url: '/api/send-email',
    data: {
      name,
      email,
      message,
    },
  })
}

export default sendEmail
