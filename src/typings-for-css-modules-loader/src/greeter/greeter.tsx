import * as React from "react";
import { RatingEnum, Badge } from '../badge/badge';
import * as s from './greeter.pcss';

export interface IGreeter {
    name: string;
}

export class Greeter extends React.Component<IGreeter, never> {
    public render () {
        return (
            <div className={s.suppa_black}>
                <span className={s.puppa}>Hello, {this.props.name}</span>
                <Badge rating={RatingEnum.Cool} />
            </div>
        );
    }
}