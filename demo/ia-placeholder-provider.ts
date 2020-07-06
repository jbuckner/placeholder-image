import { PlaceholderProviderInterface } from '../src/placeholder-providers/placeholder-provider-interface';

export class IAPlaceholderProvider implements PlaceholderProviderInterface {
  providerName = 'Fill Murray';
  providerIcon = 'https://foo.com';

  generateUrl(width: number, height: number): string {
    return `https://www.fillmurray.com/${width}/${height}`;
  }
}
