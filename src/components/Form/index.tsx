import React, { Component, createRef, RefObject } from 'react';
import FileInput from '../../components/UI/FileInput';
import TextInput from '../../components/UI/TextInput';
import DateInput from '../../components/UI/DateInput';
import SelectInput from '../../components/UI/SelectInput';
import CheckboxInput from '../../components/UI/CheckboxInput';
import RadioInput from '../../components/UI/RadioInput';
import { ICardOfForm } from '../../components/CardOfForm';
import { OptsCheck, OptsRadio } from './constants';

type IFormProps = {
  className: string;
  addCard: (cards: ICardOfForm) => void;
  formRef: RefObject<HTMLFormElement>;
};

/* type IFormState = {
 
}; */

class Form extends Component<IFormProps /* , IFormState */> {
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

  //formInput = createRef<HTMLFormElement>();

  constructor(props: IFormProps) {
    super(props);
  }

  print: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    this.props.addCard({
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
        '  ' +
        (this.checkBoxInputWhite.current?.state.checked
          ? this.checkBoxInputWhite.current?.state.name
          : '') +
        '  ' +
        (this.checkBoxInputAnother.current?.state.checked
          ? this.checkBoxInputAnother.current?.state.name
          : ''),
      image: this.fileInput.current?.state.file ?? '',
    });

    //(this.formInput.current?.reset());
    console.log(
      this.checkName(this.textInput.current?.state.inputField ?? ''),
      this.checkDate(this.dateInput.current?.state.inputField ?? '')
    );
    //this.formInput.current?.reset();
  };

  checkName = (name: string) => {
    if (name.length >= 3 && /[A-Z]/.test(name[0])) return true;
    else return false;
  };

  checkDate = (date: string) => date.length !== 0;

  render() {
    return (
      <form className={this.props.className} onSubmit={this.print} ref={this.props.formRef}>
        <TextInput className="input" ref={this.textInput} />
        <p className="error-msg">hui</p>
        <DateInput className="date" ref={this.dateInput} />
        <p className="error-msg">hui</p>
        <SelectInput className="select" ref={this.selectInput} />
        <p className="error-msg">hui</p>
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
        <p className="error-msg">hui</p>
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
        <FileInput class="file" ref={this.fileInput} />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;
