import './App.css';
import { Component } from 'react'

class GitHub extends Component
{
  constructor(props)
  {
    super(props)
    this.state = 
    {
      listaRepositorios : [],
      username : ''
    }
  }
 
   buscarRepositorios = (elemento) => 
   {
     elemento.preventDefault();

     console.log('A função está funcionando')

     // fetch('https://api.github.com/user')
     fetch('https://api.github.com/users/' + this.state.username + '/repos')
     // fetch('https://api.github.com/users/ArkDreal/repos')
     
     .then(resposta => resposta.json())

     .then(lista => this.setState({ listaRespositorios : lista }))

     .catch ( erro => console.log(erro))
   }

   atualizarNome = async (nome) =>
   {
     await this.setState({ username : nome.target.value })
     console.log(this.state.username)
   }
   
   render()
   {
     return(
      <div className="App">
      <main>
        <section>
          <h2> Localizador de Repositorios </h2>
          <form onSubmit={this.buscarRepositorios}>
            <div>
              <input
              type="text"
              value={this.state.username}
              onChange={this.atualizarNome}
              placeholder="Usuario do GitHub"
              />
              <button type="submit" onClick={this.buscarRepositorios}> Localizar </button>
            </div>
          </form>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th> ID </th>
                <th> NOME </th>
                <th> DESCRIÇÃO </th>
                <th> DATA DE CRIAÇÃO </th>
                <th> TAMANHO </th>
              </tr>
            </thead>
            <tbody>
              {  this.state.listaRepositorios.map( (repositorio) => {  
                console.log(repositorio);     
                  return(
                    <tr key={repositorio.id}>
                      <td>{repositorio.id}</td>
                      <td>{repositorio.name}</td>
                      <td>{repositorio.description}</td>
                      <td>{repositorio.created_at}</td>
                      <td>{repositorio.size}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>        
        </section>
      </main>
    </div>
    
    );
   }
} 



export default GitHub;
