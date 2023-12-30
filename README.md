# astro-i18n api request bug

This repo demonstrates a bug where the locale is not correctly set when a page issues an internal API request during SSR. (It uses the fallback locale instead, likely since it considers the request to be to the /api route instead of the localized route.)

In commit [c63fd1b](https://github.com/noahtallen/astro-i18n-minimal-bug-report/commit/c63fd1b9815d393107e380327b68770a5b1f1da0), you can see the translations working under /es. Then in commit [5d3625b](https://github.com/noahtallen/astro-i18n-minimal-bug-report/commit/5d3625b61aa9ce661d72ea2122c3cb9776ea7d85), you can see a small API example which causes the issue.
