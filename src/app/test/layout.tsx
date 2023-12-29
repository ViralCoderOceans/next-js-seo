import axios from 'axios'

export async function generateMetadata() {
  const data = await axios.get(`${process.env.SITE_URL}/api/get-metadata-by-page/test`)

  return { ...data.data }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
