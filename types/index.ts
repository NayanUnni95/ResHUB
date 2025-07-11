export type Category = {
  id: number
  name: string
  redirect: string
  emoji: string | null
}

export type ListCategoryProps = {
  data: Category[] | undefined
}

export type ResourceItemProps = {
  id: string
  title: string
  url: string
  summary: string
  image: string | null
  order: number
  placeholder: string | null
  relative: string[] | null
}
