export type SearchResult = {
  name: string,
  link: string,
  body: string,
}

export function getContentFrom(html: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const nodes = doc.querySelectorAll('script, style')
  nodes.forEach(node => {
    node.remove()
  })
  return doc.body.textContent?.replaceAll(/{.+}/g, '').replaceAll(/(\n|\t)/g, ' ').replaceAll(/ +/g, ' ').trim() ?? ''
}

export function getTitle(html: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  return doc.querySelector('h1')?.textContent ?? 'Unknown'
}

export function listFiles(glob: Record<string, string>): SearchResult[] {
  const items: SearchResult[] = []
  for (const [key, value] of Object.entries(glob)) {
    const path = key.replace('./', '').replace('+page.svelte', '')
    console.log(path)
    const parts = path.split('/')
    const content = getContentFrom(value)
    items.push({
      name: getTitle(value),
      link: path,
      body: content.length ? content : 'IGCSE Kit',
    })
  }
  return items
}