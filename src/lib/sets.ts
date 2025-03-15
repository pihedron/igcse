export function intersect(a: number[], b: number[]) {
  let count: Record<number, number> = {}
  const common = []

  for (const x of a) {
    if (x in count) count[x]++
    else count[x] = 1
  }

  for (const x of b) {
    if (x in count) {
      common.push(x)
      count[x]--
      if (count[x] === 0) delete count[x]
    }
  }

  return common
}