import { ProcessoSeletivoPage } from './app.po';

describe('processo-seletivo App', () => {
  let page: ProcessoSeletivoPage;

  beforeEach(() => {
    page = new ProcessoSeletivoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
