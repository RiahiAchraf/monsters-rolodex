import React from 'react';
import './card-list.component.css';
import { Card } from '../card/card.componenet';

export const Cardlist = props => {
    return (
        <div className="card-list">
             {props.monsters.map((monster) => (
             <Card key={monster.id} monster={monster} />
             ))}
        </div>
    )
};