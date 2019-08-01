import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="users">
          <div className="user">
            <img src="https://randomuser.me/api/portraits/men/9.jpg" />
            <div className="info-wrapper">
              <div className="user-name">
                Nome do Usuário X
              </div>
              <div className="user-id-username">
                ID: X - Username: @usuarioX
              </div>
            </div>
            <button type="button" className="pay-button">
              Pagar
            </button>
          </div>
          <div className="user">
            <img src="https://randomuser.me/api/portraits/men/10.jpg" />
            <div className="info-wrapper">
              <div className="user-name">
                Nome do Usuário X
              </div>
              <div className="user-id-username">
                ID: X - Username: @usuarioX
              </div>
            </div>
            <button type="button" className="pay-button">
              Pagar
            </button>
          </div>
          <div className="user">
            <img src="https://randomuser.me/api/portraits/men/11.jpg" />
            <div className="info-wrapper">
              <div className="user-name">
                Nome do Usuário X
              </div>
              <div className="user-id-username">
                ID: X - Username: @usuarioX
              </div>
            </div>
            <button type="button" className="pay-button">
              Pagar
            </button>
          </div>
        </div>
        <div className="modal-backdrop">
          <div className="modal">
            <div className="title">
              Pagamento para <span>Nome do Usuário</span>
            </div>

            <div className="content">
              <input type="number" placeholder="R$ 0,00" />

              <div className="cards">
                <select>
                  <option selected>Cartão com final 0123</option>
                </select>
              </div>

              <button type="button" className="pay-button">
                Pagar
              </button>
            </div>
          </div>

          <div className="modal">
            <div className="title">
              Recibo de pagamento
            </div>
            <div className="content">
              O pagamento foi concluido com sucesso.<br />
              O pagamento <strong>não</strong> foi concluido com sucesso.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
