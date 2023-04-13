import UnruledFileInput from '../UI/UnruledFileInput';
import UnruledCheckbox from '../UI/UnruledCheckbox';
import { ICardOfForm } from '../../components/CardOfForm';
import { OptsRadio } from './constants';
import UnruledSelect from '../UI/UnruledSelect';
import UnruledInput from '../UI/UnruledInput';
import UnruledRadio from '../UI/UnruledRadio';
import UnruledDate from '../UI/UnruledDate';
import { useAppDispatch } from '../../store/hooks';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import './index.css';
import { addCard } from '../../store/formSlice';

type IFormProps = {
  className: string;
};

const Form = (props: IFormProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    reValidateMode: 'onSubmit',
  });

  const print: SubmitHandler<FieldValues> = (e) => {
    const newCard: ICardOfForm = {
      name: e.name ?? '',
      date: e.date.toDateString() ?? '',
      animal: e.animal ?? '',
      gender: e.radio,
      image: e.file && e.file[0] ? URL.createObjectURL(e.file[0]) : '',
    };
    dispatch(addCard({ ...newCard }));
    alert('The form has been created');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(print)}>
      <div className={props.className}>
        <div>
          <UnruledInput
            register={{
              ...register('name', {
                required: 'enter name',
                validate: (name: string) =>
                  (name.length >= 3 && /[A-Z]/.test(name[0])) ||
                  'must begin with a capital Latin letter and have at least 3 letters',
              }),
            }}
            className="input-name"
          />
          <p className="error-msg">{errors?.name?.message?.toString()}</p>
        </div>
        <div>
          <UnruledDate
            className="date"
            register={{
              ...register('date', {
                required: 'enter date',
                valueAsDate: true,
              }),
            }}
          />
          <p className="error-msg">{errors?.date?.message?.toString()}</p>
        </div>
        <div>
          <UnruledSelect
            register={{
              ...register('animal', {
                required: 'choose animal',
              }),
            }}
            className="select"
          />
          <p className="error-msg">{errors?.animal?.message?.toString()}</p>
        </div>
        <div>
          <h4>Do you like animals:</h4>
          <UnruledCheckbox
            id={'1'}
            name={'yes'}
            register={{
              ...register('check', {
                required: 'please check',
              }),
            }}
          />
          <p className="error-msg">{errors?.check?.message?.toString()}</p>
        </div>
        <div>
          <h4>Select gender:</h4>
          <UnruledRadio
            name={OptsRadio[0].name}
            value={OptsRadio[0].value}
            id={OptsRadio[0].id}
            register={{
              ...register('radio', {
                required: 'please check',
              }),
            }}
            defaultChecked={OptsRadio[0].defaultChecked}
          />
          <UnruledRadio
            name={OptsRadio[1].name}
            value={OptsRadio[1].value}
            id={OptsRadio[1].id}
            register={{
              ...register('radio', {
                required: 'please check',
              }),
            }}
            defaultChecked={OptsRadio[1].defaultChecked}
          />
        </div>
        <div>
          <UnruledFileInput
            class="file"
            register={{
              ...register('file', {
                required: 'please enter file',
              }),
            }}
          />
          <p className="error-msg">{errors?.file?.message?.toString()}</p>
        </div>
      </div>
      <button type="submit">Add card</button>
    </form>
  );
};

export default Form;
