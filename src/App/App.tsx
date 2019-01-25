import React, { Component } from 'react';
import { Button, Input } from '../components/form';
import Textarea from '../components/form/Textarea';

export default class App extends Component {
  public info = 'For maximum security, your private key will <b>never</b> leave your browser.';

  public render() {
    return (
      <div style={{ margin: '150px auto', maxWidth: '500px' }}>
        <Textarea touched invalid shouldValidate errors='Some error' info={this.info} placeholder='Some textarea placeholder' label='Additional details' />
        <Input touched info={this.info} type='password' placeholder='Some placeholder' label='Title here' />
        <Button onClick={() => console.log('test')} loading>I am a button</Button>
      </div>
    );
  }
}
