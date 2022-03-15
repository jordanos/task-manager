# Todo API
###### **Made with nodejs and express web framework.**

#### The API documentation can be found at */api-doc* endpoint. 

## This API can do the following things.
### Users can:
- register
- login
- read, list, add, edit, delete tasks
- can only read and manage their own tasks

### A system admin can:
- login
- list all users
- list all tasks
- list tasks per user


###### Except creating users most of the api routes needs authentication. Auth token can be obtained by logging in.
###### If you are using postman or other api testing tools don't forget to add your token in the header section -> *Authorization:* **your token**
###### To authenticate users/add token on the documentation please use the authorize button found on the header and add your token.

