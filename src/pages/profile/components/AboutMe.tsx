import React from 'react'
import { Avatar, Card, Progress } from 'antd'
import { FileSearchOutlined, ReadOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from '@/models'
import style from './AboutMe.scss'
import UserIntroduceSection from './UserIntroduceSection'
const AboutMe: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.user.user)
  return (
    <Card title="about me">
      <div className={style.userProfile}>
        <Avatar size={114} src={userInfo.avatar} />
        <div className={style.nameBox}>
          <div className={style.name}>{userInfo.name}</div>
          <div className={style.role}>{userInfo.roles?.join(' ')}</div>
        </div>
      </div>
      <div className={style.info}>
        <UserIntroduceSection title="Education" icon={<ReadOutlined />}>
          <div>JS in Computer Science from the University of Technology</div>
        </UserIntroduceSection>
        <UserIntroduceSection title="Skills" icon={<FileSearchOutlined />}>
          <div className={style.progressItem}>
            <span>TypeScript</span>
            <Progress percent={82} />
          </div>
          <div className={style.progressItem}>
            <span>JavaScript</span>
            <Progress percent={7.4} />
          </div>
          <div className={style.progressItem}>
            <span>SCSS</span>
            <Progress percent={10.6} />
          </div>
          <div className={style.progressItem}>
            <span>ESLint</span>
            <Progress percent={100} />
          </div>
        </UserIntroduceSection>
      </div>
    </Card>
  )
}
export default AboutMe
