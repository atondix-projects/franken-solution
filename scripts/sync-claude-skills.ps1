param(
  [string]$Source = (Join-Path $PSScriptRoot "..\.agents\skills"),
  [string]$Destination = (Join-Path $PSScriptRoot "..\.claude\skills")
)

# Skills that are Codex-only and should not be mirrored to Claude Code
$excludeSkills = @('mobile-design', 'mobile-developer')

$resolvedSource = (Resolve-Path -LiteralPath $Source).Path
$resolvedDestination = [System.IO.Path]::GetFullPath($Destination)

if (-not (Test-Path -LiteralPath $resolvedDestination)) {
  New-Item -ItemType Directory -Path $resolvedDestination -Force | Out-Null
}

Get-ChildItem -LiteralPath $resolvedSource -Directory | ForEach-Object {
  if ($excludeSkills -contains $_.Name) {
    Write-Output "skip $($_.Name) (excluded from Claude mirror)"
    return
  }

  $targetPath = Join-Path $resolvedDestination $_.Name

  if (Test-Path -LiteralPath $targetPath) {
    # Overwrite: copy changed files, skip identical ones
    $sourceItems = Get-ChildItem -LiteralPath $_.FullName -Recurse -File
    $updated = 0
    foreach ($item in $sourceItems) {
      $rel = $item.FullName.Substring($_.FullName.Length).TrimStart('\', '/')
      $dest = Join-Path $targetPath $rel
      $destDir = Split-Path $dest -Parent
      if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
      if (-not (Test-Path $dest) -or (Get-FileHash $item.FullName).Hash -ne (Get-FileHash $dest).Hash) {
        Copy-Item -LiteralPath $item.FullName -Destination $dest -Force
        $updated++
      }
    }
    if ($updated -gt 0) {
      Write-Output "updated $($_.Name) ($updated file(s))"
    } else {
      Write-Output "ok     $($_.Name) (in sync)"
    }
  } else {
    Copy-Item -LiteralPath $_.FullName -Destination $targetPath -Recurse
    Write-Output "added  $($_.Name)"
  }
}

Write-Output "`nDone. Run this after modifying any skill in .agents/skills/."
