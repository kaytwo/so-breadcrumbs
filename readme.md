# Stack Overflow Breadcrumbs

We've all done it. You've got a programming question, you dump it into Google, and you find the exact incantation that you need to fix it. You copypaste it from StackOverflow and life is good. But what happens two days later? You have no idea why that code is there or what it does.

Stack Overflow Breadcrumbs hooks the copy event and adds a link back to where you found the code to your paste buffer. So when you copy and paste this code block:

![input text selection](docs/input.png "Code goes in")

This is what comes out of your paste buffer on the other side:

![output text](docs/output.png "Commented code comes out")

## Features

* The extension bootstraps language inference from StackOverflow's pretty print library (which itself simply trusts the tags added to the question). This way a question tagged with `python` will have `#` as its comment character, and a quesiton tagged with `C` will have `//` as the comment characters. It's not perfect, but it works decently. If you copy text from outside of a `code` block, there's no comment character.
* If you copy text from a specific answer, the extension adds the fragment identifier to the URL so you can jump right back to where you found the code.

## TODOs

* Suppress header for super short pastes (less than two newlines?)
* Any sort of customization
* Better language inference
