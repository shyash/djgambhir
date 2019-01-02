 
$("form").on("submit",function() {
			url = "https://script.google.com/macros/s/AKfycbyCuu-N0sprpPWIR7PKuiS1x6XCa0XtHcYOwxOCtHvH3FGmX44/exec"
	var obj = {}
	obj.name = $("input[name='name']").val()
	obj.email = $("input[name='email']").val()
	obj.message = $("textarea").val()
	$.post(url,obj)
	.then(function(res) {

		if (res.result === "success") { 
				$("#contact div").html(`<p style="color: #1dbbf1;margin:20px auto 0 auto; font-size:18px;width:80%;text-align:center;">hey <strong>${JSON.parse(res.data).name}</strong> <br><strong>Thanks for being awesome!</strong> I have received your message and would like to thank you for writing to me. If your inquiry is urgent, please use the telephone number to talk to me. Otherwise, I will reply by email as soon as possible.</p>`)
		}
		 
	})

	return false
})
 