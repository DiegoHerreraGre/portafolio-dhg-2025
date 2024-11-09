export class NewsletterDTO {
  constructor({ email, subscriptionDate, active }) {
    this.email = email
    this.subscriptionDate = subscriptionDate
    this.active = active
  }

  validate() {
    if (!this.email || !this.email.includes('@')) {
      throw new Error('Invalid email format')
    }
    return true
  }
}
