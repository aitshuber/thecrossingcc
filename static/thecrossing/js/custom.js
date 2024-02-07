---
layout: blank
---
document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
	 var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			if(dd<10)
			{
				dd='0'+dd;
			}
			if(mm<10)
			{
				mm='0'+mm;
			}
	var calendar = new FullCalendar.Calendar(calendarEl, {
	  plugins: [ 'interaction', 'dayGrid' ],
	  defaultDate: today,
	  editable: false,
	  eventLimit: true, // allow "more" link when too many events
	  events: [
		  

{% for item in site.data.calendar %}
		 {
	title: "{{item.title}}",
	start: "{{item.start | date_to_xmlschema}}",
	end: "{{item.end | date_to_xmlschema}}",
	backgroundColor: "{{item.backgroundColor}}",
	borderColor: "{{item.borderColor}}",
	allDay: {{item.allDay}}
},
{% endfor %}

	  ]
	});

	calendar.render();
  });