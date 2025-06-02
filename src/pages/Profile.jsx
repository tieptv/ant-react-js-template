import { Typography } from 'antd'

const { Title } = Typography

export default function Profile() {
  return (
    <div>
      <Title level={2}>Profile</Title>
      <p>This is your protected profile page.</p>
    </div>
  )
}