import React from 'react'
import classNames from 'classnames'
import { Menu } from 'antd'
import styles from './index.scss'
import Account from '../../components/Account'

const Settings: React.FC = () => {
  return (
    <div className={classNames('page', styles.page)}>
      <div className={styles.left}>
        <Menu
          mode="inline"
          style={{ width: 224 }}
          theme="light"
          defaultSelectedKeys={['base']}
          items={[
            {
              key: 'base',
              label: '基本设置',
            },
            {
              key: 'security',
              label: '安全设置',
            },
            {
              key: 'account',
              label: '账号绑定',
            },
            {
              key: 'notice',
              label: '新消息通知',
            },
          ]}
        />
      </div>
      <div className={styles.right}>
        <div className={classNames(styles.title)}>账号绑定</div>
        <Account />
      </div>
    </div>
  )
}

export default Settings
