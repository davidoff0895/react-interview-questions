import {Component} from 'react';

export default class Counter extends Component<any, any> {
    state = {
        value: 0
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return nextState.value !== this.state.value;
    }

    handleBtnClick() {
        this.setState({value: this.state.value + 1})
    }
    render() {
        return (
            <div>
                <h1>Counter component</h1>
                <div>{this.state.value}</div>
                <button onClick={this.handleBtnClick}>+</button>
            </div>
        );
    }
}