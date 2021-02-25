export const renderHTML = (helmet, app) => {
  return `
      <!doctype html>
      <html ${helmet.htmlAttributes.toString()}>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="__reacfy">${app}</div>
          /* <script src="/__reacfy/script.js" type="text/javascript"></script> */
        </body>
      </html>
    `
}
