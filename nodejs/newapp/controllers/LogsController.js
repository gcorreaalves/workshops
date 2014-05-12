var Logs = {
	logs : {
	  "logs" : [
	    { "id": "spec1",
	      "type": "error",
	      "msg": "esta é uma mensagem de erro",
	      "date": "02/03/2014",
	    },
	    { "id": "spec2",
	      "type": "alert",
	      "msg": "esta é uma mensagem de erro",
	      "date": "02/03/2012",
	    },
	    { "id": "spec3",
	      "type": "success",
	      "msg": "esta é uma mensagem de erro",
	      "date": "02/03/2014",
	    },
	  ],
	  "total": 3
	},
	save : function(msg, type, date){
		var 
		m = msg,
		t = type,
		d = date,
		logTotal = this.logs.total + 1,
		logsObj = {
			"id" : "spec" + ( logTotal ),
			"msg" : msg,
			"type" : type,
			"date" : date
		};

	  	this.logs.logs.push(logsObj);
	  	this.logs.total = logTotal; 
	},
	list : function(){
		return this.logs;
	},
	findByDate : function(date){
		var 
		d = date,
		logsFilter = [];

		for (var i = 0; i < this.logs.total; i++) {
			if ( this.logs.logs[i].date === d ) {
				logsFilter.push(this.logs.logs[i]);
		  	}
		};

		return logsFilter;
	},
	findByType : function(type){
		var 
		t = type,
		logsFilter = [];

		for (var i = 0; i < this.logs.total; i++) {
			if ( this.logs.logs[i].type === t ) {
				logsFilter.push(this.logs.logs[i]);
		  	}
		};

		return logsFilter;
	},
	del : function(id){
		var 
		_id = id,
		logTotal = this.logs.total - 1;

		for (var i = 0; i < this.logs.total; i++) {
			if ( this.logs.logs[i].id === _id ) {
				this.logs.logs.splice(i, 1);
				break;
			}
		};

		if ( this.logs.total ) {
			this.logs.total = logTotal;
		}
	}
};

module.exports = Logs;
