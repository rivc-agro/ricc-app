export const indextemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <meta name="description" content="Описание сайта">
    <title>Главная | RICC</title>
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <div id="reactDom">${content}</div>
</body>
</html>
`;