import './Button.css';

function Button({ className, label, type }) {
  return (
    <button className={className} type={type}>
      {label}
    </button>
  );
}

export default Button;
