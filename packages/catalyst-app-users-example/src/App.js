import React, { Component } from 'react'

import { AuthenticationDialog } from '@liquid-labs/catalyst-app-users'

export default class App extends Component {
  render () {
    return (
      <div>
        <AuthenticationDialog />
      </div>
    )
  }
}
