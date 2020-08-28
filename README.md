<!-- # back-end
recommendations router end points: 

TO add A NEW recommendation- 
/**
method: POST  

EP: /recommendations/:id  (ID IS THE USER ID!!!!!)

accepts : {
     (insert ptoperty values from returned json object from suggestion api)
    "description": "",
    "effect": "",
    "flavor": "",
    "rating": "",
    "type": "",
    "strain": ""
}




returns : {
    message: "recommendation added."
}




TO GET ALL RECOMMENDATIONS FOR A USER- 

method: GET  

EP: /recommendations/:id (ID IS THE USER ID!!!!!)


returns : [
    {
        "id": 1,
        "userid": 1,
        "description": "test",
        "effect": "test",
        "flavor": "test",
        "rating": "test",
        "type": "test",
        "strain": "test"
    }
]

TO DELETE A RECOMMENDATION-

method: DELETE

EP: /recommendations/:id (ID IS THE RECOMMENDATION ID!!!!!)

returns : {
    message: 'recommendation deleted.'
} -->

