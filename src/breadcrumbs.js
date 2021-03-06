(function() {

document.addEventListener('copy', function(e){
  // inline comment list https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(syntax)#Comments
  var lang_comments = {
    "lang-c"   : "//",
    "lang-cpp" : "//",
    "lang-cs"  : "//",
    "lang-js"  : "//",
    "lang-php" : "//",
    "lang-tex" : "%",
    "lang-pl"  : "#",
    "lang-py"  : "#",
    "lang-r"   : "#",
    "lang-rb"  : "#",
    "lang-sh"  : "#"

  };
  var comment_char = '';
  var current_answer = '';
  
  // if selection is inside a <pre>, use so's language inference
  var containing_pre = window.getSelection().anchorNode.parentNode.closest("pre");
  if (containing_pre){
    var classlist = containing_pre.className.split(/\s+/).filter(function (x) {return x.substring(0,5)=="lang-";});
    comment_char = lang_comments[classlist[0]] || '//';
    comment_char = comment_char + " ";
  }
  
  // find which answer we're in so we can link directly to it
  var current_answer_div = window.getSelection().anchorNode.parentNode.closest(".answer")
  if (current_answer_div)
    current_answer = current_answer_div.getAttribute("data-answerid");
  if (current_answer){
    current_answer = "#" + current_answer;
  }

  e.clipboardData.setData('text/plain',comment_char + "from: https://" + document.location.hostname + document.location.pathname + current_answer + "\n" + window.getSelection().toString());
  e.preventDefault();
});

console.log("added event listener for breadcrumbs.");

})();
