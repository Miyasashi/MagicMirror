var config = {
    lang: 'eng',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Baarn,Netherlands', // city id from greven germany
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'eng',
            APPID: 'df8109fa8d5bcb1eb915bfa8648a9780' // api key
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Bonjour',
            '早安',
            'Guten Morgen',
            'buenos días'
        ],
        afternoon: [
            'Hello, beauty!',
            'Good afternoon',
            'Bon après-midi',
            'Schönen Nachmittag',
            'Hermosa tarde'
            
        ],
        evening: [
            'Wow, you look hot!',
            'Good evening',
            'Bonne soirée',
            'Schönen Abend',
            'Noche agradable'
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'calendar-plus-o', 
			url: 'https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M'
		},
		{
			symbol: 'soccer-ball-o',
			url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics',
		},
		// {
			// symbol: 'mars',
			// url: "https://server/url/to/his.ics",
		// },
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml' // vllt ändern
    }
}
