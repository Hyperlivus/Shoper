import type { Metadata } from "next";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {ThemeProvider, GlobalStyles} from "@mui/material";
import theme from "@/theme/theme";
import globalStyles from "@/theme/styles";


export const metadata: Metadata = {
  title: "Shoper app",
  description: "app for internet shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
               <GlobalStyles styles={globalStyles}/>
               {children}
           </ThemeProvider>
       </AppRouterCacheProvider>
      </body>
    </html>
  );
}
