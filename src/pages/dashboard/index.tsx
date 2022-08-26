import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { TrendItem, Area, Column, ChartCard, Bullet, Field } from './components'

import { getChartData } from '@/api/dashboard'

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any>({})
  useEffect(() => {
    getChartData().then((res) => {
      const data = res.data
      setData(data)
    })
  }, [])
  return (
    <div>
      <Row gutter={24}>
        <Col span={6}>
          <ChartCard meta="总销售额" total="¥ 126,560" footer={<Field label="日销售额" value="￥12,423" />}>
            <TrendItem label="周同比" value="12%" styles={{ marginRight: 16 }} up />
            <TrendItem label="日同比" value="11%" down />
          </ChartCard>
        </Col>
        <Col span={6}>
          <ChartCard meta="访问量" total="8,846" footer={<Field label="日访问量" value="12,423" />}>
            <Area data={data.visitData} />
          </ChartCard>
        </Col>
        <Col span={6}>
          <ChartCard meta="支付笔数" total="6,560" footer={<Field label="转化率" value="60%" />}>
            <Column data={data.visitData} />
          </ChartCard>
        </Col>
        <Col span={6}>
          <ChartCard
            meta="运营活动效果"
            total="78%"
            footer={
              <>
                <TrendItem label="周同比" value="12%" styles={{ marginRight: 16 }} up />
                <TrendItem label="日同比" value="11%" down />
              </>
            }
          >
            <Bullet />
          </ChartCard>
        </Col>
      </Row>
    </div>
  )
}
export default Dashboard
