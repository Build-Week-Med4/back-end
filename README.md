<!-- # back-end

users end points: 

TO REGISTER A NEW USER- 

method: POST  

EP: /users/register 

accepts : {
	"username": "testuser01",
       "password": "test0"

}

returns : {
    "message": "user created, welcome ${username}",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTg0OTU0NTMsImV4cCI6MTU5ODUyNDI1M30.-7B8xW8woT6oKsEUKN0Ip8SmeBZRicT0RaUse42aIQM"
}




TO LOGIN AN EXISTING USER- 

method: POST  

EP: /users/login 

accepts : {
	"username": "testuser01",
       "password": "test0"

}

returns : {
    "message": "welcome back testuser02!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTg0OTU2MjksImV4cCI6MTU5ODUyNDQyOX0.zNMELQPcnpJiTvlx1MW-Kabdmjqs6qMHu53adVh7hRw"
}
 -->
