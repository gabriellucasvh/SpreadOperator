const data = {
  dataInicio: "2023-01-01",
  dataTermino: "2023-01-31",
};
const id = {
  userId: 1234567890,
  token: "qwertyuiop",
};
const user = {
  nome: "João",
  email: "user@example.com",
};

//Uso dos Spread's

const profile = {
  ...data, //Puxa informações do const data {...}
  ...id, //Puxa informações do const id {...}
  ...user, //Puxa informações do const user {...}
  status: "ativo",
};
const client = [profile];

const listUser = (profile) => { //Usando arrow function para listagem das propriedades
  return `
    Data de Início: ${profile.dataInicio} 
    Data de Término: ${profile.dataTermino} 
    ID: ${profile.userId} 
    Token: ${profile.token} 
    User: ${profile.nome}
    Email: ${profile.email}
    `;
};
console.log(listUser(profile));
