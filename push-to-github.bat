@echo off
echo === Monra — Push naar GitHub ===

cd /d "%~dp0"

git init
git remote remove origin 2>nul
git remote add origin https://github.com/bmassij/Monra.git

git add monra-website-preview.html
git add monra-support.html
git add push-to-github.bat
git add monra-website/

git commit -m "Monra website + Support pagina: premium hero slider, navy/cyan huisstijl"
git branch -M main
git push -u origin main --force

echo.
echo === Klaar! Bekijk op: https://github.com/bmassij/Monra ===
echo.
echo Volgende stap: ga naar vercel.com, koppel github.com/bmassij/Monra en deploy!
pause
