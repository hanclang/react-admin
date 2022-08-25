import React from 'react'
import { Bullet as AntvBullet } from '@ant-design/charts'

const Bullet: React.FC = () => {
  const data = [
    {
      title: '满意度',
      ranges: [100],
      measures: [80],
      target: 89,
    },
  ]

  const config: React.ComponentProps<typeof AntvBullet> = {
    data,
    height: 46,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD',
    },
    label: {
      measure: false,
    },
    size: {
      range: 10,
      measure: 10,
      target: 15,
    },
    xAxis: {
      line: null,
      label: null,
    },
    yAxis: {
      line: null,
      label: null,
      grid: null,
    },
    tooltip: {
      // @ts-ignore
      showContent: false,
    },
  }
  return <AntvBullet {...config} />
}

export default Bullet
