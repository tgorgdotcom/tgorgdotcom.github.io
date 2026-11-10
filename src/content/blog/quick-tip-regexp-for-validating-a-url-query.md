---
title: 'quick tip: RegExp for validating a url query'
description: 'quick tip: RegExp for validating a url query'
pubDate: 'Apr 19 2009'
author: 'Thomas Gorgolione'
---

One of my projects involved validating only the query part of the url using regular expressions (i.e. everything after the ?). It took me ages to figure out a proper regex, so I thought it might help someone here by posting it:  
  
```
^(?:[a-zA-Z%0-9+]+=[a-zA-Z%0-9+]+(?!=)&)*[a-zA-Z%0-9+]+=[a-zA-Z%0-9+]+(?!.)
```
  
Note: this only works for validating the query string, so adding the actual url will prevent a match, making the string to search invalid.  