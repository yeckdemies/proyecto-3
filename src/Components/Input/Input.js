import './Input.css';

export const Input = ({ padre, placeholder, id }) => {
  const input = document.createElement('input');
  input.placeholder = `\u{1F50D}  ${placeholder}`;
  input.id = id;
  padre.append(input);
};
