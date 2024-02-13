Feature: car pickup

    Scenario: As a User I pickup a car
      Given I visit traveloka main Page
      When I click car rental submenu
      Then I validate at car rental page
      When I select 'Without Driver' as rental
      And I choose 'Soekarno Hatta' as rental location
      And I choose rental start date
      And I choose 15 30 as rental start time
      And I choose rental end date
      Then I click search button
      When I select number '1' from the car list
      And I select number '1' from the rental provider list
      And I select 'Rental Office' as pickup location
      And I select 'Rental Office' as dropff location
      Then I click continue button
      When I write 'aldy' as name booking
      And I write '8999299999' as number booking
      And I write 'aldytest@test.com' as email booking
      And I select title booking
      And I write 'aldy juga' as number booking
      And I write '8999299999' as number driver
      And I write 'request warna hitam' as notes
      And I select requirement booking
      Then I click continue payment booking
      When I select payment method
      Then I validate transfer payment page