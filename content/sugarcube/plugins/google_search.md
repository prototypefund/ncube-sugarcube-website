---
path: "/sugarcube/plugins/google_search"
title: "google_search"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-google#readme"
tags: ["data","google","search","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# google_search plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-google
```


## Usage

Search on Google for a term, specified by the query type `google_search`.

```shell
$(npm bin)/sugarcube -Q google_search:Keith\ Johnstone -p google_search,tap_printf
```

**Configuration Options**:

-   `google.headless`: Set to `true` to show the browser window, otherwise browse
    headless if set to `false`. Defaults to `false`.

    `sugarcube -Q google_search:Keith\ Johnstone -p google_search,tap_printf --google.headless false`
