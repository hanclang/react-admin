import { Card, Col, List, Row, Tabs } from 'antd'
import React from 'react'
import AboutMe from '../../components/AboutMe'
import Activity from '../../components/Activity'
import Timeline from '../../components/Timeline'
const Profile: React.FC = () => {
  return (
    <div className="page">
      <Row gutter={24}>
        <Col span={6}>
          <AboutMe />
        </Col>
        <Col span={18}>
          <Card>
            <Tabs
              items={[
                {
                  key: 'Activity',
                  label: 'Activity',
                  children: (
                    <List
                      dataSource={[
                        {
                          avatar: 'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg?imageView2/1/w/80/h/80',
                        },
                        {
                          avatar: 'https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg?imageView2/1/w/80/h/80',
                        },
                        {
                          avatar: 'https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg?imageView2/1/w/80/h/80',
                        },
                      ]}
                      renderItem={(item) => <List.Item><Activity avatar={item.avatar} /></List.Item>}
                    />
                  ),
                },
                {
                  key: 'Timeline',
                  label: 'Timeline',
                  children: <Timeline />
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
