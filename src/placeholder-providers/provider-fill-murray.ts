import { PlaceholderProviderInterface } from './placeholder-provider-interface';

export class ProviderFillMurray implements PlaceholderProviderInterface {
  providerName = 'Fill Murray';
  providerIcon = 'https://foo.com';

  generateUrl(width: number, height: number): string {
    return `https://www.fillmurray.com/${width}/${height}`;
  }
}
