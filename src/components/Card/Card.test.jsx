import './Card.css';

export const Card = (props) => {
  return (
    <div
      className="card"
      data-testid={props["data-testid"]}
    >
      {props.children}
    </div>
  );
};

const CardHeader = (props) => {
  return (
    <div className="card-header">
      {props.children}
    </div>
  );
};

const CardBody = (props) => {
  return (
    <div className="card-body">
      {props.children}
    </div>
  );
};

const CardFooter = (props) => {
  return (
    <div className="card-footer">
      {props.children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;