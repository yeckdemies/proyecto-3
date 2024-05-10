import './Input.css';

export const Input = ({ padre, placeholder }) => {
  const input = document.createElement('input');
  input.placeholder = placeholder;
  padre.append(input);
};
