import { LitElement, html, css, property } from 'lit-element';
import { html as litHtml } from 'lit-html';
import { customElement } from 'lit/decorators.js';

@customElement('hass-searchbar')
class HassSearchbar extends LitElement {
  @property({ type: String }) label = 'Search';
  @property({ type: String }) value = '';

  render() {
    return html`
      <ha-card>
        <div class="card-content">
          <ha-textfield
            label="${this.label}"
            .value="${this.value}"
            @input="${this._onInput}"
          ></ha-textfield>
          <mwc-button @click="${this._performSearch}">
            Search on Google
          </mwc-button>
        </div>
      </ha-card>
    `;
  }

  _onInput(event) {
    this.value = event.target.value;
  }

  _performSearch() {
    const searchQuery = encodeURIComponent(this.value);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    window.open(searchUrl, '_blank');
  }

  static get styles() {
    return css`
      .card-content {
        padding: 16px;
      }
    `;
  }
}
