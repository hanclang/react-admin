import React from 'react'
import classNames from 'classnames'
import style from './UserIntroduceSection.scss'

interface UserIntroduceSectionProps {
  title?: React.ReactNode
  children?: React.ReactNode
  className?: string
  icon?: React.ReactNode
}
const UserIntroduceSection: React.FC<UserIntroduceSectionProps> = (props) => {
  const { children, className = '', title = '', icon = '' } = props
  return (
    <div className={classNames(style.section, className)}>
      <div className={style.header}>
        <span>{icon}</span>
        <span className={style.title}>{title}</span>
      </div>
      <div className={style.body}>{children}</div>
    </div>
  )
}
export default UserIntroduceSection
