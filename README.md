# astro-i18n api request bug

This repo demonstrates a bug where the locale is not correctly set when a page issues an internal API request during SSR. (It uses the fallback locale instead, likely since it considers the request to be to the /api route instead of the localized route.)

In commit c63fd1b, you can see the translations working under /es. Then in commit 5d3625b, you can see a small API example which causes the issue.
