import { Col, Row } from 'antd'
import React from 'react'
import AboutMe from './components/AboutMe'
const Profile: React.FC = () => {
  return (
    <div className="page">
      <Row>
        <Col span={6}>
          <AboutMe />
        </Col>
      </Row>
    </div>
  )
}

export default Profile
