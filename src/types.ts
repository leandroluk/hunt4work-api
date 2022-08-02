export type Unique = {
  id: string
}

export type Entity = Unique & {
  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date
}

export type Job = Entity & {
  contactAt: Date
  origin: string
  publisherName: string
  type: string[]
  country: string
  office: string
  level: string
  stack: string[]
  fontLink: string
  relatedLink?: string
}
