import React, { Component, ChangeEventHandler } from 'react';
//import './index.css';

type IInput = {
  class: string;
};

type IFileState = {
  file: File;
};

class FileInput extends Component<IInput, IFileState> {
  constructor(props: IInput) {
    super(props);
    this.state;
  }
  handleFiles: ChangeEventHandler<HTMLInputElement> = (e) => {
    // const { files } = e.target;
    console.log(typeof e.target);
    const images: string[] = [];
    //const selecteds = [...[...files]];
    // console.log(selecteds[0]);

    //selecteds.forEach((i) => images.push(URL.createObjectURL(i)));
    console.log(images);
    /*
    setInput(images); */
    //this.setState({ file: selecteds[0] });
  };

  render() {
    //const user = this.props;
    return (
      <div className="file_input">
        <label htmlFor="file_input">Image:</label>
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
