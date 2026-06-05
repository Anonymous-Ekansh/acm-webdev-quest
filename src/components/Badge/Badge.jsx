import './Badge.css';

export const Badge = (props) => {

  const { children, status, isPill, ...rest } = props;

  let classes = 'badge';

  if (status) {
    classes = classes + ' badge-' + status;
  }

  if (isPill) {
    classes = classes + ' badge-pill';
  }

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
};
