import Newsletter from '../models/newsletter.model.js' // Necesitarás crear este modelo

export class NewsletterDAO {
  async create(newsletterDTO) {
    try {
      const newsletter = new Newsletter({
        email: newsletterDTO.email,
        subscriptionDate: newsletterDTO.subscriptionDate,
        active: newsletterDTO.active,
      })

      return await newsletter.save()
    } catch (error) {
      throw new Error(
        `Error creating newsletter subscription: ${error.message}`,
      )
    }
  }

  // Otros métodos como getAll, getByEmail, update, delete, etc.
}
