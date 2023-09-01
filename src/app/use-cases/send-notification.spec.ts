import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be possible to send a new notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a content',
      recipientId: 'example-recipientId',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
