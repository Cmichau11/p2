// New Template Processor Class
function TemplateProcessor(template){
  this.template = template;
}

// Create the fillin method
TemplateProcessor.prototype.fillin = function (dictionary){
  // Match string in form {{property}}
  var property = /{{(.*?)}}/;
// Preforming a replacement option on this.template string if it does not follow the form {{property}} template.
  var templeteFill = this.template.replace(property, function (match, property) {

// Check if dictionary object exist, if not, replace with empty string
  if (dictionary.hasOwnProperty(property)) {
  return dictionary[property];
    } else {
      return '';
    }
  });
  // Returns the replaced dictionary word with form {{property}}
  return templeteFill;
}
