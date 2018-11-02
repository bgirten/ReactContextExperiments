import * as React from "react";
import { Component } from "react";

export interface CardDataProps {}

export interface CardDataState {}

class CardData extends React.Component<CardDataProps, CardDataState> {
  constructor(props: CardDataProps) {
    super(props);
    this.state = {};
  }
  changeName = () => {
    this.context.name = "hardison";
  };
  render() {
    let value = this.context;
    console.log(this.context);
    return <div>I AM DRUNK</div>;
  }
}

export default CardData;
