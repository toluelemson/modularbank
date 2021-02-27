interface contactDetail { name?: string, email?: string, city?: string, office?: string }

export interface Contact {
  contact: contactDetail[],
  address: contactDetail[]
}
