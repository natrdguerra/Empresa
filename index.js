import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));

const porta = 3000;
const host = 'localhost';

var listaFornecedores = [];

function cadastrarFornecedorView(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Fornecedor</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-5">
                <h1>Cadastro de Fornecedores</h1>
                <form action="/cadastrarFornecedor" method="POST">
                    <div class="mb-3">
                        <label for="cnpj" class="form-label">CNPJ</label>
                        <input type="text" class="form-control" id="cnpj" name="cnpj" placeholder="Informe o CNPJ">
                        <br>
                        <div class="mb-3">
                        <label for="razaoSocial" class="form-label">Razão Social</label>
                        <input type="text" class="form-control" id="razaoSocial" name="razaoSocial" placeholder="Informe a Razão Social">
                    </div>
                    <div class="mb-3">
                        <label for="nomeFantasia" class="form-label">Nome Fantasia</label>
                        <input type="text" class="form-control" id="nomeFantasia" name="nomeFantasia" placeholder="Informe o Nome Fantasia">
                    </div>
                    <div class="mb-3">
                        <label for="endereco" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua, Número, Bairro">
                    </div>
                    <div class="mb-3">
                        <label for="cidade" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Informe a cidade">
                    </div>
                    <div class="mb-3">
                        <label for="estado" class="form-label">UF</label>
                        <select class="form-select" id="estado" name="estado">
                            <option value="SP">São Paulo</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="cep" class="form-label">CEP</label>
                        <input type="text" class="form-control" id="cep" name="cep" placeholder="Informe o CEP">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="exemplo@dominio.com">
                    </div>
                    <div class="mb-3">
                        <label for="telefone" class="form-label">Telefone</label>
                        <input type="text" class="form-control" id="telefone" name="telefone" placeholder="(99) 99999-9999">
                    </div>
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </form>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </body>
        </html>
    `);
}
function menuFornecedor(req,resp){
    resp.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>
        <body>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Menu Principal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Alternar navegação">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/cadastrarFornecedor">Cadastro de Fornecedores</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</html> `
    )
}
function cadastrarFornecedor(req,resp){
    const cnpj = req.body.cnpj;
    const razaoSocial = req.body.razaoSocial;
    const nomeFantasia = req.body.nomeFantasia;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;

    if (cnpj && razaoSocial && nomeFantasia && endereco && cidade && estado && cep && email && telefone) {

    const fornecedor = { cnpj, razaoSocial, nomeFantasia, endereco, cidade, estado, cep, email, telefone };
    listaFornecedores.push(fornecedor);
   
    resp.write(`   
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lista de Fornecedores</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>
        <body>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">CNPJ</th>
      <th scope="col">Razão Social</th>
      <th scope="col">Nome Fantasia</th>
      <th scope="col">Endereço</th>
      <th scope="col">Cidade</th>
      <th scope="col">Estados</th>
      <th scope="col">Cep</th>
      <th scope="col">E-mail</th>
      <th scope="col">Telefone</th>
    </tr>
  </thead>
  <tbody>`);

  for (var i = 0; i < listaFornecedores.length; i++){
    resp.write(`<tr>
                <td>${listaFornecedores[i].cnpj}</td>
                <td>${listaFornecedores[i].razaoSocial}</td>
                <td>${listaFornecedores[i].nomeFantasia}</td>
                <td>${listaFornecedores[i].endereco}</td>
                <td>${listaFornecedores[i].cidade}</td>
                <td>${listaFornecedores[i].estado}</td>
                <td>${listaFornecedores[i].cep}</td>
                <td>${listaFornecedores[i].email}</td>
                <td>${listaFornecedores[i].telefone}</td>
                </tr>
        `)
  }

  resp.write(`
        </tbody>
        </table>
        <a class="btn btn-dark" href="/cadastrarFornecedor" role="button">Continuar cadastrando</a>
        <a class="btn btn-dark" href="/" role="button">Voltar para o menu</a>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
  `);
}

else
    {

        const estado = {
            "AC": "Acre",
            "AL": "Alagoas",
            "AP": "Amapá",
            "AM": "Amazonas",
            "BA": "Bahia",
            "CE": "Ceará",
            "DF": "Distrito Federal",
            "ES": "Espírito Santo",
            "GO": "Goiás",
            "MA": "Maranhão",
            "MT": "Mato Grosso",
            "MS": "Mato Grosso do Sul",
            "MG": "Minas Gerais",
            "PA": "Pará",
            "PB": "Paraíba",
            "PR": "Paraná",
            "PE": "Pernambuco",
            "PI": "Piauí",
            "RJ": "Rio de Janeiro",
            "RN": "Rio Grande do Norte",
            "RS": "Rio Grande do Sul",
            "RO": "Rondônia",
            "RR": "Roraima",
            "SC": "Santa Catarina",
            "SP": "São Paulo",
            "SE": "Sergipe",
            "TO": "Tocantins"
        };

        resp.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Fornecedor</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-5">
                <h1>Cadastro de Fornecedores</h1>
                <form action="/cadastrarFornecedor" method="POST">
                            <div class="mb-3">
                                <label for="cnpj" class="form-label">CNPJ</label>
                                <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}">
        `);
        if (!cnpj){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, você deve informar o CNPJ</p></span>
                </div>
                `);
        }
        resp.write(`
                        <div class="mb-3">
                        <label for="razaoSocial" class="form-label">Razão Social</label>
                        <input type="text" class="form-control" id="razaoSocial" name="razaoSocial" value="${razaoSocial}">`);
        if (!razaoSocial){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, você deve informar a Razão Social!</p></span>
                </div>
                `);
        }
        resp.write(`
            <div class="mb-3">
            <label for="nomeFantasia" class="form-label">Nome Fantasia</label>
            <input type="text" class="form-control" id="nomeFantasia" name="nomeFantasia" value="${nomeFantasia}">`);
        if (!nomeFantasia){
        resp.write(`
        <div>
        <span><p class="text-danger">Por favor, você deve informar o Nome Fantasia!</p></span>
        </div>
        `);
        }
        resp.write(`
                        <div class="mb-3">
                        <label for="endereco" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="endereco" name="endereco" value="${endereco}">`);
        if (!endereco){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, você deve informar o Endereço!</p></span>
                </div>
                `);
        }
        resp.write(`
                  
            <div class="mb-3">
                <label for="cidade" class="form-label">Cidade</label>
                <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}">
            `);

        if (!cidade){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, informe a Cidade!</p></span>
                </div>
                `);
        }
        resp.write(`
            </div>
            <div class="mb-3">
                <label for="estado" class="form-label">UF</label>
                <select class="form-select" id="estado" name="estado">`);
        for (let [sigla, nomeEstado] of Object.entries(estado)){
            if (sigla == estado){
                resp.write(`<option selected value="${sigla}">${nomeEstado}</option>`);
            }
            else{
                resp.write(`<option value="${sigla}">${nomeEstado}</option>`);
            }
            
        }
        resp.write(`
            </select>
        </div>
        <div class="mb-3">
            <label for="cep" class="form-label">Cep</label>
            <input type="text" class="form-control" id="cep" name="cep" value="${cep}">
        `);
    if (!cep){
        resp.write(`
            <div>
                <span><p class="text-danger">Por favor, informe o Cep!</p></span>
            </div>
            `);
    }
        resp.write(`
            </div>
                <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="email" name="email" value="${email}">

            `);
        if (!email){
            resp.write(`
                <div>
                    <span><p class="text-danger">Por favor, você deve informar o E-mail!</p></span>
                </div>
                `);
        }
        resp.write(`
            </select>
        </div>
        <div class="mb-3">
            <label for="telefone" class="form-label">Telefone</label>
            <input type="text" class="form-control" id="telefone" name="telefone" value="${telefone}">
        `);
    if (!telefone){
        resp.write(`
            <div>
                <span><p class="text-danger">Por favor, informe o Telefone!</p></span>
            </div>
            `);
    }


        resp.write(`
            </div>
        <div class="mb-3">
            <button class="btn btn-primary" type="submit">Cadastrar</button>
        </div>
        </form>
    </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </html> `);

    } 
resp.end();

}

app.get('/',menuFornecedor);
app.get('/cadastrarFornecedor',cadastrarFornecedorView);
app.post('/cadastrarFornecedor', cadastrarFornecedor);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado em execução no endereço http://localhost:${porta}`);
});
