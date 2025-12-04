export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          <a href="/carros">Listar Carros</a>
          <a href="/carros/new">Cadastrar Carro</a>
        </div>

        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Sistema de Carros",
  description: "CRUD de carros usando MockAPI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex gap-6 p-4 border-b">
          <a href="/carros">Listar Carros</a>
          <a href="/carros/new">Cadastrar Carro</a>
        </nav>

        {children}
      </body>
    </html>
  );
}
