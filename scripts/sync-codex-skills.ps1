param(
  [string]$Source = (Join-Path $PSScriptRoot "..\.agents\skills"),
  [string]$Destination = $(if ($env:CODEX_HOME) {
      Join-Path $env:CODEX_HOME "skills"
    } else {
      Join-Path $HOME ".codex\skills"
    })
)

$resolvedSource = (Resolve-Path -LiteralPath $Source).Path

if (-not (Test-Path -LiteralPath $Destination)) {
  New-Item -ItemType Directory -Path $Destination -Force | Out-Null
}

$resolvedDestination = [System.IO.Path]::GetFullPath($Destination)

Get-ChildItem -LiteralPath $resolvedSource -Directory | ForEach-Object {
  $targetPath = Join-Path $resolvedDestination $_.Name
  if (Test-Path -LiteralPath $targetPath) {
    Write-Output "skip $($_.Name) (already installed)"
    return
  }

  Copy-Item -LiteralPath $_.FullName -Destination $targetPath -Recurse
  Write-Output "installed $($_.Name)"
}
