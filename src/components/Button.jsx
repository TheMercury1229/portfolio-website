import { Link } from "react-router-dom";

const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  download,
}) => {
  if (download) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
        download
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} target={target} className={"btn btn-primary " + classes}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </Link>
    );
  }

  return (
    <button className={"btn btn-primary " + classes}>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href.startsWith("#")) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} target={target} className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </Link>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export { ButtonPrimary, ButtonOutline };
