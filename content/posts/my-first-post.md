---
date: 2024-10-22
description: A demo of some Hugo features.
lastmod: 2024-11-11
showTableOfContents: true
tags: ["demo"]
title: My First Post
type: post
---

## Hello World

Hi, here is some text.

## Code

{{< highlight go "linenos=table,hl_lines=3-4,linenostart=199" >}}
// This is a Go comment
fmt.Println("Hello, World!")
// This comment is highlighted!
fmt.Println("Here's another print statement that's hightlighted")
// Goodbye
{{< / highlight >}}

## LaTeX

\[
\begin{aligned}
KL(\hat{y} || y) &= \sum_{c=1}^{M}\hat{y}_c \log{\frac{\hat{y}_c}{y_c}} \\
JS(\hat{y} || y) &= \frac{1}{2}(KL(y||\frac{y+\hat{y}}{2}) + KL(\hat{y}||\frac{y+\hat{y}}{2}))
\end{aligned}
\]

$$C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}$$

## GoAT diagrams

```goat
      .               .                .               .--- 1          .-- 1     / 1
     / \              |                |           .---+            .-+         +
    /   \         .---+---.         .--+--.        |   '--- 2      |   '-- 2   / \ 2
   +     +        |       |        |       |    ---+            ---+          +
  / \   / \     .-+-.   .-+-.     .+.     .+.      |   .--- 3      |   .-- 3   \ / 3
 /   \ /   \    |   |   |   |    |   |   |   |     '---+            '-+         +
 1   2 3   4    1   2   3   4    1   2   3   4         '--- 4          '-- 4     \ 4

```

## Gist

{{< gist BTx123 1095d13fbc55d019dcfb54681ab70e2f >}}

## Highlight

TODO

## Instagram

{{< instagram CxOWiQNP2MO >}}

## Param

{{< param description >}}

## Ref

[Home]({{% ref "/" %}})

## Youtube

{{< youtube 0RKpf3rK57I >}}
