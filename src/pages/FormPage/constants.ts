import { ICheck } from '../../components/UI/CheckboxInput';
import { IRadio } from '../../components/UI/RadioInput';

export const OptsCheck: ICheck[] = [
  { name: 'black', id: '1', checked: false },
  { name: 'white', id: '2', checked: false },
  { name: 'another', id: '3', checked: false },
];

export const OptsRadio: IRadio[] = [
  { name: 'sex', id: '1', value: 'boy', defaultChecked: false },
  { name: 'sex', id: '2', value: 'girl', defaultChecked: true },
];
