export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const contentIsValid = this.validateContentLength(content);

    if (!contentIsValid) {
      throw new Error('Content Length error.');
    }
    this.content = content;
  }
}
