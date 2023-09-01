import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send Notification', () => {
  it('should be possible to send a new notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a content',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
