import { ShareAltOutlined, HeartFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import style from './index.scss'
interface ActivityProps {
  avatar?: string
}
const Activity: React.FC<ActivityProps> = (props) => {
  const { avatar } = props
  return (
    <div className={style.post}>
      <div className={style.userBlock}>
        <img className={style.avatar} src={avatar} />
        <span className={style.username}>Iron Man</span>
        <span className={style.description}>Shared publicly - 7:30 PM today</span>
      </div>
      <div className={style.content}>
        Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to
        help create filler text for everyone from bacon lovers to Charlie Sheen fans.
      </div>
      <div className={style.action}>
        <Space size={16}>
          <div className={style.actionItem}>
            <ShareAltOutlined />
            Share
          </div>
          <div className={style.actionItem}>
            <HeartFilled />
            Like
          </div>
        </Space>
      </div>
    </div>
  )
}

export default Activity
