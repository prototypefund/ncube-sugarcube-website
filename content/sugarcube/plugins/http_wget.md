---
path: "/sugarcube/plugins/http_wget"
title: "http_wget"
author: "Christo <Christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-http#readme"
tags: ["data","http","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# http_wget plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-http
```


## Usage

Fetch whole web pages from `_sc_media`. Downloaded targets are added to the
`_sc_downloads` collection.

**Configuration Options**:

-   `http.data_dir` (defaults to `./data`)

    Specify the target download directory.

-   `http.wget_cmd` (defaults to `wget`)

    Specify the path to the `wget` command.
