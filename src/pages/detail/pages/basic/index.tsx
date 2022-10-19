import styles from './index.scss'
import type {StepsProps} from 'antd';
import {Button, Card, Descriptions, PageHeader, Space, Statistic, Tabs, Steps, Popover, Divider, Empty} from 'antd'
import React from 'react'
import {EllipsisOutlined} from '@ant-design/icons'

const {Step} = Steps;

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="创建人">曲丽丽</Descriptions.Item>
    <Descriptions.Item label="订购产品">XX 服务</Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="关联单据">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="生效日期">2017-07-07 ~ 2017-08-08</Descriptions.Item>
    <Descriptions.Item label="备注">请于两个工作日内确认</Descriptions.Item>
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
    <Statistic title="订单金额" prefix="$" value={568.08}/>
  </div>
)

const Content: React.FC<{ children: React.ReactNode; extra: React.ReactNode }> = ({children, extra}) => (
  <div className={styles.content}>
    <div className="main">{children}</div>
    <div className={styles.extra}>{extra}</div>
  </div>
)

const Header: React.FC = () => (
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
              <EllipsisOutlined/>
            </Button>
          </div>
          <Button type="primary">主操作</Button>
        </Space>
      </div>
    }
    footer={
      <Tabs defaultActiveKey="1" items={[
        {label: '详情', key: 'item-1', children: ''},
        {label: '规则', key: 'item-2', children: ''},
      ]}/>
    }
  >
    <Content extra={extraContent}>{renderContent()}</Content>
  </PageHeader>
)

const customDot: StepsProps['progressDot'] = (dot, {status, index}) => (
  <Popover
    content={
      index === 1 ? <div>
        吴嘉浩
        <div>耗时：2小时25分钟</div>
      </div> : null
    }
  >
    {dot}
  </Popover>
);

const Basic: React.FC = () => (
  <div>
    <Header/>
    <div className={styles.pageContent}>
      <Card title='流程进度'>
        <Steps current={1} progressDot={customDot}>
          <Step title="创建项目" description={<>
            <div>曲丽丽</div>
            <div>2016-12-12 12:32</div>
          </>}/>
          <Step title="部门初审" description={<>
            <div>周毛毛</div>
            <a>催一下</a>
          </>}/>
          <Step title="财务复核"/>
          <Step title="完成"/>
        </Steps>
      </Card>
      <div className={styles.gap}/>
      <Card title='用户信息'>
        <Descriptions size="small" column={3} style={{marginBottom: 24}}>
          <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
          <Descriptions.Item label="会员卡号">32943898021309809423</Descriptions.Item>
          <Descriptions.Item label="身份证">3321944288191034921</Descriptions.Item>
          <Descriptions.Item label="联系方式">
            <a>18112345678</a>
          </Descriptions.Item>
          <Descriptions.Item label="联系地址">浙江省杭州市西湖区黄姑山路工专路交叉路口</Descriptions.Item>
        </Descriptions>
        <Descriptions size="small" column={3} title='信息组' style={{marginBottom: 24}}>
          <Descriptions.Item label="某某数据">725</Descriptions.Item>
          <Descriptions.Item label="该数据更新时间">2017-08-08</Descriptions.Item>
          <Descriptions.Item label="某某数据">756</Descriptions.Item>
          <Descriptions.Item label="该数据更新时间">2017-08-08</Descriptions.Item>
        </Descriptions>
        <h4>信息组</h4>
        <Card type="inner" title="多层级信息组">
          <Descriptions size="small" column={3} title='组名称' style={{marginBottom: 24}}>
            <Descriptions.Item label="负责人">林东东</Descriptions.Item>
            <Descriptions.Item label="角色码">1234567</Descriptions.Item>
            <Descriptions.Item label="所属部门">XX公司 - YY部</Descriptions.Item>
            <Descriptions.Item label="过期时间">2017-08-08</Descriptions.Item>
            <Descriptions.Item label="描述">这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions size="small" column={3} title='组名称' style={{marginBottom: 24}}>
            <Descriptions.Item label="学名">Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..</Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions size="small" column={3} title='组名称' style={{marginBottom: 24}}>
            <Descriptions.Item label="负责人">付小小</Descriptions.Item>
            <Descriptions.Item label="角色码">1234568</Descriptions.Item>
          </Descriptions>
        </Card>
      </Card>
      <div className={styles.gap}/>
      <Card title='用户近半年来电记录'>
        <Empty />
      </Card>
    </div>
  </div>
)

export default Basic
