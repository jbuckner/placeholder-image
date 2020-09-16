import { PlaceholderProviderInterface } from './placeholder-provider-interface';

export class ProviderPlaceBear implements PlaceholderProviderInterface {
  providerName = 'Place Bear';
  providerIcon = 'https://foo.com';

  generateUrl(width: number, height: number): string {
    return `https://placebear.com/${width}/${height}`;
  }
}
