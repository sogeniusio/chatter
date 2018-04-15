if (typeof simplemdeOptions == 'undefined') {
	var simplemdeOptions = {
		autofocus: true,
		placeholder: "Type Your Discussion Here...",
	    hideIcons: ["guide", "preview"],
	    spellChecker: false,
	    status: false,
	};
}

function newSimpleMde(element){
	simplemdeOptions['element'] = element;
	return new SimpleMDE(simplemdeOptions);

	inlineAttachment.editors.codemirror4.attach(simplemde.codemirror, {
	    onFileUploadResponse: function(xhr) {
	        var result = JSON.parse(xhr.responseText),
	        filename = result[this.settings.jsonFieldName];

	        if (result && filename) {
	            var newValue;
	            if (typeof this.settings.urlText === 'function') {
	                newValue = this.settings.urlText.call(this, filename, result);
	            } else {
	                newValue = this.settings.urlText.replace(this.filenameTag, filename);
	            }
	            var text = this.editor.getValue().replace(this.lastValue, newValue);
	            this.editor.setValue(text);
	            this.settings.onFileUploaded.call(this, filename);
	        }
	        return false;
	    }
	});
}

$('document').ready(function(){

	var simplemde = newSimpleMde(document.getElementById("simplemde"));
	var simplemdeInDiscussionView = newSimpleMde(document.getElementById("simplemde_in_discussion_view"));

	$('.editor-toolbar .fa-columns').click(function(){
		if(!$('body').hasClass('simplemde')){
			$('body').addClass('simplemde');
		}
	});

	$('.editor-toolbar .fa-arrows-alt').click(function(){
		if($('body').hasClass('simplemde')){
			$('body').removeClass('simplemde');
		} else {
			$('body').addClass('simplemde');
		}
	});

	document.getElementById('new_discussion_loader').style.display = "none";
	document.getElementById('chatter_form_editor').style.display = "block";

    // check if user is in discussion view
    if ($('#new_discussion_loader_in_discussion_view').length > 0) {
        document.getElementById('new_discussion_loader_in_discussion_view').style.display = "none";
        document.getElementById('chatter_form_editor_in_discussion_view').style.display = "block";
    }
});
