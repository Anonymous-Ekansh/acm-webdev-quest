import { useState } from "react";
import "./Avatar.css";

function Avatar(props) {
  const [imageError, setImageError] = useState(false);
  const src = props.src;
  const alt = props.alt;
  const initials = props.initials;
  const size = props.size;

  let className = "avatar";

  if (!src || imageError) {
    className = className + " avatar-initials";
  }

  if (size) {
    className = className + " avatar-" + size;
  }

  return (
    <div className={className} data-testid={props["data-testid"]}>
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

function AvatarGroup(props) {
  const { children, ...rest } = props;
  return (
    <div className="avatar-group" {...rest}>
      {children}
    </div>
  );
}

Avatar.Group = AvatarGroup;
export { Avatar };