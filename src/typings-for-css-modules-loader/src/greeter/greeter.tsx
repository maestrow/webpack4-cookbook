import * as React from "react";
import { RatingEnum, Badge } from '../badge/badge';
import * as s from './styles.css';

export interface IGreeter {
    name: string;
}

export class Greeter extends React.Component<IGreeter, never> {
    public render () {
        return (
            <div className={s.suppa}>
                <span>Hello, {this.props.name}</span>
                <Badge rating={RatingEnum.Cool} />
            </div>
        );
    }
}