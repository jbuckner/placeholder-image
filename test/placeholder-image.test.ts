import { html, fixture, expect } from '@open-wc/testing';

import {PlaceholderImage} from '../src/PlaceholderImage.js';
import '../placeholder-image.js';

describe('PlaceholderImage', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: PlaceholderImage = await fixture(html`
      <placeholder-image></placeholder-image>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: PlaceholderImage = await fixture(html`
      <placeholder-image></placeholder-image>
    `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: PlaceholderImage = await fixture(html`
      <placeholder-image title="attribute title"></placeholder-image>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: PlaceholderImage = await fixture(html`
      <placeholder-image></placeholder-image>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
