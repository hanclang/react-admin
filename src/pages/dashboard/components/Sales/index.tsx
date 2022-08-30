import React, {useCallback, useMemo} from 'react'
import { Button, Card, Col, DatePicker, Row, Tabs } from 'antd'
import style from './index.scss'
import Line from '../Line'
import SalesRank from './SalesRank'

const { TabPane } = Tabs
const { RangePicker } = DatePicker

const Sales: React.FC = () => {
  const operations = (
    <div className={style.salesExtraWrap}>
      <div className={style.salesExtra}>
        <a>今日</a>
        <a>本周</a>
        <a>本月</a>
        <a>本年</a>
      </div>
      <RangePicker />
    </div>
  )
  const TabPaneItem = useCallback(
    () => (
      <Row>
        <Col span={16}>
          <div className={style.salesBar}>
            <Line />
          </div>
        </Col>
        <Col span={8}>
          <SalesRank />
        </Col>
      </Row>
    ),
    []
  )
  return (
    <Card>
      <div className={style.salesCard}>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="销售额" key="1">
              <TabPaneItem />
          </TabPane>
          <TabPane tab="访问量" key="2">
              <TabPaneItem />
          </TabPane>
        </Tabs>
      </div>
    </Card>
  )
}

export default Sales
