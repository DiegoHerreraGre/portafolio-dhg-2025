import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'
import PermisionMiddleware from '@/middlewares/permisions.middlewares'
import dotenv from 'dotenv'
import envs from '@/config/envs.config'

dotenv.config()

export async function GET(req) {
  let { NEXT_PUBLIC_SITE_URL } = envs
  let siteUrl = NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Diego Herrera Gre',
    email: 'diegofherreragre@icloud.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Lee mis últimas publicaciones en mi blog personal',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articleIds = require
    .context('../../articles', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

  for (let id of articleIds) {
    let url = String(new URL(`/articles/${id}`, req.url))
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/articles/${id}`
    let article = $('article').first()
    let title = article.find('h1').first().text()
    let date = article.find('time').first().attr('datetime')
    let content = article.find('[data-mdx-content]').first().html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}

export async function POST(request) {
  return await PermisionMiddleware(request)
}

export async function PUT(request) {
  return await PermisionMiddleware(request)
}

export async function DELETE(request) {
  return await PermisionMiddleware(request)
}

export async function PATCH(request) {
  return await PermisionMiddleware(request)
}

export async function OPTIONS(request) {
  return await PermisionMiddleware(request)
}

export async function HEAD(request) {
  return await PermisionMiddleware(request)
}
