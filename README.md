# 26 November 2026: World News in One Image

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/Totoiswanto23/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/Totoiswanto23/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

Sum up 26 November's world news in one image — an entry for make.fun's
[news-image-20261126](https://make.fun/bounty/news-image-20261126) bounty ($100).

## The image

A newspaper front page, "WORLD NEWS — THURSDAY, 26 NOVEMBER 2026", with six
stories verified from live news sources on 26 November 2026:

1. **Thanksgiving storm batters the US East Coast** — a nor'easter brings
   60 mph gusts and flooding to New York on Thanksgiving Day.
   (Reuters / AP / CNN)
2. **Macy's 100th parade moved to Saturday** — first weather
   postponement in the parade's history. (AP / Reuters)
3. **Mumbai marks 18 years since 26/11** — tributes at the Gateway of
   India for the 166 killed in the 2008 attacks. (AIR News)
4. **India marks Constitution Day** — 77 years since the Constitution
   was adopted in 1949. (Observer Voice)
5. **Chess: Game 3 in Geneva today** — Gukesh vs Sindarov level at 1–1
   after two draws. (FIDE / ChessBase)
6. **F1 heads to Qatar** — drivers face the press in Doha before
   Sunday's race at Lusail. (FIA / Sky Sports)

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`, checks it is a whole PNG of at most
1 MiB and 1024×1024, and verifies the copy byte for byte. No network.
Two runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).
