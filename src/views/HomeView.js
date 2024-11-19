import {LitElement, html, css} from 'lit';
import {msg, updateWhenLocaleChanges} from '@lit/localize';
import * as colors from '../theme/colors';

class HomeView extends LitElement {
  static styles = css`
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h2 {
      color: ${colors.ingOrange};
    }

    h5 {
      margin: 0;
    }

    .highlight {
      text-decoration: none;
      color: ${colors.ingOrange};
    }
    .highlight:hover {
      opacity: 0.5;
    }
  `;

  constructor() {
    super()
    updateWhenLocaleChanges(this)
  }

  render() {
    return html`
      <div class="page-header">
        <h2>${msg('Home Page')}</h2>
      </div>
      <div class="content">
        <h5>${msg('ING Employee Management System')}</h5>
        <p>${msg('In this case study, LocalStorage is used to store and manage employee data within the browser. LocalStorage is a simple key-value storage mechanism that allows developers to persist data across page reloads without requiring a backend server.')}</p>
        <p><span class="highlight">Cagatay Kula</span></p>
        <a class="highlight" target="_blank" href="https://www.linkedin.com/in/cagataykula/">LinkedIn</a>
        <a class="highlight" target="_blank" href="https://github.com/cagataykula">Github</a>
        <a class="highlight" target="_blank" href="mailto:cagatay.kula@gmail.com">Email<a>
      </div>
    `;
  }
}
customElements.define('home-view', HomeView);
