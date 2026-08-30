// Навмисно без <html>/<body> тут: (frontend) і (payload) — окремі route groups,
// кожна зі своїм власним <html> (Payload RootLayout вимагає це для /admin).
// Обгортання тут спричиняло hydration-помилку "вкладений <html>" на /admin.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
