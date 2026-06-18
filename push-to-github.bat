@echo off
echo === Monra — Push naar GitHub ===

cd /d "%~dp0"

git add .
git status
echo.
set /p CONFIRM=Commit en push? (j/n): 
if /i not "%CONFIRM%"=="j" exit /b 0

git commit -m "Update Monra project"
git push origin main

echo.
echo === Klaar! Bekijk op: https://github.com/bmassij/Monra ===
echo.
echo Vercel deploy: vercel.com/new - importeer repo, Root Directory = monra-website
pause
