# mongodb-change-streams

Spike: Mongodb Change Events    

IDE: Intellij IDEA Ultimate edition 

## Setup

Install Mondodb

cd ~/dev/docker
mongod --dbpath ./data/db --replSet "rs"


## Mongo Atlas Sandbox

Free tier cluster
- 3-server replica set
- 512 MB storage
- never expire

## Running:

mongo createItems.js
mongo watchItemsAll.js
mongo updateItems.js
mongo watchItemsUpdateQuantity.js
