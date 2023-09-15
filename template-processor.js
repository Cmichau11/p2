// New Template Processor Class
function TemplateProcessor(template){
  this.template = template;
}

// Create the fillin method
TemplateProcessor.prototype.fillin = function (dictionary){
  // Match string in form {{property}}
  var property = /{{()}}/;

  var templeteFill = this.template.replace(property, function (match, property) {

// Check if dictionary object, if not, replace with empty string
  if (dictionary.hasOwnProperty(property)) {
  return dictionary[property];
    } else {
      return '';
    }
  });
  
  return templeteFill;
}
