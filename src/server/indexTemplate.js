export const indextemplate = (content, data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png">
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#06112E">

    <meta name="description" content="Business analysis with BI help you to use data effectively to manage your farm with maximum benefit.">
    <title>DANIT Business Iintelligence in Agriculture</title>

    <script>
        window.__INITIAL_DATA__ = ${data}
    </script>
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <div id="reactDom">${content}</div>
</body>
</html>
`;