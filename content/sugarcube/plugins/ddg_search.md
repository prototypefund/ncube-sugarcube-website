---
path: "/sugarcube/plugins/ddg_search"
title: "ddg_search"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-ddg#readme"
tags: ["data","duckduckgo","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# ddg_search plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-ddg
```


## Usage

```shell
$(npm bin)/sugarcube -c cfg.json -p ddg_search
```

This is a data fetching plugin.

It looks for the query terms of type `ddg_search`, e.g.:

```json
[{
  "type": "ddg_search",
  "term": "Some Search Term"
}]
```
