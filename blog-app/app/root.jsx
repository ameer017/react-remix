import { Outlet, LiveReload } from "@remix-run/react";

export default function App() {
  return <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <title>My Remix Blog App</title>
    </head>
    <body>
      hello12
      <Outlet />
      <LiveReload />
    </body>
  </html>
}