import * as React from "react";
import { Component } from "react";
import CardData from "./CardData/CardData";

export interface CardProps {
  hello: () => void;
}

export interface CardState {}

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = { hasList: false };
  }
  render() {
    return (
      <div>
        Hello from CARD
        <CardData />
      </div>
    );
  }
}

export default Card;
