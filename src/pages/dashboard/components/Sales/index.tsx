import React, { useCallback, useState } from 'react'
import { Card, Col, DatePicker, Row, Tabs } from 'antd'
import classNames from 'classnames'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import style from './index.scss'
import Line from '../Line'
import SalesRank from './SalesRank'

const { TabPane } = Tabs
const { RangePicker } = DatePicker

const Sales: React.FC = () => {
  const [salesDay, setSalesDay] = useState<[Dayjs, Dayjs]>([dayjs(), dayjs().endOf('month')])
  const [activeRange, setActiveRange] = useState<'today' | 'week' | 'month' | 'year'>('today')
  const operations = (
    <div className={style.salesExtraWrap}>
      <div className={style.salesExtra} onClick={handleRangeChange}>
        <a
          className={classNames({
            [style.currentDate]: activeRange === 'today',
          })}
          data-range="today"
        >
          今日
        </a>
        <a
          className={classNames({
            [style.currentDate]: activeRange === 'week',
          })}
          data-range="week"
        >
          本周
        </a>
        <a
          className={classNames({
            [style.currentDate]: activeRange === 'month',
          })}
          data-range="month"
        >
          本月
        </a>
        <a
          className={classNames({
            [style.currentDate]: activeRange === 'year',
          })}
          data-range="year"
        >
          本年
        </a>
      </div>
      <RangePicker value={salesDay} />
    </div>
  )

  function handleRangeChange(e: React.MouseEvent) {
    const target = e.target as HTMLElement
    const range = target.dataset.range as 'today' | 'week' | 'month' | 'year' | undefined
    if (!range) {
      return
    }
    setActiveRange(range)
    switch (range) {
      case 'today':
        setSalesDay([dayjs().startOf('d'), dayjs().endOf('d')])
        return
      case 'week':
        setSalesDay([dayjs().startOf('week'), dayjs().endOf('week')])
        return
      case 'month':
        setSalesDay([dayjs().startOf('month'), dayjs().endOf('month')])
        return
      case 'year':
        setSalesDay([dayjs().startOf('year'), dayjs().endOf('year')])
        return
    }
  }

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
