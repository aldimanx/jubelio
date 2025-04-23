Feature: Dealls coding section

    Background:
        Given I Visit dealls page
     
    Scenario: 1. As user search for specific job
        When I search "Quality Assurance" as specific job in main page
        Then I validate "Quality Assurance" as searched job visible

    Scenario: 1. As user search for empty job result
        When I search "random job" as specific job in main page
        Then I validate no specific job found yet
