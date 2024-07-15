sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/lab2dev/handson/test/integration/FirstJourney',
		'com/lab2dev/handson/test/integration/pages/IncidentsList',
		'com/lab2dev/handson/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/lab2dev/handson') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);