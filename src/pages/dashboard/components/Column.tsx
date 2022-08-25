import React from 'react'
import { Column as AntvColumn } from '@ant-design/charts'

interface ColumnProps {
  data: any[]
}

const Column: React.FC<ColumnProps> = (props) => {
  const { data = [] } = props
  const config: React.ComponentProps<typeof AntvColumn> = {
    data,
    height: 46,
    xField: 'x',
    yField: 'y',
    xAxis: {
      line: null,
      label: null,
      grid: null,
    },
    yAxis: {
      line: null,
      label: null,
      grid: null,
    },
    tooltip: {
      customContent: (title, data) => {
        return `<div>${data?.[0]?.value}</div>`
      },
    },
  }
  return <AntvColumn {...config} />
}

export default Column