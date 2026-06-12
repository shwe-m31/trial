#Requires -Version 5.1
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "=== Trial Main - Starting App ===" -ForegroundColor Cyan
Write-Host ""

# 1) Backend (Spring Boot + H2 file DB)
Write-Host "[1/2] Starting Spring Boot backend on http://localhost:8080 ..." -ForegroundColor Yellow
$backend = Start-Process powershell -ArgumentList @(
    "-NoExit",
    "-Command",
    "Set-Location '$Root\folder2'; .\mvnw.cmd spring-boot:run"
) -PassThru -WindowStyle Normal

Start-Sleep -Seconds 3

# 2) Frontend (React)
Write-Host "[2/2] Starting React frontend on http://localhost:3000 ..." -ForegroundColor Yellow
$frontend = Start-Process powershell -ArgumentList @(
    "-NoExit",
    "-Command",
    "Set-Location '$Root\folder1'; if (-not (Test-Path node_modules)) { npm install }; npm start"
) -PassThru -WindowStyle Normal

Write-Host ""
Write-Host "=== Ready ===" -ForegroundColor Green
Write-Host "  Register UI:     http://localhost:3000"
Write-Host "  Backend health:  http://localhost:8080/api/users/"
Write-Host "  View all users:  http://localhost:8080/api/users/all"
Write-Host "  H2 DB console:   http://localhost:8080/h2-console"
Write-Host "    JDBC URL:      jdbc:h2:file:./data/userdb"
Write-Host "    User: sa  Password: (empty)"
Write-Host ""
Write-Host "Data persists in folder2\data\ even after you close this app."
Write-Host "Close the two PowerShell windows to stop backend and frontend."
