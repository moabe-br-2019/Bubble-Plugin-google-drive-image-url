function(instance, properties, context) {

let urlInput = properties.original_link
//let originalUrl = urlInput.value
let id = urlInput.split("/d/")[1].split("/view")[0];

instance.publishState('output_link', 'https://drive.google.com/uc?id='+ id)



}