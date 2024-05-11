import './Input.css';

export const Input = ({ padre, placeholder }) => {
  const input = document.createElement('input');
  input.placeholder = `\u{1F50D}  ${placeholder}`;
  padre.append(input);
};
