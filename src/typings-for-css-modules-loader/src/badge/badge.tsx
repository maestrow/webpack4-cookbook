import * as React from 'react';
import * as s from './badge.pcss';

export enum RatingEnum {
    Poor,
    Cool,
    Rock
}

const getStyle = (rating: RatingEnum) => {
    switch (rating) {
        case RatingEnum.Poor:
            return s.poor;
        case RatingEnum.Cool:
            return s.cool;
        case RatingEnum.Rock:
            return s.rock;
    }
}

export interface IBadge {
    rating: RatingEnum
}

export class Badge extends React.Component<IBadge, never> {
    public render () {
        const style = getStyle(this.props.rating);
        return (
            <div className={style}>Some Badge</div>
        );
    }
}