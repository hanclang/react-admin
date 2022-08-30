import React, { useState, useEffect } from 'react'
import { Line as AntvLine } from '@ant-design/charts'

const Line: React.FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config: React.ComponentProps<typeof AntvLine> = {
    data,
    height: 300,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
  }

  return <AntvLine {...config} />
}

export default Line
