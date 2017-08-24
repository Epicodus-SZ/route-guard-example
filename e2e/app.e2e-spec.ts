import { FirebaseAuthExamplePage } from './app.po';

describe('firebase-auth-example App', () => {
  let page: FirebaseAuthExamplePage;

  beforeEach(() => {
    page = new FirebaseAuthExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
