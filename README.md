# KDIX.Garage Legal

KDIX.Garage の規約文書を公開するための Astro サイトです。Cloudflare Workers Static Assets で配信します。

## Documents

規約本文は `docs/constitution.md` に置いています。

Astro は `docs/*.md` を読み込み、トップページに文書一覧を表示します。ファイル名がそのまま URL パスになります。

```text
docs/constitution.md -> /constitution
docs/privacy_policy.md -> /privacy_policy
docs/consumer_shopping_info.md -> /consumer_shopping_info
```

各 Markdown には一覧表示用の frontmatter を設定します。

```md
---
title: KDIX.Garage 規約
description: KDIX.Garage の規約
emoji: 📜
updatedAt: "2026-06-10"
---
```

## Development

依存関係をインストールします。

```sh
pnpm install
```

開発サーバーを起動します。

```sh
pnpm run dev
```

本番ビルドを確認します。

```sh
pnpm run build
```

Wrangler のローカル開発サーバーで Workers Static Assets として確認します。

```sh
pnpm run worker:dev
```

## Deploy

デプロイ前に Wrangler 設定を検証します。

```sh
pnpm run deploy:dry-run
```

手元からデプロイする場合は次を実行します。

```sh
pnpm run deploy
```

## Cloudflare Workers

Worker は `wrangler.jsonc` で設定しています。

```text
Worker name: kdix-garage-legal
Assets directory: dist
Custom domain: legal.kdix.dev
```

GitHub Actions からデプロイするには、Repository secrets に次を設定します。

```text
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
```
