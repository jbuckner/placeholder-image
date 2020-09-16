import { PlaceholderProviderInterface } from './placeholder-provider-interface';

export class ProviderPlaceCage implements PlaceholderProviderInterface {
  providerName = 'Place Cage';
  providerIcon = 'https://foo.com';

  generateUrl(width: number, height: number): string {
    return `https://www.placecage.com/${width}/${height}`;
  }
}
