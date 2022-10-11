import styles from './index.scss'
import { Button, Descriptions, PageHeader, Space, Statistic, Tabs } from 'antd'
import React from 'react'
import { EllipsisOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Association">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="Remarks">Gonghu Road, Xihu District, Hangzhou, Zhejiang, China</Descriptions.Item>
  </Descriptions>
)

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
    <Statistic
      title="状态"
      value="待审批"
      style={{
        marginRight: 32,
      }}
    />
    <Statistic title="订单金额" prefix="$" value={568.08} />
  </div>
)

const Content: React.FC<{ children: React.ReactNode; extra: React.ReactNode }> = ({ children, extra }) => (
  <div className={styles.content}>
    <div className="main">{children}</div>
    <div className={styles.extra}>{extra}</div>
  </div>
)

const Basic: React.FC = () => (
  <PageHeader
    className={styles.pageHeader}
    title="单号：234231029431"
    extra={
      <div className={styles.headingExtra}>
        <Space size={0}>
          <div className={styles.btnGroup}>
            <Button>操作一</Button>
            <Button>操作二</Button>
            <Button>
              <EllipsisOutlined />
            </Button>
          </div>
          <Button type="primary">主操作</Button>
        </Space>
      </div>
    }
    footer={
      <Tabs defaultActiveKey="1">
        <TabPane tab="Details" key="1" />
        <TabPane tab="Rule" key="2" />
      </Tabs>
    }
  >
    <Content extra={extraContent}>{renderContent()}</Content>
  </PageHeader>
)

export default Basic
