param(
    [int]$Port = 3000
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Host "Port $Port busy, trying 8080..."
    $Port = 8080
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
}

Write-Host "=========================================="
Write-Host " Portfolio Live Server Running!"
Write-Host " URL: http://localhost:$Port/"
Write-Host " Press Ctrl+C in this terminal to stop."
Write-Host "=========================================="

Start-Process "http://localhost:$Port/"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        try {
            $request = $context.Request
            $response = $context.Response

            $path = $request.Url.LocalPath
            if ($path -eq "/" -or [string]::IsNullOrWhiteSpace($path)) {
                $path = "/index.html"
            }

            # Resolve clean relative path
            $relPath = $path.TrimStart('/').Replace('/', '\')
            $filePath = Join-Path $PSScriptRoot $relPath

            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $mime = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".svg"  { "image/svg+xml" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".ico"  { "image/x-icon" }
                    ".pdf"  { "application/pdf" }
                    ".apk"  { "application/vnd.android.package-archive" }
                    default { "application/octet-stream" }
                }
                $response.ContentType = $mime
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
                $response.ContentLength64 = $body.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($body, 0, $body.Length)
                }
            }

            $response.Close()
        } catch {
            Write-Host "Request error: $_"
            try { $context.Response.Close() } catch {}
        }
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
