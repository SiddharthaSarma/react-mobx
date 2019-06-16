import { observer } from 'mobx-react';
import React from 'react';
interface ICounter {
  store: any;
}

@observer
export default class CounterView extends React.Component<ICounter> {
  render() {
    return (
      <div>
        <h1>Count: {this.props.store.count}</h1>
        <button onClick={() => this.props.store.increment()}>+</button>
        <button onClick={() => this.props.store.decrement()}>-</button>
      </div>
    );
  }
}
