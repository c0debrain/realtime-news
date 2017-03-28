install:
	meteor npm i -S babel-runtime vue vue-meteor-tracker vue-router bcrypt
	meteor update
	meteor update --all-packages
	meteor npm i
run:
	meteor --settings settings.json
