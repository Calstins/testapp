import './globals.css';

export const metadata = {
  title: 'Test Project Next App',
  description: 'A next js app test project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
