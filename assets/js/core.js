/**
* Origin - v0.1.0
* http://jonbellah.com
*
* Copyright (c) 2015
* Licensed under the GPLv2+ license.
*/var Origin={setupAnalytics:function(){var t=t||[];t.push(["_setAccount","UA-XXXXX-X"]),t.push(["_trackPageview"]),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}};jQuery(function(){document.getElementsByTagName("body")[0],Origin.setupAnalytics()});