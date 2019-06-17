process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'log':
                process.stdout.write('Displaying system info');
                console.log(process.env);
                break;
            case '/exit':
                process.stdout.write('Quitting app!');
                process.exit();
                break;
             
            default:
                process.stderr.write('Error - wrong instruction');
        }
    }
});