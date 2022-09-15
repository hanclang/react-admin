import React from 'react'
import { Timeline as AntdTimeline } from 'antd'
const Timeline = () => {
  return (
    <AntdTimeline>
      <AntdTimeline.Item color="green">Create a services site 2015-09-01</AntdTimeline.Item>
      <AntdTimeline.Item color="green">Create a services site 2015-09-01</AntdTimeline.Item>
      <AntdTimeline.Item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </AntdTimeline.Item>
      <AntdTimeline.Item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </AntdTimeline.Item>
      <AntdTimeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </AntdTimeline.Item>
      <AntdTimeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </AntdTimeline.Item>
      <AntdTimeline.Item color="#00CCFF">
        <p>Custom color testing</p>
      </AntdTimeline.Item>
    </AntdTimeline>
  )
}

export default Timeline
