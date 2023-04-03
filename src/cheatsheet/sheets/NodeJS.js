// Sheet
exports.sheet = () => {

	return [
		{
			title: "File",
			items: [
				{
					title: "File System",
					values: [
						"fs.rename(oldPath, newPath, [callback])",
						"fs.renameSync(oldPath, newPath)",
						"fs.truncate(fd, len, [callback])",
						"fs.truncateSync(fd, len)",
						"fs.chown(path, uid, gid, [callback])",
						"fs.chownSync(path, uid, gid)",
						"fs.fchown(fd, uid, gid, [callback])",
						"fs.fchownSync(fd, uid, gid)",
						"fs.lchown(path, uid, gid, [callback])",
						"fs.lchownSync(path, uid, gid)",
						"fs.chmod(path, mode, [callback])",
						"fs.chmodSync(path, mode)",
						"fs.fchmod(fd, mode, [callback])",
						"fs.fchmodSync(fd, mode)",
						"fs.lchmod(path, mode, [callback])",
						"fs.lchmodSync(path, mode)",
						"fs.stat(path, [callback])",
						"fs.lstat(path, [callback])",
						"fs.fstat(fd, [callback])",
						"fs.statSync(path)",
						"fs.lstatSync(path)",
						"fs.fstatSync(fd)",
						"fs.link(srcpath, dstpath, [callback])",
						"fs.linkSync(srcpath, dstpath)",
						"fs.symlink(destination, path, [type], [callback])",
						"fs.symlinkSync(destination, path, [type])",
						"fs.readlink(path, [callback])",
						"fs.readlinkSync(path)",
						"fs.realpath(path, [cache], callback)",
						"fs.realpathSync(path, [cache])",
						"fs.unlink(path, [callback])",
						"fs.unlinkSync(path)",
						"fs.rmdir(path, [callback])",
						"fs.rmdirSync(path)",
						"fs.mkdir(path, [mode], [callback])",
						"fs.mkdirSync(path, [mode])",
						"fs.readdir(path, [callback])",
						"fs.readdirSync(path)",
						"fs.close(fd, [callback])",
						"fs.closeSync(fd)",
						"fs.open(path, flags, [mode], [callback])",
						"fs.openSync(path, flags, [mode])",
						"fs.utimes(path, atime, mtime, [callback])",
						"fs.utimesSync(path, atime, mtime)",
						"fs.futimes(fd, atime, mtime, [callback])",
						"fs.futimesSync(fd, atime, mtime)",
						"fs.fsync(fd, [callback])",
						"fs.fsyncSync(fd)",
						"fs.write(fd, buffer, offset, length, position, [callback])",
						"fs.writeSync(fd, buffer, offset, length, position)",
						"fs.read(fd, buffer, offset, length, position, [callback])",
						"fs.readSync(fd, buffer, offset, length, position)",
						"fs.readFile(filename, [encoding], [callback])",
						"fs.readFileSync(filename, [encoding])",
						"fs.writeFile(filename, data, [encoding], [callback])",
						"fs.writeFileSync(filename, data, [encoding])",
						"fs.appendFile(filename, data, encoding='utf8', [callback])",
						"fs.appendFileSync(filename, data, encoding='utf8')",
						"fs.watchFile(filename, [options], listener)",
						"fs.unwatchFile(filename)",
						"fs.watch(filename, [options], [listener])",
						"fs.exists(path, [callback])",
						"fs.existsSync(path)",
						"fs.createReadStream(path, [options])",
						"fs.createWriteStream(path, [options])"
					]
				}
			]
		},
		{
			title: "Basic",
			items: [
				{
					title: "Global Objects",
					values: [
						"global",
						"process",
						"console",
						"Class: Buffer",
						"require()",
						"require.resolve()",
						"require.cache",
						"require.extensions",
						"__filename",
						"__dirname",
						"module",
						"exports",
						"setTimeout(cb, ms)",
						"clearTimeout(t)",
						"setInterval(cb, ms)",
						"clearInterval(t)"
					]
				},
				{
					title: "Console",
					values: [
						"console.log([data], [...])",
						"console.info([data], [...])",
						"console.error([data], [...])",
						"console.warn([data], [...])",
						"console.dir(obj)",
						"console.time(label)",
						"console.timeEnd(label)",
						"console.trace(label)",
						"console.assert(expression, [message])"
					]
				},
				{
					title: "Timers",
					values: [
						"setTimeout(callback, delay, [arg], [...])",
						"clearTimeout(timeoutId)",
						"setInterval(callback, delay, [arg], [...])",
						"clearInterval(intervalId)"
					]
				},
				{
					title: "Util",
					values: [
						"util.format(format, [...])",
						"util.debug(string)",
						"util.error([...])",
						"util.puts([...])",
						"util.print([...])",
						"util.log(string)",
						"util.inspect(object, [showHidden], [depth], [colors])",
						"util.isArray(object)",
						"util.isRegExp(object)",
						"util.isDate(object)",
						"util.isError(object)",
						"util.pump(readableStream, writableStream, [callback])",
						"util.inherits(constructor, superConstructor)"
					]
				}
			]
		},
		{
			title: "HTTP",
			items: [
				{
					title: "http",
					values: [
						"http.STATUS_CODES",
						"http.createServer([requestListener])",
						"http.createClient([port], [host])",
						"http.request(options, callback)",
						"http.get(options, callback)",
						"http.globalAgent"
					]
				},
				{
					title: "http.Server",
					values: [
						"Event: 'request'",
						"Event: 'connection'",
						"Event: 'close'",
						"Event: 'checkContinue'",
						"Event: 'connect'",
						"Event: 'upgrade'",
						"Event: 'clientError'",
						"server.listen(port, [hostname], [backlog], [callback])",
						"server.listen(path, [callback])",
						"server.listen(handle, [listeningListener])",
						"server.close([cb])",
						"server.maxHeadersCount"
					]
				},
				{
					title: "http.ServerRequest",
					values: [
						"Event: 'data'",
						"Event: 'end'",
						"Event: 'close'",
						"request.method",
						"request.url",
						"request.headers",
						"request.trailers",
						"request.httpVersion",
						"request.setEncoding([encoding])",
						"request.pause()",
						"request.resume()",
						"request.connection"
					]
				},
				{
					title: "http.ServerResponse",
					values: [
						"Event: 'close'",
						"response.writeContinue()",
						"response.writeHead(statusCode, [reasonPhrase], [headers])",
						"response.statusCode",
						"response.setHeader(name, value)",
						"response.sendDate",
						"response.getHeader(name)",
						"response.removeHeader(name)",
						"response.write(chunk, [encoding])",
						"response.addTrailers(headers)",
						"response.end([data], [encoding])"
					]
				},
				{
					title: "http.Agent",
					values: [
						"agent.maxSockets",
						"agent.sockets",
						"agent.requests"
					]
				},
				{
					title: "http.ClientRequest",
					values: [
						"Event 'response'",
						"Event: 'socket'",
						"Event: 'connect'",
						"Event: 'upgrade'",
						"Event: 'continue'",
						"request.write(chunk, [encoding])",
						"request.end([data], [encoding])",
						"request.abort()",
						"request.setTimeout(timeout, [callback])",
						"request.setNoDelay([noDelay])",
						"request.setSocketKeepAlive([enable], [initialDelay])"
					]
				},
				{
					title: "http.ClientResponse",
					values: [
						"Event: 'data'",
						"Event: 'end'",
						"Event: 'close'",
						"response.statusCode",
						"response.httpVersion",
						"response.headers",
						"response.trailers",
						"response.setEncoding([encoding])",
						"response.pause()",
						"response.resume()"
					]
				},
				{
					title: "HTTPS",
					values: [
						"Class: https.Server",
						"https.createServer(options, [requestListener])",
						"https.request(options, callback)",
						"https.get(options, callback)",
						"Class: https.Agent",
						"https.globalAgent"
					]
				},
				{
					title: "URL",
					values: [
						"url.parse(urlStr, [parseQueryString], [slashesDenoteHost])",
						"url.format(urlObj)",
						"url.resolve(from, to)"
					]
				}
			]
		},
		{
			title: "Net",
			items: [
				{
					title: "net",
					values: [
						"net.createServer([options], [connectionListener])",
						"net.connect(options, [connectionListener])",
						"net.createConnection(options, [connectionListener])",
						"net.connect(port, [host], [connectListener])",
						"net.createConnection(port, [host], [connectListener])",
						"net.connect(path, [connectListener])",
						"net.createConnection(path, [connectListener])",
						"Class: net.Server",
						"server.listen(port, [host], [backlog], [listeningListener])",
						"server.listen(path, [listeningListener])",
						"server.listen(handle, [listeningListener])",
						"server.close([cb])",
						"server.address()",
						"server.maxConnections",
						"server.connections",
						"Event: 'listening'",
						"Event: 'connection'",
						"Event: 'close'",
						"Event: 'error'",
						"Class: net.Socket",
						"new net.Socket([options])",
						"socket.connect(port, [host], [connectListener])",
						"socket.connect(path, [connectListener])",
						"socket.bufferSize",
						"socket.setEncoding([encoding])",
						"socket.write(data, [encoding], [callback])",
						"socket.end([data], [encoding])",
						"socket.destroy()",
						"socket.pause()",
						"socket.resume()",
						"socket.setTimeout(timeout, [callback])",
						"socket.setNoDelay([noDelay])",
						"socket.setKeepAlive([enable], [initialDelay])",
						"socket.address()",
						"socket.remoteAddress",
						"socket.remotePort",
						"socket.bytesRead",
						"socket.bytesWritten",
						"Event: 'connect'",
						"Event: 'data'",
						"Event: 'end'",
						"Event: 'timeout'",
						"Event: 'drain'",
						"Event: 'error'",
						"Event: 'close'",
						"net.isIP(input)",
						"net.isIPv4(input)",
						"net.isIPv6(input)"
					]
				},
				{
					title: "UDP Datagram Sockets",
					values: [
						"dgram.createSocket(type, [callback])",
						"Class: Socket",
						"Event: 'message'",
						"Event: 'listening'",
						"Event: 'close'",
						"Event: 'error'",
						"dgram.send(buf, offset, length, port, address, [callback])",
						"dgram.bind(port, [address])",
						"dgram.close()",
						"dgram.address()",
						"dgram.setBroadcast(flag)",
						"dgram.setTTL(ttl)",
						"dgram.setMulticastTTL(ttl)",
						"dgram.setMulticastLoopback(flag)",
						"dgram.addMembership(multicastAddress, [multicastInterface])",
						"dgram.dropMembership(multicastAddress, [multicastInterface])"
					]
				},
				{
					title: "DNS",
					values: [
						"dns.lookup(domain, [family], callback)",
						"dns.resolve(domain, [rrtype], callback)",
						"dns.resolve4(domain, callback)",
						"dns.resolve6(domain, callback)",
						"dns.resolveMx(domain, callback)",
						"dns.resolveTxt(domain, callback)",
						"dns.resolveSrv(domain, callback)",
						"dns.resolveNs(domain, callback)",
						"dns.resolveCname(domain, callback)",
						"dns.reverse(ip, callback)"
					]
				}
			]
		},
		{
			title: "Buffer Stream",
			items: [
				{
					title: "Buffer",
					values: [
						"Class: Buffer",
						"new Buffer(size)",
						"new Buffer(array)",
						"new Buffer(str, [encoding])",
						"buf.write(string, [offset], [length], [encoding])",
						"buf.toString([encoding], [start], [end])",
						"buf[index]",
						"Class Method: Buffer.isBuffer(obj)",
						"Class Method: Buffer.byteLength(string, [encoding])",
						"Class Method: Buffer.concat(list, [totalLength])",
						"buf.length",
						"buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])",
						"buf.slice([start], [end])",
						"buf.readUInt8(offset, [noAssert])",
						"buf.readUInt16LE(offset, [noAssert])",
						"buf.readUInt16BE(offset, [noAssert])",
						"buf.readUInt32LE(offset, [noAssert])",
						"buf.readUInt32BE(offset, [noAssert])",
						"buf.readInt8(offset, [noAssert])",
						"buf.readInt16LE(offset, [noAssert])",
						"buf.readInt16BE(offset, [noAssert])",
						"buf.readInt32LE(offset, [noAssert])",
						"buf.readInt32BE(offset, [noAssert])",
						"buf.readFloatLE(offset, [noAssert])",
						"buf.readFloatBE(offset, [noAssert])",
						"buf.readDoubleLE(offset, [noAssert])",
						"buf.readDoubleBE(offset, [noAssert])",
						"buf.writeUInt8(value, offset, [noAssert])",
						"buf.writeUInt16LE(value, offset, [noAssert])",
						"buf.writeUInt16BE(value, offset, [noAssert])",
						"buf.writeUInt32LE(value, offset, [noAssert])",
						"buf.writeUInt32BE(value, offset, [noAssert])",
						"buf.writeInt8(value, offset, [noAssert])",
						"buf.writeInt16LE(value, offset, [noAssert])",
						"buf.writeInt16BE(value, offset, [noAssert])",
						"buf.writeInt32LE(value, offset, [noAssert])",
						"buf.writeInt32BE(value, offset, [noAssert])",
						"buf.writeFloatLE(value, offset, [noAssert])",
						"buf.writeFloatBE(value, offset, [noAssert])",
						"buf.writeDoubleLE(value, offset, [noAssert])",
						"buf.writeDoubleBE(value, offset, [noAssert])",
						"buf.fill(value, [offset], [end])",
						"buffer.INSPECT_MAX_BYTES",
						"Class: SlowBuffer"
					]
				},
				{
					title: "Stream",
					values: [
						"Readable Stream",
						"Event: 'data'",
						"Event: 'end'",
						"Event: 'error'",
						"Event: 'close'",
						"stream.readable",
						"stream.setEncoding([encoding])",
						"stream.pause()",
						"stream.resume()",
						"stream.destroy()",
						"stream.pipe(destination, [options])",
						"Writable Stream",
						"Event: 'drain'",
						"Event: 'error'",
						"Event: 'close'",
						"Event: 'pipe'",
						"stream.writable",
						"stream.write(string, [encoding], [fd])",
						"stream.write(buffer)",
						"stream.end()",
						"stream.end(string, encoding)",
						"stream.end(buffer)",
						"stream.destroy()",
						"stream.destroySoon()"
					]
				},
				{
					title: "TTY",
					values: [
						"tty.isatty(fd)",
						"tty.setRawMode(mode)",
						"Class: ReadStream",
						"rs.isRaw",
						"rs.setRawMode(mode)",
						"Class WriteStream",
						"ws.columns",
						"ws.rows",
						"Event: 'resize'"
					]
				}
			]
		},
		{
			title: "System",
			items: [
				{
					title: "Zlib",
					values: [
						"zlib.createGzip([options])",
						"zlib.createGunzip([options])",
						"zlib.createDeflate([options])",
						"zlib.createInflate([options])",
						"zlib.createDeflateRaw([options])",
						"zlib.createInflateRaw([options])",
						"zlib.createUnzip([options])",
						"Class: zlib.Gzip",
						"Class: zlib.Gunzip",
						"Class: zlib.Deflate",
						"Class: zlib.Inflate",
						"Class: zlib.DeflateRaw",
						"Class: zlib.InflateRaw",
						"Class: zlib.Unzip",
						"zlib.deflate(buf, callback)",
						"zlib.deflateRaw(buf, callback)",
						"zlib.gzip(buf, callback)",
						"zlib.gunzip(buf, callback)",
						"zlib.inflate(buf, callback)",
						"zlib.inflateRaw(buf, callback)",
						"zlib.unzip(buf, callback)"
					]
				},
				{
					title: "OS",
					values: [
						"os.tmpDir()",
						"os.hostname()",
						"os.type()",
						"os.platform()",
						"os.arch()",
						"os.release()",
						"os.uptime()",
						"os.loadavg()",
						"os.totalmem()",
						"os.freemem()",
						"os.cpus()",
						"os.networkInterfaces()",
						"os.EOL"
					]
				},
				{
					title: "Cluster",
					values: [
						"cluster.settings",
						"cluster.isMaster",
						"cluster.isWorker",
						"Event: 'fork'",
						"Event: 'online'",
						"Event: 'listening'",
						"Event: 'disconnect'",
						"Event: 'exit'",
						"Event: 'setup'",
						"cluster.setupMaster([settings])",
						"cluster.fork([env])",
						"cluster.settings",
						"cluster.disconnect([callback])",
						"cluster.workers",
						"Class: Worker",
						"worker.id",
						"worker.process",
						"worker.suicide",
						"worker.send(message, [sendHandle])",
						"worker.destroy()",
						"worker.disconnect()",
						"Event: 'message'",
						"Event: 'online'",
						"Event: 'listening'",
						"Event: 'disconnect'",
						"Event: 'exit'"
					]
				}
			]
		},
		{
			title: "Process Events",
			items: [
				{
					title: "Process",
					values: [
						"Event: 'exit'",
						"Event: 'uncaughtException'",
						"process.stdout",
						"process.stderr",
						"process.stdin",
						"process.argv",
						"process.execPath",
						"process.abort()",
						"process.chdir(directory)",
						"process.cwd()",
						"process.env",
						"process.exit([code])",
						"process.getgid()",
						"process.setgid(id)",
						"process.getuid()",
						"process.setuid(id)",
						"process.version",
						"process.versions",
						"process.config",
						"process.kill(pid, [signal])",
						"process.pid",
						"process.title",
						"process.arch",
						"process.platform",
						"process.memoryUsage()",
						"process.nextTick(callback)",
						"process.umask([mask])",
						"process.uptime()",
						"process.hrtime()"
					]
				},
				{
					title: "Events",
					values: [
						"Class: events.EventEmitter",
						"emitter.addListener(event, listener)",
						"emitter.on(event, listener)",
						"emitter.once(event, listener)",
						"emitter.removeListener(event, listener)",
						"emitter.removeAllListeners([event])",
						"emitter.setMaxListeners(n)",
						"emitter.listeners(event)",
						"emitter.emit(event, [arg1], [arg2], [...])",
						"Event: 'newListener'"
					]
				}
			]
		},
		{
			title: "Text",
			items: [
				{
					title: "Path",
					values: [
						"path.normalize(p)",
						"path.join([path1], [path2], [...])",
						"path.resolve([from ...], to)",
						"path.relative(from, to)",
						"path.dirname(p)",
						"path.basename(p, [ext])",
						"path.extname(p)",
						"path.sep"
					]
				},
				{
					title: "Query String",
					values: [
						"querystring.stringify(obj, [sep], [eq])",
						"querystring.parse(str, [sep], [eq], [options])",
						"querystring.escape",
						"querystring.unescape"
					]
				},
				{
					title: "punnycode",
					values: [
						"punycode.decode(string)",
						"punycode.encode(string)",
						"punycode.toUnicode(domain)",
						"punycode.toASCII(domain)",
						"punycode.ucs2",
						"punycode.ucs2.decode(string)",
						"punycode.ucs2.encode(codePoints)",
						"punycode.version"
					]
				},
				{
					title: "Readline",
					values: [
						"readline.createInterface(options)",
						"Class: Interface",
						"rl.setPrompt(prompt, length)",
						"rl.prompt([preserveCursor])",
						"rl.question(query, callback)",
						"rl.pause()",
						"rl.resume()",
						"rl.close()",
						"rl.write(data, [key])",
						"Event: 'line'",
						"Event: 'pause'",
						"Event: 'resume'",
						"Event: 'close'",
						"Event: 'SIGINT'",
						"Event: 'SIGTSTP'",
						"Event: 'SIGCONT'"
					]
				},
				{
					title: "REPL",
					values: [
						"repl.start(options)",
						"Event: 'exit'"
					]
				}
			]
		},
		{
			title: "Code",
			items: [
				{
					title: "Executing JS",
					values: [
						"vm.runInThisContext(code, [filename])",
						"vm.runInNewContext(code, [sandbox], [filename])",
						"vm.runInContext(code, context, [filename])",
						"vm.createContext([initSandbox])",
						"vm.createScript(code, [filename])",
						"Class: Script",
						"script.runInThisContext()",
						"script.runInNewContext([sandbox])"
					]
				},
				{
					title: "Child Process",
					values: [
						"Class: ChildProcess",
						"Event: 'exit'",
						"Event: 'close'",
						"Event: 'disconnect'",
						"Event: 'message'",
						"child.stdin",
						"child.stdout",
						"child.stderr",
						"child.pid",
						"child.kill([signal])",
						"child.send(message, [sendHandle])",
						"child.disconnect()",
						"child_process.spawn(command, [args], [options])",
						"child_process.exec(command, [options], callback)",
						"child_process.execFile(file, args, options, callback)",
						"child_process.fork(modulePath, [args], [options])"
					]
				},
				{
					title: "Assert",
					values: [
						"assert.fail(actual, expected, message, operator)",
						"assert(value, message), assert.ok(value, [message])",
						"assert.equal(actual, expected, [message])",
						"assert.notEqual(actual, expected, [message])",
						"assert.deepEqual(actual, expected, [message])",
						"assert.notDeepEqual(actual, expected, [message])",
						"assert.strictEqual(actual, expected, [message])",
						"assert.notStrictEqual(actual, expected, [message])",
						"assert.throws(block, [error], [message])",
						"assert.doesNotThrow(block, [error], [message])",
						"assert.ifError(value)"
					]
				}
			]
		},
		{
			title: "Domain",
			items: [
				{
					title: "Domain",
					values: [
						"domain.create()",
						"Class: Domain",
						"domain.run(fn)",
						"domain.members",
						"domain.add(emitter)",
						"domain.remove(emitter)",
						"domain.bind(cb)",
						"domain.intercept(cb)",
						"domain.dispose()"
					]
				},
				{
					title: "Crypto",
					values: [
						"crypto.createCredentials(details)",
						"crypto.createHash(algorithm)",
						"Class: Hash",
						"hash.update(data, [input_encoding])",
						"hash.digest([encoding])",
						"crypto.createHmac(algorithm, key)",
						"Class: Hmac",
						"hmac.update(data)",
						"hmac.digest([encoding])",
						"crypto.createCipher(algorithm, password)",
						"crypto.createCipheriv(algorithm, key, iv)",
						"Class: Cipher",
						"cipher.update(data, [input_encoding], [output_encoding])",
						"cipher.final([output_encoding])",
						"cipher.setAutoPadding(auto_padding=true)",
						"crypto.createDecipher(algorithm, password)",
						"crypto.createDecipheriv(algorithm, key, iv)",
						"Class: Decipher",
						"decipher.update(data, [input_encoding], [output_encoding])",
						"decipher.final([output_encoding])",
						"decipher.setAutoPadding(auto_padding=true)",
						"crypto.createSign(algorithm)",
						"Class: Signer",
						"signer.update(data)",
						"signer.sign(private_key, [output_format])",
						"crypto.createVerify(algorithm)",
						"Class: Verify",
						"verifier.update(data)",
						"verifier.verify(object, signature, [signature_format])",
						"crypto.createDiffieHellman(prime_length)",
						"crypto.createDiffieHellman(prime, [encoding])",
						"Class: DiffieHellman",
						"diffieHellman.generateKeys([encoding])",
						"diffieHellman.computeSecret(other_public_key, [input_encoding], [output_encoding])",
						"diffieHellman.getPrime([encoding])",
						"diffieHellman.getGenerator([encoding])",
						"diffieHellman.getPublicKey([encoding])",
						"diffieHellman.getPrivateKey([encoding])",
						"diffieHellman.setPublicKey(public_key, [encoding])",
						"diffieHellman.setPrivateKey(public_key, [encoding])",
						"crypto.getDiffieHellman(group_name)",
						"crypto.pbkdf2(password, salt, iterations, keylen, callback)",
						"crypto.randomBytes(size, [callback])"
					]
				},
				{
					title: "TSL (SSL)",
					values: [
						"tls.createServer(options, [secureConnectionListener])",
						"tls.connect(options, [secureConnectListener])",
						"tls.connect(port, [host], [options], [secureConnectListener])",
						"tls.createSecurePair([credentials], [isServer], [requestCert], [rejectUnauthorized])",
						"Class: SecurePair",
						"Event: 'secure'",
						"Class: tls.Server",
						"Event: 'secureConnection'",
						"Event: 'clientError'",
						"server.listen(port, [host], [callback])",
						"server.close()",
						"server.address()",
						"server.addContext(hostname, credentials)",
						"server.maxConnections",
						"server.connections",
						"Class: tls.CleartextStream",
						"Event: 'secureConnect'",
						"cleartextStream.authorized",
						"cleartextStream.authorizationError",
						"cleartextStream.getPeerCertificate()",
						"cleartextStream.getCipher()",
						"cleartextStream.address()",
						"cleartextStream.remoteAddress",
						"cleartextStream.remotePort"
					]
				},
				{
					title: "StringDecoder",
					values: [
						"Class: StringDecoder",
						"StringDecoder.write(buffer)"
					]
				}
			]
		}
	];
};
