import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface SendNotificationRequest {
  content: string;
  category: string;
  recipientId: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, recipientId, content } = request;

    const notification = new Notification({
      category,
      recipientId,
      content: new Content(content),
    });

    return { notification };
  }
}
