document.addEventListener('copy', function(e){
e.clipboardData.setData('text/plain','// Copied from StackOverflow\n' + window.getSelection().toString());
e.preventDefault();
//     e.clipboardData.setData('text/plain', 'Hello, world!');
//     e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
//     e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
});

// inline comment list https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(syntax)#Comments
var lang_comments = {
  "lang-c"   : "//",
  "lang-cpp" : "//",
  "lang-cs"  : "//",
  "lang-js"  : "//",
  "lang-tex" : "%",
  "lang-pl"  : "#",
  "lang-py"  : "#",
  "lang-r"   : "#",
  "lang-rb"  : "#",
  "lang-sh"  : "#"

};

document.addEventListener('copy', function(e){
  // grab the enclosing pre and bootstrap language inference from so's language choice
  var containing_pre = window.getSelection().anchorNode.parentNode.closest("pre");
  var classlist = containing_pre.className.split(/\s+/).filter(function (x) {return x.substring(0,5)=="lang-";});
  for (cl in classlist) {
    if (lang_comments[classlist[cl]]){
      console.log("found language: " + classlist[cl]);
    }
  }
});


