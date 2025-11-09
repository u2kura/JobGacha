# FF14 ジョブランダマイザー

4人パーティー用のFF14ジョブランダム割り当てツールです。

## 機能
- タンク1人、DPS2人、ヒーラー1人の構成でランダムにジョブを割り当て
- プレイヤー名を保持したまま再実行可能
- アクセス制限機能付き

## 使用方法
1. パスワードを入力してログイン（デフォルト: `ff14party`）
2. 4人のプレイヤー名を入力
3. 「ジョブ割り当て実行」をクリック
4. 結果を確認後、「再実行」で再度割り当て可能

## ジョブ一覧
### タンク
- ナイト
- 戦士
- 暗黒騎士
- ガンブレイカー

### DPS
#### 近接DPS
- モンク
- 竜騎士
- 忍者
- 侍
- リーパー
- ヴァイパー

#### 遠隔物理DPS
- 吟遊詩人
- 機工士
- 踊り子

#### キャスター
- 黒魔道士
- 赤魔道士
- 召喚士
- ピクトマンサー

### ヒーラー
- 白魔道士
- 学者
- 占星術師
- 賢者

## セキュリティ
- 簡易パスワード認証
- ローカルストレージでセッション管理
- ログアウト機能

## ファイル構成
```
├── index.html                    # GitHub Pages用メインファイル
├── index-with-password.html      # パスワード保護版
├── FF14ジョブランダマイザー.html    # 単体版（パスワードなし）
└── README.md                     # このファイル
```

## GitHub Pages でのデプロイ方法
1. GitHubリポジトリを作成
2. `index-with-password.html` を `index.html` にリネーム
3. GitHub Pages を有効化
4. `https://yourusername.github.io/repositoryname/` でアクセス可能

## パスワード変更方法
`index.html` 内の以下の行を変更してください：
```javascript
const CORRECT_PASSWORD = 'your-new-password';
```

---
Created for Final Fantasy XIV players