import { TaobaoOutlined, WechatOutlined, AlipayOutlined, DingtalkSquareFilled } from '@ant-design/icons'
import { List } from 'antd'
import classNames from 'classnames'
import React from 'react'
import styles from './index.scss'
const Account: React.FC = () => {
  return (
    <List>
      <List.Item key="taobao" actions={[<a>绑定</a>]}>
        <List.Item.Meta avatar={<TaobaoOutlined className={classNames(styles.taobao, styles.icon)} />} title="绑定淘宝" description="当前未绑定淘宝账号" />
      </List.Item>
      <List.Item key="taobao" actions={[<a>绑定</a>]}>
        <List.Item.Meta avatar={<WechatOutlined className={classNames(styles.wechat, styles.icon)} />} title="绑定微信" description="当前未绑定微信账号" />
      </List.Item>
      <List.Item key="taobao" actions={[<a>绑定</a>]}>
        <List.Item.Meta avatar={<AlipayOutlined className={classNames(styles.alipay, styles.icon)} />} title="绑定支付宝" description="当前未绑定支付宝账号" />
      </List.Item>
      <List.Item key="taobao" actions={[<a>绑定</a>]}>
        <List.Item.Meta avatar={<DingtalkSquareFilled className={classNames(styles.dingding, styles.icon)} />} title="绑定钉钉" description="当前未绑定钉钉账号" />
      </List.Item>
    </List>
  )
}
export default Account
