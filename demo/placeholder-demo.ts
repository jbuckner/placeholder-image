import { html, css, LitElement, TemplateResult, query, customElement, property } from 'lit-element';

import { PlaceholderImage } from '../src/placeholder-image';

import { PlaceholderSource } from '../src/placeholder-source';

import '../placeholder-image';

@customElement('placeholder-demo')
export class PlaceholderDemo extends LitElement {
  @query('placeholder-image') placeholderImage!: PlaceholderImage;

  @query('#height-input') private heightInput!: HTMLInputElement;

  @query('#width-input') private widthInput!: HTMLInputElement;

  @property({ type: Number }) private imageHeight = 200;

  @property({ type: Number }) private imageWidth = 200;

  render(): TemplateResult {
    return html`
      <div>
        <button @click=${this.fillmurray}>Fill Murray</button>
        <button @click=${this.placekitten}>Place Kitten</button>
        <button @click=${this.placecage}>Place Cage</button>
        <button @click=${this.placebear}>Place Bear</button>
        <button @click=${this.randomSource}>Random Source</button>
      </div>

      <div>
        <label for="width-input">Width:</label> <input type="text" .value=${String(this.imageWidth)} id="width-input" />
        <label for="height-input">Height:</label> <input type="text" .value=${String(this.imageHeight)} id="height-input" />
        <button @click=${this.updatesize}>Update</button>
        <button @click=${this.randomSize}>Random</button>
      </div>

      <placeholder-image
        .source=${PlaceholderSource.FillMurray}
        .width=${this.imageWidth}
        .height=${this.imageHeight}
        ></placeholder-image>
    `;
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private async randomSize(): Promise<void> {
    const min = 100;
    const max = 500;
    this.imageHeight = Math.round(this.getRandomNumber(min, max));
    this.imageWidth = Math.round(this.getRandomNumber(min, max));
  }

  private async randomSource(): Promise<void> {
    const sources: PlaceholderSource[] = Object.values(PlaceholderSource);
    const randNumber = this.getRandomNumber(-0.49, sources.length - 0.49);
    const number = Math.round(randNumber);
    const source = sources[number];
    console.debug(sources, randNumber, number, source);
    this.placeholderImage.source = source;
  }

  private fillmurray(): void {
    this.placeholderImage.source = PlaceholderSource.FillMurray;
  }

  private placekitten(): void {
    this.placeholderImage.source = PlaceholderSource.PlaceKitten;
  }

  private placecage(): void {
    this.placeholderImage.source = PlaceholderSource.PlaceCage;
  }

  private placebear(): void {
    this.placeholderImage.source = PlaceholderSource.PlaceBear;
  }

  private updatesize(): void {
    this.placeholderImage.width = parseFloat(this.widthInput.value);
    this.placeholderImage.height = parseFloat(this.heightInput.value);
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
    }

    input {
      width: 50px;
    }
  `;
}
