import type { OptionalQuery as OptionalQuery0 } from '../../app/search/page'

export const pagesPath = {
  "articles": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/articles/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "search": {
    $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/search' as const, query: url?.query, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
