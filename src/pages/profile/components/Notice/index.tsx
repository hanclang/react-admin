import React from 'react'
import { List, Switch } from 'antd'

const Notice: React.FC = () => {
  return (
    <List>
      <List.Item key="account" actions={[<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />]}>
        <List.Item.Meta title="账户密码" description="其他用户的消息将以站内信的形式通知" />
      </List.Item>
      <List.Item key="notice" actions={[<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />]}>
        <List.Item.Meta title="系统消息" description="系统消息将以站内信的形式通知" />
      </List.Item>
      <List.Item key="todo" actions={[<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />]}>
        <List.Item.Meta title="待办任务" description="待办任务将以站内信的形式通知" />
      </List.Item>
    </List>
  )
}

export default Notice
