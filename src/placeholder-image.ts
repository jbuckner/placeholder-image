import { html, css, LitElement, property, TemplateResult, PropertyValues } from 'lit-element';

import { PlaceholderSource } from './placeholder-source';
import { PlaceholderProviderInterface } from './placeholder-providers/placeholder-provider-interface';
import { ProviderFillMurray } from './placeholder-providers/provider-fill-murray';
import { ProviderPlaceKitten } from './placeholder-providers/provider-place-kitten';
import { ProviderPlaceCage } from './placeholder-providers/provider-place-cage';
import { ProviderPlaceBear } from './placeholder-providers/provider-place-bear';

export class PlaceholderImage extends LitElement {
  @property({ type: String }) source: PlaceholderSource = PlaceholderSource.FillMurray;

  @property({ type: Object }) placeholderProvider: PlaceholderProviderInterface = new ProviderFillMurray();

  @property({ type: Number }) width = 200;

  @property({ type: Number }) height = 200;

  render(): TemplateResult {
    return html`
      <img src=${this.imageSource} />
    `;
  }

  private get imageSource(): string {
    return this.placeholderProvider.generateUrl(this.width, this.height);
  }

  updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('source')) {
      this.updateProvider();
    }
  }

  private updateProvider(): void {
    switch (this.source) {
      case PlaceholderSource.FillMurray:
        this.placeholderProvider = new ProviderFillMurray();
        break;
      case PlaceholderSource.PlaceKitten:
        this.placeholderProvider = new ProviderPlaceKitten();
        break;
      case PlaceholderSource.PlaceCage:
        this.placeholderProvider = new ProviderPlaceCage();
        break;
      case PlaceholderSource.PlaceBear:
        this.placeholderProvider = new ProviderPlaceBear();
        break;
    }
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
    }
  `;
}
