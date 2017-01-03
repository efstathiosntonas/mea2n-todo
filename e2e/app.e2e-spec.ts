import { Mea2nTodoPage } from './app.po';

describe('mea2n-todo App', function() {
  let page: Mea2nTodoPage;

  beforeEach(() => {
    page = new Mea2nTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
