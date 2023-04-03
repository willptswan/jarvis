exports.template = () => {
	return `runtime: nodejs16

handlers:

- url: /.*
  script: auto
  secure: always

automatic_scaling:
  min_idle_instances: 1
  max_idle_instances: 5
  min_pending_latency: 30ms
  max_pending_latency: automatic

env_variables:
  NODE_ENV: 'production'
`;
};
