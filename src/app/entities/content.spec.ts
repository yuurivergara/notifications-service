import { Content } from './content';

describe('notification content', () => {
  it('should be able to create a new notification', () => {
    const content = new Content('Nova notificacao de amizade');
    expect(content).toBeTruthy();
  });

  it('should be not create a new notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should be not create a new notification content with more than 240 characters', () => {
    expect(() => new Content('aaa'.repeat(241))).toThrow();
  });
});
