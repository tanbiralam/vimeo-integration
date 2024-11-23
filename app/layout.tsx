import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeRegistry from '@/components/ThemeRegistry';
import DashboardLayout from '@/components/DashboardLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Video Streaming Platform',
  description: 'Stream your favorite content with our video platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <DashboardLayout>{children}</DashboardLayout>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}