@echo off
echo FF14 ジョブランダマイザーを起動しています...
echo.
echo ブラウザが自動で開かない場合は、以下のURLを開いてください：
echo http://127.0.0.1:8000
echo.
echo サーバーを停止するには Ctrl+C を押してください
echo.

cd /d "%~dp0"
start http://127.0.0.1:8000
npx http-server . -p 8000