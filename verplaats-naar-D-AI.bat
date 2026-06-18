@echo off
echo === Monra Project verplaatsen naar D:\AI ===

:: Maak D:\AI aan als die niet bestaat
if not exist "D:\AI" mkdir "D:\AI"

:: Kopieer alles behalve .git naar D:\AI\monra
if not exist "D:\AI\monra" mkdir "D:\AI\monra"

xcopy /E /I /Y "%~dp0monra-website-preview.html" "D:\AI\monra\"
xcopy /E /I /Y "%~dp0monra-support.html" "D:\AI\monra\"
xcopy /E /I /Y "%~dp0monra-events-security.html" "D:\AI\monra\"
xcopy /E /I /Y "%~dp0push-to-github.bat" "D:\AI\monra\"
xcopy /E /I /Y "%~dp0monra-website\" "D:\AI\monra\monra-website\" /EXCLUDE:"%~dp0xcopy-exclude.txt"

echo.
echo === Klaar! Alle bestanden staan nu in D:\AI\monra ===
echo.
echo Open D:\AI\monra in Verkenner om te controleren.
pause
