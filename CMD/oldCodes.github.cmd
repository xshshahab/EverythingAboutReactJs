cat 1August.git.cmd
echo.
echo Starting Git process...
echo.

REM Stage all files
git add .

REM Commit changes with message
set /p MSG="📝 Enter commit message:  "
git commit -m "%MSG%"

REM Push to remote repository
git push origin main

REM Show latest commit
echo.
echo 🧾 Latest commit:
git log -1

pause
