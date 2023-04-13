type IRadio = {
  name: string;
  id: string;
  value: string;
  defaultChecked: boolean;
};

export const OptsRadio: IRadio[] = [
  { name: 'sex', id: '1', value: 'boy', defaultChecked: false },
  { name: 'sex', id: '2', value: 'girl', defaultChecked: true },
];
