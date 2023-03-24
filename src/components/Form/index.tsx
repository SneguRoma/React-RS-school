import React, { Component, createRef, RefObject } from 'react';
import FileInput from '../../components/UI/FileInput';
import TextInput from '../../components/UI/TextInput';
import DateInput from '../../components/UI/DateInput';
import SelectInput from '../../components/UI/SelectInput';
import CheckboxInput from '../../components/UI/CheckboxInput';
import RadioInput from '../../components/UI/RadioInput';
import { ICardOfForm } from '../../components/CardOfForm';
import { OptsCheck, OptsRadio } from './constants';
import './index.css';

type IFormProps = {
  className: string;
  addCard: (cards: ICardOfForm) => void;
  formRef: RefObject<HTMLFormElement>;
};

type IFormState = {
  errName: string;
  errDate: string;
  errColor: string;
  errAnimal: string;
  errImage: string;
};

class Form extends Component<IFormProps, IFormState> {
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
    this.state = {
      errName: '',
      errDate: '',
      errColor: '',
      errAnimal: '',
      errImage: '',
    };
  }

  print: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newCard: ICardOfForm = {
      name: this.textInput.current?.state.inputField ?? '',
      date: this.dateInput.current?.state.inputField ?? '',
      animal: this.selectInput.current?.state.value ?? '',
      gender: this.radioInputGirl.current?.radioInput.current?.checked
        ? this.radioInputGirl.current?.radioInput.current?.value
        : 'girl',
      color:
        (this.checkBoxInputBlack.current?.state.checked
          ? this.checkBoxInputBlack.current?.state.name
          : '') +
        '  ' +
        (this.checkBoxInputWhite.current?.state.checked
          ? this.checkBoxInputWhite.current?.state.name
          : '') +
        '  ' +
        (this.checkBoxInputAnother.current?.state.checked
          ? this.checkBoxInputAnother.current?.state.name
          : ''),
      image: this.fileInput.current?.state.file ?? '',
    };

    const err: IFormState = {
      errName: this.checkName(newCard.name ?? '')
        ? ''
        : 'must begin with a capital Latin letter and have at least 3 letters',
      errDate: this.checkAval(newCard.date ?? '') ? '' : 'enter date',
      errAnimal: this.checkAval(newCard.animal ?? '') ? '' : 'choose animal',
      errColor: this.checkAval(newCard.color.trim() ?? '') ? '' : 'choose color',
      errImage: this.checkAval(newCard.image ?? '') ? '' : 'choose file',
    };

    if (Object.values(err).every((error) => error === '')) {
      this.props.addCard(newCard);
      this.setState(err);
      alert('The card has been create');
    } else this.setState(err);

    this.props.formRef.current?.reset();
  };

  checkName = (name: string) => name.length >= 3 && /[A-Z]/.test(name[0]);

  checkAval = (date: string) => date.length !== 0;

  render() {
    return (
      <form onSubmit={this.print} ref={this.props.formRef}>
        <div className={this.props.className}>
          <div>
            <TextInput className="input-name" ref={this.textInput} />
            <p className="error-msg">{this.state.errName}</p>
          </div>
          <div>
            <DateInput className="date" ref={this.dateInput} />
            <p className="error-msg">{this.state.errDate}</p>
          </div>
          <div>
            <SelectInput className="select" ref={this.selectInput} />
            <p className="error-msg">{this.state.errAnimal}</p>
          </div>
          <div>
            <h4>Select colors of animal:</h4>
            <CheckboxInput
              id={OptsCheck[0].id}
              name={OptsCheck[0].name}
              ref={this.checkBoxInputBlack}
            />
            <CheckboxInput
              id={OptsCheck[1].id}
              name={OptsCheck[1].name}
              ref={this.checkBoxInputWhite}
            />
            <CheckboxInput
              id={OptsCheck[2].id}
              name={OptsCheck[2].name}
              ref={this.checkBoxInputAnother}
            />
            <p className="error-msg">{this.state.errColor}</p>
          </div>
          <div>
            <h4>Select gender:</h4>
            <RadioInput
              name={OptsRadio[0].name}
              value={OptsRadio[0].value}
              id={OptsRadio[0].id}
              ref={this.radioInputBoy}
              defaultChecked={OptsRadio[0].defaultChecked}
            />
            <RadioInput
              name={OptsRadio[1].name}
              value={OptsRadio[1].value}
              id={OptsRadio[1].id}
              ref={this.radioInputGirl}
              defaultChecked={OptsRadio[1].defaultChecked}
            />
          </div>
          <div>
            <FileInput class="file" ref={this.fileInput} />
            <p className="error-msg">{this.state.errImage}</p>
          </div>
        </div>
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;
