import React, { Component, createRef, useState } from 'react';
import CardOfForm from '../../components/CardOfForm';
import { ICardOfForm } from '../../components/CardOfForm';
import Form from '../../components/Form';
import './index.css';

type IFormProps = {
  className: string;
};

type IFormState = {
  cards: ICardOfForm[];
};

const FormPage = (props: IFormProps) => {
  const [cards, setCards] = useState<ICardOfForm[]>([]);
  const addCard = (card: ICardOfForm) => setCards([...cards, card]);

  return (
    <div className={props.className}>
      <Form setCards={addCard} cards={cards} className="form" />
      <div className="cards-form-list">
        {cards.map((animal, index) => (
          <CardOfForm {...animal} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
