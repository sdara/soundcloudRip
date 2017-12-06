
(function(){
	var artist = "Tenacious D";
	var obj = {
		"Rize of the Fenix":"http://media.soundcloud.com/stream/Bw2QuT7uMG2Z?stream_token=tO40u",
		"Low Hangin Fruit":"http://media.soundcloud.com/stream/ZNFfpVKQ3icD?stream_token=l4w9t",
		"Classical Teacher":"http://media.soundcloud.com/stream/AHQz3bqnL7NP?stream_token=opSMb",
		"Senorita":"http://media.soundcloud.com/stream/lviwjJIBtW2G?stream_token=anatS",
		"Deth Starr":"http://media.soundcloud.com/stream/50XkmjIBl2fr?stream_token=Tle97",
		"Roadie":"http://media.soundcloud.com/stream/r6v8MaEEEloo?stream_token=nVP0P",
		"Flutes and Trombones":"http://media.soundcloud.com/stream/oPcwwSesSL9J?stream_token=fP5Zf",
		"The Ballad Of Hollywood Jack And The Rage Kage":"http://media.soundcloud.com/stream/YOVaMfD4KEKI?stream_token=MBTmo",
		"Throw Down":"http://media.soundcloud.com/stream/ji429jJGg6fh?stream_token=Nu7Qx",
		"Rock is Dead":"http://media.soundcloud.com/stream/2nKMEAUicio1?stream_token=fg5dM",
		"They Fucked Our Asses":"http://media.soundcloud.com/stream/LagQS16uIlMJ?stream_token=qslfv",
		"To Be The Best":"http://media.soundcloud.com/stream/UmzhsMOibMI5?stream_token=jbCaT",
		"39":"http://media.soundcloud.com/stream/qOYW9JT83ria?stream_token=JkrsU"
	};
	
	var key;
	for( key in obj )
	{

		var s = document.createElement('a');
		var href = document.createAttribute('href');
		var missing = '';
		if( obj[key] === '' )
		{
			missing = ' [URL MISSING]';
		}
		s.setAttribute( 'href', obj[key] );
		
		var x = document.createTextNode(artist + ' - ' + key + missing);
		s.appendChild( x );
		document.body.appendChild(s)
		var br = document.createElement('br');
		document.body.appendChild(br);
	}
} )();