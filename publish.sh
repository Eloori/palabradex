#!/usr/bin/env bash
# Veröffentlicht Palabradex auf GitHub Pages.
# Voraussetzung: GitHub CLI (gh) installiert und eingeloggt (gh auth login).
set -e
REPO="${1:-palabradex}"
gh repo create "$REPO" --public --source=. --remote=origin --push
OWNER=$(gh api user --jq .login)
gh api -X POST "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null
echo ""
echo "Fertig. In 1 bis 2 Minuten ist die Seite online unter:"
echo "https://$OWNER.github.io/$REPO/"
