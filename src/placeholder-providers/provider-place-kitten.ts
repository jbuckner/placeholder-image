import { PlaceholderProviderInterface } from './placeholder-provider-interface';

export class ProviderPlaceKitten implements PlaceholderProviderInterface {
  providerName = 'Place Kitten';
  providerIcon = 'https://foo.com';

  generateUrl(width: number, height: number): string {
    return `https://placekitten.com/${width}/${height}`;
  }
}
