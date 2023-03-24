import React, { Component, ChangeEventHandler } from 'react';
import './index.css';

type IInput = {
  class: string;
};

type IFileState = {
  file: string;
};

class FileInput extends Component<IInput, IFileState> {
  constructor(props: IInput) {
    super(props);
    this.state = {
      file: '',
    };
  }
  handleFiles: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;

    const images: string[] = [];
    let selectedFiles: File[];
    if (files) {
      selectedFiles = [...files];
      selectedFiles.forEach((i) => images.push(URL.createObjectURL(i)));
    }

    this.setState({ file: images[0] });
  };

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
          onChange={this.handleFiles}
        />
      </div>
    );
  }
}

export default FileInput;
