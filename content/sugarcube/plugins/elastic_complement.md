---
path: "/sugarcube/plugins/elastic_complement"
title: "elastic_complement"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-elasticsearch#readme"
tags: ["data","data storage","elasticsearch","sugarcube","sugarcube-plugin","transformation"]
---
# elastic_complement plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-elasticsearch
```


## Usage

Complement data in the pipeline with existing data stored in Elasticsearch. This merges new data into existing data.

**Configuration Options:**

-   `elastic.host`: Set the hostname of the Elasticsearch server. Defaults to `localhost`.
-   `elastic.port`: Set the port of the Elasticsearch server. Defaults to `9200`.
-   `elastic.index`: Define the prefix to be used for index names. Defaults to `sugarcube`.

**Example:**

Search DuckDuckGo and update it with date already stored in Elasticsearch before importing the updated version.

```shell
sugarcube -Q ddg_search:Keith\ Johnstone \
          -p ddg_search,elastic_complement,elastic_export
```

**Metrics:**

-   `new`: The number of new units that weren't complemented.
-   `existing`: The number of units that were complemented.
