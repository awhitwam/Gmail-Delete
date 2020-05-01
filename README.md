# Gmail-Delete
Gmail script to delete all incoming emails received between a start and end hour.  I use it for my CCTV alerts.

Hikvision CCTV systems store alerts and also forward on via email.  I wanted the system to store the alerts 24x7 but i didn't want a huge 
number of emails during the day.  I'm only interest in email alerts at night.  The Hikvision system has no way of configuring this requirement,
so this is a script to delete incoming emails that arrive during daylight hours (or whatever you configure).
I'm sure there's a much more sophisticated way of doing this, but it works.  
