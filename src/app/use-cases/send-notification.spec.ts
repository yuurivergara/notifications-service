import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be possible to send a new notification', async () => {
    const sendNotification = new SendNotification();
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a content',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
