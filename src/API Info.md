Medical api end point

[01:00, 9/23/2020] Chris Coding: Accepted

Add Accepted
Post request to https://moboclinic.herokuapp.com/api/addAccepted
{
"requestId": 21,
"acceptedCompaniesId": 1
}

Get all Accepted requests
Get request to https://moboclinic.herokuapp.com/api/accepted

Get Accepted requests for 1 company
Get request to https://moboclinic.herokuapp.com/api/companyAccepted/1 where 1 is the company id

Delete Accepted
Delete request to https://moboclinic.herokuapp.com/api/accepted/21 where 21 is the id of the accepted to be deleted

Add Result
Post request to https://moboclinic.herokuapp.com/api/addResult
{
"requestId": "21",
"testId": 31,
"customerId": 31,
"companiesId": 1,
"result": "positive, you have malaria"
}

Get Results
Get request to https://moboclinic.herokuapp.com/api/results

Update Result
Put request to https://moboclinic.herokuapp.com/api/result/1 where 1 is the id of the result to be updated
{
"requestId": "21",
"testId": 31,
"customerId": 31,
"companiesId": 1,
"result": "negative, you do not have malaria"
}

Delete Result
Delete request to https://moboclinic.herokuapp.com/api/result/1 where 1 is the id of the result to be deleted

All the api end point to update users info

Add Test
Post request to https://moboclinic.herokuapp.com/api/addTest
{
"testName": "Typhoid",
"price": "4000",
"description": "A test for Typhoid"
}

Get Tests
Get request to https://moboclinic.herokuapp.com/api/tests

Update Test
Put request to https://moboclinic.herokuapp.com/api/test/11 where 11 is the id number of the test to be updated

{
"testName": "Typhoid",
"price": "4000",
"description": "A test for Typhoid"
}

Delete Test
Delete request to https://moboclinic.herokuapp.com/api/test/1 where 1 is the id of the test to be deleted

Add Request
Post request to https://moboclinic.herokuapp.com/api/addRequest

{
"testId": 31,
"customerId": 31,
"address": "55 Avenue"
}

Get Requests for test
Get request to https://moboclinic.herokuapp.com/api/requests

Update Request for test
Put request to https://moboclinic.herokuapp.com/api/request/11 where 11 is the id of the request to be updated

{
"testId": 31,
"customerId": 31,
"address": "50 Agege"
}

Delete Request for test
Delete request to https://moboclinic.herokuapp.com/api/request/11 where 11 is the id of the request to be deleted -->

Info needed

userInfo to return on logon
{
"email": "21",
"first name": 31,
"last name": 31,
"phone number": "0123456987"
"requested tests": {
"testId": "1",
"testName": "NameOfTest"
"adress": "some adress"
}
}
