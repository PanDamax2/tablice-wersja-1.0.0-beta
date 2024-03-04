@echo off

REM Komunikat o rozpoczęciu
echo ====================================
echo Rozpoczynanie instalacji...
echo ====================================

REM Pobieranie zależności globalne
cd "back-end"
npm install && cd "../panel" && npm install && npm run build && cd "../tablica" && npm install

REM Komunikat o zakończeniu
echo ====================================
echo Instalacja zakończona pomyślnie!
echo ====================================