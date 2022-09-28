import React, { useCallback, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Menu, Alert } from 'antd'
import { find } from 'lodash-es'
import styles from './index.scss'
import Account from '../../components/Account'
import Notice from '../../components/Notice'
import Security from '../../components/Security'
import Base from '../../components/Base'

const Settings: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState({
    key: 'base',
    label: '基本设置',
  })
  const items = useMemo(
    () => [
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
    ],
    []
  )
  const renderPanel = useCallback((menuItem: typeof activeMenu) => {
    switch (menuItem.key) {
      case 'base':
        return <Base />
      case 'account':
        return <Account />
      case 'security':
        return <Security />
      case 'notice':
        return <Notice />

      default:
        return <Alert message="提示" description="此功能尚未开发" type="info" showIcon />
    }
  }, [])
  return (
    <div className={classNames('page', styles.page)}>
      <div className={styles.left}>
        <Menu
          mode="inline"
          style={{ width: 224 }}
          theme="light"
          defaultSelectedKeys={['base']}
          onSelect={({ key, keyPath, selectedKeys, domEvent }) => {
            setActiveMenu(find(items, { key })!)
          }}
          items={items}
        />
      </div>
      <div className={styles.right}>
        <div className={classNames(styles.title)}>{activeMenu.label}</div>
        {renderPanel(activeMenu)}
      </div>
    </div>
  )
}

export default Settings
