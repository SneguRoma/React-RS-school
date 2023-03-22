import React, { Component } from 'react';

import FileInput from '../../components/FileInput';
import TextInput from '../../components/TextInput';
import DateInput from '../../components/DateInput';

class FormPage extends Component {
  inputClass = 'search_form';
  input = React.createRef();

  print = () => console.log(this.input.current);

  render() {
    return (
      <div>
        <TextInput className="input" />
        <DateInput className="date" />
        <FileInput class="file" /* ref={this.input} */ />
        <button onClick={this.print}>hhhh</button>
      </div>
    );
  }
}

export default FormPage;
