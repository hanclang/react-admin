import React from 'react'
import style from './TrendItem.scss'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'

interface TrendItemProps {
  styles?: React.CSSProperties
  up?: boolean
  down?: boolean
  label: string
  value: string
}

const TrendItem: React.FC<TrendItemProps> = (props) => {
  const { up, down, label, value, styles = {} } = props
  return (
    <div className={style.trendItem} style={styles}>
      <span>
        {label}
        <span className={style.trendText}>{value}</span>
      </span>
      {up ? (
        <span className={style.up}>
          <CaretUpOutlined />
        </span>
      ) : null}
      {down ? (
        <span className={style.down}>
          <CaretDownOutlined />
        </span>
      ) : null}
    </div>
  )
}

export default TrendItem
