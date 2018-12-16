/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [],
	//["127.0.0.1", "::ffff:127.0.0.1", "::1" , "::ffff:10.16.33.183"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "bottom_left"
		},
		/*{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},*/
		/*{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Singapore",
				locationID: "1880251",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "d609dea1414c8468fa222708b9e3af85"
			}
		},*/
		/*{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Singapore",
				locationID: "1880251",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "261d1e584a07727ff45d1a1eebcc6b1d"
			}
		},*/
		{
			module: "newsfeed",
			position: "bottom_right",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://www.straitstimes.com/news/singapore/rss.xml"
						//url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: false,
				showPublishDate: false
			}
		},
		{
		module: 'MMM-ImageSlideshow',
		position: 'top_right',
		config: {
			imagePaths: ['modules/MMM-ImageSlideshow/exampleImages']
		}
	},
	{
		module: 'MMM-Remote-Control',
		//position: 'top_left'
	},
	{
		module: 'MMM-ImageSlideshow1',
		position: 'top_center',
		config: {
			imagePaths: ['modules/MMM-ImageSlideshow1/exampleImages']
		}
	},
	{
		module: 'MMM-ImageSlideshow2',
		position: 'top_left',
		config: {
			imagePaths: ['modules/MMM-ImageSlideshow2/exampleImages']
		}
	}
	/*{
		module: 'MMM-ModuleScheduler',
		config: {
			notification_schedule: [
                // TURN THE MONITOR/SCREEN ON AT 07:30 EVERY DAY
                {notification: 'REMOTE_ACTION', schedule: '30 7 * * *', payload: {action: "MONITORON"}},
                // TURN THE MONITOR/SCREEN OFF AT 22:30 EVERY DAY
                {notification: 'REMOTE_ACTION', schedule: '47 12 * * *', payload: {action: "MONITOROFF"}},
                // RESTART THE MAGICMIRROR PROCESS AT 2am EVERY SUNDAY
                {notification: 'REMOTE_ACTION', schedule: '0 2 * * SUN', payload: {action: "RESTART"}}
            ]
		}
	}/*
	/*{module: 'iFrameReload',
		position: 'bottom_bar',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: "http://YOUR.TARGET.URL",
			//	width: "100%", // Optional. Default: 400px
			//	height: "300px", // Optional. Default: 800px
			refreshInterval: 5  //Optional. Default: 3600 = 1 hour
			}
		}*/

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
