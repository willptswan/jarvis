// Sheet
exports.sheet = () => {

	return [
		{
			title: "Containers",
			items: [
				{
					title: "Lifecycle",
					values: [
						"docker ps -a",
						"docker rm name",
						"docker run --name ubuntu_bash -it ubuntu bash"
					]
				},
				{
					title: "Run Options",
					values: [
						"-d",
						"-p HOSTPORT:CONTAINERPORT",
						"-v host/path:/container/mount/point"
					]
				}
			]
		},
		{
			title: "Daemon",
			items: [
				{
					title: "Lifecycle",
					values: [
						"service docker start",
						"service docker stop"
					]
				},
				{
					title: "Settings",
					values: [
						"/etc/default/docker"
					]
				}
			]
		},
		{
			title: "Registry",
			items: [
				{
					title: "Local",
					values: [
						"docker run -d -p 5000:5000 --restart=always --name registry -v `pwd`/data:/var/lib/registry registry:2"
					]
				}
			]
		},
		{
			title: "Images",
			items: [
				{
					title: "Provisionning",
					values: [
						"docker pull image/name:label",
						"docker pull registryhost:registryport/image/name:label",
						"docker push registryhost:registryport/image/name"
					]
				},
				{
					title: "Control",
					values: [
						"docker images",
						"docker tag image/name registryhost:registryport/image/name"
					]
				},
				{
					title: "Import Export",
					values: [
						"docker save -o image_archive.docker image/name",
						"docker load image_archive.docker"
					]
				}
			]
		}
	];
};
