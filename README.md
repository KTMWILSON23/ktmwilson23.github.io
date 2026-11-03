# XXFHen PS4 host

XXFHen is a personal browser host for PlayStation 4 firmware **14.00**.

Intended GitHub Pages address: https://ktmwilson23.github.io/

Open that address in a PS4 browser on firmware 14.00, choose a build, and explicitly select Start. The host does not start a loader automatically. Desktop browsers and unsupported firmware are blocked from importing loader modules.

This edition is online-only and requires an internet connection; offline caching is not enabled. The default XXFHen route uses Afterglow's raw GoldHEN loading path with the personalized v2.4b18.13 payload. The separate Reference HEN route retains the original Sentrix flow and its bundled payload.

Original authorship, credits, source references, and license notices are preserved. GoldHEN is by SiSTRo and contributors; Afterglow is by well0nez/m0zz, with raw13g and the other upstream contributors credited in [Credits & source](credits.html). The upstream JavaScript engines and firmware patch binaries are unchanged.

The customized host has not received a console runtime test. Static checks do not establish PS4 compatibility or reliability.

## Files and source

This repository contains the publishable static files at its root, including both loader directories, payloads, artwork, licenses, provenance, and the matching complete source download in [source.zip](source.zip). Additional original notices are retained in `upstream-notices/`.

Publish the repository root with GitHub Pages. The empty `.nojekyll` file keeps the deployment as plain static files. No custom domain or hosting credentials are included.
