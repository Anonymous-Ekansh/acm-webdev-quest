import './Button.css';

export const Button = (props) => {

  let variant = props.variant;

  if (!variant) {
    variant = 'primary';
  }

  let classes = 'btn btn-' + variant;

  if (props.isDisabled) {
    classes = classes + ' btn-disabled';
  }

  if (props.isLoading) {
    classes = classes + ' btn-loading';
  }

  return (
    <button
      className={classes}
      disabled={props.isDisabled || props.isLoading}
      onClick={props.onClick}
    >
      {props.isLoading ? (
        <span data-testid="spinner"></span>
      ) : null}

      {props.children}
    </button>
  );
};