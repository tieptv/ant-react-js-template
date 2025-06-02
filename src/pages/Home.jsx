import { Typography } from 'antd'

const { Title } = Typography

export default function Home() {
  return (
    <div>
      <Title level={2}>Home Page</Title>
      <p>Welcome to our application!</p>
    </div>
  )
}