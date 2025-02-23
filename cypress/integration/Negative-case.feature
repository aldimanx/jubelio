Feature: Failed case login
       
    Scenario: As User input invalid credential
        Given I open Jubelio login page
        Then I validate at login page
        When I do login with account 'harusbangetbikinakun@yopmail.com' as username and 'asal123' as password
        Then I validate 'Password atau email anda tidak valid' as incorrect credential message