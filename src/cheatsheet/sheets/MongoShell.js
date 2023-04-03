// Sheet
exports.sheet = () => {

	return [
		{
			title: "_global_",
			items: [
				{
					title: "Field Summary",
					values: [
						"_bulk_api_module",
						"shellAutocomplete"
					]
				},
				{
					title: "Method Summary",
					values: [
						"_awaitRSHostViaRSMonitor(hostAddr, desiredState, rsName, timeout)",
						"_barFormat(data, width)",
						"_parsePath()",
						"_parsePort()",
						"_useWriteCommandsDefault()",
						"_writeMode()",
						"allocatePorts(n, startPort)",
						"argumentsToArray(a)",
						"assert(b, msg)",
						"chatty(s)",
						"compare(l, r)",
						"compareOn(field)",
						"connect(url, user, pass)",
						"connectionURLTheSame(a, b)",
						"createMongoArgs(binaryName, args)",
						"DB(mongo, name)",
						"DBCollection(mongo, db, shortName, fullName)",
						"DBCommandCursor(mongo, cmdResult, batchSize)",
						"DBQuery(mongo, db, collection, ns, query, fields, limit, skip, batchSize, options)",
						"defaultPrompt()",
						"doassert(msg)",
						"friendlyEqual(a, b)",
						"gc()",
						"isMasterStatePrompt()",
						"isNumber(x)",
						"isObject(x)",
						"ISODate(isoDateStr)",
						"isString(x)",
						"jsTestFile()",
						"jsTestLog(msg)",
						"jsTestName()",
						"jsTestOptions()",
						"jsTestPath()",
						"Map()",
						"MapReduceResult(db, o)",
						"Mongo(host)",
						"MongodRunner(port, dbpath, peer, arbiter, extraArgs, options)",
						"MongoRunner()",
						"myPort()",
						"PlanCache(collection)",
						"printjson(x)",
						"printjsononeline(x)",
						"printShardingSizes()",
						"printShardingStatus(configDB, verbose)",
						"printStackTrace()",
						"QueryPlan(cursor)",
						"Random()",
						"reconnect(db)",
						"ReplSetBridge(rst, from, to, delay)",
						"replSetMemberStatePrompt()",
						"ReplSetTest(opts)",
						"ReplTest(name, ports)",
						"rs()",
						"runMongoProgram()",
						"setJsTestOption(name, value)",
						"setVerboseShell(verbosity)",
						"sh()",
						"ShardingTest(testName, numShards, verboseLevel, numMongos, otherParams)",
						"shellHelper(command, rest, shouldPrint)",
						"shellPrint(x)",
						"shellPrintHelper(x)",
						"skipIfTestingReplication()",
						"sortDoc(doc)",
						"startMongod()",
						"startMongodEmpty()",
						"startMongodNoReset()",
						"startMongodTest(port, dirname, restart, extraOptions)",
						"startMongoProgram()",
						"startMongoProgramNoConnect()",
						"startMongos(args)",
						"startParallelShell(jsCode, port, noConnect)",
						"SyncCCTest(testName, extraMongodOptions)",
						"tojson(x, indent, nolint)",
						"tojsonObject(x, indent, nolint)",
						"tojsononeline(x)",
						"ToolTest(name, extraOptions)"
					]
				}
			]
		},
		{
			title: "Array",
			items: [
				{
					title: "Method Summary",
					values: [
						"Array.avg(arr) <static>",
						"Array.contains(a, x) <static>",
						"Array.fetchRefs(arr, coll) <static>",
						"Array.isArray(arr) <static>",
						"Array.shuffle(arr) <static>",
						"Array.stdDev(arr) <static>",
						"Array.sum(arr) <static>",
						"Array.tojson(a, indent, nolint) <static>",
						"Array.unique(a) <static>"
					]
				}
			]
		},
		{
			title: "Date",
			items: [
				{
					title: "Method Summary",
					values: [
						"Date.timeFunc(theFunc, numTimes) <static>",
						"tojson()"
					]
				}
			]
		},
		{
			title: "Math",
			items: [
				{
					title: "Method Summary",
					values: [
						"Math.sigFig(x, N) <static>"
					]
				}
			]
		},
		{
			title: "RegExp",
			items: [
				{
					title: "Method Summary",
					values: [
						"RegExp.escape(text) <static>",
						"endsWith(str)",
						"pad(length, right, chr)",
						"startsWith(str)",
						"trim()",
						"trimLeft()",
						"trimRight()"
					]
				}
			]
		},
		{
			title: "Number",
			items: [
				{
					title: "Method Summary",
					values: [
						"toPercentStr()"
					]
				}
			]
		},
		{
			title: "Object",
			items: [
				{
					title: "Method Summary",
					values: [
						"Object.extend(dst, src, deep) <static>",
						"Object.keySet(o) <static>",
						"Object.merge(dst, src, deep) <static>"
					]
				}
			]
		}
	];
};
