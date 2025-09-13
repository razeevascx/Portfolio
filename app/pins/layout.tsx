export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-6xl mx-auto space-y-10 overflow-x-hidden">
      {children}
    </section>
  );
}
