import * as React from 'React';
import {Component} from 'React';

interface CounterProps {
   title?: string;
   value: number;
}

export class Counter extends Component<CounterProps> {
  render() {
    return <div>
      <h1>{this.props.title || 'Counter'}: { this.props.value }</h1>
      <span className="button" onClick={ () => { alert('hello'); } }>Increase</span>
    </div>;
    // return createElement('h1', {}, 'Counter');
  }
}