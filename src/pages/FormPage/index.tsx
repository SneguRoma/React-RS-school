import React, { Component } from 'react';

import FileInput from '../../components/FileInput';
import TextInput from '../../components/TextInput';
import DateInput from '../../components/DateInput';
import SelectInput from '../../components/SelectInput';
import CheckboxInput from '../../components/CheckboxInput';
import { ICheck } from '../../components/CheckboxInput';
import { IRadio } from '../../components/RadioInput';
import RadioInput from '../../components/RadioInput';

const opts: ICheck[] = [
  { name: 'black', id: '1', checked: false },
  { name: 'white', id: '2', checked: false },
  { name: 'another', id: '3', checked: false },
];

const optsRadio: IRadio[] = [
  { name: 'sex', id: '1', checked: false, value: 'boy' },
  { name: 'sex', id: '2', checked: true, value: 'girl' },
];

class FormPage extends Component {
  inputClass = 'search_form';
  input = React.createRef();

  print = () => console.log(this.input.current);

  render() {
    return (
      <div>
        <TextInput className="input" />
        <DateInput className="date" />
        <SelectInput className="select" />
        {opts.map((item) => (
          <CheckboxInput key={item.id} id={item.id} name={item.name} />
        ))}
        {optsRadio.map((item) => (
          <RadioInput
            name={item.name}
            key={item.id}
            value={item.value}
            id={item.id}
            checked={item.checked}
          />
        ))}
        <FileInput class="file" /* ref={this.input} */ />
        <button onClick={this.print}>hhhh</button>
      </div>
    );
  }
}

export default FormPage;
