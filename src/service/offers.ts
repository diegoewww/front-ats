import { trace } from '@opentelemetry/api'
import { JSONBin, JSONBinTemplate, Offer, Template } from './types/interface'

const API_URL = 'https://api.jsonbin.io/v3/b/64d471c69d312622a38ed866'
const API_URL_TEMPLATE = 'https://api.jsonbin.io/v3/b/651e119f54105e766fbde7db'

export const getOffers = async () => {
  return await trace
    .getTracer('offers')
    .startActiveSpan('getOffers', async (span) => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': process.env.NEXT_PUBLIC_API_KEY ?? ''
          }

        })

        if (!response.ok) {
          throw new Error('API request failed')
        }

        const data = await response.json() as JSONBin
        return data.record
      } finally {
        span.end()
      }
    })
}

export const getOffer = async (id: string) => {
  return await trace
    .getTracer('offers')
    .startActiveSpan('getOffer-ID', async (span) => {
      try {
        const offers = await getOffers()
        const offer = offers.find(offer => offer.id === id)

        if (offer == null) {
          throw new Error('Offer not found')
        }

        return offer
      } finally {
        span.end()
      }
    })
}

export const postOffers = async (offer: Offer) => {
  return await trace
    .getTracer('offers')
    .startActiveSpan('postoffers', async (span) => {
      try {
        const offers = await getOffers()
        const id = crypto.randomUUID()
        const newOffer = { ...offer, id }
        const offersToSave = [...offers, newOffer]

        const response = await fetch(API_URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': process.env.NEXT_PUBLIC_API_KEY ?? ''
          },
          body: JSON.stringify(offersToSave)
        })
        if (!response.ok) {
          throw new Error('Failed to save offer')
        }

        return newOffer
      } finally {
        span.end()
      }
    })
}

// Todo: Crear un archivo para los servicios de los templates
// Template service
export const getTemplate = async () => {
  return await trace
    .getTracer('template')
    .startActiveSpan('getTemplate', async (span) => {
      try {
        const response = await fetch(API_URL_TEMPLATE, {
          next: {
            revalidate: 0
          },
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': process.env.NEXT_PUBLIC_API_KEY ?? ''
          }
        })

        if (!response.ok) {
          throw new Error('API template request failed')
        }

        const data = await response.json() as JSONBinTemplate
        return data.record
      } finally {
        span.end()
      }
    })
}

export const getTempateId = async (id: string) => {
  return await trace
    .getTracer('template')
    .startActiveSpan('getTemplate-ID', async (span) => {
      try {
        const templates = await getTemplate()
        const template = templates.find(template => template.id === id)

        if (template == null) {
          throw new Error('Offer not found')
        }

        return template
      } finally {
        span.end()
      }
    })
}

export const createTemplate = async (template: Template) => {
  return await trace
    .getTracer('template')
    .startActiveSpan('createTemplate', async (span) => {
      try {
        const templates = await getTemplate()
        const id = crypto.randomUUID()
        const newTemplate = { ...template, id }
        const templateToSave = [...templates, newTemplate]

        const response = await fetch(API_URL_TEMPLATE, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': process.env.NEXT_PUBLIC_API_KEY ?? ''
          },
          body: JSON.stringify(templateToSave)
        })
        if (!response.ok) {
          throw new Error('Failed to save offer')
        }

        return newTemplate
      } finally {
        span.end()
      }
    })
}

export const updateTemplate = async (template: Template) => {
  return await trace
    .getTracer('template')
    .startActiveSpan('updateTemplate', async (span) => {
      try {
        const templates = await getTemplate()
        const templateToUpdate = templates.find(templ => templ.id === template.id)

        if (templateToUpdate === undefined) {
          throw new Error('Offer not found')
        }

        const templateToSave = templates.filter(templ => templ.id !== template.id)
        const newTemplate = { ...templateToUpdate, ...template }
        const templateToSaveUpdated = [...templateToSave, newTemplate]

        const response = await fetch(API_URL_TEMPLATE, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': process.env.NEXT_PUBLIC_API_KEY ?? ''
          },
          body: JSON.stringify(templateToSaveUpdated)
        })
        if (!response.ok) {
          throw new Error('Failed to save offer')
        }

        return newTemplate
      } finally {
        span.end()
      }
    })
}

export const removeTemplateID = async (id: string) => {
  return await trace
    .getTracer('template')
    .startActiveSpan('removeTemplate-ID', async (span) => {
      try {
        const templates = await getTemplate()
        const template = templates.find(template => template.id === id)

        if (template == null) {
          throw new Error('Offer not found')
        }

        const templateToSave = templates.filter(template => template.id !== id)

        const response = await fetch(API_URL_TEMPLATE, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': process.env.NEXT_PUBLIC_API_KEY ?? ''
          },
          body: JSON.stringify(templateToSave)
        })
        if (!response.ok) {
          throw new Error('Failed to save offer')
        }

        return {
          mesagge: 'Template removed',
          template
        }
      } finally {
        span.end()
      }
    })
}
