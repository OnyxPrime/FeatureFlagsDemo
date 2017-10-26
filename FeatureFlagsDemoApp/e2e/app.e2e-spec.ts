import { FeatureFlagsDemoAppPage } from './app.po';

describe('feature-flags-demo-app App', function() {
  let page: FeatureFlagsDemoAppPage;

  beforeEach(() => {
    page = new FeatureFlagsDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
