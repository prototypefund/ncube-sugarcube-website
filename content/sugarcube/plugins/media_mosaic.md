---
path: "/sugarcube/plugins/media_mosaic"
title: "media_mosaic"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-media#readme"
tags: ["@sugarcube/plugin","data","exif","images","media","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# media_mosaic plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-media
```


## Usage

Generate a mosaic of screenshots for every video in `_sc_downloads`. This plugin will create a `mosaic.jpg` in the same download directory as the video. The mosaic can be generated either based on scene changes or every 400th frame. The mosaic is generated using [`ffmpeg`]\(<https://www.ffmpeg.org/**>.

**Configuration Options:**

-   `media.ffmpeg_cmd`: The path to the `ffmpeg` command. Defaults to `ffmpeg`.
-   `media.mosaic_parallel`: Specify how many mosaics are generated in parallel. It defaults to 1 and can be set to a value between 1 and 8.
-   `media.mosaic_force`: Unless set to `true` this plugin will skip generation if a mosaic already exists. Defaults to `false`.
-   `media.mosaic_strategy`: Choose the strategy to be used when generating mosaics. Can either be `scene-change` to generate mosaics based on scene changes in the video, or `nth-frame` to sample screenshots every 400th frame. Defaults to `scene-change`.

**Example:**

```shell
$(npm bin)/sugarcube -p youtube_video,media_youtubedl,media_mosaic \
                     --media.mosaic_strategy nth-frame \
                     --media.mosaic_force
```

**Metrics:**

-   `total`: The total number of video mosaics generated.
-   `existing`: The number of mosaics that already existed.
-   `fail`: The number of mosaics that failed to generate.
-   `success`: The number of mosaics that were successfully generated.
-   `new`: The number of new mosaics out of the number of successfully generated mosaics.
