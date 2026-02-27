const http = require('http');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Ubuntu Server Success</title>
</head>
<body class="bg-slate-900 text-white min-h-screen flex items-center justify-center">
    <div class="p-10 bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl text-center">
        <h1 class="text-4xl font-bold mb-4">Node.js v18.19.1</h1>
        <p class="text-green-400 font-mono mb-6">Status: Running on AWS/Ubuntu</p>
        <div class="py-3 px-6 bg-slate-900 rounded-xl border border-slate-700">
            <span class="text-sm text-slate-500 uppercase">CI/CD Pipeline</span>
            <div class="text-xl font-bold italic">SUCCESSFUL 🚀</div>
        </div>
    </div>
</body>
</html>
`;

// This uses the built-in 'http' module instead of Express
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
});

server.listen(3000, '0.0.0.0', () => {
    console.log("🚀 Server is live on port 3000");
    console.log("Note: Use your Public IP to access this in the browser.");
});
