---
path: "/sugarcube/plugins/mongodb_supplement"
title: "mongodb_supplement"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-mongodb#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# mongodb_supplement plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-mongodb
```


## Usage

Like `mongodb_complement`, but data in the pipeline takes precedence over data
stored in the database.

**Configuration:**

-   `mongodb.uri`: The database connection string (defaults to `mongodb://localhost/sugarcube`).
