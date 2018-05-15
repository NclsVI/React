"use strict";
var checkForm = {
	init: function(){
		$('button').click(function(event){
			event.preventDefault();
			var formData = $('form').serializeArray();
			checkForm.validationForm(formData);
		});
	},
	validationForm: function (data) {
		console.log(data);
	
		for(var i=0;i<data.length;i++){
			var formItem = data[i];
			var inputName = formItem.name;
			var inputValue = formItem.value;
			$('input[name='+inputName+']').removeClass('invalid');
			$('input[name='+inputName+']').siblings('.error').text('');
			if(inputValue){
				
				if(checkForm.checkInput[inputName]){
					checkForm.checkInput[inputName](inputName,inputValue);
				}
			}
			else{
				(inputName=='notes') ? 
				true : 
				checkForm.setError(inputName, 'The field can not be empty.');
			}
		}
		if(!$('.invalid').length){
			popupShow(true);
		}

	},
	checkInput:{
		firstname: function(name,value){
			var pattern = /['\'','\"'.\d]/;
			if(pattern.test(value)){
				checkForm.setError(name, 'first name error');
			}
		},
		lastname: function(name,value){
			var pattern = /['\'','\"',\d]/;
			if(pattern.test(value)){
				checkForm.setError(name, 'last name error');
			}
		},
		birthday: function(name,value){
			if(new Date(value)+''=='Invalid Date'){
				checkForm.setError(name, 'Invalid Date');
			}
		},
		email: function(name,value){
			console.log(name,value);
			var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			(emailReg.test(value)) ? true : checkForm.setError(name, 'Invalid Email format');
		}
	},
	setError: function(name, error){
		$('input[name='+name+']').addClass('invalid');
		$('input[name='+name+']').siblings('.error').text(error);
	}
};
function popupShow(val){
	val ? $('.finish-popup').addClass('visible'):$('.finish-popup').removeClass('visible');
	$('.finish-popup').click(function(){
		popupShow(false)
	})
}
function createDatePicker() {
	$( "#datepicker" ).datepicker({
		maxDate: new Date(),
	});
}
function createCountryList(){
	for(var i = 0;i<countryList.length;i++){
		$('#countryList').append('<option value='+countryList[i].en+ '><option>')
	}
}

var init = function () {
	createDatePicker();
	createCountryList();
	checkForm.init();
}
init();
