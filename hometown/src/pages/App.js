import React, { Component } from 'react'
import { Button } from 'antd'
import '../static/css/App.less'

export default class App extends Component {
  constructor(props, items) {
    super(props)
  }
  render () {
    return (
      <div>
        Hello world
        <Button type="primary">Primary</Button>
        <Button type="dashed">Dashed</Button>
      </div>
    )
  }
}