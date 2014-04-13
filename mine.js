

function mine(mineRate){

		this.mineRate = mineRate;

        this.upgrade = function(type, hardware)
        {   
            switch(type)
            {
                case(1):
                    this.mineRate += .005;
                    return this.getMinerPrice(100, hardware);
                    break;
                case(2):
                    this.mineRate += .020;
                    return this.getMinerPrice(250, hardware);
                    break;
                default:
                    return 0.00;
                    break;
            }
        }

        this.getBasePrice = function(minerID)
        {
            switch(minerID)
            {
                case(1):
                    return 100.00;
                    break;
                case(2):
                    return 250.00;
                    break;
                default:
                    return 0.00;
            }
        }
        
        this.getMinerPrice = function(basePrice, hardware)
        {
            return basePrice * (1 - (hardware / 20.0));
        }
}


	
//may use this function later for USD ticker

/*function formatMoney(amount) { //coverting to money string--thx stack overflow!
    var dollars = Math.floor(amount).toString().split('');
    var cents = (Math.round((amount%1)*100)/100).toString().split('.')[1];
    if(typeof cents == 'undefined'){
        cents = '00';
    }else if(cents.length == 1){
        cents = cents + '0';
    }
    var str = '';
    for(i=dollars.length-1; i>=0; i--){
        str += dollars.splice(0,1);
        if(i%3 == 0 && i != 0) str += ',';
    }
    return '$' + str + '.' + cents;
}​
*/