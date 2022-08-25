import React from 'react'
import style from './ChartCard.scss'
import { Card, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import TrendItem from './TrendItem'
import Field from './Field'

interface ChartCardProps {
  children?: React.ReactNode
  footer?: React.ReactNode
  total: string
  meta: string
}

const ChartCard: React.FC<ChartCardProps> = (props) => {
  const { children, total, meta, footer } = props
  return (
    <Card bodyStyle={{ padding: '20px 24px 8px' }}>
      <div className={style.chartCard}>
        <div className={style.chartTop}>
          <div className={style.metaWrap}>
            <div className={style.meta}>
              <span>{meta}</span>
              <Tooltip placement="top" title={'指标说明'}>
                <span className={style.action}>
                  <InfoCircleOutlined />
                </span>
              </Tooltip>
            </div>
            <div className={style.total}>
              <span>{total}</span>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.contentFixed}>{children}</div>
        </div>
        <div className={style.footer}>{footer}</div>
      </div>
    </Card>
  )
}

export default ChartCard
