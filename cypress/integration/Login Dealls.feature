Feature: Dealls coding section

    Background:
        Given I Visit dealls page
     
    Scenario: 1. As user login with invalid password
        When I want to login dealls user
        Then I validate dealls login page
        When I login "aldy@yopmail.com" as username and "testing12345" as password
        Then I validate password is wrong

    Scenario: 2. As user login with valid password
        Then I validate dealls login page
        When I login "aldy@yopmail.com" as username and "password123" as password
        Then I validate login is success
