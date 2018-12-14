import * as React from 'React';
import {Component} from 'React';

interface CounterProps {
  title?: string;
  value: number;
}

interface CounterState {
  value: number;
}

export class Counter extends Component<CounterProps, CounterState> {

  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }

  render() {
    console.log('render');
    return <div>
      <h1>{this.props.title || 'Counter'}: {this.state.value}</h1>
      <span className="button" onClick={() => this.increase()}>Increase</span>
      <span className="button" onClick={() => this.decrease()}>Decrease</span>
    </div>;
    // return createElement('h1', {}, 'Counter');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  increase() {
    this.setState(state => ({...state, value: state.value + 1}));
  }
  decrease() {
    this.setState(state => ({...state, value: state.value - 1}));
  }

  componentWillUnmount() {
    console.log('componentWillMount');
  }
}