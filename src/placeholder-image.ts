import { html, css, LitElement, property, TemplateResult } from 'lit-element';

import { PlaceholderSource } from './placeholder-source';

export class PlaceholderImage extends LitElement {
  @property({ type: String }) source: PlaceholderSource = PlaceholderSource.FillMurray;

  @property({ type: Number }) width = 200;

  @property({ type: Number }) height = 200;

  render(): TemplateResult {
    return html`
      <img src=${this.imageSource} />
    `;
  }

  private get imageSource(): string {
    switch (this.source) {
      case PlaceholderSource.FillMurray:
        return `https://www.fillmurray.com/${this.width}/${this.height}`;
      case PlaceholderSource.PlaceKitten:
        return `https://placekitten.com/${this.width}/${this.height}`;
      case PlaceholderSource.PlaceCage:
        return `https://www.placecage.com/${this.width}/${this.height}`;
      case PlaceholderSource.PlaceBear:
        return `https://placebear.com/${this.width}/${this.height}`;
    }
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
    }
  `;
}
