import React, { Component, createRef } from 'react';
import FileInput from '../../components/UI/FileInput';
import TextInput from '../../components/UI/TextInput';
import DateInput from '../../components/UI/DateInput';
import SelectInput from '../../components/UI/SelectInput';
import CheckboxInput from '../../components/UI/CheckboxInput';
import { ICheck } from '../../components/UI/CheckboxInput';
import { IRadio } from '../../components/UI/RadioInput';
import RadioInput from '../../components/UI/RadioInput';
import CardOfForm from '../../components/CardOfForm';
import { ICardOfForm } from '../../components/CardOfForm';

const opts: ICheck[] = [
  { name: 'black', id: '1', checked: false },
  { name: 'white', id: '2', checked: false },
  { name: 'another', id: '3', checked: false },
];

const optsRadio: IRadio[] = [
  { name: 'sex', id: '1', value: 'boy' },
  { name: 'sex', id: '2', value: 'girl' },
];

type IFormProps = {
  className: string;
};

type IFormState = {
  cards: ICardOfForm[];
};

class FormPage extends Component<IFormProps, IFormState> {
  inputClass = 'search_form';
  dateInput = createRef<DateInput>();
  fileInput = createRef<FileInput>();
  radioInputBoy = createRef<RadioInput>();
  radioInputGirl = createRef<RadioInput>();
  checkBoxInputBlack = createRef<CheckboxInput>();
  checkBoxInputWhite = createRef<CheckboxInput>();
  checkBoxInputAnother = createRef<CheckboxInput>();
  textInput = createRef<TextInput>();
  selectInput = createRef<SelectInput>();

  constructor(props: IFormProps) {
    super(props);
    this.state = { cards: [] };
  }

  print = () => {
    this.setState({
      cards: [
        ...this.state.cards,
        {
          name: this.textInput.current?.state.inputField ?? '',
          date: this.dateInput.current?.state.inputField ?? '',
          animal: this.selectInput.current?.state.value ?? '',
          gender: this.radioInputGirl.current?.radioInput.current?.checked
            ? this.radioInputGirl.current?.radioInput.current?.value
            : 'boy',
          color:
            (this.checkBoxInputBlack.current?.state.checked
              ? this.checkBoxInputBlack.current?.state.name
              : '') +
            (this.checkBoxInputWhite.current?.state.checked
              ? this.checkBoxInputWhite.current?.state.name
              : '') +
            (this.checkBoxInputAnother.current?.state.checked
              ? this.checkBoxInputAnother.current?.state.name
              : ''),
          image: 'piska',
        },
      ],
    });
    console.log(this.textInput.current?.state.inputField);
    console.log(this.dateInput.current?.state.inputField);
    console.log(this.selectInput.current?.state.value);
    console.log(this.radioInputBoy.current?.radioInput.current?.value);
    console.log(this.radioInputGirl.current?.radioInput.current?.checked);
    console.log(
      this.checkBoxInputBlack.current?.state.name,
      this.checkBoxInputBlack.current?.state.checked
    );
  };

  render() {
    return (
      <div className={this.props.className}>
        <TextInput className="input" ref={this.textInput} />
        <DateInput className="date" ref={this.dateInput} />
        <SelectInput className="select" ref={this.selectInput} />
        <CheckboxInput id={opts[0].id} name={opts[0].name} ref={this.checkBoxInputBlack} />
        <CheckboxInput id={opts[1].id} name={opts[1].name} ref={this.checkBoxInputWhite} />
        <CheckboxInput id={opts[2].id} name={opts[2].name} ref={this.checkBoxInputAnother} />
        <RadioInput
          name={optsRadio[0].name}
          value={optsRadio[0].value}
          id={optsRadio[0].id}
          ref={this.radioInputBoy}
        />
        <RadioInput
          name={optsRadio[1].name}
          value={optsRadio[1].value}
          id={optsRadio[1].id}
          ref={this.radioInputGirl}
        />
        <FileInput class="file" ref={this.fileInput} />
        <button onClick={this.print}>hhhh</button>
        {this.state.cards.map((animal, index) => (
          <CardOfForm {...animal} key={index} />
        ))}
      </div>
    );
  }
}

export default FormPage;
