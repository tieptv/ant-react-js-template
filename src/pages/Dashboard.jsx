import { Typography } from 'antd'

const { Title } = Typography

export default function Dashboard() {
  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <p>This is your protected dashboard page.</p>
    </div>
  )
}