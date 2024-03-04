@echo off

REM Komunikat o rozpoczeciu
echo ====================================
echo Rozpoczynanie instalacji...
echo ====================================

REM Przejdź do folderu panel
cd "panel"

REM Właczenie panelu
start /b npm run preview

REM Otworz przegladarke
start http://localhost:4173/panel

REM Komunikat o zakonczeniu
echo ====================================
echo Panel uruchomiony w tle!
echo ====================================
