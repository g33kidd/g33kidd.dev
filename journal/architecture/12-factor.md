---
title: Notes on The Twelve-Factor App
excerpt: "Some of my notes on the Twelve Factor strategy in building large software projects."
slug: "12-factor-app"
tags: notes, architecture, 12-factor, SaaS
created: 2-26-2021
lastEdit: 2-26-2021
published: 2-26-2021
version: 0
wip: true
---

During my search for jobs and what not, I came across <a href="https://12factor.net/" target="_blank">The Twelve-Factor App</a>. Which is basically some guidelines that software companies use to build products that help prevent **Software Rot**. This is mostly for myself, but if you want a short version of their document with some extra notes, this is the place to be.

### 1. Version Control

Codebases are always checked into a VCS (Version Control System). This seems to be pretty standard for most projects. It's a distributed system if you have more than one repo, but each project must adhere to the same standards.
> Use environment variables for configuration that doesn't need to be in the code.


### 2. Package Management & Dependencies

If you're building a system that relies on system tools like ImageMagick, you shouldn't expect it to be there at all. Some systems might, others may not. Declaring dependencies and isolating them should pretty much always be used together. Explicit dependency declaration makes it easier for new developers on a project to get going; there's no guessing where your deps are

> Use environment variables for configuration that doesn't need to be in the code.

### 3. Settings & Configuration

Constants shouldn't be stored in the app codebase itself. There should be clear separation of code and configuration. That doesn't necessarily mean app internal configuration; mostly variables that need to be secure or configurable per machine.

> Use environment variables for configuration that doesn't need to be in the code.