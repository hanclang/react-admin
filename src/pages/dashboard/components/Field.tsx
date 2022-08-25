import React from 'react'
import style from './Field.scss'

interface FieldProps {
  label: string
  value: string
}

const Field: React.FC<FieldProps> = (props) => {
  const { label, value } = props
  return (
    <div className={style.field}>
      <div className={style.label}>{label}</div>
      <div className={style.value}>{value}</div>
    </div>
  )
}

export default Field
