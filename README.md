# KDIX.Garage Legal Documents

`constitution.typ` is the source of truth for the KDIX.Garage constitution.

## Build Locally

Install Typst and Noto Sans CJK JP, then run:

```sh
typst compile constitution.typ constitution.pdf
```

## Release PDF

When a commit is pushed to `main`, GitHub Actions builds `constitution.pdf` from `constitution.typ` and creates a GitHub Release.

You can also run the workflow manually from GitHub Actions, or with GitHub CLI:

```sh
gh workflow run release-pdf.yml
```

Release tags use the commit SHA:

```text
pdf-<commit-sha>
```

Manual releases include the workflow run number to avoid tag conflicts:

```text
pdf-<commit-sha>-manual-<run-number>
```

## Verify Attestation

Download `constitution.pdf` from a GitHub Release, then verify its provenance:

```sh
gh attestation verify constitution.pdf --repo OWNER/REPO
```

Replace `OWNER/REPO` with the repository name.
