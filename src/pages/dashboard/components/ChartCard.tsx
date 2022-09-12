import React from 'react'
import style from './ChartCard.scss'
import { Card, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import classNames from 'classnames'

interface ChartCardProps {
  children?: React.ReactNode
  footer?: React.ReactNode
  totalExtra?: React.ReactNode
  className?: string
  total: string
  meta: string
}

const ChartCard: React.FC<ChartCardProps> = (props) => {
  const { children, total, meta, footer, totalExtra, className = '' } = props
  return (
    <Card className={classNames(className)} bodyStyle={{ padding: '20px 24px 8px' }}>
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
              <span>{totalExtra}</span>
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
