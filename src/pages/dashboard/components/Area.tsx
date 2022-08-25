import React from 'react'
import { Area as AntvArea } from '@ant-design/charts'

interface AreaProps {
  data: any[]
}

const Area: React.FC<AreaProps> = (props) => {
  const { data = [] } = props

  const config: React.ComponentProps<typeof AntvArea> = {
    data,
    legend: false,
    xField: 'x',
    yField: 'y',
    height: 46,
    smooth: true,
    yAxis: {
      line: null,
      label: null,
      grid: null,
    },
    xAxis: {
      line: null,
      label: null,
    },
    tooltip: {
      customContent: (title, data) => {
        return `<div>${data?.[0]?.value}</div>`
      },
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      }
    },
  }

  return <AntvArea {...config} />
}

export default Area

