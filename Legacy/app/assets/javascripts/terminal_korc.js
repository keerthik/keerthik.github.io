jQuery(function($, undefined) {
    $('#korc_terminal').terminal(function(command, term) {
        if (command !== '') {
            try {
                switch (command) {
                	case 'help':
                		term.echo("No help for you! (yet)");
                		break;
                	case 'ls':
                		term.echo(items_at_current_path());
                		break;
                	default:
		                var result = window.eval(command);
		                if (result !== undefined) {
		                    term.echo(new String(result));
		                }
		                break;
		        }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: 	'Initializing...\n'+
        			'k.O.r.c Artificial Secretary System Operational.',
        name: 'korc_terminal',
        height: 300,
        prompt: 'guest> '});
});
