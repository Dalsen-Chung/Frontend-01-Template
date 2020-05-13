// http methods: get post options put delete
const net = require('net')

class Request {
    // method, url= host + port + path
    // body: k/v
    // headers
    constructor (options) {
        this.method = options.method || 'GET'
        this.host = options.host
        this.port = options.port || 80
        this.path = options.path || '/'
        this.body = options.body || {}
        this.headers = options.headers || {}

        if (!this.headers['Content-Type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }

        if (this.headers['Content-Type'] === 'aplication/json') {
            this.bodyText = JSON.stringify(this.body)
        } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            this.bodyText = Object.keys(this.body)
                            .map(key => `${key}=${encodeURIComponent(this.body[key])}`)
                            .join('&')
        }

        this.headers['Content-Length'] = this.bodyText.length
    }

    toString () {
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`
    }

    open (method, url) {

    }
    send (connection) {
        return new Promise((resolve, reject) => {
            if (connection) {
                connection.write(this.toString())
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    connection.write(this.toString())
                })
            }
            connection.on('data', (data) => {
                resolve(data.toString())
                connection.end()
            })
            connection.on('error', (err) => {
                reject(err);
                connection.end()
            });
        })
    }
}

class Response {

}

class ResponseParser {

}

void async function () {
    let request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        port: '8088',
        path: '/',
        headers: {
            ['X-Foo2']: 'customer'
        },
        body: {
            name: 'Dalsen'
        }
    })
    
    let respone = await request.send()
    console.log(respone)
}()

/*
const client = net.createConnection({
    host: '127.0.0.1',
    port: 8088 }, () => {
    // 'connect' listener.
    console.log('connected to server!');

    let request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        port: '8088',
        path: '/',
        headers: {
            ['X-Foo2']: 'customer'
        },
        body: {
            name: 'Dalsen'
        }
    })
    // console.log(request.toString())
    client.write(request.toString())

    // client.write('POST / HTTP/1.1\r\n');
    // client.write('HOST: 127.0.0.1\r\n');
    // client.write('Content-Type: application/x-www-form-urlencoded\r\n');
    // client.write('Content-Length: 20\r\n');
    // client.write('\r\n');
    // client.write('field=aaa&code=x%3D1\r\n');
    // client.write('\r\n');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('disconnected from server');
});

client.on('error', (err) => {
    console.log(err);
    client.end()
});
*/