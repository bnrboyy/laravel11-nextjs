function layout({ children }) {
  return (
    <html>
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default layout