import { JiraPluginPage } from './app.po';

describe('jira-plugin App', () => {
  let page: JiraPluginPage;

  beforeEach(() => {
    page = new JiraPluginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
