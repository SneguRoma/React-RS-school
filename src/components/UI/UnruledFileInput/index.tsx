import React, { Component, RefObject } from 'react';
import './index.css';

type IInputProps = {
  class: string;
  fileRef: RefObject<HTMLInputElement>;
};

class UnruledFileInput extends Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <div className="file_input">
        <label htmlFor="file_input">
          <h4> Image: </h4>
        </label>
        <input
          type="file"
          accept="image/jpeg,image/png,image/gif"
          id="image-input"
          name="img_file"
          ref={this.props.fileRef}
        />
      </div>
    );
  }
}

export default UnruledFileInput;
