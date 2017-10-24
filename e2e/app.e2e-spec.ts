import { BikoinAfricaChallengePage } from './app.po';

describe('bikoin-africa-challenge App', () => {
  let page: BikoinAfricaChallengePage;

  beforeEach(() => {
    page = new BikoinAfricaChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
