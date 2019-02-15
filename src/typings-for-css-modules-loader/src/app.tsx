import * as React from "react";
import * as s from './styles.css';

console.dir(s);

export interface IApp {
    message: string;
}

export class App extends React.Component<IApp, never> {
    public render () {
        return (
            <div>Say, {this.props.message}</div>
        );
    }
}