import React from 'react'
import { Avatar, Card, Progress } from 'antd'
import { FileSearchOutlined, ReadOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from '@/models'
import classNames from 'classnames'
import style from './AboutMe.scss'
import UserIntroduceSection from './UserIntroduceSection'

interface AboutMeProps {
  inDashboard?: boolean
}
const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { inDashboard = false } = props
  const userInfo = useSelector((state: RootState) => state.user.user)
  return (
    <Card cover={inDashboard ? <img alt="bg" src="https://pic.quanjing.com/bj/2h/QJ6530854838.jpg@!350h" /> : null} title={inDashboard ? '' : 'about me'}>
      <div className={style.userProfile}>
        <Avatar
          className={classNames({
            [style.avatar]: inDashboard,
          })}
          size={inDashboard ? 80 : 114}
          src={userInfo.avatar}
        />
        {inDashboard ? null : (
          <div className={style.nameBox}>
            <div className={style.name}>{userInfo.name}</div>
            <div className={style.role}>{userInfo.roles?.join(' ')}</div>
          </div>
        )}
      </div>
      <div className={style.info}>
        {inDashboard ? null : (
          <UserIntroduceSection title="Education" icon={<ReadOutlined />}>
            <div>JS in Computer Science from the University of Technology</div>
          </UserIntroduceSection>
        )}
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
