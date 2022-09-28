import { Input, Space } from 'antd'
import React, { useState } from 'react'

interface PhoneNumberProps {
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: any) => void
}
const PhoneNumber: React.FC<PhoneNumberProps> = (props) => {
  const {defaultValue = [], value = [], onChange } = props
  const [code, setCode] = useState<string>(defaultValue[0] || value[0])
  const [number, setNumber] = useState<string>(defaultValue[1] || value[1])

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value
    setNumber(newNumber)
    onChange?.([code, newNumber])
  }

  const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCode = e.target.value
    setCode(newCode)
    onChange?.([newCode, number])
  }

  return (
    <Space>
      <Input onChange={onCodeChange} value={value[0] || code} className="area_code" style={{ width: 72 }} />
      <Input onChange={onNumberChange} value={value[1] || number} className="phone_number" style={{ width: 214 }} />
    </Space>
  )
}

export default PhoneNumber
