---
title: 'How-To: Run a command-line application in the background in The Games Factory'
description: 'How-To: Run a command-line application in the background in The Games Factory'
pubDate: 'Aug 15 2008'
author: 'Thomas Gorgolione'
---

This short how-to will allow you to call command line apps in the background (i.e. doesn't "pop-up" in front of your app) within your The Games Factory (original version 1.06) game or app

I know, The Games Factory is a really old app, but it's still an inexpensive easy way to make programs and, of course, games.

I recently wanted to create an program that will run a few commands from the command line in the background without the user knowing it. Unfortunately, it's really hard to do in TGF since there's no option for this. However, due to the magic of the CallDLL object, I've found way to get it working (*one caveat; users running your app will need Windows XP or better for this to work*). This should even work for non-command line apps you wish to run as well (for this there should be no XP restriction, but I haven't tested it...):

1. Make sure you've added the CallDLL object to the level that you want to run the command.

2. Set the following actions for the CallDLL object:
   * Load DLL "Kernel32.dll"
   * Return a value
   * Set Argument to "cmd.exe /C ""*Your Command Goes Here*""" at 1
   * Set Argument to 0 at 2
   * Call Function "WinExec"
   * Unload DLL

3. Change the "Your Command Goes Here" part to the command you wish to run. If you want to run a non-command line based app, simply replace the whole line (including the cmd.exe part) with the location of your app. Mind the quotes; before your custom command there's two, after there's three (kinda hard to see that above..).

That's all you need to do.