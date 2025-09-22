export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="max-w-6xl mx-auto">{children}</section>;
}
