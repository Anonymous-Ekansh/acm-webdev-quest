import './Input.css';

export const Input = (props) => {

  let classes = 'input';

  if (props.error) {
    classes = classes + ' input-error';
  }

  if (props.disabled) {
    classes = classes + ' input-disabled';
  }

  return (
    <div className="input-wrapper">

      {props.leftIcon ? (
        <span className="input-icon-left">
          {props.leftIcon}
        </span>
      ) : null}

      <input
        className={classes}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        onChange={props.disabled ? undefined : props.onChange}
      />

      {props.rightIcon ? (
        <span className="input-icon-right">
          {props.rightIcon}
        </span>
      ) : null}

      {props.error ? (
        <span role="alert">
          {props.error}
        </span>
      ) : null}

    </div>
  );
};