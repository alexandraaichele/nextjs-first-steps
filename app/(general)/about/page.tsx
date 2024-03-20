import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['About Page', 'Información']
}

export default function page() {
  return (
    <>
      <span className='text-7xl'>About page</span>
    </>
  )
}
