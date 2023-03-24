import React, { Component } from 'react';
import CardOfForm from '../../components/CardOfForm';
import { ICardOfForm } from '../../components/CardOfForm';
import Form from '../../components/Form';

type IFormProps = {
  className: string;
};

type IFormState = {
  cards: ICardOfForm[];
};

class FormPage extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = { cards: [] };
  }

  addCard = (cards: ICardOfForm) => {
    this.setState({
      cards: [...this.state.cards, cards],
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <Form addCard={this.addCard} className="form" />
        <div className="cards-form-list">
          {this.state.cards.map((animal, index) => (
            <CardOfForm {...animal} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormPage;
