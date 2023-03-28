import React, { Component, createRef, RefObject } from 'react';
import UnruledFileInput from '../UI/UnruledFileInput';
import UnruledCheckbox from '../UI/UnruledCheckbox';
import { ICardOfForm } from '../../components/CardOfForm';
import { OptsCheck, OptsRadio } from './constants';
import UnruledSelect from '../UI/UnruledSelect';
import UnruledInput from '../UI/UnruledInput';
import UnruledRadio from '../UI/UnruledRadio';
import UnruledDate from '../UI/UnruledDate';
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
  dateInput = createRef<HTMLInputElement>();
  fileInput = createRef<HTMLInputElement>();
  radioInputBoy = createRef<HTMLInputElement>();
  radioInputGirl = createRef<HTMLInputElement>();
  checkBoxInputBlack = createRef<HTMLInputElement>();
  checkBoxInputWhite = createRef<HTMLInputElement>();
  checkBoxInputAnother = createRef<HTMLInputElement>();
  textInput = createRef<HTMLInputElement>();
  selectInput = createRef<HTMLSelectElement>();

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
      name: this.textInput.current?.value ?? '',
      date: this.dateInput.current?.value ?? '',
      animal: this.selectInput.current?.value ?? '',
      gender: this.radioInputGirl.current?.checked ? this.radioInputGirl.current?.value : 'boy',
      color:
        (this.checkBoxInputBlack.current?.checked ? this.checkBoxInputBlack.current?.name : '') +
        '  ' +
        (this.checkBoxInputWhite.current?.checked ? this.checkBoxInputWhite.current?.name : '') +
        '  ' +
        (this.checkBoxInputAnother.current?.checked ? this.checkBoxInputAnother.current?.name : ''),
      image:
        this.fileInput.current?.files && this.fileInput.current?.files[0]
          ? URL.createObjectURL(this.fileInput.current?.files[0])
          : '',
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
      this.props.formRef.current?.reset();
      alert('The card has been create');
    } else this.setState(err);
  };

  checkName = (name: string) => name.length >= 3 && /[A-Z]/.test(name[0]);

  checkAval = (date: string) => date.length !== 0;

  render() {
    return (
      <form onSubmit={this.print} ref={this.props.formRef}>
        <div className={this.props.className}>
          <div>
            <UnruledInput className="input-name" textRef={this.textInput} />
            <p className="error-msg">{this.state.errName}</p>
          </div>
          <div>
            <UnruledDate className="date" dateRef={this.dateInput} />
            <p className="error-msg">{this.state.errDate}</p>
          </div>
          <div>
            <UnruledSelect className="select" selectRef={this.selectInput} />
            <p className="error-msg">{this.state.errAnimal}</p>
          </div>
          <div>
            <h4>Select colors of animal:</h4>
            <UnruledCheckbox
              id={OptsCheck[0].id}
              name={OptsCheck[0].name}
              checkRef={this.checkBoxInputBlack}
            />
            <UnruledCheckbox
              id={OptsCheck[1].id}
              name={OptsCheck[1].name}
              checkRef={this.checkBoxInputWhite}
            />
            <UnruledCheckbox
              id={OptsCheck[2].id}
              name={OptsCheck[2].name}
              checkRef={this.checkBoxInputAnother}
            />
            <p className="error-msg">{this.state.errColor}</p>
          </div>
          <div>
            <h4>Select gender:</h4>
            <UnruledRadio
              name={OptsRadio[0].name}
              value={OptsRadio[0].value}
              id={OptsRadio[0].id}
              radioRef={this.radioInputBoy}
              defaultChecked={OptsRadio[0].defaultChecked}
            />
            <UnruledRadio
              name={OptsRadio[1].name}
              value={OptsRadio[1].value}
              id={OptsRadio[1].id}
              radioRef={this.radioInputGirl}
              defaultChecked={OptsRadio[1].defaultChecked}
            />
          </div>
          <div>
            <UnruledFileInput class="file" fileRef={this.fileInput} />
            <p className="error-msg">{this.state.errImage}</p>
          </div>
        </div>
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;
