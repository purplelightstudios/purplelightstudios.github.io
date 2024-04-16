workflow run-dev {
  parallel {
    Invoke-Expression "npm run build-stars"
    Invoke-Expression ".\hugo.exe server -D"
    Invoke-Expression "npm run watch:tw"
  }
}

run-dev
