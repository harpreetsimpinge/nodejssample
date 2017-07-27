﻿var config = 
	{
		'db':{
			 'connectionString': process.env.DATABASE_URL || 'postgres://postgres:123456@localhost:5432/access_now',					
		 },		
		 
		'gandi':{
			'key': 'AYS8iVXfR6vsvwguCYlvZT7B',
			'keyLength':24,
			'host':'rpc.ote.gandi.net',			
			'port':443,
			'nameservers':[
				'a.dns.gandi-ote.net', 
				'b.dns.gandi-ote.net'
			]
	  	 }, 

	  	 'statusCodes':{
			 'success'			: 1000,			
			 'failure'			: 1001,			
			 'fieldRequired'	: 1002,			
			 'invalidRequest'	: 1003,
			 'unavailable'		: 1004,
			 'inprogress'		: 1005,
			  
			 'api':{
				'gandi' : 2001,	
				'stripe': 2002,	
			  },			 
			 
			 'db':{
				'ConnectionError': 3001,
				'QueryError'	 : 3002	
			  }
			 
		 }
	};
	
module.exports = config;
