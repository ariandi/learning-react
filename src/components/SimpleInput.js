import {useEffect, useState} from "react";

const SimpleInput = () => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

  useEffect(() => {
      if(enteredNameIsValid) {
          console.log('Name input is valid');
      }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = event => {
      setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
      setEnteredNameTouch(true);
  };

  const formSubmissionHandler = event => {
      event.preventDefault();

      setEnteredNameTouch(true);

      if (!enteredNameIsValid) {
          return;
      }

      console.log(enteredName);
      setEnteredName('');
      setEnteredNameTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
            type='text'
            id='name'
            onBlur={nameInputBlurHandler}
            onChange={nameInputChangeHandler}
            value={enteredName}
        />
          {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
