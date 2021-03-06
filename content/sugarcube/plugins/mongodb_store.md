---
path: "/sugarcube/plugins/mongodb_store"
title: "mongodb_store"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-mongodb#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# mongodb_store plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-mongodb
```


## Usage

```shell
$(npm bin)/sugarcube -q queries.json -c config.json -p twitter_feed,mongodb_store
```

Store all data units in a mongodb database. It differentiates new units,
revisions and relations.

**Configuration:**

-   `mongodb.uri`: The database connection string (defaults to `mongodb://localhost/sugarcube`).
