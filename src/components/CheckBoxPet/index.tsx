import React, { Component } from 'react';
import CheckboxInput from '../UI/CheckboxInput';
import './index.css';

export type ICheck = {
  id: string;
  name: string;
  checked: boolean;
};

type CheckBoxProps = {
  id: string;
  name: string;
};
/* 
type checkBox = {
  id: string;
  item: string;
  value: string;
  onChange: (e: boolean, i: string) => void;
};

type CheckBoxState = {
  options: ICheck[];
};

const opts: ICheck[] = [
  { name: 'black', id: '1', checked: false },
  { name: 'white', id: '2', checked: false },
  { name: 'another', id: '3', checked: false },
]; */

const opts: ICheck[] = [
  { name: 'black', id: '1', checked: false },
  { name: 'white', id: '2', checked: false },
  { name: 'another', id: '3', checked: false },
];

class CheckBoxPet extends Component<CheckBoxProps, ICheck> {
  constructor(props: CheckBoxProps) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      checked: false,
    };
  }

  inputChange = (e: boolean, item: string) => {
    console.log(item);
    this.setState({ checked: e });
  };

  render() {
    return (
      <React.Fragment>
        {opts.map((item) => (
          <CheckboxInput key={item.id} id={item.id} name={item.name} onChange />
        ))}
      </React.Fragment>
    );
  }
}

export default CheckBoxPet;
