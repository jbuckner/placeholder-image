export interface PlaceholderProviderInterface {
  providerName: string;
  providerIcon: string;
  generateUrl(width: number, height: number): string;
}
