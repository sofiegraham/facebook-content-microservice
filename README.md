Metrics

Install elastic search

Install Kibana

Install APM server

1. Install Java version 8 (Jmeter does not have support for 9+): http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2. Follow the directions for APM - you run a simple server and add a couple lines to your index.js:  https://www.elastic.co/solutions/apm or https://www.elastic.co/guide/en/apm/get-started/current/install-and-run.html
(DO NOT INSTALL X-PACK!)
3. Unpack and move the apm, kibana and elasticsearch folders to your application directory.
4. Right click each folder, select services, and open a new terminal tab to run commands for each one: 'bin/elasticsearch', 'bin/kibana', './apm-server setup' and then './apm-server -e' 
5. In Kibana, you can open the APM dashboard to see any requests (transactions) to your server routes
6. Install Apache Jmeter and set up tests: https://www.digitalocean.com/community/tutorials/how-to-use-apache-jmeter-to-perform-load-testing-on-a-web-server

