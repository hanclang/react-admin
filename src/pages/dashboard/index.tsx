import React, { useEffect, useState } from 'react'
import { Card, Dropdown, Menu, Col, Row, Table } from 'antd'
import { TrendItem, Area, Column, ChartCard, Bullet, Field, Sales } from './components'
import { getChartData } from '@/api/dashboard'
import style from './index.scss'
import AboutMe from '../profile/components/AboutMe'
import { EllipsisOutlined } from '@ant-design/icons'

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any>({})
  useEffect(() => {
    getChartData().then((res) => {
      const data = res.data
      setData(data)
    })
  }, [])
  return (
    <div className="page">
      <Row gutter={24} className={style.rowItem}>
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
      <Row className={style.rowItem}>
        <Col span={24}>
          <Sales />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={18}>
          <Card
            extra={
              <Dropdown
                placement="bottomRight"
                overlay={
                  <Menu
                    items={[
                      {
                        key: '1',
                        label: '操作一',
                      },
                      {
                        key: '1',
                        label: '操作二',
                      },
                    ]}
                  />
                }
                overlayClassName={style.overlay}
              >
                <EllipsisOutlined />
              </Dropdown>
            }
            title="线上热门搜索"
          >
            <Row gutter={24}>
              <Col span={12}>
                <ChartCard totalExtra={<TrendItem label="" value="5%" down />} className={style.cardWithoutBorder} meta="搜索用户数" total="12,321">
                  <Area data={data.visitData} />
                </ChartCard>
              </Col>
              <Col span={12}>
                <ChartCard totalExtra={<TrendItem label="" value="18%" up />} className={style.cardWithoutBorder} meta="人均搜索次数" total="2.7">
                  <Area data={data.visitData} />
                </ChartCard>
              </Col>
            </Row>

            <Table
              rowKey="index"
              columns={[
                { dataIndex: 'index', title: '排名' },
                { dataIndex: 'keyword', title: '搜索关键词' },
                { dataIndex: 'count', title: '用户数' },
                { dataIndex: 'range', title: '周涨幅' },
              ]}
              dataSource={data.searchData}
              pagination={{ pageSize: 5 }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <AboutMe inDashboard />
        </Col>
      </Row>
    </div>
  )
}
export default Dashboard
