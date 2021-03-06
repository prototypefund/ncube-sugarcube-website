---
title: "Installation"
root: "/ncube"
parents: ["Get Started"]
prev: "about"
next: "tutorial"
---

# Installation

## Linux

The easiest way to install the desktop version of Ncube is to install one of the provided packages. Currently there are only `deb` packages for [Ubuntu 18.04](https://github.com/critocrito/ncube/releases/latest/download/ncube_ubuntu-18.04_amd64.deb) and [Ubuntu 20.04](https://github.com/critocrito/ncube/releases/latest/download/ncube_ubuntu-20.04_amd64.deb). For any other Linux distribution build Ncube [from source](#from-source).

Install the provided `deb` package by either double-clicking it in the file browser or using a terminal:

```sh
sudo dpkg -i ncube_ubuntu-20.04_amd64.deb
```

For Linux there are additional packages containing only the server component of Ncube. The server component packages start with `ncubed` in their name. There are only `deb` packages for [Ubuntu 18.04](https://github.com/critocrito/ncube/releases/latest/download/ncubed_ubuntu-18.04_amd64.deb) and [Ubuntu 20.04](https://github.com/critocrito/ncube/releases/latest/download/ncubed_ubuntu-20.04_amd64.deb). For any other Linux distribution build Ncube [from source](#from-source).

## macOS

Ncube can be installed using the [DMG installer image](https://github.com/critocrito/ncube/releases/latest/download/Ncube.dmg). You can install Ncube by double-clicking the `Ncube.dmg` file and dragging the application into your `Applications` folder. Newer versions of macOS might refuse to install the package since Ncube is not verified by Apple. To install Ncube follow the following steps:

1. Try to run Ncube.
2. On your Mac, choose Apple menu > System Preferences, click Security & Privacy, then click General.
3. Click the lock icon to unlock it, then enter an administrator name and password.
4. Click on Open Anyway to allow Ncube on your computer.

![macOS Security & Privacy preferences](https://raw.githubusercontent.com/critocrito/ncube/master/resources/screenshots/mac-preferences.png)

## From Source

Detailed instructions how to build Ncube from source can be found on the [README](https://github.com/critocrito/ncube#from-source) of the code repository.
