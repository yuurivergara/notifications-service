import { Content } from './content';
import { Notification } from './notification';

describe('notification', () => {
  it('should be able to create a new notification', () => {
    const notification = new Notification({
      content: new Content('nova solicitacao de amizade'),
      category: 'social',
      recipientId: 'example recipient id',
    });
    expect(notification).toBeTruthy();
  });
});
