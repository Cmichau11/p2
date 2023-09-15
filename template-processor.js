// New Templete Processer Class
function TempleteProcessor(template){
  this.template = template;
}

// Create the fillin method
TempleteProcessor.fillin = function (dictionary){
  // Match string in form {{property}}
  var property = /{{()}}/;

  var templeteFill = this.template.replace(property), function (match, property) {

// Check if dictionary object, if not, replace with empty string
  if (dictionary.hasOwnProperty(property)) {
  return dictionary[property];
  } else {
    return '';
  }
  return templeteFill;
}
  
