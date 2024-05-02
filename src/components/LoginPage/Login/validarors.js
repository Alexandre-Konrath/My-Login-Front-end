export function validatorName(name) {
  // Remova espaços em branco antes e depois do nome
  name = name.trim();
  // Regex para validar o nome
  let namePattern = /^[A-Za-zÀ-ú\s]+$/;

  return namePattern.test(name);
}

export function validatorEmail(email) {
  // Remova espaços em branco antes e depois do email
  email = email.trim();
  let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

export function validatorPassword(password) {
  // Remova espaços em branco antes e depois da senha
  password = password.trim();
  let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(password);
}
