import './Button.css';

export const Button = ({ padre, texto, clase = 'buttonNormal' }) => {
  const button = document.createElement('button');
  button.className = clase;

  button.innerHTML = texto;
  padre.append(button);
};
